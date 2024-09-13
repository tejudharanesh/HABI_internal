import React from "react";
import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className="flex flex-col items-center bg-background font-poppins w-full">
      <div
        className={`flex flex-col w-screen bg-layoutColor p-4 h-auto md:pl-20 lg:pl-40`}
      >
        <div className="relative h-10">
          <p className="text-black text-lg absolute left-3 top-2">Home</p>
          <input
            type="text"
            placeholder="Search Task, Meeting, Projects..."
            className="border rounded-xl p-2 w-1/3 absolute right-40 bg-layoutColor"
          />
          <div className="flex absolute right-0">
            <div className="flex items-center">
              <div className="ml-2">
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
      </div>
    </div>
  );
};

export default Header;
