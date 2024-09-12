import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../Admin/Home";

function Dashboard() {
  return (
    <div className="flex">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col flex-grow">
        {/* Routes */}
        <Home />
      </div>
    </div>
  );
}

export default Dashboard;
