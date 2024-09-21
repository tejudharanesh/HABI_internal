const NewMeeting = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={onClose}
        >
          &times; {/* Close button */}
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">
          Create New Meeting
        </h2>

        <div className="space-y-4">
          {/* Member Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Select a Member
            </label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
              <option>Select a member</option>
              <option>Member 1</option>
              <option>Member 2</option>
              {/* Add more options here */}
            </select>
          </div>

          {/* Meeting Link */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Meeting Link
            </label>
            <input
              type="text"
              placeholder="Paste meeting link here"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Time
              </label>
              <input
                type="time"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          {/* Create Button */}
          <button
            className="w-full bg-primaryO text-white py-2 rounded-lg"
            onClick={onClose} // Close the modal on create for now (you can add submit functionality later)
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewMeeting;
