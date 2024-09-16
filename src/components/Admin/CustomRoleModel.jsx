import React from "react";

const CustomRoleModel = ({
  closeModal,
  customRole,
  setCustomRole,
  handleAddCustomRole,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-full">
        <h3 className="text-xl font-semibold text-black mb-4">
          Add Custom Role
        </h3>
        <input
          type="text"
          className="block w-full px-3 py-2 border border-gray-300 rounded-xl mb-4"
          placeholder="Enter custom role"
          value={customRole}
          onChange={(e) => setCustomRole(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="bg-primary text-white px-4 py-2 rounded-lg"
            onClick={handleAddCustomRole}
          >
            Add Role
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomRoleModel;
