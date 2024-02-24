import React, { useState } from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import { Box, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
// import DepartmentSelect from '../components/Selectdepartment';
// import MonthYearSelect from '../components/Selectmonthyear';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Grid from '@mui/material/Grid';
import Navbar from '../component/Navbar';
import Appbar from '../component/Appbar';
import { TextField, MenuItem } from '@mui/material';
import {    Paper } from '@mui/material';


const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

export default function Home({path}) {
    
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
   


  const handleDateChange = (date) => {
    // if(!data.typeOfStudent){
    //         alert("First select the type of student")
    // }
    // else{
    //   if(data.typeOfStudent!=="dse"){
    //     const formattedDate = dayjs(date).format('MMMM YYYY'); // Format the date as "Month Year"
    //     setData((prevData) => ({
    //       ...prevData,
    //       Start_Year: formattedDate, // Update Start_YearMonth with the formatted date
    //       End_Year: dayjs(date).add(4, 'year').format('MMMM YYYY'), // Calculate and format End_YearMonth
    //     }));
    //   }
    //   else{
    //     const formattedDate = dayjs(date).format('MMMM YYYY'); // Format the date as "Month Year"
    //     setData((prevData) => ({
    //       ...prevData,
    //       Start_Year: formattedDate, // Update Start_YearMonth with the formatted date
    //       End_Year: dayjs(date).add(3, 'year').format('MMMM YYYY'), // Calculate and format End_YearMonth
    //     }));
    //   }
    // }
  };


  const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setData((prevData) => ({
  //     ...prevData,
  //     file: file
  //   }));
  };
  const handleChangeTypeStudent = (e) => {  
    // setData((prevData) => ({
    //   ...prevData,
    //   typeOfStudent: e.target.value
    // }));
    // if(e.target.value==="normal"){
    //   set_tfws_j_show(true);
    // }
    // else{
    //   set_tfws_j_show(false);
    // }
  };

  const handleDepartmentChange = (event) => {
    // const newDepartment = event.target.value;
    // setData((prevData) => ({
    //   ...prevData,
    //   Departname: newDepartment,
    // }));
  
 
  };

  const handleKeyDown = (event) => {
    // if (event.key === 'Enter' && data.Departname && data.Start_Year) {
    //   handleBatchSubmit();
    // }
  };

  const [openUploadDialog, setOpenUploadDialog] = useState(false);

  const handleBatchSubmit = () => {
    // if (!data.Departname) {
    //   alert("Please enter the department.")
    // } else if (!data.Start_Year) {
    //   alert("Please enter the month and year")
    // } 
    // else if(!data.typeOfStudent){
    //   alert("Please enter the type of student")
    // }else {
    //   setOpenUploadDialog(true);
    // }
  };

  const handleUpload = async () => {
  //   console.log(data);
  //  if(data.file!==null){
  //    const formData = new FormData();
  //    formData.append('file', data.file);
  //    formData.append('Departname', data.Departname);
  //    formData.append('Start_Year', data.Start_Year);
  //    formData.append('End_Year', data.End_Year);
  //    formData.append('No_of_student', data.No_of_student);
  //    formData.append('No_of_j_k', data.No_of_j_k);
  //    formData.append('No_of_tfws', data.No_of_tfws);
  //   try {
  //     if(data.typeOfStudent!=="dse"){
            
  //       const x=await newAcdmicyear(formData);
  //       if(x.data.status==="error"){
  //         alert(x.data.data);
  //       }
  //       else{
  //         alert(x.data.data);
  //       }
  //     }
  //     else{
  //       const x=await newDseAcdmicyear(formData);
  //       if(x.data.status==="error"){
  //         alert(x.data.data);
  //       }
  //       else{
  //         alert(x.data.data);
  //       }
  //     }

    
  //   } catch (error) {
  //     console.error('Error uploading file:', error);
  //   }
  //  }
  //  else{
  //   alert("select file plese!!!")
  //  }
  };

  
const HandleChange = (event) => {
  // console.log(event.target.value);
  // setData((prevData) => ({
  //   ...prevData,
  //   [event.target.name]:  event.target.value,
  // }));
  
};

  return (
    <>
  
  <Grid container justifyContent="center" spacing={2}>
  <Box sx={{ display: 'flex' }}>
    <Appbar pageName='Add Batch' open={open} handleDrawerOpen={handleDrawerOpen} />
    <Navbar  path={path} open={open} handleDrawerClose={handleDrawerClose} />
    <Box component="main" sx={{ flexGrow: 1, p: 15 }}>
    <h2>Add</h2>
    </Box>
  </Box>
</Grid>

</>
  );
}