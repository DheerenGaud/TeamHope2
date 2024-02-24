const mongoose = require("mongoose");

const UserSecham = mongoose.Schema({

  Fname: {
    type: String,
    required: true,
  },
  Lname: {
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
  varified: {
    type: Boolean,
    default:false,
  },
  age: {
    type: Number,
    required: true
},
blood_group: {
    type: String,
   // required: true
},
repo_list: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Repo' 
}]
});
// Ac_model: {
//   type: String,
//   required: true,
//   enum: ["AcademicYear", "dceAcademicYear"], 
// },
module.exports = mongoose.model("User", UserSecham);