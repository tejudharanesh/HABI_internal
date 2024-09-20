import React from "react";
import Header from "../../components/header/Header";

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
    <tr key={index} className="bg-white border-b">
      <td className="px-4 py-2">{meeting.name}</td>
      <td className="px-4 py-2">{meeting.id}</td>
      <td className="px-4 py-2">{meeting.date}</td>
      <td className="px-4 py-2">{meeting.time}</td>
      <td className="px-4 py-2">
        <a href="#" className="text-blue-500 flex items-center space-x-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Google_Meet_icon_%282020%29.svg"
            alt="Meet Icon"
            className="w-4 h-4"
          />
          <span>Meet</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </td>
    </tr>
  );

  const renderMeetingCard = (meeting, index) => (
    <div
      key={index}
      className="border bg-white shadow-md rounded-lg p-4 mb-4 flex flex-col gap-2"
    >
      <div className="flex justify-between">
        <span className="font-semibold">Name:</span>
        <span className="text-gray-600">{meeting.name}</span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold">Client ID:</span>
        <span className="text-gray-600">{meeting.id}</span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold">Date:</span>
        <span className="text-gray-600">{meeting.date}</span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold">Time:</span>
        <span className="text-gray-600">{meeting.time}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold">Link:</span>
        <a
          href="#"
          className="text-blue-500 flex items-center space-x-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Google_Meet_icon_%282020%29.svg"
            alt="Meet Icon"
            className="w-4 h-4"
          />
          <span>Meet</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
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
        <div className="p-6">
          {/* Client Meeting Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-600">
                Client Meeting
              </h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
                + Create
              </button>
            </div>

            {/* Large Screen: Table Layout */}
            <div className="hidden lg:block">
              <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Client ID</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Time</th>
                    <th className="px-4 py-2">Link</th>
                  </tr>
                </thead>
                <tbody>{clientMeetings.map(renderMeetingTableRow)}</tbody>
              </table>
            </div>

            {/* Small Screen: Card Layout */}
            <div className="lg:hidden">
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
            <div className="hidden lg:block">
              <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Lead ID</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Time</th>
                    <th className="px-4 py-2">Link</th>
                  </tr>
                </thead>
                <tbody>{leadMeetings.map(renderMeetingTableRow)}</tbody>
              </table>
            </div>

            {/* Small Screen: Card Layout */}
            <div className="lg:hidden">
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
