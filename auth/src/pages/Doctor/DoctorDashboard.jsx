import React, { useState } from 'react';
import { Grid, Typography, Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogTitle, DialogContent, DialogActions, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, TextField, AppBar, Toolbar, IconButton, Badge, Avatar, CssBaseline } from '@mui/material';
import { AddComment, AccountCircle, EventNote, PeopleAlt, ExitToApp, Person, ThumbUp, ThumbDown, Notifications, Menu } from '@mui/icons-material';
import DoctorOverview from './DoctorOverview';
import DoctorProfile from './Doctorprofile';
import Appointments from './Appointments';
// import Logout from './logout';


const DoctorDashboard = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: 'Patient 1', age: 30, gender: 'Male', updates: 'No updates for today', status: 'pending' },
    { id: 2, name: 'Patient 2', age: 40, gender: 'Female', updates: 'Patient had a successful surgery today', status: 'approved' },
    { id: 3, name: 'Patient 3', age: 25, gender: 'Male', updates: 'Patient is recovering well', status: 'pending' },
  ]);

  const [selectedPatient, setSelectedPatient] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState('Overview');
  const [selectedPatientUpdate, setSelectedPatientUpdate] = useState('');
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to control sidebar open/close

  const handleOpenDialog = (patient) => {
    setSelectedPatient(patient);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleUpdateButtonClick = (update) => {
    setSelectedPatientUpdate(update);
    setOpenUpdateDialog(true);
  };

  const handleCloseUpdateDialog = () => {
    setOpenUpdateDialog(false);
  };

  const handleApprove = (id) => {
    setPatients(prevPatients =>
      prevPatients.map(patient =>
        patient.id === id ? { ...patient, status: 'approved' } : patient
      )
    );
  };

  const handleDisapprove = (id) => {
    setPatients(prevPatients =>
      prevPatients.map(patient =>
        patient.id === id ? { ...patient, status: 'disapproved' } : patient
      )
    );
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sidebarItems = [
    { text: 'Overview', icon: <AccountCircle />, component: <DoctorOverview/> },
    { text: 'Patients', icon: <PeopleAlt />, component:
      <div>
        <PatientsTable
          patients={filteredPatients}
          handleOpenDialog={handleOpenDialog}
          handleApprove={handleApprove}
          handleDisapprove={handleDisapprove}
          handleSearch={handleSearch}
          handleUpdateButtonClick={handleUpdateButtonClick}
        />
        <Dialog open={openUpdateDialog} onClose={handleCloseUpdateDialog}>
          <DialogTitle>Patient's Update</DialogTitle>
          <DialogContent>
            <Typography>{selectedPatientUpdate}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseUpdateDialog} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    },
    { text: 'Appointments', icon: <EventNote />,component:<Appointments/>},
    { text: 'Profile', icon: <Person /> ,component:<DoctorProfile/>},
    { text: 'Logout', icon: <ExitToApp />},
    {text:'Add Account',icon:<AccountCircle/>},
  ];

  const handleNavItemSelect = (text) => {
    setSelectedNavItem(text);
  };

  // Render the selected component based on the selected navigation item
  const renderComponent = () => {
    const selectedItem = sidebarItems.find((item) => item.text === selectedNavItem);
    return selectedItem ? selectedItem.component : null;
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Grid container spacing={0}>
      <CssBaseline />
      <Grid item xs={12}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={toggleSidebar}
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Your Hospital Name
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="error">
                <Notifications />
              </Badge>
            </IconButton>
            <Avatar />
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item xs={3} style={{ marginTop: '64px', overflowX: 'hidden', transition: 'width 0.5s' }}>
        <Drawer
          variant="permanent"
          sx={{
            width: sidebarOpen ? 240 : 0,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box',
            },
          }}
        >
          <List>
            {sidebarItems.map((item, index) => (
              <ListItem button key={item.text} onClick={() => handleNavItemSelect(item.text)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
      </Grid>
      <Grid item xs={9}>
        <Typography variant="h4" gutterBottom>
        
        </Typography>
        <Paper elevation={3} sx={{ padding: 2 }}>
          {renderComponent()}
        </Paper>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Today's Update for {selectedPatient ? selectedPatient.name : ''}</DialogTitle>
          <DialogContent>
            <Typography>{selectedPatient ? selectedPatient.updates : ''}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  );
};

// Component to display doctor info
const DoctorInfo = () => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Doctor Info
      </Typography>
      {/* Add doctor information here */}
    </div>
  );
};

const PatientsTable = ({ patients, handleOpenDialog, handleApprove, handleDisapprove, handleSearch, handleUpdateButtonClick }) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Patients
      </Typography>
      <TextField label="Search" variant="outlined" onChange={handleSearch} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Patient's Update</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell>{patient.gender}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleUpdateButtonClick(patient.updates)}
                    variant="outlined"
                    color="primary"
                    size="small"
                    startIcon={<AddComment />}
                  >
                    Update
                  </Button>
                </TableCell>
                <TableCell>{patient.status}</TableCell>
                <TableCell>
                  {patient.status === 'pending' && (
                    <>
                      <Button onClick={() => handleApprove(patient.id)} variant="contained" color="primary" size="small" startIcon={<ThumbUp />}>
                        Approve
                      </Button>
                      <Button onClick={() => handleDisapprove(patient.id)} variant="contained" color="secondary" size="small" startIcon={<ThumbDown />}>
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
    </div>
  );
};

export default DoctorDashboard;
