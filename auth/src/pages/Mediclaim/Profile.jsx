import React from "react";
import { Typography, Paper, Box, Divider } from "@mui/material";

const Profile = ({ Mediclaim }) => {
  // Dummy data for hospital (replace with actual data from backend API)

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
          Hospital Profile
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" sx={{ fontSize: "1.1rem" }}>
            <strong>Name:</strong> {Mediclaim.name}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: "1.1rem" }}>
            <strong>Address:</strong> {Mediclaim.address}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: "1.1rem" }}>
            <strong>Email:</strong> {Mediclaim.email}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: "1.1rem" }}>
            <strong>GST No:</strong> {Mediclaim.GST_NO}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: "1.1rem" }}>
            <strong>Verified:</strong>{" "}
            {Mediclaim.MediclaimCompanyVarified ? "Yes" : "No"}
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
          Doctors:
        </Typography>
        {Mediclaim.dr_array && Mediclaim.dr_array.map((doctor) => (
          <div key={doctor._id} sx={{ ml: 2, mt: 1 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
            >
              {doctor.name}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1rem" }}>
              <strong>Specialization:</strong> {doctor.specialization}
            </Typography>
            <Divider sx={{ my: 1 }} />
          </div>
        ))}
      </Paper>
    </Box>
  );
};

export default Profile;
