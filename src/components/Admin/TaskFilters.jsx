import React from "react";
import assignTask from "../../assets/svg/assignTask.svg";
import addEmployee from "../../assets/svg/addEmployee.svg";
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
        <button className="px-3 py-1 rounded-xl bg-primary text-white border-2 mr-2 outline-none focus:outline-none">
          <img src={assignTask} alt="" className="inline mr-1" />
          <span className="hidden lg:inline">Assign Task</span>
        </button>
        <button className="px-3 py-1 rounded-xl bg-primaryO text-primary border-2 border-primary mr-2 outline-none focus:outline-none">
          <img src={addEmployee} alt="" className="inline mr-1" />
          <span className="hidden lg:inline">Add Employee</span>
        </button>
      </div>
    </div>
  );
}

export default TaskFilters;
