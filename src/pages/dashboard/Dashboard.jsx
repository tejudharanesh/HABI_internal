import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Home from "../Admin/Home";
function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      {/* Add ml-64 to create space for the navbar */}
      <div className="">
        <Home />
      </div>
    </div>
  );
}

export default Dashboard;
