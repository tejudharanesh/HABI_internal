import React, { useState } from "react";
import close from "../../assets/svg/close1.svg";

const members = ["John Doe", "Jane Smith", "Emily Johnson", "Michael Brown"]; // Example members list

const NewMeeting = ({ onClose, onAddMeeting }) => {
  // States for form inputs
  const [selectedMember, setSelectedMember] = useState(""); // Selected member from the dropdown
  const [meetingLink, setMeetingLink] = useState(""); // Meeting link
  const [meetingDate, setMeetingDate] = useState(""); // Meeting date
  const [meetingTime, setMeetingTime] = useState(""); // Meeting time

  const [accessOptions, setAccessOptions] = useState({
    admin: false,
    architect: false,
    sales: false,
    siteSupervisor: false,
  });
  const handleInputChange = (e) => {
    const { name, checked } = e.target;
    setAccessOptions((prev) => ({ ...prev, [name]: checked }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!selectedMember || !meetingLink || !meetingDate || !meetingTime) {
      alert("Please fill in all the fields");
      return;
    }

    // You can handle the form submission here (e.g., send data to an API)
    const meetingData = {
      name: selectedMember,
      link: meetingLink,
      date: meetingDate,
      time: meetingTime,
      id: "CHA2024",
      type: "lead",
      accessOptions,
    };

    console.log("New Meeting Data: ", meetingData);

    // Close the modal after submission (You can modify this as needed)
    onAddMeeting(meetingData);
  };
  const accessData = [
    { name: "admin", label: "Admin" },
    { name: "architect", label: "Architect" },
    { name: "sales", label: "Sales" },
    { name: "siteSupervisor", label: "Site Supervisor" },
  ];
  const renderCheckbox = ({ name, label }) => (
    <label className="flex items-center space-x-2 my-1">
      <input
        type="checkbox"
        name={name}
        checked={accessOptions[name]}
        onChange={handleInputChange}
        className="h-4 w-4 text-primary bg-layoutColor border-gray-300 border-2 rounded focus:ring-primary appearance-none checked:appearance-auto checked:bg-layoutColor checked:border-black checked:text-black"
      />
      <span className="text-black text-sm">{label}</span>
    </label>
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="bg-white rounded-xl p-6 max-w-md relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 bg-white"
          onClick={onClose}
        >
          <img src={close} alt="Close" />
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-8 text-center text-black">
          Create New Meeting
        </h2>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Member Selection (Dropdown) */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-black">Add Employees</h3>
              {renderCheckbox(accessData[0])}
              {renderCheckbox(accessData[1])}
              {renderCheckbox(accessData[2])}
              {renderCheckbox(accessData[3])}
            </div>
          </div>

          <div className="relative">
            <label className="absolute -top-2.5 left-3 bg-white px-2 text-sm text-black">
              Select Client/Lead
            </label>
            <select
              value={selectedMember}
              onChange={(e) => setSelectedMember(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-xl bg-white text-black focus:outline-none"
              required
            >
              <option value="" disabled></option>
              {members.map((member, index) => (
                <option key={index} value={member}>
                  {member}
                </option>
              ))}
            </select>
          </div>

          {/* Meeting Link */}
          <div className="relative">
            <label className="absolute -top-2.5 left-3 bg-white px-2 text-sm text-black">
              Meeting Link
            </label>
            <input
              type="text"
              value={meetingLink}
              onChange={(e) => setMeetingLink(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-xl bg-white focus:outline-none text-black"
              placeholder="Paste meeting link here"
              required
            />
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <label className="absolute -top-2.5 left-3 bg-white px-2 text-sm text-black">
                Date
              </label>
              <input
                type="date"
                value={meetingDate}
                onChange={(e) => setMeetingDate(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded-md bg-white text-black"
                style={{ colorScheme: "light" }} // Ensures dark text/icons
                required
              />
            </div>
            <div className="relative">
              <label className="absolute -top-2.5 left-3 bg-white px-2 text-sm text-black">
                Time
              </label>
              <input
                type="time"
                value={meetingTime}
                onChange={(e) => setMeetingTime(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded-md bg-white text-black"
                style={{ colorScheme: "light" }} // Ensures dark text/icons
                required
              />
            </div>
          </div>

          {/* Create Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewMeeting;
