import React, { useState } from "react";
import close from "../../assets/svg/close1.svg";
import add from "../../assets/images/add.png";
import CustomRoleModel from "./CustomRoleModel";
import delete1 from "../../assets/svg/delete.svg";
import EmployeeSuccess from "./EmployeeSuccess";

const AddEmployee = ({ closeDrawer }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    employeeId: "",
    password: "",
    selectedRole: "", // Update for single role selection
  });

  const [customRoles, setCustomRoles] = useState([]);
  const [isCustomRoleModalOpen, setIsCustomRoleModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const predefinedRoles = ["Architect", "Project Manager", "Sales", "Admin"];
  const roles = [...predefinedRoles, ...customRoles]; // Merge predefined and custom roles

  // Handle input changes for form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle single role selection (radio button)
  const handleRoleChange = (role) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedRole: role,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    closeDrawer();
  };

  const addNewCustomRole = (newRole) => {
    setCustomRoles((prevRoles) => [...prevRoles, newRole]); // Add the new custom role to the list
    setFormData((prevData) => ({
      ...prevData,
      selectedRole: newRole, // Automatically select the custom role
    }));
    setIsCustomRoleModalOpen(false); // Close the modal
  };

  const deleteCustomRole = (role) => {
    setCustomRoles((prevRoles) => prevRoles.filter((r) => r !== role)); // Remove the custom role from the list
    if (formData.selectedRole === role) {
      setFormData((prevData) => ({
        ...prevData,
        selectedRole: "", // Deselect if the deleted role was selected
      }));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8 bg-secondary1 px-8 py-3">
        <h2 className="text-xl font-semibold text-black">Add Employee</h2>
        <img src={close} alt="Close" onClick={closeDrawer} />
      </div>

      <form onSubmit={handleSubmit} className="px-4">
        {["name", "email", "employeeId", "password"].map((field, idx) => (
          <div key={idx} className="relative mb-6">
            <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black capitalize">
              {field}*
            </label>
            <input
              type={field === "password" ? "password" : "text"}
              name={field}
              className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
              placeholder={`Enter ${field}`}
              value={formData[field]}
              onChange={handleInputChange}
            />
          </div>
        ))}

        <div>
          <p className="text-black m-2">Role</p>
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 md:px-3 p-1 justify-between">
            {roles.map((role) => (
              <div key={role} className="flex space-x-2 justify-between">
                <label className="flex items-center space-x-1">
                  <input
                    type="radio"
                    name="role"
                    value={role}
                    checked={formData.selectedRole === role}
                    onChange={() => handleRoleChange(role)}
                    className="h-4 w-4 text-primary bg-layoutColor border-gray-300 border-2 rounded-full focus:ring-primary appearance-none checked:appearance-auto checked:bg-primary checked:border-black checked:text-black"
                  />
                  <span className="text-black text-xs">{role}</span>
                </label>
                {customRoles.includes(role) && (
                  <img
                    src={delete1}
                    alt="Delete"
                    className="cursor-pointer"
                    onClick={() => deleteCustomRole(role)} // Handle role deletion
                  />
                )}
              </div>
            ))}
            <button
              className="bg-layoutColor text-black p-0 w-fit hover:outline-none border-none"
              onClick={(e) => {
                e.preventDefault();
                setIsCustomRoleModalOpen(true);
              }}
            >
              <img src={add} alt="Add Custom" className="inline mr-1" />
              <span className="text-sm">Custom</span>
            </button>
          </div>
        </div>

        <div className="text-center w-full md:text-end mt-6">
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-lg w-full md:w-28"
            onClick={(e) => {
              e.preventDefault();
              setIsSuccess(true);
            }}
          >
            Add
          </button>
        </div>
      </form>

      {isCustomRoleModalOpen && (
        <CustomRoleModel
          closeModal={() => setIsCustomRoleModalOpen(false)}
          addNewCustomRole={addNewCustomRole} // Pass callback to add custom role
        />
      )}
      {isSuccess && <EmployeeSuccess closeModal={() => setIsSuccess(false)} />}
    </div>
  );
};

export default AddEmployee;
