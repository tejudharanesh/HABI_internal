import React, { useState } from "react";
import close from "../../assets/svg/close1.svg";
import upload from "../../assets/images/upload.png";
import profile from "../../assets/images/profile.png";

const InputField = ({ label, value, onChange, type = "text", placeholder }) => (
  <div className="relative mb-4 lg:mb-6">
    <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    ) : (
      <input
        type={type}
        className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          colorScheme: "light", // Makes the calendar icon and text dark themed
        }}
      />
    )}
  </div>
);

const DropdownField = ({ label, options, value, onChange }) => (
  <div className="relative mb-4 lg:mb-6">
    <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
      {label}
    </label>
    <select
      className="text-black block w-full px-3 py-2.5 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
      value={value}
      onChange={onChange}
    >
      <option value="">Select {label}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const AssignTask = ({ closeDrawer, addNewTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [members, setMembers] = useState("");
  const [dueDate, setStartDate] = useState("");
  const [type, setType] = useState("");
  const [priority, setPriority] = useState("");
  const [attachedFiles, setAttachedFiles] = useState([]); // State for managing file uploads

  const membersOptions = ["Member 1", "Member 2", "Member 3"];
  const typeOptions = ["Bug", "Feature", "Improvement"];

  // Handle file upload
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setAttachedFiles(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new task object
    const newTask = {
      title: taskTitle,
      description,
      members: members.split(",").map((name) => ({ name })),
      dueDate,
      project: "",
      projectId: "",
      clientId: "",
      category: type,
      priority,
      attachments: attachedFiles,
      status: "Pending",
      team: [
        { name: "Darshan", desgn: "architect", avatar: profile },
        { name: "Teju", desgn: "Developer", avatar: profile },
      ],
    };

    addNewTask(newTask); // Pass the new task to parent component
    closeDrawer(); // Close drawer after submission
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8 bg-secondary1 px-8 py-3">
        <h2 className="font-semibold text-black">Assign Task</h2>
        <img
          src={close}
          alt="close"
          onClick={closeDrawer}
          className="cursor-pointer"
        />
      </div>
      <form onSubmit={handleSubmit} className="px-4">
        <InputField
          label="Task Title*"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Write a task name"
        />
        <InputField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="What is this task about?"
          type="textarea"
        />
        <DropdownField
          label="Members*"
          options={membersOptions}
          value={members}
          onChange={(e) => setMembers(e.target.value)}
        />
        <div className="flex space-x-4">
          <InputField
            label="Due Date*"
            value={dueDate}
            onChange={(e) => setStartDate(e.target.value)}
            type="date"
          />
          <DropdownField
            label="Type"
            options={typeOptions}
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>

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
              onChange={handleFileChange}
              multiple // Allow multiple file uploads
            />
          </div>
        </div>

        {/* Priority */}
        <p className="text-black ml-2 mb-4 lg:mb-6">Priority</p>
        <div className="grid grid-cols-1 space-y-3 md:space-y-0 md:grid-cols-2 justify-between">
          <div>
            <button
              type="button"
              className={`bg-layoutColor border-1 border-gray-400 text-black mr-2 ${
                priority === "High" ? "bg-primary text-white" : ""
              }`}
              onClick={() => setPriority("High")}
            >
              High
            </button>
            <button
              type="button"
              className={`bg-layoutColor border-1 border-gray-400 text-black ${
                priority === "Low" ? "bg-primary text-white" : ""
              }`}
              onClick={() => setPriority("Low")}
            >
              Low
            </button>
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
