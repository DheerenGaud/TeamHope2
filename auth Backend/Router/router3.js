const express =require("express");
const Router=express.Router();
const DailyReport = require("../Model/daily_report.js")
const Report = require("../Model/report.js")
const { Varification } = require("../middleware/index");
const multer = require("multer");
const  { GridFsStorage } = require('multer-gridfs-storage');




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




Router.post("/file",upload.single("reportfile"),Varification,async (req, res) => {
    console.log(req.file.filename);
    try {
        console.log(req.body);
        const { name,ai_summery,suggested_dr,discription_by_doc } = req.body;


        const link = `http://localhost:9000/file/${req.file.filename}`;
        const newReport = new Report({
            name: name,
            date: Date.now(), // Set the date to the current date and time
            ai_summery: ai_summery,
            suggested_dr: suggested_dr,
            link: link,
            discription_by_doc: discription_by_doc
        });

        // Save the new report to the database
         await newReport.save();

        // Send a success response
        res.status(201).json({"data":newReport._id});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});


module.exports= Router;