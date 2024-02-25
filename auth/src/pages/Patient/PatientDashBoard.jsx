import React from "react";
import PersistentDrawer from "../../component/Persisent";

import Overview from "./Overview";
import Profile from "./Profile";
import Treatment from "./Treatment";
import RequestMediclaim from "./RequestMediclaim";


const PatientDashboard = () => {
  const items = ["Overview", "Profile", "Treatment", "RequestMediclaim"];

  const patient = {
    name: "John Doe",
    age: 35,
    gender: "Male",
    email: "john.doe@example.com",
    contact: "123-456-7890",
    patientId: "P12345",
    insurance: "ABC Insurance",
    policyNo: "POL123",
  };

  return (
    <PersistentDrawer items={items} heading="Patient Dashboard">
      {(selectedItem) => (
        <div>
          {selectedItem === "Overview" && <Overview patient={patient} />}
          {selectedItem === "Profile" && <Profile patient={patient} />}
          {selectedItem === "Treatment" && <Treatment patient={patient} />}
          {selectedItem === "RequestMediclaim" && (
            <RequestMediclaim patient={patient} />
          )}
        
        </div>
        
      )}
      
    </PersistentDrawer>
  );
};


export default PatientDashboard;
