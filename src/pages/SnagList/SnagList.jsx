import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import option from "../../assets/images/option.png";
import Header from "../../components/header/Header";

const SnagList = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-layoutColor font-poppins">
      <div
        className={`flex flex-col bg-layoutColor pl-2 md:px-2 min-h-screen h-auto w-screen md:pl-24 lg:pl-40 text-black`}
      >
        <Header title="Report" />
        
      </div>
    </div>
  );
};

export default SnagList;
