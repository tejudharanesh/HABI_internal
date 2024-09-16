import React, { useState } from "react";
import close from "../../assets/svg/close1.svg";
import upload from "../../assets/images/upload.png";

const AssignTask = ({ closeDrawer }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [members, setMembers] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [type, setType] = useState("");
  const [project, setProject] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    closeDrawer(); // Close the drawer after submission
  };

  return (
    <div className="">
      <div className="flex justify-between items-center mb-8 bg-secondary1 px-8 py-3">
        <h2 className="text-xl font-semibold text-black">Assign Task</h2>
        <img src={close} alt="" onClick={closeDrawer} />
      </div>
      <form onSubmit={handleSubmit} className="px-4">
        {/* Task Title */}
        <div className="relative mb-4 lg:mb-6">
          <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
            Task Title*
          </label>
          <input
            type="text"
            className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
            placeholder="Write a task name"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
        </div>

        {/* Description */}
        <div className="relative mb-4 lg:mb-6">
          <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
            Description
          </label>
          <textarea
            className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
            placeholder="What is this task about?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Members */}
        <div className="relative mb-4 lg:mb-6">
          <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
            Members*
          </label>
          <input
            type="text"
            className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
            placeholder="Add members"
            value={members}
            onChange={(e) => setMembers(e.target.value)}
          />
        </div>

        {/* Duration */}
        <div className="flex space-x-4">
          <div className="relative mb-4 lg:mb-6 flex-1">
            <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
              Days*
            </label>
            <input
              type="number"
              placeholder=""
              className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              style={{
                colorScheme: "light", // Makes the calendar icon and text dark themed
              }}
            />
          </div>
          <div className="relative mb-4 lg:mb-6">
            <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
              Type
            </label>
            <input
              type="text"
              className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
        </div>

        {/* Type */}

        {/* Attach Files */}
        <div className="relative mb-4 lg:mb-6">
          <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
            Attach Files
          </label>
          <div className="h-28 border border-dashed border-gray-300 p-4 rounded-xl flex flex-col items-center justify-center text-center bg-layoutColor text-white">
            <img src={upload} alt="Upload" />
            <p className="text-sm text-gray-400">JPG, PNG, PDF • Up to 10Mb</p>
            <input
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
        </div>

        {/* Priority */}
        <p className="text-black ml-2 mb-4 lg:mb-6">Priority</p>
        <div className="grid grid-cols-1 space-y-3 md:space-y-0 md:grid-cols-2 justify-between">
          <div className="">
            <div className="inline mr-4">
              <button
                type="button"
                className="bg-layoutColor border-1 border-gray-400 text-black"
                onClick={() => setPriority("Low")}
              >
                High
              </button>
            </div>
            <div className="inline">
              <button
                type="button"
                className="bg-layoutColor border-1 border-gray-400 text-black"
                onClick={() => setPriority("Low")}
              >
                Low
              </button>
            </div>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-primary text-white px-6 rounded-lg"
          >
            Assign
          </button>
        </div>
      </form>
    </div>
  );
};

export default AssignTask;
