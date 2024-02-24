const mongoose = require("mongoose");

const DailyReportSchema = mongoose.Schema({
    date:{
        type:Date,
        require:true
    },
  report_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Report",
  },
  short_descriftn:{
    type:String
  },
  future_action:{
     type:String
 },
 medical_Prescripstion:[String],
  Bill: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bill",
  },
  
});
module.exports = mongoose.model("DailyReport", DailyReportSchema);
