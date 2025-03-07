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
import SnagList from "../SnagList/SnagList";

function Dashboard() {
  const role = "Admin";

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
  };
  // Function to add a new vendor
  const addVendor = (newVendor) => {
    setVendors((prevVendors) => [
      ...prevVendors,
      { id: prevVendors.length + 1, ...newVendor },
    ]);
  };
  // Function to update an existing vendor
  const updateVendor = (updatedVendor) => {
    setVendors((prevVendors) =>
      prevVendors.map((vendor) =>
        vendor.id === updatedVendor.id ? updatedVendor : vendor
      )
    );
  };
  return (
    <div className="flex h-screen">
      {/* Navbar */}
      <Navbar role={role} />

      {/* Main Content */}
      <div className="flex-grow h-screen">
        <Routes>
          {/* Define routes relative to "/dashboard" */}
          <Route path="/" element={<Home role={role} />} />
          <Route path="/meeting" element={<Meeting />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/projectsDetails" element={<ProjectDetails />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/lead-details/:id" element={<LeadInformation />} />
          <Route path="/snagList" element={<SnagList />} />

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
            element={<Vendors addVendor={addVendor} />}
          />
          <Route
            path="/updateVendor/:id" // Route for editing vendor
            element={
              <Vendors vendorData={vendors} updateVendor={updateVendor} />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
