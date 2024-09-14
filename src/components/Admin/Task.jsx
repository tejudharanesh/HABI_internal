import React from "react";
import Taskcard from "./Taskcard";

function Task({ title, tasks }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-4 text-black">{title}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {tasks.map((task, id) => (
          <Taskcard key={id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default Task;
