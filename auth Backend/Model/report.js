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
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
       
  },
  link:{
    type:String,
    require:true
  },
  discription_by_doc:{
    type:String
  }
});
module.exports = mongoose.model("Report", ReportSchema);