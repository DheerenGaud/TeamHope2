import React from "react";
import { Grid, Typography, Box, Paper, useTheme, Avatar } from "@mui/material";
import {
  TrendingUp,
  LocalHospital,
  FavoriteBorder,
  PeopleAlt,
} from "@mui/icons-material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DoctorOverview = () => {
  const theme = useTheme();

  // Dummy data for the graph
  const data = [
    { month: "Jan", patients: 30 },
    { month: "Feb", patients: 40 },
    { month: "Mar", patients: 45 },
    { month: "Apr", patients: 55 },
    { month: "May", patients: 60 },
    { month: "Jun", patients: 70 },
  ];
  const doctor = {
    name: "Dr. John Doe",
    age: 35,
    degree: "MD, MBBS",
    photo: "https://via.placeholder.com/150", // Placeholder image URL
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Doctor Overview
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3}>
            <Box p={2} display="flex" alignItems="center">
              <Box pr={2}>
                <Avatar
                  alt="Doctor Photo"
                  src={doctor.photo}
                  sx={{ width: 150, height: 150 }}
                />
              </Box>
              <Box>
                <Typography variant="h6" gutterBottom>
                  {doctor.name}
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                >{`Age: ${doctor.age}`}</Typography>
                <Typography variant="body1">{`Degree: ${doctor.degree}`}</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            elevation={3}
            sx={{
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            }}
          >
            <Box p={2} display="flex" alignItems="center">
              <PeopleAlt fontSize="large" />
              <Box ml={2}>
                <Typography variant="h6" gutterBottom>
                  No of patient this month
                </Typography>
                <Typography variant="h4">50</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            elevation={3}
            sx={{
              bgcolor: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
            }}
          >
            <Box p={2} display="flex" alignItems="center">
              <PeopleAlt fontSize="large" />
              <Box ml={2}>
                <Typography variant="h6" gutterBottom>
                  No of patient on average
                </Typography>
                <Typography variant="h4">45</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            elevation={3}
            sx={{
              bgcolor: theme.palette.error.main,
              color: theme.palette.error.contrastText,
            }}
          >
            <Box p={2} display="flex" alignItems="center">
              <FavoriteBorder fontSize="large" />
              <Box ml={2}>
                <Typography variant="h6" gutterBottom>
                  Patient cured till month
                </Typography>
                <Typography variant="h4">35</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            elevation={3}
            sx={{
              bgcolor: theme.palette.success.main,
              color: theme.palette.success.contrastText,
            }}
          >
            <Box p={2} display="flex" alignItems="center">
              <LocalHospital fontSize="large" />
              <Box ml={2}>
                <Typography variant="h6" gutterBottom>
                  No of hospital connected
                </Typography>
                <Typography variant="h4">10</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3}>
            <Box p={2}>
              <Typography variant="h6" gutterBottom>
                Patient trend over the last 6 months
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="patients" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default DoctorOverview;