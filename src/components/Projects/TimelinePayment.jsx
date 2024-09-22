import React from "react";

function TimelinePayment() {
  return (
    <div>
      <button className="bg-layoutColor border-1 border-gray-300 text-black font-semibold w-full text-start relative p-2.5 mb-3">
        <span>TimeLine</span>
        <span className="absolute right-5">1</span>
      </button>
      <button className="bg-layoutColor border-1 border-gray-300 text-black font-semibold w-full text-start relative p-2.5">
        <span>Payment</span>
        <span className="absolute right-5">1</span>
      </button>
    </div>
  );
}

export default TimelinePayment;
