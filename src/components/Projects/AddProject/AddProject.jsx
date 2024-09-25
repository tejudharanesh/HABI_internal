import React, { useState } from "react";
import close from "../../../assets/svg/close1.svg";

const AddProject = ({ closeDrawer }) => {
  const [formData, setFormData] = useState({
    name: "",
    clientId: "",
    phoneNumber: "",
    email: "",
    currentLocation: "",
    projectCost: "",
    status: "",
    dimension: "",
    floor: "",
    siteLocation: "",
    siteLink: "",
    architect: "",
    siteSupervisor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const architects = ["Architect A", "Architect B", "Architect C"];
  const supervisors = ["Supervisor X", "Supervisor Y", "Supervisor Z"];

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
          {["Name", "Client ID", "Phone Number", "Email"].map((field, idx) => (
            <InputField
              key={idx}
              label={`${field}*`}
              name={field.toLowerCase().replace(" ", "")}
              value={formData[field.toLowerCase().replace(" ", "")]}
              onChange={handleChange}
            />
          ))}
        </div>
        <div>
          <InputField
            label="Current Location"
            name="currentLocation"
            value={formData.currentLocation}
            onChange={handleChange}
          />
        </div>

        <p className="text-gray-400">Project Details</p>
        <div className="grid grid-cols-2 gap-4 mt-4 mb-1">
          {["Project Cost", "Status", "Dimension", "Floor"].map(
            (field, idx) => (
              <InputField
                key={idx}
                label={`${field}*`}
                name={field.toLowerCase().replace(" ", "")}
                value={formData[field.toLowerCase().replace(" ", "")]}
                onChange={handleChange}
              />
            )
          )}
        </div>

        <InputField
          label="Site Location*"
          name="siteLocation"
          value={formData.siteLocation}
          onChange={handleChange}
        />
        <InputField
          label="Site Location Link"
          name="siteLink"
          value={formData.siteLink}
          onChange={handleChange}
        />

        <p className="text-gray-400">Project Assign</p>
        <div className="grid grid-cols-2 gap-4 mt-5">
          <Dropdown
            label="Architect*"
            name="architect"
            options={architects}
            value={formData.architect}
            onChange={handleChange}
          />
          <Dropdown
            label="Site Supervisor*"
            name="siteSupervisor"
            options={supervisors}
            value={formData.siteSupervisor}
            onChange={handleChange}
          />
        </div>

        <button className="bg-primary text-white w-fit px-10 absolute right-10">
          Next
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

const Dropdown = ({ label, name, options, value, onChange }) => (
  <div className="relative mb-5">
    <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
      {label}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
    >
      <option value="">Select {label.split("*")[0]}</option>
      {options.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default AddProject;
