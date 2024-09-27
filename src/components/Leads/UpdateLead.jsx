import React from "react";
import deleteConfirm from "../../assets/svg/update.svg";

function UpdateLead() {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
        <div className="bg-white rounded-lg p-5 md:w-1/3 items-center justify-center flex flex-col text-black">
          <img src={deleteConfirm} alt="" />
          <h2 className="text-lg font-bold mt-3">Delete Lead</h2>
          <p className="text-center px-3 text-gray-400">
            Update the Lead level
          </p>
          <p className="text-center px-3 text-gray-400">Charan, 92992 92922</p>
          <p className="text-center px-3 text-gray-400">
            For the better leads management
          </p>
        </div>
      </div>
    </div>
  );
}

export default UpdateLead;
