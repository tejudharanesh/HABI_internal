import React from "react";
import Header from "../../components/header/Header";
import gmeet from "../../assets/svg/gmeet.svg";
import link from "../../assets/svg/link.svg";

const meetingsData = [
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
    type: "client",
  },
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
  {
    name: "Charan Project",
    id: "CHA2024",
    date: "1 Sept 2024",
    time: "11:00 am",
    type: "lead",
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
  const clientMeetings = meetingsData.filter(
    (meeting) => meeting.type === "client"
  );
  const leadMeetings = meetingsData.filter(
    (meeting) => meeting.type === "lead"
  );

  const renderMeetingTableRow = (meeting, index) => (
    <div className="grid grid-cols-5 mx-4 mr-10" key={index}>
      <p className="py-2 text-black">{meeting.name}</p>
      <p className="py-2 text-black">{meeting.id}</p>
      <p className="py-2 text-black">{meeting.date}</p>
      <p className="py-2 text-black">{meeting.time}</p>
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
    </div>
  );

  const renderMeetingCard = (meeting, index) => (
    <div
      key={index}
      className="border bg-layoutColor rounded-lg p-4 mb-4 flex flex-col gap-2"
    >
      <div className="flex justify-between">
        <span className="font-semibold text-black">Name:</span>
        <span className="text-black">{meeting.name}</span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold text-black">Client ID:</span>
        <span className="text-black">{meeting.id}</span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold text-black">Date:</span>
        <span className="text-black">{meeting.date}</span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold text-black">Time:</span>
        <span className="text-black">{meeting.time}</span>
      </div>
      <div className="flex justify-between items-center text-black">
        <span className="font-semibold">Link:</span>
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
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center bg-layoutColor font-poppins">
      <div
        className={`flex flex-col bg-layoutColor pl-2 md:px-2 h-auto w-screen md:pl-24 lg:pl-40`}
      >
        <Header />
        <div className="p-6 lg:mx-14 xl:mx-32">
          {/* Client Meeting Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-600">
                Client Meeting
              </h2>
              <button className="bg-primaryO text-primary px-3 py-1.5 rounded-lg border-1 border-primary text-sm">
                + Create
              </button>
            </div>

            {/* Large Screen: Table Layout */}
            <div className="hidden md:block">
              <div className="grid grid-cols-5 bg-secondary1 px-4">
                <p className="py-2 text-black">Name</p>
                <p className="py-2 text-black">Lead ID</p>
                <p className="py-2 text-black">Date</p>
                <p className="py-2 text-black">Time</p>
                <p className="py-2 text-black">Link</p>
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
              <div className="grid grid-cols-5 bg-secondary1 px-4 ">
                <p className="py-2 text-black">Name</p>
                <p className="py-2 text-black">Lead ID</p>
                <p className="py-2 text-black">Date</p>
                <p className="py-2 text-black">Time</p>
                <p className="py-2 text-black">Link</p>
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
      </div>
    </div>
  );
};

export default Meeting;
