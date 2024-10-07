import React from "react";
import { Taskcard, Taskcard1 } from "./Taskcard";

export function Task({ tasks, toggleTaskDetails }) {
  return (
    <div className="mb-6">
      {tasks.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
          {tasks.map((task, id) => (
            <Taskcard
              key={id}
              task={task}
              toggleTaskDetails={toggleTaskDetails}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-sm">No tasks</p>
      )}
    </div>
  );
}

export function Task1({ tasks, toggleTaskDetails }) {
  console.log("wekijdjhweud");

  return (
    <div className="mb-6">
      {tasks.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
          {tasks.map((task, id) => (
            <Taskcard1
              key={id}
              task={task}
              toggleTaskDetails={toggleTaskDetails}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-sm">No tasks</p>
      )}
    </div>
  );
}
