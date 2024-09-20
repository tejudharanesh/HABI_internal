import React, { useState } from "react";
import close from "../../assets/svg/close.svg";
import done from "../../assets/images/done.png";

const EmployeeSuccess = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-layoutColor p-6 md:p-10 rounded-xl shadow-lg w-[70%] md:w-96 relative">
        <img
          src={close}
          alt="close"
          className="w-5 h-5 absolute right-2 top-2 cursor-pointer"
          onClick={closeModal}
        />
        <img src={done} alt="" className="mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2 text-center text-black">
          New Employee Added
        </h3>
        <p className="text-gray-500 text-sm text-center">
          Hurry! We've added a new employee to your team.
        </p>
      </div>
    </div>
  );
};

export default EmployeeSuccess;
