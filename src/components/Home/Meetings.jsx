import React from "react";
import link from "../../assets/svg/link.svg";
import gmeet from "../../assets/svg/gmeet.svg";

function Meetings({ meetings }) {
  return (
    <div className="bg-layoutColor">
      <div className="flex justify-between items-center mx-2">
        <h3 className="font-semibold text-black">My Meeting</h3>
        <a href="#" className="text-sm text-primary">
          see all meetings
        </a>
      </div>
      <ul className="mt-3">
        {meetings.map((meeting, idx) => (
          <li key={idx} className="items-center p-2 border-2 mb-2 rounded-lg">
            <div className="flex items-center justify-between">
              <p className="text-black font-semibold text-sm">
                {meeting.project}
              </p>
              <p className="text-xs text-black">{meeting.date}</p>
              <p className="text-xs text-black">{meeting.time}</p>
              <img src={link} alt="Link" />
            </div>
            <span className="text-xs text-black inline-block mr-4">
              PROJECT ID:{meeting.projectId}
            </span>
            <span className="inline-block">
              <img src={gmeet} alt="" className="inline mr-1" />
              <span className="text-black text-xs">Meet</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Meetings;
