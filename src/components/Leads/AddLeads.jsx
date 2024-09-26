import React, { useState } from "react";
import close from "../../assets/svg/close1.svg";

const AddLeads = ({ closeDrawer, addLead }) => {
  const [formData, setFormData] = useState({
    name: "",
    LeadId: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleAddLead = () => {
    addLead({ ...formData, leadId: Date.now(), level: "" }); // Add a new lead with an auto-generated ID
    closeDrawer(); // Close the drawer after adding
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-5 bg-secondary1 px-8 py-4">
        <h2 className="text-xl font-semibold text-black">Add Project</h2>
        <img
          src={close}
          alt="Close"
          onClick={closeDrawer}
          className="cursor-pointer"
        />
      </div>
      <div className="px-5">
        <p className="text-gray-400">Personal Details</p>
        <div className="grid grid-cols-2 gap-4 mt-4 mb-1">
          {["Name", "Lead ID", "Phone", "Email"].map((field, idx) => (
            <InputField
              key={idx}
              label={`${field}*`}
              name={field.toLowerCase().replace(" ", "")}
              value={formData[field.toLowerCase().replace(" ", "")]}
              onChange={handleChange}
            />
          ))}
        </div>

        <button
          className="bg-primary text-white w-fit px-10 absolute right-10"
          onClick={handleAddLead}
        >
          Add
        </button>
      </div>
    </div>
  );
};

const InputField = ({ label, name, value, onChange }) => (
  <div className="relative mb-5">
    <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
      {label}
    </label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
    />
  </div>
);

export default AddLeads;
