import React, { useState } from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import { Box, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
// import DepartmentSelect from '../components/Selectdepartment';
// import MonthYearSelect from '../components/Selectmonthyear';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Grid from '@mui/material/Grid';
import Navbar from '../../component/Navbar';
import Appbar from '../../component/Appbar';
import { TextField, MenuItem } from '@mui/material';
import {    Paper } from '@mui/material';

export default (params) => {
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
   

  return (
    <Grid container justifyContent="center" spacing={2}>
    <Box sx={{ display: 'flex' }}>
      <Appbar pageName='Form' open={open} handleDrawerOpen={handleDrawerOpen} />
      <Navbar  path="hospital" open={open} handleDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 15 }}>
      <h2>Form</h2>
      </Box>
    </Box>
  </Grid>
  
  )
}
