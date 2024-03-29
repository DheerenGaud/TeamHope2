const mongoose = require("mongoose");

const ReportSchema = mongoose.Schema({
  date:{
    type:Date,
    require:true
  },
 hospital:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
 },
 Activity:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "DailyReport",
 }],
 grand_bill:{
    type:String
 },
bills_array:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bill",
},
medical_aprove:{
    type:Boolean,
    default:false,
    require:true
},
doctor_working_on_repo:{
  type: mongoose.Schema.Types.ObjectId,
  ref: "Doctor",
},
disCharge:{
  type:Boolean,
    default:false,
    require:true
}
});
module.exports = mongoose.model("Repo", ReportSchema);