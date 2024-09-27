import React from "react";
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
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/AddVendor" element={<AddVendors />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
