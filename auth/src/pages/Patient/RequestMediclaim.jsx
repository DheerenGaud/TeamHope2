import React, { useState } from "react";
import { Typography, Paper, Box, Divider, Button, TextField } from "@mui/material";

const RequestMediclaim = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    policyName: "",
    diseaseType: "",
    amountClaimed: "",
    documents: null, // Changed to accept file
    status: "Pending",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    // Check if files are present for file input
    const file = files ? files[0] : null;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value === undefined ? file : value, // Use file if present, else use value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit mediclaim request
    console.log("Mediclaim Request Submitted:", formData);
    // Reset form data after submission
    setFormData({
      patientName: "",
      policyName: "",
      diseaseType: "",
      amountClaimed: "",
      documents: null,
      status: "Pending",
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper elevation={3} sx={{ width: "80%", maxWidth: 600, p: 4 }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
          Request Mediclaim
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Patient Name"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Policy Name"
            name="policyName"
            value={formData.policyName}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Disease Type"
            name="diseaseType"
            value={formData.diseaseType}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Amount Claimed"
            name="amountClaimed"
            value={formData.amountClaimed}
            onChange={handleChange}
            required
          />
          {/* File input for uploading documents */}
          <input
            type="file"
            name="documents"
            accept=".pdf,.doc,.docx,image/*"
            onChange={handleChange}
            required
          />
          {/* Display the selected file name */}
          {formData.documents && (
            <Typography variant="body2" sx={{ mt: 1 }}>
              Selected file: {formData.documents.name}
            </Typography>
          )}
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Request Mediclaim
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default RequestMediclaim;
