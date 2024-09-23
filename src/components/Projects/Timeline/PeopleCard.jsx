import React from "react";

function PeopleCard({ desgn, name }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-gray-400">{desgn}</p>
        <p className="text-black">{name}</p>
      </div>
      <div>
        <button
          className="bg-primaryO text-primary border-1 border-primary py-1 px-2 mr-2"
          onClick={() => {
            const phoneNumber = "916366306244";
            const message =
              "Hello, I would like to chat with you about the project.";
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              message
            )}`;
            window.open(whatsappUrl, "_blank");
          }}
        >
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
