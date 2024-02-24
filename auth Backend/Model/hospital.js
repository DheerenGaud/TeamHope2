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
  HospitalVarified: {
    type: Boolean,
    default:false,
  },
});

module.exports = mongoose.model("Hospital", HospitalSchema);
