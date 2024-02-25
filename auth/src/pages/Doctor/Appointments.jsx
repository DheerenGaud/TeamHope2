import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const Appointments = () => {
  // Sample data for pending Appointmentss
  const [pendingAppointments, setPendingAppointments] = useState([
    { id: 1, name: 'Patient 1', age: 30, contactNo: '1234567890', disease: 'Fever', dateTime: '2024-03-01 10:00 AM' },
    { id: 2, name: 'Patient 2', age: 40, contactNo: '9876543210', disease: 'Headache', dateTime: '2024-03-02 11:30 AM' },
  ]);

  // Sample data for upcoming appointments
  const [upcomingAppointments, setUpcomingAppointments] = useState([
    { id: 3, name: 'Patient 3', age: 35, contactNo: '2345678901', disease: 'Back Pain', dateTime: '2024-03-03 03:00 PM' },
    { id: 4, name: 'Patient 4', age: 45, contactNo: '8901234567', disease: 'Stomachache', dateTime: '2024-03-04 09:00 AM' },
  ]);

  // Function to approve appointment
  const handleApprove = (id) => {
    // Implement the logic to approve the appointment
  };

  // Function to reject appointment
  const handleReject = (id) => {
    // Implement the logic to reject the appointment
  };

  return (
    <div>
      <h2>Pending Appointments</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Contact No.</TableCell>
              <TableCell>Disease</TableCell>
              <TableCell>Date & Time</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pendingAppointments.map((appointments) => (
              <TableRow key={appointments.id}>
                <TableCell>{appointments.name}</TableCell>
                <TableCell>{appointments.age}</TableCell>
                <TableCell>{appointments.contactNo}</TableCell>
                <TableCell>{appointments.disease}</TableCell>
                <TableCell>{appointments.dateTime}</TableCell>
                <TableCell>
                  <Button onClick={() => handleApprove(appointments.id)} variant="contained" color="primary">Approve</Button>
                  <Button onClick={() => handleReject(appointments.id)} variant="contained" color="secondary">Reject</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <h2>Upcoming Appointments</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Contact No.</TableCell>
              <TableCell>Disease</TableCell>
              <TableCell>Date & Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {upcomingAppointments.map((appointments) => (
              <TableRow key={appointments.id}>
                <TableCell>{appointments.name}</TableCell>
                <TableCell>{appointments.age}</TableCell>
                <TableCell>{appointments.contactNo}</TableCell>
                <TableCell>{appointments.disease}</TableCell>
                <TableCell>{appointments.dateTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Appointments;
