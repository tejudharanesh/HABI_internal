import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/Header";
import cover from "../../assets/images/cover.png";
import profile from "../../assets/images/profile.png";
import option from "../../assets/images/option.png";

function LeadInformation() {
  const [showDropdown, setShowDropdown] = useState(null);
  const [isEditable, setIsEditable] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const location = useLocation();
  const { lead } = location.state; // Ensure lead has an images property
  const [formData, setFormData] = useState({
    Name: lead.name || "",
    LeadID: lead.leadId || "",
    Phone: lead.phone || "",
    Email: lead.email || "",
    CurrentAddress: lead.address || "",
    SiteLocationPinCode: lead.pinCode || "",
    Level: lead.level || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const InputField = ({ label, name, value, onChange, isTextarea }) => (
    <div className="relative mb-5">
      <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
        {label}
      </label>
      {isTextarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
          rows="3"
          disabled={!isEditable}
        />
      ) : (
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
          disabled={!isEditable}
        />
      )}
    </div>
  );

  const handleEdit = () => {
    setShowDropdown(false);
    setIsEditable(true);
  };

  const handleDone = () => {
    setIsEditable(false);
    // Optionally, add save functionality here
  };

  const handleDelete = () => {
    console.log("Lead deleted");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-layoutColor font-poppins">
      <div
        className={`flex flex-col bg-layoutColor pl-2 md:px-2 h-auto w-screen md:pl-24 lg:pl-40`}
      >
        <Header />
        <div className="p-1 md:p-4 space-y-6 lg:px-40 xl:px-60">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-2 border-2 rounded-xl p-2">
              <div className="relative w-full h-40">
                <img
                  src={cover}
                  alt="Background"
                  className="w-full h-[110px] object-cover md:rounded-lg"
                />
                <div className="absolute bottom-0 left-1 flex items-center">
                  <img
                    src={profile}
                    alt="Profile"
                    className="w-[94px] h-[94px] rounded-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-2 relative">
                {isEditable ? (
                  <button
                    className="absolute right-4 -top-1 bg-blue-600 text-white px-3 py-1 rounded-lg"
                    onClick={handleDone}
                  >
                    Done
                  </button>
                ) : (
                  <img
                    src={option}
                    alt="more"
                    className="absolute right-4 -top-1 cursor-pointer"
                    onClick={() => toggleDropdown()}
                  />
                )}
                {showDropdown && (
                  <div className="absolute right-2 top-4 mt-2 bg-layoutColor shadow-lg rounded-lg z-10">
                    <button
                      className="block w-full px-3 text-red-600 hover:bg-layoutColor"
                      onClick={handleEdit}
                    >
                      Edit
                    </button>
                    <button
                      className="block w-full px-3 text-red-600 hover:bg-layoutColor"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </div>
                )}
                <div>
                  <p className="text-black font-semibold pl-5">
                    Personal Information
                  </p>
                  <div className="px-5">
                    <div className="gap-4 mt-4 mb-1">
                      {[
                        "Name",
                        "Lead ID",
                        "Phone",
                        "Email",
                        "Site Location Pin Code",
                      ].map((field, idx) => (
                        <InputField
                          key={idx}
                          label={`${field}*`}
                          name={field.replace(" ", "")}
                          value={formData[field.replace(" ", "")]}
                          onChange={handleChange}
                          isTextarea={false}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="gap-4 mt-4 mb-1 px-5 md:mt-10">
                    <InputField
                      label="Current Address*"
                      name="CurrentAddress"
                      value={formData.CurrentAddress}
                      onChange={handleChange}
                      isTextarea={true}
                    />
                    <InputField
                      label="Level*"
                      name="Level"
                      value={formData.Level}
                      onChange={handleChange}
                      isTextarea={false}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-black font-semibold pl-5">Site Images</p>
                <div className="flex gap-4 px-5">
                  {lead.images && lead.images.length > 0 ? (
                    lead.images
                      .slice(0, 4)
                      .map((image, idx) => (
                        <img
                          key={idx}
                          src={image}
                          alt={`Lead Image ${idx + 1}`}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                      ))
                  ) : (
                    <p className="text-black">No images available.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadInformation;
