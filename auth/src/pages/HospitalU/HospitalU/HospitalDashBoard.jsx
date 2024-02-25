import React, { useEffect, useState } from "react";
import PersistentDrawer from "../../../component/Persisent";
import AddDoctor from "./AddDoctor";
import Overview from "./Overview";
import Profile from "./Profile";
import AddPatient from "./AddPatient";
import {getHospitalInfo} from "../../../api/api.js"
const HospitalDashBoard = () => {
  const items = ["Overview", "Profile", "Add Doctor", "Add Patient"];
  const [hospitalinfo,setHospital] = useState({});

  const token =window.localStorage.getItem("token");

  

  useEffect(()=>{
    getInfo();
  },[])

  const getInfo= async()=>{
    const x= await getHospitalInfo({token});
    console.log(x.data);
    setHospital(x.data.data.hospital)
  }
   

  const hospital = {
    name: "Example Hospital",
    address: "123 Example St, City, Country",
    email: "hospital@example.com",
    GST_NO: "1234567890",
    HospitalVarified: false,

    dr_array: [
      { _id: 1, name: "Dr. John Doe", specialization: "Cardiologist" },
      { _id: 2, name: "Dr. Jane Smith", specialization: "Neurologist" },
    ],
  };

  return (
    <PersistentDrawer items={items} heading={hospitalinfo.name}>
      {(selectedItem) => (
        <div>
          {selectedItem === "Overview" && <Overview hospital={hospitalinfo} />}
          {selectedItem === "Profile" && <Profile hospital={hospitalinfo} />}
          {selectedItem === "Add Doctor" && <AddDoctor hospital={hospitalinfo} />}
          {selectedItem === "Add Patient" && <AddPatient hospital={hospitalinfo} />}
        </div>
      )}
    </PersistentDrawer>
  );
};

export default HospitalDashBoard;
