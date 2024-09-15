import React from "react";
function TaskFilters() {
  return (
    <div className="relative py-3 pl-4">
      {["High Priority", "In Progress", "Pending", "On Hold"].map(
        (status, index) => (
          <button
            key={index}
            className="px-4 py-1 rounded-xl bg-layoutColor text-gray-400 border-2 border-gray-300 mr-2 outline-none focus:outline-none"
          >
            {status}
          </button>
        )
      )}
      <div className="absolute right-2 inline">
        <button className="px-4 py-1 rounded-xl bg-primary text-white border-2 mr-2 outline-none focus:outline-none">
          Assign task
        </button>
        <button className="px-4 py-1 rounded-xl bg-primaryO text-primary border-2 border-primary mr-2 outline-none focus:outline-none">
          Add Employee
        </button>
      </div>
    </div>
  );
}

export default TaskFilters;
