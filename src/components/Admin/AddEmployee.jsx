import React, { useState } from "react";
import close from "../../assets/svg/close1.svg";
import add from "../../assets/images/add.png";
import CustomRoleModel from "./CustomRoleModel";

const AddEmployee = ({ closeDrawer }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    employeeId: "",
    password: "",
    selectedRoles: [],
  });
  const [customRole, setCustomRole] = useState("");
  const [isCustomRoleModalOpen, setIsCustomRoleModalOpen] = useState(false);
  const [roles, setRoles] = useState([
    "Architect",
    "Project Manager",
    "Sales",
    "Admin",
  ]); // moved roles to state

  // Handle input changes for form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Toggle role selection
  const handleRoleChange = (role) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedRoles: prevData.selectedRoles.includes(role)
        ? prevData.selectedRoles.filter((r) => r !== role)
        : [...prevData.selectedRoles, role],
    }));
  };

  // Add new custom role to roles array
  const handleAddCustomRole = (roleName, accessOptions) => {
    if (roleName && !roles.includes(roleName)) {
      setRoles((prevRoles) => [...prevRoles, roleName]);
      setFormData((prevData) => ({
        ...prevData,
        selectedRoles: [...prevData.selectedRoles, roleName],
      }));
      setCustomRole("");
      setIsCustomRoleModalOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    closeDrawer();
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
          <p className="text-black ml-2">Role</p>
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 px-3 p-1">
            {roles.map((role) => (
              <label key={role} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.selectedRoles.includes(role)}
                  onChange={() => handleRoleChange(role)}
                  className="h-4 w-4 text-primary bg-layoutColor border-gray-300 border-2 rounded focus:ring-primary appearance-none checked:appearance-auto checked:bg-layoutColor checked:border-black checked:text-black"
                />
                <span className="text-black text-xs">{role}</span>
              </label>
            ))}
            <button
              className="bg-layoutColor text-black p-0 w-fit ring-0 border-0 hover:outline-none"
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
          >
            Add
          </button>
        </div>
      </form>

      {isCustomRoleModalOpen && (
        <CustomRoleModel
          closeModal={() => setIsCustomRoleModalOpen(false)}
          customRole={customRole}
          setCustomRole={setCustomRole}
          handleAddCustomRole={handleAddCustomRole} // pass the function
        />
      )}
    </div>
  );
};

export default AddEmployee;
