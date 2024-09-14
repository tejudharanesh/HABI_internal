import React from "react";

function Taskcard({ task }) {
  return (
    <div className="p-3 border rounded shadow-sm bg-layoutColor">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-black">{task.title}</h3>
        <span
          className={`px-2 py-1 text-sm rounded ${
            task.priority === "High"
              ? "bg-secondary1 text-secondary"
              : "bg-primaryO text-primary"
          }`}
        >
          {task.priority}
        </span>
      </div>
      <p className="text-sm text-gray-500">{task.project}</p>
      <p className="text-sm text-gray-500">{task.dates}</p>
      <div className="mt-2 flex justify-between items-center">
        <span className="text-sm text-gray-500">{task.status}</span>

        <div className="flex -space-x-2">
          {task.team.map((member, idx) => (
            <img
              key={idx}
              src={member.avatar} // Replace with member avatar URL
              alt={member.name}
              className="w-6 h-6 rounded-full border-2 border-white"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Taskcard;
