const mongoose = require("mongoose");

const HospitalSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  GST_NO:{
    type: String,
    required: true,
  },
  dr_array:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
  }],
  hospital_patient_Active_array: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }],
  hospital_patient_Discharge_array: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }],
  HospitalVarified: {
    type: Boolean,
    default:false,
  },
});

module.exports = mongoose.model("Hospital", HospitalSchema);