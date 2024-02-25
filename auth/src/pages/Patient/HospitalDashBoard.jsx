import React from "react";
import PersistentDrawer from "../../component/Persisent";

import Overview from "./Overview";
import Profile from "./Profile";
const HospitalDashBoard = () => {
  const items = ["Overview", "Profile", "Treatment", "RequestMediclaim"];
  //   const [hospital, setHospital] = useState(null);

  //   useEffect(() => {
  //     // Function to fetch hospital data from the API
  //     const fetchHospitalData = async () => {
  //       try {
  //         // Fetch data from the API
  //         const response = await fetch("/api/hospital");
  //         if (response.ok) {
  //           const data = await response.json();
  //           setHospital(data);
  //         } else {
  //           console.error("Failed to fetch hospital data");
  //         }
  //       } catch (error) {
  //         console.error("Error fetching hospital data:", error);
  //       }
  //     };
  //   });

  //   // Call the function to fetch hospital data
  //   fetchHospitalData();

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
    <PersistentDrawer items={items} heading={hospital.name}>
      {(selectedItem) => (
        <div>
          {selectedItem === "Overview" && <Overview hospital={hospital} />}
          {selectedItem === "Profile" && <Profile hospital={hospital} />}
          {selectedItem === "Treatment" && <Treatment hospital={hospital} />}
          {selectedItem === "Add Patient" && <AddPatient hospital={hospital} />}
        </div>
      )}
    </PersistentDrawer>
  );
};

export default HospitalDashBoard;
