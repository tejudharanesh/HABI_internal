import React, { useState } from "react";
import Header from "../header/Header";

const AddVendors = () => {
  // States for form fields
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [serviceableCity, setServiceableCity] = useState("");
  const [serviceDays, setServiceDays] = useState([]);
  const [time, setTime] = useState("");

  const [bankName, setBankName] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [confirmAccountNumber, setConfirmAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [upiId, setUpiId] = useState("");

  const [materials, setMaterials] = useState([]);
  const [materialName, setMaterialName] = useState("");
  const [materialPrice, setMaterialPrice] = useState("");
  const [materialDescription, setMaterialDescription] = useState("");

  const addMaterial = () => {
    const newMaterial = {
      name: materialName,
      price: materialPrice,
      description: materialDescription,
    };
    setMaterials([...materials, newMaterial]);
    // Clear material fields
    setMaterialName("");
    setMaterialPrice("");
    setMaterialDescription("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-layoutColor font-poppins">
      <div
        className={`flex flex-col bg-layoutColor pl-2 md:px-2 h-auto w-screen md:pl-24 lg:pl-40`}
      >
        <Header />
        <div className="p-4 text-black">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left side form */}
            <div>
              <div className="p-6 rounded-lg">
                <div className="relative mb-4 lg:mb-6">
                  <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
                    placeholder="Enter Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>

                <div className="relative mb-4 lg:mb-6">
                  <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
                    placeholder="Enter Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <div className="relative mb-4 lg:mb-6">
                  <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="relative mb-4 lg:mb-6">
                  <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
                    Address
                  </label>
                  <textarea
                    className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
                    placeholder="Enter Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative mb-4 lg:mb-6">
                    <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
                      GST Number
                    </label>
                    <input
                      type="text"
                      className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
                      placeholder="Enter GST Number"
                      value={gstNumber}
                      onChange={(e) => setGstNumber(e.target.value)}
                    />
                  </div>
                  <div className="relative mb-4 lg:mb-6">
                    <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
                      Serviceable City
                    </label>
                    <input
                      type="text"
                      className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
                      placeholder="Enter Serviceable City"
                      value={serviceableCity}
                      onChange={(e) => setServiceableCity(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium">
                    Service Days
                  </label>
                  <div className="flex space-x-2">
                    {["S", "M", "T", "W", "Th", "F", "Sa"].map((day, index) => (
                      <button
                        key={index}
                        className={`bg-gray-200 hover:bg-blue-500 text-black hover:text-white px-3 py-1 rounded-lg ${
                          serviceDays.includes(day)
                            ? "bg-blue-500 text-white"
                            : ""
                        }`}
                        onClick={() =>
                          setServiceDays((prev) =>
                            prev.includes(day)
                              ? prev.filter((d) => d !== day)
                              : [...prev, day]
                          )
                        }
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="relative mb-4 lg:mb-6">
                  <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
                    Time
                  </label>
                  <input
                    type="time"
                    className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div>
              <div className="p-6 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Account Details</h2>

                <div className="relative mb-4 lg:mb-6">
                  <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
                    placeholder="Enter Bank Name"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>

                <div className="relative mb-4 lg:mb-6">
                  <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
                    Account Holder Name
                  </label>
                  <input
                    type="text"
                    className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
                    placeholder="Enter Account Holder Name"
                    value={accountHolderName}
                    onChange={(e) => setAccountHolderName(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative mb-4 lg:mb-6">
                    <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
                      Account Number
                    </label>
                    <input
                      type="text"
                      className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
                      placeholder="Enter Account Number"
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                    />
                  </div>
                  <div className="relative mb-4 lg:mb-6">
                    <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
                      Confirm Account Number
                    </label>
                    <input
                      type="text"
                      className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
                      placeholder="Confirm Account Number"
                      value={confirmAccountNumber}
                      onChange={(e) => setConfirmAccountNumber(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative mb-4 lg:mb-6">
                    <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
                      IFSC Code
                    </label>
                    <input
                      type="text"
                      className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
                      placeholder="Enter IFSC Code"
                      value={ifscCode}
                      onChange={(e) => setIfscCode(e.target.value)}
                    />
                  </div>
                  <div className="relative mb-4 lg:mb-6">
                    <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
                      UPI ID
                    </label>
                    <input
                      type="text"
                      className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
                      placeholder="Enter UPI ID"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                    />
                  </div>
                </div>

                {/* Material Section */}
                <div className="bg-white p-6 mt-4 rounded-lg shadow-md">
                  <h2 className="text-lg font-semibold mb-4">Add Material</h2>

                  <div className="relative mb-4 lg:mb-6">
                    <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
                      Product Name
                    </label>
                    <input
                      type="text"
                      className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
                      placeholder="Enter Product Name"
                      value={materialName}
                      onChange={(e) => setMaterialName(e.target.value)}
                    />
                  </div>

                  <div className="relative mb-4 lg:mb-6">
                    <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
                      Price
                    </label>
                    <input
                      type="text"
                      className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
                      placeholder="Enter Price"
                      value={materialPrice}
                      onChange={(e) => setMaterialPrice(e.target.value)}
                    />
                  </div>

                  <div className="relative mb-4 lg:mb-6">
                    <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
                      Description
                    </label>
                    <textarea
                      className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
                      placeholder="Enter Description"
                      value={materialDescription}
                      onChange={(e) => setMaterialDescription(e.target.value)}
                    />
                  </div>

                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    onClick={addMaterial}
                  >
                    Add Material
                  </button>

                  {/* Material List */}
                  <div className="mt-4">
                    <h3 className="text-md font-semibold">Materials</h3>
                    {materials.length === 0 ? (
                      <p>No materials added yet.</p>
                    ) : (
                      <ul>
                        {materials.map((material, index) => (
                          <li
                            key={index}
                            className="p-2 border border-gray-300 rounded-lg my-2"
                          >
                            {material.name} - ₹{material.price}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVendors;
