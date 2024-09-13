import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col items-center bg-background font-poppins w-full md:w-[80px] h-auto">
      <input
        type="text"
        placeholder="Search Task, Meeting, Projects..."
        className="border rounded p-2 w-1/3"
      />
      <div className="flex space-x-4">
        <button className="bg-teal-500 text-white px-4 py-2 rounded">
          Assign Task
        </button>
        <button className="bg-teal-500 text-white px-4 py-2 rounded">
          Add Employee
        </button>
        <div className="flex items-center">
          <img
            src="profile-pic-url" // Replace with actual image URL
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-2">
            <p>Hi, Anil Kumar</p>
            <p className="text-gray-500 text-sm">Senior Architect</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
