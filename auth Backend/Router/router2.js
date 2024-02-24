const express =require("express");
const Router=express.Router();
const  { GridFsStorage } = require('multer-gridfs-storage');
const bcrypt=require("bcryptjs")
const multer = require("multer");
const nodemailer =require("nodemailer");


const Doctor = require("../Model/doctor.js")
const Hospital = require("../Model/hospital.js")

const { Varification } = require("../middleware/index");


const storage= new GridFsStorage({
    url: "mongodb://0.0.0.0:27017/Auth",
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];
  
        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;
  
        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
  });


const upload=multer({storage: storage});


function generatePassword(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


Router.post("/addDr",upload.single("certificate"),Varification,async(req,res)=>{
    console.log(req.file.filename);
    
    try {
        const { name, email, specialization, experience,certificate_array } = req.body;


        if (!email) {
            return res.status(400).json({ status: "error", msg: 'Please enter emailid' });
        }
        
    
        const user = await Doctor.findOne({
            $or: [{email}]
        })
    
    
    
        if (user) {
            return res.status(400).json({ status: "error", msg: 'doctor with this email already exist' });
        }
        const genpassword = await generatePassword(8);
        
        // Create a new Doctor object
        const password= await bcrypt.hash(genpassword,10)
        const doctor = new Doctor({
            name,
            email,
            specialization,
            experience,
            certificate_array: [req.file.filename], // Initialize the array with the new value
            password
        });

        // Save the doctor to the database

        console.log();
        await doctor.save();
        // Find the hospital by ID
        const hospitalid = await req.body.user_id;
        console.log(hospitalid);
        const hospital = await Hospital.findOne({email:hospitalid});
         console.log(hospital);
        // Add the new doctor to the hospital's doctors array
        hospital.dr_array.push(doctor._id);
        await hospital.save();

        // Send an email to the doctor with their login credentials
        const treanspoter=nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.AUTH_EMAIL,
                pass:process.env.AUTH_PASSWORD
            }
        })
        treanspoter.verify((err,success)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(success)
                console.log("Redy for masseges")
            }
        })

        const mailOptions = {
            from: 'your-email@example.com',
            to: email,
            subject: 'Welcome to Our Hospital',
            text:`Dear ${name},\n\n +
                Welcome to our hospital! Your login credentials are as follows:\n\n +
                Username: ${email}\n +
                Password: ${genpassword}\n\n +
                Please keep this information secure.\n\n +
                Thank you,\nThe Hospital Team`
        };

        treanspoter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        res.status(201).json({ message: 'Doctor created successfully and credentials sent to email.' });
    } catch (error) {
        console.error('Error creating doctor:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})



Router.post("/removeDr",Varification,async (req, res) => {
    try {
        console.log(req.body);
        // Find the hospital containing the doctor and remove the doctor from its doctors array
        const hospitalemail = await req.body.user_id;
        const hospitalid = await Hospital.findOne({email:hospitalemail});
       
        const doctorId  = req.body.doctorId;
         console.log(doctorId,hospitalid._id);
        const hospital = await Hospital.findByIdAndUpdate(hospitalid._id, { $pull: { dr_array: doctorId } });
        
        if (!hospital) {
            return res.status(404).json({ message: 'Hospital not found' });
        }

        // Delete the doctor from the Doctor collection
        await Doctor.findByIdAndDelete(doctorId);

        res.json({ message: 'Doctor deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});
module.exports= Router








