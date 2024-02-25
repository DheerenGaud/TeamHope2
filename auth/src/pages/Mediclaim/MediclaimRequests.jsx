import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';

const MediclaimRequests = () => {
  // Sample data for demonstration
  const [mediclaimRequests, setMediclaimRequests] = useState([
    {
      id: 1,
      patientName: 'John Doe',
      policyName: 'HealthMax',
      diseaseType: 'COVID-19',
      amountClaimed: '$5000',
      documents: 'medical_report.pdf',
      status: 'pending',
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      policyName: 'LifeGuard',
      diseaseType: 'Heart Attack',
      amountClaimed: '$8000',
      documents: 'documents.zip',
      status: 'pending',
    },
  ]);

  // Function to handle approval of a request
  const handleApprove = (id) => {
    setMediclaimRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: 'approved' } : request
      )
    );
  };

  // Function to handle disapproval of a request
  const handleDisapprove = (id) => {
    setMediclaimRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: 'disapproved' } : request
      )
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Patient Name</TableCell>
            <TableCell>Policy Name</TableCell>
            <TableCell>Disease Type</TableCell>
            <TableCell>Amount Claimed</TableCell>
            <TableCell>Documents</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mediclaimRequests.map((request) => (
            <TableRow key={request.id}>
              <TableCell>{request.patientName}</TableCell>
              <TableCell>{request.policyName}</TableCell>
              <TableCell>{request.diseaseType}</TableCell>
              <TableCell>{request.amountClaimed}</TableCell>
              <TableCell>{request.documents}</TableCell>
              <TableCell>{request.status}</TableCell>
              <TableCell>
                {request.status === 'pending' && (
                  <>
                    <Button
                      onClick={() => handleApprove(request.id)}
                      variant="contained"
                      color="primary"
                      size="small"
                    >
                      Approve
                    </Button>
                    <Button
                      onClick={() => handleDisapprove(request.id)}
                      variant="contained"
                      color="secondary"
                      size="small"
                    >
                      Disapprove
                    </Button>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MediclaimRequests;
