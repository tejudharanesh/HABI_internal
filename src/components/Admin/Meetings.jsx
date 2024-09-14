import React from "react";

function Meetings({ meetings }) {
  return (
    <div className="p-4 bg-layoutColor ">
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
            className="items-center p-2 border mb-2 rounded-lg"
          >
            <div className="flex items-center justify-between">
              <p className="text-black">{meeting.project}</p>
              <p className="text-sm text-black">{meeting.date}</p>
              <p className="text-sm text-black">{meeting.time}</p>
            </div>
            <span className="text-sm text-black">
              PROJECT ID :{meeting.projectId}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Meetings;
