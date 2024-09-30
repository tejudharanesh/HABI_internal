import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Home from "../Admin/Home";
import Meeting from "../Meeting/Meeting";
import Project from "../Projects/Project";
import ProjectDetails from "../../components/Projects/ProjectsDetails/ProjectDetails";
import Timeline from "../../components/Projects/Timeline/Timeline";
import Payment from "../../components/Projects/Payment/Payment";
import Leads from "../Leads/Leads";
import Vendors from "../Vendors/Vendors";
import LeadInformation from "../../components/Leads/LeadInformation";
import AddVendors from "../../components/Vendors/AddVendors";

function Dashboard() {
  const initialVendors = [
    {
      id: 1,
      name: "Company Name 1",
      phone: "1234567890",
      email: "company1@gmail.com",
      address:
        "43, Second Floor, Leela Palace Rd, behind The Leela Palace, HAL 2nd Stage, Kodihalli, Bengaluru, Karnataka 560008",
      logo: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Company Name 2",
      phone: "0987654321",
      email: "company2@gmail.com",
      address: "12, MG Road, near Brigade Road, Bengaluru, Karnataka 560001",
      logo: "https://via.placeholder.com/50",
    },
  ];

  const [vendors, setVendors] = useState(initialVendors);

  const deleteSelectedVendors = (selectedVendors) => {
    const remainingVendors = vendors.filter(
      (vendor) => !selectedVendors.includes(vendor.id)
    );
    setVendors(remainingVendors);
    setSelectedVendors([]); // Reset after deletion
  };
  // Function to add a new vendor
  const addVendor = (newVendor) => {
    setVendors((prevVendors) => [
      ...prevVendors,
      { id: prevVendors.length + 1, ...newVendor },
    ]);
  };
  return (
    <div className="flex h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow h-screen">
        <Routes>
          {/* Define routes relative to "/dashboard" */}
          <Route path="/" element={<Home />} />
          <Route path="/meeting" element={<Meeting />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/projectsDetails" element={<ProjectDetails />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/lead-details/:id" element={<LeadInformation />} />
          <Route
            path="/vendors"
            element={
              <Vendors
                vendors={vendors}
                addVendor={addVendor}
                deleteSelectedVendors={deleteSelectedVendors}
              />
            }
          />
          <Route
            path="/AddVendor"
            element={<AddVendors addVendor={addVendor} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
