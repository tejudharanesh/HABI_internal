import React from "react";

function Meetings({ meetings }) {
  return (
    <div className="p-4 bg-white rounded shadow-sm">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-black">My Meeting</h3>
        <a href="#" className="text-sm text-blue-500">
          see all meetings
        </a>
      </div>
      <ul className="mt-4">
        {meetings.map((meeting, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center py-2 border-b"
          >
            <div>
              <p className="text-black">{meeting.project}</p>
              <p className="text-sm text-gray-500">{meeting.date}</p>
            </div>
            <span className="text-sm text-black">{meeting.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Meetings;
