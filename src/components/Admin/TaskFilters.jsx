import React from "react";
function TaskFilters() {
  return (
    <div className="min-h-screen items-center bg-background font-poppins w-full">
      <div
        className={`w-screen bg-layoutColor shadow p-4 h-auto mb-3 md:pl-20 lg:pl-40`}
      >
        {" "}
        {["High Priority", "In Progress", "Pending", "On Hold"].map(
          (status, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded bg-layoutColor text-gray-400 border-2 border-gray-300"
            >
              {status}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default TaskFilters;
