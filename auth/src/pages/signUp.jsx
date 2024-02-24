import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import TextArea from '@mui/material/TextareaAutosize';

import  { useState ,useRef, useEffect} from 'react';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {newuser,newhospital,newMediclaimCompany} from "../api/api"

const defaultTheme = createTheme();

export default function SignUp() {
  const [data,setData]=useState({
    Fname:"",
    Lname:"",
    email:"",
    password:"",
    cpassword:"",
    age:"",
    blood_group:"A+",
    type:"patient",
    name:"",address:"",GST_NO:"",
    Company_Gst_no:"",Register_no:""
})

 const [showUser,setShowUser]=useState(true);
 const [showHospital,setHospital]=useState(false);
 const [showMediclaimcom,setMediclaimcom]=useState(false);


const handleChange=(e)=>{
  console.log(e.target.name);
  if("type"==e.target.name&&data.type!=e.target.value){
       if(e.target.value==="patient"){
        setShowUser(true);
        setHospital(false)
        setMediclaimcom(false)
       }
       else if(e.target.value=="hospital"){
        setShowUser(false);
        setHospital(true)
        setMediclaimcom(false)
       }else{
        setShowUser(false);
        setHospital(false)
        setMediclaimcom(true)
       }
  }
  setData({...data,[e.target.name]:e.target.value})
}


const handleClick = async (e)=>{
    e.preventDefault()
    console.log(data)
    if(data.cpassword==data.password&&data.password!=""){
      if(data.type=="patient"){
        const x= await newuser(data)
        console.log(x.data)
        if(x.data.status==="Pending"){
            alert(x.data.data);
            window.location.href="./login"
        }
        else{
          alert(x.data.data);
        }
      }
      else if(data.type=="hospital"){
        const x= await newhospital(data)
        console.log(x.data)
        if(x.data){
            alert(x.data.data);
            window.location.href="./login"
        }
        else{
          alert(x.data.data);
        }
      }
      else{
        const x= await newMediclaimCompany(data)
        console.log(x.data)
        if(x.data){
            alert(x.data.data);
            window.location.href="./login"
        }
        else{
          alert(x.data.data);
        }
      }
    }
    else{
      alert("error password is diffrent")
    }
}

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <InputLabel   fullWidth id="demo-simple-select-label">Type</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    fullWidth
    id="demo-simple-select"
    value={data.type}
    name="type"
    label="Age"
    onChange={handleChange}
  >
<MenuItem value="patient">Patient</MenuItem>
   <MenuItem value="hospital">Hospital</MenuItem>
<MenuItem value="mediclaimComp">Medical Company</MenuItem>

  </Select>

            { showUser?<><Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Fname"
                  onChange={handleChange}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  onChange={handleChange}
                  id="lastName"
                  label="Last Name"
                  name="Lname"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={handleChange}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={handleChange}
                  id="age"
                  label="Age"
                  name="age"
                  autoComplete="age"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  onChange={handleChange}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={handleChange}
                  name="cpassword"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <InputLabel
              putLabel   fullWidth id="demo-simple-select-label">Blood Group</InputLabel>
              <Grid item xs={12}>
  <Select
    labelId="demo-simple-select-label"
    fullWidth
    id="demo-simple-select"
    value={data.blood_group}
    name="blood_group"
    label="Age"
    onChange={handleChange}
  >
<MenuItem value="A+">A+</MenuItem>
   <MenuItem value="B+">B+</MenuItem>
<MenuItem value="O+">O+</MenuItem>
<MenuItem value="O-">O-</MenuItem>
<MenuItem value="AB+">AB+</MenuItem>
<MenuItem value="AB-">AB-</MenuItem>

  </Select>
  </Grid>
              </>:<></>}
              
              {
                showHospital?<>
<Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="name"
                  onChange={handleChange}
                  required
                  fullWidth
                  id="firstName"
                  label="Hospital Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={handleChange}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={handleChange}
                  id="GST_NO"
                  label="GST NO"
                  name="GST_NO"
                />
              </Grid>
              <Grid item xs={12}>
                <TextArea
                  required
                  fullWidth
                  onChange={handleChange}
                  id="address"
                  label="Address"
                  name="address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  onChange={handleChange}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={handleChange}
                  name="cpassword"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
                </>:<></>
              }
              {
   showMediclaimcom?<>
   <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="name"
                  onChange={handleChange}
                  required
                  fullWidth
                  id="firstName"
                  label="Compony Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={handleChange}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={handleChange}
                  id="Company_Gst_no"
                  label="Company GST NO"
                  name="Company_Gst_no"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={handleChange}
                  id="Register_no"
                  label="Register NO"
                  name="Register_no"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  onChange={handleChange}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={handleChange}
                  name="cpassword"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid></>:<></>
              }
          
             
  </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleClick}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="./login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}