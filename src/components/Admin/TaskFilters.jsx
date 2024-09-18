import React, { useState } from "react";
import assignTask from "../../assets/svg/assignTask.svg";
import addEmployee from "../../assets/svg/addEmployee.svg";

function TaskFilters({ toggleTaskDrawer, toggleAddEmployeeDrawer, setFilter }) {
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleFilterChange = (status) => {
    if (selectedStatus === status) {
      setSelectedStatus(""); // Remove filter if already selected
      setFilter(""); // Pass empty string to reset the filter in Home
    } else {
      setSelectedStatus(status); // Apply new filter
      setFilter(status); // Pass the selected status to Home
    }
  };

  return (
    <div className="relative py-3 md:pl-4">
      {/* Dropdown for mobile screens */}
      <div className="inline-block md:hidden">
        <select
          className="py-2 w-40 px-2 border-2 border-gray-300 rounded-lg focus:outline-none bg-layoutColor text-gray-400 cursor-pointer"
          onChange={(e) => handleFilterChange(e.target.value)}
          value={selectedStatus}
        >
          <option value="">Filter</option>
          {["High Priority", "In Progress", "Pending", "On Hold"].map(
            (status, index) => (
              <option key={index} value={status}>
                {status}
              </option>
            )
          )}
        </select>
      </div>

      {/* Buttons for larger screens */}
      <div className="hidden md:inline space-x-2">
        {["High Priority", "In Progress", "Pending", "On Hold"].map(
          (status, index) => (
            <button
              key={index}
              className={`px-4 py-1 rounded-xl border-2 border-gray-300 outline-none focus:outline-none ${
                selectedStatus === status
                  ? "bg-primary text-white"
                  : "bg-layoutColor text-gray-400"
              }`}
              onClick={() => handleFilterChange(status)}
            >
              {status}
            </button>
          )
        )}
      </div>

      <div className="absolute right-2 inline">
        <button
          className="px-3 py-1 rounded-xl bg-primary text-white border-2 mr-2 outline-none focus:outline-none"
          onClick={toggleTaskDrawer}
        >
          <img src={assignTask} alt="Assign Task" className="inline mr-1" />
          <span className="hidden lg:inline">Assign Task</span>
        </button>
        <button
          className="px-3 py-1 rounded-xl bg-primaryO text-primary border-2 border-primary mr-2 outline-none focus:outline-none"
          onClick={toggleAddEmployeeDrawer}
        >
          <img src={addEmployee} alt="Add Employee" className="inline mr-1" />
          <span className="hidden lg:inline">Add Employee</span>
        </button>
      </div>
    </div>
  );
}

export default TaskFilters;
