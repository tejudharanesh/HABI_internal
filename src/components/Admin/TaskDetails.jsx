import React from "react";
import close from "../../assets/svg/close.svg";

function TaskDetails({ closeDrawer, task }) {
  return (
    <div className="text-black">
      <img src={close} alt="Close" onClick={closeDrawer} />
      <h1>{task.project}</h1>
    </div>
  );
}

export default TaskDetails;
