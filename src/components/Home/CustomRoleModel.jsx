import React, { useState } from "react";
import close from "../../assets/svg/close.svg";

const CustomRoleModel = ({ closeModal, addNewCustomRole }) => {
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
    setAccessOptions((prev) => ({ ...prev, [name]: checked }));
  };

  const accessData = [
    { name: "projects", label: "Projects" },
    { name: "createProject", label: "Create Project" },
    { name: "vendors", label: "Vendors" },
    { name: "addVendor", label: "Add Vendor" },
    { name: "leads", label: "Leads" },
    { name: "addLead", label: "Add Lead" },
    { name: "report", label: "Report" },
    { name: "addEmployee", label: "Add Employee" },
    { name: "createMeeting", label: "Create Meeting" },
  ];

  const renderCheckbox = ({ name, label }) => (
    <label className="flex items-center space-x-2 my-1">
      <input
        type="checkbox"
        name={name}
        checked={accessOptions[name]}
        onChange={handleInputChange}
        className="h-4 w-4 text-primary bg-layoutColor border-gray-300 border-2 rounded focus:ring-primary appearance-none checked:appearance-auto checked:bg-layoutColor checked:border-black checked:text-black"
      />
      <span className="text-black text-sm">{label}</span>
    </label>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-layoutColor p-6 md:p-10 rounded-xl shadow-lg w-[80%] md:w-96 relative">
        <img
          src={close}
          alt="close"
          className="w-5 h-5 absolute right-2 top-2 cursor-pointer"
          onClick={closeModal}
        />
        <h3 className="text-lg font-semibold mb-6 text-center text-black">
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
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none bg-layoutColor text-black h-12"
          />
        </div>

        {/* Access Options */}
        <div className="mb-8">
          <p className="text-gray-700 font-semibold mb-2">Access</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              {renderCheckbox(accessData[0])}

              {renderCheckbox(accessData[1])}
              <br />
              {renderCheckbox(accessData[2])}
              {renderCheckbox(accessData[3])}
            </div>
            <div>
              {renderCheckbox(accessData[4])}
              {renderCheckbox(accessData[5])}
              <br />
              {renderCheckbox(accessData[6])}
              {renderCheckbox(accessData[7])}
              {renderCheckbox(accessData[8])}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={() => roleName && addNewCustomRole(roleName)}
          className="w-full bg-primary text-white py-2 rounded-lg ring-0 focus:outline-none"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CustomRoleModel;
