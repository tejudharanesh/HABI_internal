import React, { useState } from "react";
import close from "../../assets/svg/close.svg";

// Reusable Checkbox Component
const Checkbox = ({ id, name, checked, handleInputChange, label }) => (
  <div className="mb-2">
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={handleInputChange}
        className="h-4 w-4 text-primary bg-layoutColor border-gray-300 border-2 rounded focus:ring-primary appearance-none checked:appearance-auto checked:bg-layoutColor checked:border-black checked:text-black"
      />
      <span className="text-black text-xs">{label}</span>
    </label>
  </div>
);

const CustomRoleModel = ({
  closeModal,
  customRole,
  setCustomRole,
  handleAddCustomRole,
}) => {
  const [roleName, setRoleName] = useState("");
  const [accessOptions, setAccessOptions] = useState({
    projects: false,
    createProject: false,
    vendors: false,
    addVendor: false,
    leads: false,
    addLead: false,
    report: false,
    addEmployee: false,
    createMeeting: false,
  });

  const handleInputChange = (e) => {
    const { name, checked } = e.target;
    setAccessOptions((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  // List of access options with labels
  const accessItems = [
    { id: "projects", label: "Projects" },
    { id: "createProject", label: "Create Project" },
    { id: "vendors", label: "Vendors" },
    { id: "addVendor", label: "Add Vendor" },
    { id: "leads", label: "Leads" },
    { id: "addLead", label: "Add Lead" },
    { id: "report", label: "Report" },
    { id: "addEmployee", label: "Add Employee" },
    { id: "createMeeting", label: "Create Meeting" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-layoutColor p-6 md:p-10 rounded-lg shadow-lg w-[80%] md:w-96 relative">
        <img
          src={close}
          alt="close"
          className="w-5 h-5 absolute right-2 top-2"
          onClick={closeModal}
        />
        <h3 className="text-xl font-semibold mb-6 text-center text-black">
          Create Custom Role
        </h3>

        {/* Role Name Input */}
        <div className="mb-4 relative">
          <label className="block text-gray-700 absolute bg-layoutColor -top-2.5 left-3 px-1">
            Name
          </label>
          <input
            type="text"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            placeholder="Enter Role Name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none bg-layoutColor text-black"
          />
        </div>

        {/* Access Options */}
        <div className="mb-4">
          <p className="text-gray-700 font-semibold mb-2">Access</p>
          <div className="grid grid-cols-2 gap-2">
            {accessItems.map((item) => (
              <Checkbox
                key={item.id}
                id={item.id}
                name={item.id}
                checked={accessOptions[item.id]}
                handleInputChange={handleInputChange}
                label={item.label}
              />
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={() => handleAddCustomRole(roleName, accessOptions)}
          className="w-full bg-primary text-white py-2 rounded-lg ring-0 focus:outline-none"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CustomRoleModel;
