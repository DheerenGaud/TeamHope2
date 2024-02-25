import React, { useState } from "react";
import "./AddPatient.css";
import {AddDr} from "../../../api/api.js"

const AddDoctor = ({ hospital }) => {
  const [data, setData] = useState({
    name:"", email:"", specialization:"", experience:"",certificate_array :""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.files });
  };
  
  const token =window.localStorage.getItem("token");
  
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const x= await AddDr({data,token});
    console.log(x.data.message);
  };

  return (
    <div className="container">
      <div>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            marginLeft: "10px",
          }}
        >
          Add Doctor
        </h2>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="doctorEmail">Doctor Name:</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={data.name}
              required
            />
             <label htmlFor="doctorEmail">Doctor Email:</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
            />
             <label htmlFor="doctorEmail">Doctor specialization:</label>
            <input
              type="text"
              name="specialization"
              value={data.specialization}
              onChange={handleChange}
              required
            />
             <label htmlFor="doctorEmail">Experience:</label>
            <input
              type="text"
              name="experience"
              value={data.experience}
              onChange={handleChange}
              required
            />
             <label htmlFor="doctorEmail">Certificate:</label>
            <input
              type="file"
              name="certificate_array"
              onChange={handleFileChange}
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
