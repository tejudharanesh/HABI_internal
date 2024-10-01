import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import gmeet from "../../assets/svg/gmeet.svg";
import link from "../../assets/svg/link.svg";
import option from "../../assets/images/option.png";
import NewMeeting from "../../components/Meeting/NewMeeting";

const initialMeetingsData = [
  {
    name: "Charan Project",
    id: "CHA2024",
    date: "1 Sept 2024",
    time: "11:00 am",
    type: "client",
  },

  {
    name: "Charan Project",
    id: "CHA2024",
    date: "1 Sept 2024",
    time: "11:00 am",
    type: "lead",
  },
  // Add more entries as needed
];

const Meeting = () => {
  const [meetingsData, setMeetingsData] = useState(initialMeetingsData); // Use state for meetings data

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal visibility
  };

  const addNewMeeting = (newMeetingData) => {
    setMeetingsData((prevData) => [...prevData, newMeetingData]);
    console.log(meetingsData);

    setIsModalOpen(false); // Close the modal after submission
  };
  const clientMeetings = meetingsData.filter(
    (meeting) => meeting.type == "client"
  );
  const leadMeetings = meetingsData.filter((meeting) => meeting.type == "lead");

  const renderMeetingTableRow = (meeting, index) => (
    <div className="grid grid-cols-5 mx-4 mr-10 space-y-4 relative" key={index}>
      <p className="pt-4 text-black">{meeting.name}</p>
      <p className="p-1 text-black bg-background w-fit ml-2 rounded-lg">
        {meeting.id}
      </p>
      <p className="p-1 text-black">{meeting.date}</p>
      <p className="p-1 text-black">{meeting.time}</p>
      <a
        href="#"
        className="text-black flex items-center space-x-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={gmeet} alt="Meet Icon" className="w-4 h-4" />
        <span>Meet</span>
        <img src={link} alt="->" />
      </a>
      <img
        src={option}
        alt="more"
        className="absolute right-0 top-1 cursor-pointer"
      />
    </div>
  );

  const renderMeetingCard = (meeting, index) => (
    <div
      key={index}
      className="border bg-layoutColor rounded-lg px-4 py-2 mb-4 grid grid-cols"
    >
      <div className="flex relative">
        <span className="font-semibold text-black py-1">Name </span>
        <span className="text-black py-1 absolute left-[30%] ">
          {meeting.name}
        </span>
        <img
          src={option}
          alt=""
          className="h-5 cursor-pointer absolute right-2 top-2"
        />
      </div>
      <div className="flex  relative">
        <span className="font-semibold text-black py-1">Client ID </span>
        <span className="text-black bg-background py-1 px-2 mb-1 absolute left-[30%]">
          {meeting.id}
        </span>
        <span></span>
      </div>
      <div className="flex relative">
        <span className="font-semibold text-black py-1">Date </span>
        <span className="text-black py-1 absolute left-[30%]">
          {meeting.date}
        </span>
        <span></span>
      </div>
      <div className="flex relative">
        <span className="font-semibold text-black py-1">Time </span>
        <span className="text-black py-1 absolute left-[30%]">
          {meeting.time}
        </span>
        <span></span>
      </div>
      <div className="flex text-black relative">
        <span className="font-semibold py-1">Link </span>

        <a
          href="#"
          className="text-black flex items-center space-x-1 py-1 absolute left-[30%]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gmeet} alt="Meet Icon" className="w-4 h-4" />
          <span>Meet</span>
          <img src={link} alt="->" />
        </a>
        <span></span>
      </div>
    </div>
  );

  useEffect(() => {
    const body = document.body;
    if (isModalOpen) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }

    // Cleanup on component unmount
    return () => {
      body.classList.remove("no-scroll");
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-layoutColor font-poppins">
      <div
        className={`flex flex-col bg-layoutColor pl-2 md:px-2 h-auto w-screen md:pl-24 lg:pl-40`}
      >
        <Header title="Meeting" />
        <div className="p-2 md:p-6 lg:mx-14 xl:mx-40">
          {/* Client Meeting Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-600">
                Client Meeting
              </h2>
              <button
                className="bg-primaryO text-primary px-3 py-1.5 rounded-lg border-1 border-primary text-sm"
                onClick={toggleModal} // Open the modal on button click
              >
                + Create
              </button>
            </div>

            {/* Large Screen: Table Layout */}
            <div className="hidden md:block">
              <div className="grid grid-cols-5 bg-secondary1 px-4">
                <p className="py-2 pl-4 text-black font-semibold">Name</p>
                <p className="py-2 p-3 text-black font-semibold">Lead ID</p>
                <p className="py-2 text-black font-semibold">Date</p>
                <p className="py-2 text-black font-semibold">Time</p>
                <p className="py-2 text-black font-semibold">Link</p>
              </div>
              <div>{leadMeetings.map(renderMeetingTableRow)}</div>
            </div>

            {/* Small Screen: Card Layout */}
            <div className="md:hidden">
              {clientMeetings.map((meeting, index) =>
                renderMeetingCard(meeting, index)
              )}
            </div>
          </div>

          {/* Lead Meeting Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-600 mb-4">
              Lead Meeting
            </h2>

            {/* Large Screen: Table Layout */}
            <div className="hidden md:block">
              <div className="grid grid-cols-5 bg-secondary1 px-4">
                <p className="py-2 pl-4 text-black font-semibold">Name</p>
                <p className="py-2 p-3 text-black font-semibold">Lead ID</p>
                <p className="py-2 text-black font-semibold">Date</p>
                <p className="py-2 text-black font-semibold">Time</p>
                <p className="py-2 text-black font-semibold">Link</p>
              </div>
              <div>{leadMeetings.map(renderMeetingTableRow)}</div>
            </div>

            {/* Small Screen: Card Layout */}
            <div className="md:hidden">
              {leadMeetings.map((meeting, index) =>
                renderMeetingCard(meeting, index)
              )}
            </div>
          </div>
        </div>
        {isModalOpen && (
          <NewMeeting onClose={toggleModal} onAddMeeting={addNewMeeting} />
        )}
        {/* Render the modal if open */}
      </div>
    </div>
  );
};

export default Meeting;
