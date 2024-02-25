import React, { useState } from 'react';
import { Typography, Grid, Paper, Button, TextField, Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { AccountCircle, AddBox, PeopleAlt } from '@mui/icons-material';

const HospitalProfile = () => {
  // Dummy hospital data (replace with actual data fetched from backend)
  const [hospitalInfo, setHospitalInfo] = useState({
    name: 'Hospital Name',
    address: 'Hospital Address',
    contact: 'Hospital Contact',
    departments: ['Department 1', 'Department 2', 'Department 3'],
    operatingHours: '9:00 AM - 5:00 PM',
  });

  // Dummy list of doctors (replace with actual data fetched from backend)
  const [doctors, setDoctors] = useState([
    { id: 1, name: 'Doctor 1', specialization: 'Specialization 1', contact: 'Doctor 1 Contact' },
    { id: 2, name: 'Doctor 2', specialization: 'Specialization 2', contact: 'Doctor 2 Contact' },
    { id: 3, name: 'Doctor 3', specialization: 'Specialization 3', contact: 'Doctor 3 Contact' },
  ]);

  // Dummy list of patients (replace with actual data fetched from backend)
  const [patients, setPatients] = useState([
    { id: 1, name: 'Patient 1', age: 30, gender: 'Male' },
    { id: 2, name: 'Patient 2', age: 40, gender: 'Female' },
    { id: 3, name: 'Patient 3', age: 25, gender: 'Male' },
  ]);

  const [selectedNavItem, setSelectedNavItem] = useState('overview');

  // Function to add a new doctor
  const addDoctor = () => {
    // Add logic to add a new doctor (e.g., send a request to backend)
    const newDoctor = { id: doctors.length + 1, name: 'New Doctor', specialization: 'New Specialization', contact: 'New Contact' };
    setDoctors([...doctors, newDoctor]);
  };

  // Function to add a new patient
  const addPatient = () => {
    // Add logic to add a new patient (e.g., send a request to backend)
    const newPatient = { id: patients.length + 1, name: 'New Patient', age: 0, gender: '' };
    setPatients([...patients, newPatient]);
  };

  const renderNavItems = () => {
    return (
      <List>
        <ListItem button onClick={() => setSelectedNavItem('overview')}>
          <ListItemIcon><AccountCircle /></ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItem>
        <ListItem button onClick={() => setSelectedNavItem('addDoctor')}>
          <ListItemIcon><AddBox /></ListItemIcon>
          <ListItemText primary="Add Doctor" />
        </ListItem>
        <ListItem button onClick={() => setSelectedNavItem('addPatient')}>
          <ListItemIcon><PeopleAlt /></ListItemIcon>
          <ListItemText primary="Add Patient" />
        </ListItem>
        {/* Add more navigation items as needed */}
      </List>
    );
  };

  const renderContent = () => {
    switch (selectedNavItem) {
      case 'overview':
        return (
          <div>
            <Typography variant="h6">Overview</Typography>
            {/* Add overview content here */}
          </div>
        );
      case 'addDoctor':
        return (
          <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
            <Typography variant="h6" gutterBottom>
              Manage Doctors
            </Typography>
            <Grid container spacing={2}>
              {doctors.map((doctor) => (
                <Grid item key={doctor.id} xs={12} md={4}>
                  <Paper elevation={1} sx={{ padding: 2 }}>
                    <Typography variant="subtitle1">{doctor.name}</Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                      {doctor.specialization}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                      {doctor.contact}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
              <Grid item xs={12}>
                <Button variant="contained" onClick={addDoctor}>Add Doctor</Button>
              </Grid>
            </Grid>
          </Paper>
        );
      case 'addPatient':
        return (
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Manage Patients
            </Typography>
            <Grid container spacing={2}>
              {patients.map((patient) => (
                <Grid item key={patient.id} xs={12} md={4}>
                  <Paper elevation={1} sx={{ padding: 2 }}>
                    <Typography variant="subtitle1">{patient.name}</Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                      Age: {patient.age}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                      Gender: {patient.gender}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
              <Grid item xs={12}>
                <Button variant="contained" onClick={addPatient}>Add Patient</Button>
              </Grid>
            </Grid>
          </Paper>
        );
      default:
        return null;
    }
  };

  return (
    <Grid container>
      <Grid item xs={3}>
        <Drawer
          sx={{ width: '240px', flexShrink: 0 }}
          variant="permanent"
          anchor="left"
        >
          <Box sx={{ width: '240px' }}>
            {renderNavItems()}
          </Box>
        </Drawer>
      </Grid>
      <Grid item xs={9}>
        <Box sx={{ padding: '20px' }}>
          {renderContent()}
        </Box>
      </Grid>
    </Grid>
  );
};

export default HospitalProfile;
