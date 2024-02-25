import React, { useState, useEffect } from "react";
import "./AddPatient.css"; // Import CSS file for styling

const AddPatient = ({ hospital }) => {
  const [patientEmail, setPatientEmail] = useState("");
  const [doctorList, setDoctorList] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");

  // Fetch doctors data from a dummy database
  useEffect(() => {
    console.log(hospital.dr_array);
    setDoctorList(hospital.dr_array);
  }, []);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send data to API
      const response = await fetch("api-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          patientEmail: patientEmail,
          doctorEmail: doctorList.find((doc) => doc.name === selectedDoctor)
            .email,
        }),
      });

      console.log("Data submitted successfully:", response);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
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
          Book Appointment
        </h2>
      </div>
      <br></br>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="patientEmail">Patient Email:</label>
            <input
              type="email"
              id="patientEmail"
              value={patientEmail}
              onChange={(e) => setPatientEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="doctor">Select Doctor:</label>
            <select
              id="doctor"
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              required
            >
              <option value="">Select Doctor</option>
              {doctorList.map((doctor, index) => (
                <option key={index} value={doctor.name}>
                  {doctor.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddPatient;
