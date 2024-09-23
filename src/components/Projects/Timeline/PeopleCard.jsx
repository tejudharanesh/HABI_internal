import React from "react";

function PeopleCard({ desgn, name }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-gray-400">{desgn}</p>
        <p className="text-black">{name}</p>
      </div>
      <div>
        <button className="bg-primaryO text-primary border-1 border-primary py-1 px-2 mr-2">
          Chat
        </button>
        <button className="bg-red-50 text-red-400 border-1 border-red-400 py-1 px-2">
          Remove
        </button>
      </div>
    </div>
  );
}

export default PeopleCard;
