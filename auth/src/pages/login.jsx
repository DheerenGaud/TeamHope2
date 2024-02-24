import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { singin  } from '../api/api';
import { useState ,useRef, useEffect} from 'react';

const defaultTheme = createTheme();

export default function SignIn() {
  const [data, setData] = useState({
    email: "",
    password: "",
    type:"patient"
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(data);
    // const x = await singin(data);
    // console.log(x.data);
    // if (x.data.status === "ok") {
    //   window.localStorage.setItem("token", x.data.data);
    //   window.localStorage.setItem("loginStatus", true);
    //       // window.location.href="./"
    //       console.log("login sucess");
    // }
    // else{
    //      console.log("error");
    //      alert(x.data.data)
    //     //  window.location.href="./login"
    // }

  };

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
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
            <TextField
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              onChange={handleChange}
              type="password"
              id="password"
              autoComplete="current-password"
            />
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
<MenuItem value="doctors">Doctors</MenuItem>
<MenuItem value="mediclaimComp">Medical Company</MenuItem>

  </Select>
           
            <Button
                onClick={handleClick}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             LOGIN
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="./forgot" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Link href="./signUp" variant="body2">
                 New Account? Sign Up
                </Link>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}