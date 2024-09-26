import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/Header";
import cover from "../../assets/images/cover.png";
import profile from "../../assets/images/profile.png";

function LeadInformation() {
  const location = useLocation();
  const { lead } = location.state; // Get lead information from state
  const [formData, setFormData] = useState({
    Name: lead.name || "",
    LeadID: lead.leadId || "",
    Phone: lead.phone || "",
    Email: lead.email || "",
    CurrentAddress: lead.address || "",
    SiteLocationPinCode: lead.PinCode || "",
    Level: lead.level || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
                  className="w-full h-[110px] object-cover md:rounded-lg "
                />
                <div className="absolute bottom-0 left-1 flex items-center">
                  <img
                    src={profile}
                    alt="Profile"
                    className="w-[94px] h-[94px] rounded-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
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
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="gap-4 mt-4 mb-1 px-5 md:mt-10">
                    {["Current Address", "Level"].map((field, idx) => (
                      <InputField
                        key={idx}
                        label={`${field}*`}
                        name={field.replace(" ", "")}
                        value={formData[field.replace(" ", "")]}
                        onChange={handleChange}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div>{/* lead images min 4 images */}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadInformation;
