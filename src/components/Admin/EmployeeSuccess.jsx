import React, { useState } from "react";
import close from "../../assets/svg/close.svg";

const EmployeeSuccess = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-layoutColor p-6 md:p-10 rounded-xl shadow-lg w-[80%] md:w-96 relative">
        <img
          src={close}
          alt="close"
          className="w-5 h-5 absolute right-2 top-2 cursor-pointer"
          onClick={closeModal}
        />
        <h3 className="text-lg font-semibold mb-6 text-center text-black">
          New Employee Added
        </h3>
      </div>
    </div>
  );
};

export default EmployeeSuccess;
