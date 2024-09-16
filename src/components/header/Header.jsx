import React from "react";
import profile from "../../assets/images/profile.png";
import bell from "../../assets/svg/bell.svg";
import search from "../../assets/svg/search.svg";
const Header = () => {
  return (
    <div className="sticky top-0 left-0 h-14 border-b p-2 bg-layoutColor z-10">
      <p className="text-black text-lg absolute left-20 md:left-4 top-4 font-semibold">
        Home
      </p>
      <div className="md:border rounded-xl p-1 absolute right-20 md:right-48 mr-6 mt-1">
        <img src={search} alt="" className="inline-block mr-1" />

        <input
          type="text"
          placeholder="Search Task, Meeting, Projects..."
          className="bg-layoutColor outline-none focus:outline-none border-none ring-0 text-black text-sm hidden md:inline w-60 h-4"
        />
      </div>
      <div className="inline-block mx-1 absolute right-14 md:right-40 p-2 text-gray-400">
        <img src={bell} alt="" className="inline" /> |
      </div>
      <div className="flex absolute right-4">
        <div className="flex items-center">
          <div className="ml-2 hidden md:inline mr-2">
            <p className="text-black text-sm">Hi, Anil Kumar</p>
            <p className="text-gray-500 text-xs">Senior Architect</p>
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
