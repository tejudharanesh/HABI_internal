import React from "react";
import Taskcard from "./Taskcard";

function Task({ title, tasks, toggleTaskDetails }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-4 text-black">{title}</h2>
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
        <p className="text-gray-500 text-sm">No tasks in {title}</p>
      )}
    </div>
  );
}

export default Task;
