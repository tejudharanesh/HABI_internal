import React, { useState } from "react";
import InputField from "../Vendors/InputField";
import upload from "../../assets/images/upload.png";

function DelayReport() {
  const [formData, setFormData] = useState({
    title: "",
    reason: "",
    clientId: "",
    days: "",
    files: [],
    videos: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file changes for both files and videos
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: Array.from(files) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the form data including files and videos
    console.log("Form data submitted: ", formData);

    // Example of processing the files
    formData.files.forEach((file, index) => {
      console.log(`File ${index + 1}:`, file.name);
    });

    formData.videos.forEach((video, index) => {
      console.log(`Video ${index + 1}:`, video.name);
    });

    setFormData({
      title: "",
      reason: "",
      clientId: "",
      days: "",
      files: [],
      videos: [],
    });
  };

  // Sample client IDs for the dropdown
  const clientOptions = [
    { id: "1272829", name: "Charan Project" },
    { id: "1272830", name: "Teju Project" },
    { id: "1272831", name: "Darshan Project" },
  ];

  return (
    <form
      className="bg-layoutColor px-2 rounded-lg w-full max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      <p className="text-black font-semibold mb-3">Delay Report</p>

      {/* Title Input */}
      <InputField
        label="Title*"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
      />

      {/* Reason Input */}
      <InputField
        label="Reason*"
        name="reason"
        value={formData.reason}
        onChange={handleInputChange}
      />

      {/* Client ID Dropdown and Days Input */}
      <div className="grid grid-cols-2 gap-4">
        {/* Client ID Dropdown */}
        <div className="relative mb-4 lg:mb-6">
          <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
            Client ID*
          </label>
          <select
            name="clientId"
            value={formData.clientId}
            onChange={handleInputChange}
            className="text-black block w-full px-3 py-2.5 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
          >
            <option value="">Select Client ID</option>
            {clientOptions.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name}
              </option>
            ))}
          </select>
        </div>

        {/* Days Input */}
        <InputField
          label="Days*"
          name="days"
          value={formData.days}
          onChange={handleInputChange}
        />
      </div>

      {/* Files Upload */}
      <div className="relative mb-4 lg:mb-6">
        <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
          Files
        </label>
        <div className="h-20 border border-dashed border-gray-300 p-4 rounded-xl flex flex-col items-center justify-center text-center bg-layoutColor text-white">
          <img src={upload} alt="Upload" />
          <p className="text-sm text-gray-400">JPG, PNG, PDF • Up to 10Mb</p>
          <input
            type="file"
            name="files"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleFileChange}
            multiple // Allow multiple file uploads
          />
        </div>
      </div>

      {/* Videos Upload */}
      <div className="relative mb-4 lg:mb-6">
        <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
          Videos
        </label>
        <div className="h-20 border border-dashed border-gray-300 p-4 rounded-xl flex flex-col items-center justify-center text-center bg-layoutColor text-white">
          <img src={upload} alt="Upload" />
          <p className="text-sm text-gray-400">MP4, MKV, AVI • Up to 10Mb</p>
          <input
            type="file"
            name="videos"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleFileChange}
            multiple // Allow multiple video uploads
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-gray-300 text-white px-4 py-2 w-full rounded-lg hover:bg-gray-600 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
}

export default DelayReport;
