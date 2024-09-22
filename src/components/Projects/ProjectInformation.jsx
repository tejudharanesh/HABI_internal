import React, { useState } from "react";

function ProjectInformation() {
  const [projectCost, setProjectCost] = useState("1.5 cr");
  const [duration, setDuration] = useState("25 May 2024");
  const [endDate, setEndDate] = useState("1 Dec 2024");
  const [siteDimension, setSiteDimension] = useState("1200 Sq. ft");
  const [floors, setFloors] = useState("G+1");
  const [status, setStatus] = useState("On going");
  const [siteLocation, setSiteLocation] = useState(
    "43, Second Floor, Leela Palace Rd, behind The Leela Palace, HAL 2nd Stage, Kodihalli, Bengaluru, Karnataka 560008"
  );
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-black">Project Information</p>
        <div className="relative">
          <button
            className="bg-layoutColor rounded-full p-0 text-black"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill=""
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 12h.01M12 12h.01M18 12h.01"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 bg-layoutColor shadow-lg rounded-lg py-1 w-24 z-10">
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-layoutColor">
                Edit
              </button>
              <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-layoutColor">
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Form Section */}
      <div className="mt-2">
        {/* Project Cost */}
        <div className="relative mb-7">
          <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-gray-400">
            Project cost
          </label>
          <input
            type="text"
            className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
            value={projectCost}
            onChange={(e) => setProjectCost(e.target.value)}
          />
        </div>

        {/* Duration */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative mb-7">
            <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-gray-400">
              Duration
            </label>
            <input
              type="text"
              className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div className="relative mb-7">
            <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-gray-400">
              End Date
            </label>
            <input
              type="text"
              className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        {/* Site Dimension & Floors */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative mb-7">
            <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-gray-400">
              Site Dimension
            </label>
            <input
              type="text"
              className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
              value={siteDimension}
              onChange={(e) => setSiteDimension(e.target.value)}
            />
          </div>
          <div className="relative mb-7">
            <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-gray-400">
              Floors
            </label>
            <input
              type="text"
              className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
              value={floors}
              onChange={(e) => setFloors(e.target.value)}
            />
          </div>
        </div>

        {/* Status */}
        <div className="relative mb-7">
          <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-gray-400">
            Status
          </label>
          <input
            type="text"
            className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>

        {/* Site Location */}
        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-gray-400">
            Site location
          </label>
          <textarea
            rows={3}
            className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
            value={siteLocation}
            onChange={(e) => setSiteLocation(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectInformation;
