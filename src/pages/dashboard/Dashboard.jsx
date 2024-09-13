import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Home from "../Admin/Home";
import Header from "../../components/header/Header";
import TaskFilters from "../../components/Admin/TaskFilters";
function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      {/* Add ml-64 to create space for the navbar */}
      <div className="">
        <Header />
        <TaskFilters />
      </div>
    </div>
  );
}

export default Dashboard;
