import React from "react";
import close from "../../../assets/svg/close1.svg";

function AddProject({ closeDrawer }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-5 bg-secondary1 px-8 py-4">
        <h2 className="text-xl font-semibold text-black">Add Project</h2>
        <img
          src={close}
          alt="Close"
          onClick={closeDrawer}
          className="cursor-pointer"
        />
      </div>
      <div className="px-5">
        <p className="text-gray-400">Personal Details</p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {/* Status */}
          <div className="relative mb-7">
            <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-gray-400">
              Status
            </label>
            <input
              type="text"
              className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div className="relative mb-7">
            <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-gray-400">
              Status
            </label>
            <input
              type="text"
              className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {/* Status */}
          <div className="relative mb-7">
            <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-gray-400">
              Status
            </label>
            <input
              type="text"
              className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div className="relative mb-7">
            <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-gray-400">
              Status
            </label>
            <input
              type="text"
              className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
        </div>
        <div className="relative mb-7">
          <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-gray-400">
            Status
          </label>
          <input
            type="text"
            className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <p className="text-gray-400">Project Details</p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {/* Status */}
          <div className="relative mb-7">
            <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-gray-400">
              Status
            </label>
            <input
              type="text"
              className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div className="relative mb-7">
            <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-gray-400">
              Status
            </label>
            <input
              type="text"
              className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {/* Status */}
          <div className="relative mb-7">
            <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-gray-400">
              Status
            </label>
            <input
              type="text"
              className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div className="relative mb-7">
            <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-gray-400">
              Status
            </label>
            <input
              type="text"
              className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
        </div>
        <div className="relative mb-7">
          <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-gray-400">
            Status
          </label>
          <input
            type="text"
            className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <div className="relative mb-7">
          <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-gray-400">
            Status
          </label>
          <input
            type="text"
            className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <p className="text-gray-400">Project Assign</p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {/* Status */}
          <div className="relative mb-7">
            <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-gray-400">
              Status
            </label>
            <input
              type="text"
              className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div className="relative mb-7">
            <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-gray-400">
              Status
            </label>
            <input
              type="text"
              className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProject;
