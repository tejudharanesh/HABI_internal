import React from "react";

function Taskcard({ task }) {
  return (
    <div className="p-4 border rounded shadow-sm bg-white">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">{task.title}</h3>
        <span
          className={`px-2 py-1 text-sm rounded ${
            task.priority === "High" ? "bg-yellow-200" : "bg-blue-200"
          }`}
        >
          {task.priority}
        </span>
      </div>
      <p className="text-sm text-gray-500">{task.project}</p>
      <p className="text-sm text-gray-500">{task.dates}</p>
      <div className="mt-2 flex justify-between items-center">
        <span>{task.status}</span>
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
