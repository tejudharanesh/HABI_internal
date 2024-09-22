import React from "react";

function PersonalInformation() {
  return (
    <div className="mb-4">
      <p className="text-black font-semibold">Personal Information</p>

      <form className="mt-4 space-y-7 w-full px-4 md:px-0 mb-3">
        {[
          { label: "Name", placeholder: "Teju" },
          { label: "ClientId", placeholder: "fln3454" },

          { label: "Phone Number", placeholder: "+91 8431497190" },
          { label: "Email ID", placeholder: "teju@gmail.com" },
          {
            label: "Current Address",
            placeholder:
              "43, Second Floor, Leela Palace Rd, behind The Leela Palace, HAL 2nd Stage, Kodihalli, Bengaluru, Karnataka 560008",
            type: "textarea",
          },
        ].map(({ label, placeholder, type = "text" }, i) => (
          <div key={i} className="relative mb-5">
            <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-gray-400">
              {label}
            </label>
            {type === "text" ? (
              <input
                type={type}
                placeholder={placeholder}
                value={placeholder}
                className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
              />
            ) : (
              <textarea
                rows={3}
                placeholder={placeholder}
                value={placeholder}
                className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
              />
            )}
          </div>
        ))}
      </form>
    </div>
  );
}

export default PersonalInformation;
