const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define schema for each mediclaim request
const MediclaimRequestSchema = new Schema(
  {
    patient_name: { type: String, required: true },
    policy_number: { type: String, required: true },
    date_of_service: { type: Date, required: true },
    amount_claimed: { type: Number, required: true },
    status: { type: String, default: "Pending" }, 
    grand_bill:{
        type: String,
    },
    bills_array:{
        type: String,
    },
    mediclaimVarified:{
        type: Boolean,
        default:false,
    },
  }
);

// Define schema for mediclaim company
const MediclaimCompanySchema = new Schema({
  name: { type: String, required: true },
  email:{
    type:String,
  },
  Company_Gst_no:{
    type:String,
    required: true
  },
  Register_no:{
    type:String,
    required: true
  },
  password: { type: String, required: true },
  request_for_mediclaim_array: [MediclaimRequestSchema], // Array of mediclaim requests
  MediclaimComp_Varified:{
    type:Boolean,
    default:false,
    require:true
  }
});


module.exports = mongoose.model("MediclaimCompany", MediclaimCompanySchema);
