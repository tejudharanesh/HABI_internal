import React, { useState, useEffect } from "react";
import close from "../../assets/svg/close1.svg";
import upload from "../../assets/images/upload.png";

function TaskDetails({ closeDrawer, task }) {
  const [attachedFiles, setAttachedFiles] = useState([]);

  // Handle file upload
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setAttachedFiles(files);
  };

  return (
    <div className="">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 bg-secondary1 px-8 py-4">
        <h2 className="text-xl font-medium text-black">Task Details</h2>
        <img
          src={close}
          alt="Close"
          onClick={closeDrawer}
          className="cursor-pointer"
        />
      </div>

      {/* Task Content */}
      <div className="px-8">
        {/* Task Details */}
        <div className="space-y-4 text-gray-600 mb-4">
          <div className="flex relative">
            <span className="text-gray-400">Title</span>
            <span className="absolute left-32 text-black font-medium">
              {task.title}
            </span>
            <span className="text-gray-400 absolute right-2">Priority</span>
          </div>
          <div className="flex relative">
            <span className="text-gray-400">Project </span>
            <span className="absolute left-32 text-black font-medium">
              {task.project}
            </span>
            <span
              className={`px-2 py-1 text-[10px] rounded-lg absolute right-4 -top-2 ${
                task.priority === "High Priority"
                  ? "bg-secondary1 text-secondary"
                  : "bg-primaryO text-primary"
              }`}
            >
              {task.priority === "High Priority" ? "High" : "Low"}
            </span>
          </div>
          <div className="flex relative">
            <span className="text-gray-400">Client ID</span>
            <span className="bg-background py-1 px-2 rounded-lg text-black font-medium absolute left-32 -top-1">
              {task.clientId}
            </span>
          </div>
          <div className="flex relative">
            <span className="text-gray-400">Category</span>
            <span className="bg-background py-1 px-2 rounded-lg text-black font-medium absolute left-32 -top-1">
              {task.projectId}
            </span>
          </div>
          {task.dueDate && (
            <div className="flex relative">
              <span className="text-gray-400">Due Date</span>
              <span className="bg-gray-100 py-1 rounded-lg text-black font-medium absolute left-32">
                {task.dueDate}
              </span>
            </div>
          )}
        </div>

        {/* Description */}
        {task.description && (
          <div className="my-2">
            <table>
              <tr>
                <td className="text-gray-400 w-32 align-top">Description</td>
                <td className="text-black">{task.description}</td>
              </tr>
            </table>
          </div>
        )}

        {/* Attachments */}
        {task.attachments && task.attachments.length > 0 && (
          <div className="flex relative">
            <h3 className="text-gray-400">Attachment</h3>
            <div className="grid grid-cols-4 space-x-3 absolute left-32">
              <div className="w-20 h-20 border-2 border-dotted p-2">
                <img src="https://via.placeholder.com/100" alt="Attachment" />
              </div>
            </div>
          </div>
        )}

        {/* Members */}
        {task.team && task.team.length > 0 && (
          <div className="mt-20 flex relative ">
            <h3 className="text-gray-400">Members</h3>
            <div className="grid grid-cols-2 absolute left-32 w-2/3">
              {task.team.map((member, idx) => (
                <div key={idx} className="grid grid-cols-2 relative my-1">
                  <img src={member.avatar} alt="D" className="rounded-full" />
                  <div className="grid grid-cols-1 absolute left-12 top-1">
                    <span className="text-sm text-gray-600">{member.name}</span>
                    <span className="text-xs text-gray-400">
                      {member.desgn}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <hr className="mt-16" />

        {/* Attach Files */}
        <div className="relative mb-4 lg:mb-6 mt-8">
          <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
            Attach Files
          </label>
          <div className="h-28 border border-dashed border-gray-300 p-4 rounded-xl flex flex-col items-center justify-center text-center bg-layoutColor text-white">
            <img src={upload} alt="Upload" />
            <p className="text-sm text-gray-400">JPG, PNG, PDF • Up to 10Mb</p>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
        </div>

        {/* Display Uploaded Files */}
        {attachedFiles.length > 0 && (
          <div className="mb-4">
            <div className="grid grid-cols-5 mt-2">
              {attachedFiles.map((file, index) => (
                <div
                  key={index}
                  className="w-14 h-14 border-2 border-1 rounded-lg p-2"
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`attachment-${index}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Start Button */}
        <div className="mt-8 flex justify-end">
          <button className="bg-primary text-white px-6 py-2 rounded-lg w-32">
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
