import React from "react";
import profile from "../../assets/images/profile.png";
import bell from "../../assets/svg/bell.svg";
import search from "../../assets/svg/search.svg";
const Header = () => {
  return (
    <div className="relative h-14 border-b p-1">
      <p className="text-black text-lg absolute left-20 md:left-4 top-2 font-semibold">
        Home
      </p>
      <div className="md:border rounded-xl p-2 absolute right-48">
        <img src={search} alt="" className="inline-block mr-1" />

        <input
          type="text"
          placeholder="Search Task, Meeting, Projects..."
          className="bg-layoutColor outline-none focus:outline-none border-none ring-0 text-black text-sm hidden md:inline"
        />
      </div>
      <div className="inline-block mr-1 absolute right-40 p-2">
        <img src={bell} alt="" />
      </div>
      <div className="flex absolute right-4">
        <div className="flex items-center">
          <div className="ml-2 hidden md:inline">
            <p className="text-black">Hi, Anil Kumar</p>
            <p className="text-gray-500 text-sm">Senior Architect</p>
          </div>
          <img
            src={profile} // Replace with actual image URL
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
