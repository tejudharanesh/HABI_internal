import React from "react";

export function Taskcard({ task, toggleTaskDetails }) {
  const handleTaskClick = (task) => {
    toggleTaskDetails(task); // Pass the task object to toggleTaskDetails
  };
  return (
    <div
      className="p-3 border-2 rounded-lg bg-layoutColor cursor-pointer"
      onClick={() => handleTaskClick(task)}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-black text-sm">{task.title}</h3>
        <span
          className={`px-1 py-1 text-[10px] rounded-lg ${
            task.priority === "High Priority"
              ? "bg-secondary1 text-secondary"
              : "bg-primaryO text-primary"
          }`}
        >
          {task.priority === "High Priority" ? "High" : "Low"}
        </span>
      </div>

      <p className="text-sm text-gray-500">{task.project}</p>
      <div className="flex justify-between items-center">
        <p className="text-xs text-black bg-background p-1 px-3 rounded-lg">
          {task.projectId}
        </p>
        <p className="text-xs text-black bg-background p-1 px-3 rounded-lg">
          {task.category}
        </p>
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
      <div className="mt-2 flex justify-between items-center">
        <p className="text-xs text-gray-500 mt-1">{task.dueDate}</p>

        <span className="text-xs text-gray-500">{task.status}</span>
      </div>
    </div>
  );
}

export function Taskcard1({ task, toggleTaskDetails }) {
  const handleTaskClick = (task) => {
    toggleTaskDetails(task); // Pass the task object to toggleTaskDetails
  };
  return (
    <div
      className="p-3 border-2 rounded-lg bg-layoutColor cursor-pointer"
      onClick={() => handleTaskClick(task)}
    >
      <div className="flex justify-between items-center mb-1">
        <h3 className="font-semibold text-black text-sm">{task.title}</h3>
        <span className="text-xs text-gray-500">{task.status}</span>
      </div>

      <p className="text-sm text-gray-500 inline mr-3">{task.project}</p>
      <div className="justify-between items-center inline-block">
        <p className="text-xs text-black bg-background p-1 px-3 rounded-lg">
          {task.projectId}
        </p>
      </div>
      <div className="mt-2 flex justify-between items-center">
        <p className="text-xs text-gray-500 mt-1">{task.Date}</p>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="h-3 bg-gray-200 rounded-full w-[90%] mr-2">
          <div
            className="h-full bg-primary rounded-full"
            style={{ width: `${task.progress}%` }}
          ></div>
        </div>
        <span className="text-xs text-black">{task.progress}%</span>
      </div>
    </div>
  );
}
