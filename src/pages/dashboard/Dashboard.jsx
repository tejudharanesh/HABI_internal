import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Home from "../Admin/Home";
import Meeting from "../Meeting/Meeting";

function Dashboard() {
  return (
    <div className="flex h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meeting" element={<Meeting />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
