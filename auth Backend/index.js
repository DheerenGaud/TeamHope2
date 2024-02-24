const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const Router1=require("./Router/router1")
const Router2=require("./Router/router2")
const Router3=require("./Router/router3")
const mongoose = require("mongoose");
const  grid = require('gridfs-stream');
// const connected = require("./db/db")

app = express();

app.use(cors({ origin: "http://localhost:3000", methods: ["GET", "POST"] }));
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

const connected = async () => {
    try {
        await mongoose.connect("mongodb://0.0.0.0:27017/Auth", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          console.log("database is connected...");
        } catch (error) {
            console.log("some error in connecting database");
       }
};
        
connected();


app.use("/auth",Router1);
app.use("/hospital",Router2);
app.use("/report",Router3);


let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
});

app.get("/file/:filename",async(req,res)=>{
  console.log();
  try {   
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gridfsBucket.openDownloadStream(file._id);
    readStream.pipe(res);
    
} catch (error) {
  console.log(error);
    res.status(500).json({ msg: error.message });
}
})



app.listen(9000,()=>{
  console.log(" server is listen on port 9000")
})


