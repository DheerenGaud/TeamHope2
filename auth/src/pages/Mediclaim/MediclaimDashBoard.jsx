import React from "react";
import PersistentDrawer from "../../component/Persisent";
import MediclaimRequests from "./MediclaimRequests";
import Overview from "./Overview";
import Profile from "./Profile";

const MediclaimDashBoard = () => {
  const items = ["Overview", "Profile", "MediclaimRequests"];
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

  const Mediclaim = {
    name: "Example Mediclaim",
    address: "123 Example St, City, Country",
    email: "Mediclaim@example.com",
    GST_NO: "1234567890",
    HospitalVarified: false,

    // dr_array: [
    //   { _id: 1, name: "Dr. John Doe", specialization: "Cardiologist" },
    //   { _id: 2, name: "Dr. Jane Smith", specialization: "Neurologist" },
    // ],
  };

  return (
    <PersistentDrawer items={items} heading={Mediclaim.name}>
      {(selectedItem) => (
        <div>
          {selectedItem === "Overview" && <Overview Mediclaim={Mediclaim} />}
          {selectedItem === "Profile" && <Profile Mediclaim={Mediclaim} />}
          {selectedItem === "MediclaimRequests" && <MediclaimRequests Mediclaim={Mediclaim} />}
          
        </div>
      )}
    </PersistentDrawer>
  );
};

export default MediclaimDashBoard;
