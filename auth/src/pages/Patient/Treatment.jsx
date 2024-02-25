import React, { useState } from "react";
import { Typography, Paper, Box, Divider, Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Treatment = () => {
  const [hospitals, setHospitals] = useState([
    {
      id: 1,
      name: "Hospital A",
      diseases: [
        {
          id: 1,
          type: "Disease X",
          treatment: "Treatment for Disease X",
          medicines: "Medicines for Disease X",
          status: "In Progress",
          futureAction: "Surgery scheduled on 25th Feb",
          report: "/path/to/report.png"
        },
        {
          id: 2,
          type: "Disease Y",
          treatment: "Treatment for Disease Y",
          medicines: "Medicines for Disease Y",
          status: "Pending",
          futureAction: "Follow-up appointment on 10th March",
          report: "/path/to/another_report.png"
        }
      ]
    },
    {
      id: 2,
      name: "Hospital B",
      diseases: [
        {
          id: 3,
          type: "Disease Z",
          treatment: "Treatment for Disease Z",
          medicines: "Medicines for Disease Z",
          status: "Completed",
          futureAction: "Discharged",
          report: "/path/to/yet_another_report.png"
        }
      ]
    }
  ]);

  const handleFutureAction = (action) => {
    // Add logic to handle future actions
    console.log("Future Action:", action);
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
      <Paper elevation={3} sx={{ width: "80%", maxWidth: 800, p: 4 }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
          Treatment
        </Typography>
        <Divider sx={{ mb: 2 }} />
        {hospitals.map((hospital) => (
          <Accordion key={hospital.id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{hospital.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ width: "100%" }}>
                {hospital.diseases.map((disease) => (
                  <Accordion key={disease.id}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>{disease.type}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box sx={{ width: "100%" }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>Treatment Details:</Typography>
                        <Typography>{disease.treatment}</Typography>
                        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2 }}>Medicines:</Typography>
                        <Typography>{disease.medicines}</Typography>
                        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2 }}>Status:</Typography>
                        <Typography>{disease.status}</Typography>
                        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2 }}>Future Action:</Typography>
                        <Button onClick={() => handleFutureAction(disease.futureAction)}>Take Action</Button>
                        {disease.report && (
                          <div>
                            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2 }}>Report:</Typography>
                            <img src={disease.report} alt="Report" style={{ maxWidth: "100%", marginTop: "10px" }} />
                          </div>
                        )}
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>
    </Box>
  );
};

export default Treatment;
