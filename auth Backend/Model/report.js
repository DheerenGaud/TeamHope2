const mongoose = require("mongoose");

const ReportSchema = mongoose.Schema({
  name:{
    type:String
  },
  date:{
    type:Date,
    require:true
  },
  ai_summery:{
    type:String,
  },
  suggested_dr:{
    name:String,
    more_info:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    }
  },  
});
module.exports = mongoose.model("DailyReport", DailyReportSchema);
