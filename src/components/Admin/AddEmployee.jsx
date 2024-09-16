import React, { useState } from "react";
import close from "../../assets/svg/close1.svg";
import upload from "../../assets/images/upload.png";

const AddEmployee = ({ closeDrawer }) => {
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
        <h2 className="text-xl font-semibold text-black">Add Employee</h2>
        <img src={close} alt="" onClick={closeDrawer} />
      </div>
      <form onSubmit={handleSubmit} className="px-4">
        {/* Name */}
        <div className="relative mb-6">
          <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
            Name*
          </label>
          <input
            type="text"
            className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
            placeholder="Write a task name"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="relative mb-6">
          <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
            Email*
          </label>
          <input
            type="email"
            className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
            placeholder="What is this task about?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Employee ID */}
        <div className="relative mb-6">
          <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
            Employee ID*
          </label>
          <input
            type="text"
            className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
            placeholder="Add members"
            value={members}
            onChange={(e) => setMembers(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="relative mb-6">
          <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
            Password*
          </label>
          <input
            type="text"
            className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
            placeholder="Add members"
            value={members}
            onChange={(e) => setMembers(e.target.value)}
          />
        </div>

        {/* Priority */}
        <div className="text-center w-full md:text-end">
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-primary text-white px-6 rounded-lg w-full md:w-28"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
