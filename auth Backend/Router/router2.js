const express =require("express");
const Router=express.Router();
const  { GridFsStorage } = require('multer-gridfs-storage');
const bcrypt=require("bcryptjs")
const multer = require("multer");
const nodemailer =require("nodemailer");


const Doctor = require("../Model/doctor.js")
const User = require("../Model/user.js")
const Hospital = require("../Model/hospital.js")
const Daily_report = require("../Model/daily_report.js")
const Repo = require("../Model/repo.js")

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


Router.post("/addDr",upload.single("certificate_array"),Varification,async(req,res)=>{
    console.log(req.file.filename);
    try {
        const { name, email, specialization, experience } = req.body;


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


Router.post("/addNewDailyReport",Varification,async (req, res) => {
    try {
        console.log(req.body);
        const {short_descriftn,future_action,medical_Prescripstion,bill_id,report_id,repo_id}=req.body;
        // Find the hospital containing the doctor and remove the doctor from its doctors array
const date=Date.now();
       const daily_report = new Daily_report({
        date,short_descriftn,future_action,medical_Prescripstion,Bill:bill_id,report_id
       })
      await daily_report.save();
        
        const repo = await Repo.findOne({_id:repo_id});
        if (!repo) {
            return res.status(404).json({ message: 'Repo not found' });
        }
        repo.Activity.push(daily_report._id);
        res.json({ message: 'Daily Report Created successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});


Router.post("/newadmit",Varification,async (req, res) => {
    try {
        const { email,dr_id} = req.body;
        console.log(req.body);
        //check for any present repo in hospital
        const hospitalemail = await req.body.user_id;
        const hospitalid = await Hospital.findOne({email:hospitalemail});
        const isUserAdmitted = hospitalid.hospital_patient_Active_array.some(patientId => patientId.toString() === hospitalemail);
    

        const user = await User.findOne({
            $or: [{email}]
        })

        if(!user){
            res.status(500).json({ message: 'The patient have not registered on our website.please first register!!' });
        }
        console.log(hospitalid);
       if(!isUserAdmitted){
            // Get the current date
            const currentDate = new Date();
            // Create a new report object
            const newReport = new Repo({
            date: currentDate,
            hospital: hospitalid._id
            });

            // Save the new report object
            await newReport.save();
            const doctor=await Doctor.findOne({_id:dr_id});
            if(!doctor){
                res.status(500).json({ message: 'Doctor not found!!' });
 
            }
            doctor.patient_array.push(user._id)
            hospitalid.hospital_patient_Active_array.push(user._id)
            user.repo_list.push(newReport);
            await user.save();
            await doctor.save();
            await hospitalid.save();
            res.json({ message: 'the user successfully careated a repo' });

       }else{
          res.status(500).json({ message: 'The user with the email already have a repo in that hospital ' });
       }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});


Router.post("/editDailyReport", Varification, async (req, res) => {
    try {
        const { date, short_descriftn, future_action, medical_Prescripstion, Bill, dailyDetail_id } = req.body;
        // Check if the dailyDetail_id is provided
        if (!dailyDetail_id) {
            return res.status(400).json({ message: 'Daily Detail ID is required for editing' });
        }

        // Find the existing daily report by its ID
        const existingReport = await Daily_report.findOne({ _id: dailyDetail_id });

        // Check if the report exists
        if (!existingReport) {
            return res.status(404).json({ message: 'Daily Report not found' });
        }

        // Update the existing daily report with new values
        existingReport.date = date;
        existingReport.short_descriftn = short_descriftn;
        existingReport.future_action = future_action;
        existingReport.medical_Prescripstion = medical_Prescripstion;
        existingReport.Bill = Bill;

        // Save the updated daily report
        await existingReport.save();

        res.json({ message: 'Daily Report updated successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});
Router.get("/getHospitalInfo", Varification, async (req, res) => {
    try {
        // Check if the dailyDetail_id is provided
        const hospitalid = await req.body.user_id;
        const hospital = await Hospital.findOne({email:hospitalid});
         console.log(hospital);
        // Save the updated daily report

           const data = []

          console.log(hospital.dr_array.name);
          
            // Create an inner array with _id and dr_array properties
            const innerList = [hospital._id, hospital.dr_array];

        
            // Push the inner array to the data array
            data.push(innerList);
        
        
        res.json({ message: ' successfully find the hospital data'  ,"data":{hospital}});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});


module.exports= Router








