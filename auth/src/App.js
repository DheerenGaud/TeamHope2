// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import Login from './pages/login';
// import SignUp from './pages/signUp';
// import Forgot from "./pages/forgot"
// import Verifyed from "./pages/verify"
// import ResetPassword from "./pages/resetpass"
// import Home from './pages/home';
// import Form from './pages/Hospital/Form';



// export default function App() {
  
//   const loginStatus = window.localStorage.getItem('loginStatus');
 
//   return (
//     <>
//       <Router>
//         <Routes >
//           <Route path="/login" exact element={<Login />}></Route>
//           <Route path="/signup" exact element={<SignUp />}></Route>
//           <Route path="/forgot" exact element={<Forgot />}></Route>
//           <Route path="/auth/verify/:userId/:uniqueString/" element={<Verifyed />}/>
//           <Route path="/auth/resetPassword/:userId/:resetString"element={<ResetPassword/>}/>;
//           <Route path="/hospital" exact element={loginStatus==="true"?<Home  path="hospital"/>:<Login />}></Route>
//           <Route path="/dr" exact element={loginStatus==="true"?<Home  path="dr" />:<Login />}></Route>
//           <Route path="/user" exact element={loginStatus==="true"?<Home path="user" />:<Login />}></Route>
//           <Route path="/mediclaimCom" exact element={loginStatus==="true"?<Home  path="mediclaimCom"/>:<Login />}></Route>
//           <Route path="/hospital/form" exact element={loginStatus==="true"?<Form  path="mediclaimCom"/>:<Login />}></Route>


//         </Routes>
//       </Router>
//     </>
//   )
// }

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/signUp';
import Forgot from "./pages/forgot";
import Verifyed from "./pages/verify";
import ResetPassword from "./pages/resetpass";
import Home from './pages/home';
import Form from './pages/Hospital/Form';
import HospitalProfile from './pages/Hospital/HospitalProfile'; 
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import HospitalDashBoard from './pages/HospitalU/HospitalU/HospitalDashBoard';
import MediclaimDashBoard from './pages/Mediclaim/MediclaimDashBoard';
import PatientDashboard from './pages/Patient/PatientDashBoard';

export default function App() {
  const loginStatus = window.localStorage.getItem('loginStatus');

  return (
    <>
      <Router>
        <Routes >
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/auth/verify/:userId/:uniqueString/" element={<Verifyed />} />
          <Route path="/auth/resetPassword/:userId/:resetString" element={<ResetPassword />} />
          <Route path="/dr" element={loginStatus === "true" ? <Home path="dr" /> : <Login />} />
          <Route path="/user" element={loginStatus === "true" ? <Home path="user" /> : <Login />} />
          <Route path="/mediclaimCom" element={loginStatus === "true" ? <Home path="mediclaimCom" /> : <Login />} />
          <Route path="/Hospital" element={loginStatus === "true" ? <Home path="Hospital" /> : <Login />} />
          <Route path="/Hospital/form" element={<Form />} />
          {/* <Route path="/Hospital/HospitalProfile" element={<HospitalProfile />} /> Ensure correct path */}
          <Route path="/Doctor/DoctorDashboard" element={<DoctorDashboard />} />
          <Route path="/HospitalU/HospitalDashBoard" element={<HospitalDashBoard />} />
          <Route path="/Mediclaim/MediclaimDashBoard" element={<MediclaimDashBoard />} />
          <Route path="/Patient/PatientDashBoard" element={<PatientDashboard />} />
        </Routes>
      </Router>
    </>
  );
}

