import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Monday", sales: 12 },
  { name: "Tuesday", sales: 19 },
  { name: "Wednesday", sales: 3 },
  { name: "Thursday", sales: 5 },
  { name: "Friday", sales: 2 },
];

const Overview = ({ hospital }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url("https://source.unsplash.com/light")`, // Background image
        backgroundSize: "cover",
      }}
    >
      <div style={{ width: "80%", maxWidth: "1200px", textAlign: "center" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <Paper
              elevation={3}
              style={{ padding: "20px", backgroundColor: "#f5f5f5" }}
            >
              <Typography variant="h6">No. of Patients Daily</Typography>
              <Typography variant="h4">100</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper
              elevation={3}
              style={{ padding: "20px", backgroundColor: "#f5f5f5" }}
            >
              <Typography variant="h6">Average Patient</Typography>
              <Typography variant="h4">80</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper
              elevation={3}
              style={{ padding: "20px", backgroundColor: "#f5f5f5" }}
            >
              <Typography variant="h6">No. of Doctors Registered</Typography>
              <Typography variant="h4">20</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper
              elevation={3}
              style={{ padding: "20px", backgroundColor: "#f5f5f5" }}
            >
              <Typography variant="h6">No. of Services Available</Typography>
              <Typography variant="h4">30</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              elevation={3}
              style={{ padding: "20px", backgroundColor: "#f5f5f5" }}
            >
              <Typography variant="h6">Sales Analysis</Typography>
              <BarChart width={600} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#8884d8" />
              </BarChart>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Overview;
