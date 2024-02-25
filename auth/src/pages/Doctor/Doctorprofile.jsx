import React, { useState } from 'react';
import { Grid, Typography, Paper, Button, TextField, Avatar, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const DoctorProfile = () => {
  const [profile, setProfile] = useState({
    name: 'Dr. John Doe',
    specialization: 'Cardiologist',
    contact: 'doctor@example.com',
    profilePic: '', // URL of profile picture
  });

  const [editMode, setEditMode] = useState(false);
  const [tempProfile, setTempProfile] = useState({ ...profile });

  const handleEdit = () => {
    setTempProfile({ ...profile });
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const handleSave = () => {
    setProfile({ ...tempProfile });
    setEditMode(false);
    // You can add logic here to save the updated profile to the server/database
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempProfile(prevProfile => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleProfilePicChange = (e) => {
    // Implement logic to handle profile picture upload
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setTempProfile(prevProfile => ({
        ...prevProfile,
        profilePic: reader.result,
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Doctor Profile
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar src={profile.profilePic} sx={{ width: 100, height: 100 }} />
            <input type="file" accept="image/*" onChange={handleProfilePicChange} style={{ marginLeft: '10px' }} />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="name"
              label="Name"
              value={tempProfile.name}
              onChange={handleChange}
              fullWidth
              disabled={!editMode}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="specialization"
              label="Specialization"
              value={tempProfile.specialization}
              onChange={handleChange}
              fullWidth
              disabled={!editMode}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="contact"
              label="Contact"
              value={tempProfile.contact}
              onChange={handleChange}
              fullWidth
              disabled={!editMode}
            />
          </Grid>
        </Grid>
      </Paper>
      <div>
        {!editMode && (
          <Button variant="contained" color="primary" onClick={handleEdit}>
            Edit Profile
          </Button>
        )}
        {editMode && (
          <>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
            <Button variant="contained" onClick={handleCancel}>
              Cancel
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default DoctorProfile;
