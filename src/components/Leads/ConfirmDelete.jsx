import React from "react";
import deleteConfirm from "../../assets/svg/deleteicon.svg";

function ConfirmDelete({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div className="bg-white rounded-lg p-5 md:w-1/3 items-center justify-center flex flex-col text-black">
        <img src={deleteConfirm} alt="" />
        <h2 className="text-lg font-bold mt-3">Delete Lead</h2>
        <p className="text-center px-3 text-gray-400">
          You're going to delete the lead. Are you sure?
        </p>

        <div className="flex mt-4">
          <button
            className="mr-3 px-6 py-2 bg-gray-200 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-6 py-2 bg-red-500 text-white rounded"
            onClick={onConfirm}
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDelete;
