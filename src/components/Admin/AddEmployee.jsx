import React, { useState } from "react";
import close from "../../assets/svg/close1.svg";
import add from "../../assets/images/add.png";
import CustomRoleModel from "./CustomRoleModel";

const AddEmployee = ({ closeDrawer }) => {
  // State variables for each form input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [customRole, setCustomRole] = useState("");

  const [isCustomRoleModalOpen, setIsCustomRoleModalOpen] = useState(false);

  // Predefined roles
  const roles = ["Architect", "Project Manager", "Sales", "Admin"];

  // Handle checkbox change for roles
  const handleRoleChange = (role) => {
    if (selectedRoles.includes(role)) {
      setSelectedRoles(
        selectedRoles.filter((selectedRole) => selectedRole !== role)
      );
    } else {
      setSelectedRoles([...selectedRoles, role]);
    }
  };
  const handleAddCustomRole = () => {
    if (customRole && !roles.includes(customRole)) {
      setSelectedRoles([...selectedRoles, customRole]);
      setCustomRole(""); // Clear the input after adding the custom role
      setShowModal(false); // Close the modal
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare the form data for submission
    const employeeData = {
      name,
      email,
      employeeId,
      password,
      roles: selectedRoles,
    };
    console.log(employeeData); // You can send this data to the server
    closeDrawer(); // Close the drawer after submission
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8 bg-secondary1 px-8 py-3">
        <h2 className="text-xl font-semibold text-black">Add Employee</h2>
        <img src={close} alt="Close" onClick={closeDrawer} />
      </div>

      <form onSubmit={handleSubmit} className="px-4">
        {/* Name */}
        <div className="relative mb-6">
          <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
            Name*
          </label>
          <input
            type="text"
            className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
            placeholder="Enter employee name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="relative mb-6">
          <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
            Email*
          </label>
          <input
            type="email"
            className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
            placeholder="Enter employee email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Employee ID */}
        <div className="relative mb-6">
          <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
            Employee ID*
          </label>
          <input
            type="text"
            className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
            placeholder="Enter employee ID"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="relative mb-6">
          <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
            Password*
          </label>
          <input
            type="password"
            className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Role Selection */}
        <div>
          <p className="text-black ml-2">Role</p>
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 px-3 p-1 justify-between">
            {roles.map((role, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={role}
                  checked={selectedRoles.includes(role)}
                  onChange={() => handleRoleChange(role)}
                  className="h-4 w-4 text-primary bg-layoutColor border-gray-300 border-2 rounded focus:ring-primary appearance-none checked:appearance-auto checked:bg-layoutColor checked:border-black checked:text-black"
                />
                <span className="text-black text-xs">{role}</span>
              </label>
            ))}
            <button
              className="bg-layoutColor text-black p-0 w-fit"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation(); // Prevent closing the parent
                setIsCustomRoleModalOpen(true); // Open modal
              }}
            >
              <img src={add} alt="" className="inline mr-1" />
              <span className="text-sm">Custom</span>
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center w-full md:text-end mt-6">
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-lg w-full md:w-28"
          >
            Add
          </button>
        </div>
      </form>
      {/* Render the CustomRoleModal if showModal is true */}
      {isCustomRoleModalOpen && (
        <CustomRoleModel
          closeModal={() => setIsCustomRoleModalOpen(false)}
          customRole={customRole}
          setCustomRole={setCustomRole}
          handleAddCustomRole={handleAddCustomRole}
        />
      )}
    </div>
  );
};

export default AddEmployee;
