import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Home from "../Admin/Home";
import Meeting from "../Meeting/Meeting";
import Project from "../Projects/Project";
import ProjectDetails from "../../components/Projects/ProjectDetails";

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
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
