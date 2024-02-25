import React from "react";
import { Typography, Paper, Box, Divider } from "@mui/material";

const Profile = ({ patient }) => {
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
          Patient Profile
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" sx={{ fontSize: "1.1rem" }}>
            <strong>Name:</strong> {patient.name}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: "1.1rem" }}>
            <strong>Age:</strong> {patient.age}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: "1.1rem" }}>
            <strong>Gender:</strong> {patient.gender}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: "1.1rem" }}>
            <strong>Email:</strong> {patient.email}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: "1.1rem" }}>
            <strong>Contact:</strong> {patient.contact}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: "1.1rem" }}>
            <strong>Patient ID:</strong> {patient.patientId}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: "1.1rem" }}>
            <strong>Insurance:</strong> {patient.insurance}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: "1.1rem" }}>
            <strong>Policy No:</strong> {patient.policyNo}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Profile;
