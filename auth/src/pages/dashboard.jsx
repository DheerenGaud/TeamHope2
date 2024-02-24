import React from 'react';
import Box from '@mui/material/Box';
import Navbar from '../component/Navbar';
import Appbar from '../component/Appbar';

export default function Home() {
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    return (
        <>
        <Box sx={{ display: 'flex' }}>
           <Appbar pageName='Home' open={open} handleDrawerOpen={handleDrawerOpen} />
           <Navbar open={open} handleDrawerClose={handleDrawerClose} />
        </Box>
        </>  
    )
}