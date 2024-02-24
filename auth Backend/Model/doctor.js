const mongoose = require("mongoose");

const DoctorSchema = mongoose.Schema({
  name: {
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
  specialization: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  certificate_array: [{type:String}], // Use the CertificateSchema as a sub-schema
  patient_array: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }],
  daily_report_array: [{
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Daily_report",
    },
    accept: {
      type: Boolean,
      default: false,
    }
  }],
});

module.exports = mongoose.model("Doctor", DoctorSchema);
