const mongoose = require("mongoose");

const BillSchema = mongoose.Schema({
    date:{
        type:Date,
        require:true
    },
  bill_no:{
    type:String,
    require:true
  },
  Amount:{
    type:Number,
    require:true
  },
 bill:{
    data:String,
 },
 type:{
    type:String,
    required:true
 }
  
});
module.exports = mongoose.model("Bill", BillSchema);
