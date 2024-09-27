import React, { useState, useRef } from "react";
import Header from "../header/Header";
import upload from "../../assets/svg/upload.svg";
import add from "../../assets/svg/add.svg";

const AddVendors = () => {
  const [CIN, setCIN] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCIN(file.name);
    }
  };

  const handleUploadClick = () => {
    // Trigger the file input click
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

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

  const [serviceableCities, setServiceableCities] = useState([]);
  const [newCity, setNewCity] = useState("");
  const [subPlaceInput, setSubPlaceInput] = useState({});

  const addCity = () => {
    if (newCity.trim() !== "") {
      setServiceableCities([
        ...serviceableCities,
        { city: newCity, subPlaces: [] },
      ]);
      setNewCity("");
    }
  };

  // Function to handle sub-place input change for a specific city
  const handleSubPlaceChange = (city, value) => {
    setSubPlaceInput({ ...subPlaceInput, [city]: value });
  };

  // Function to add a sub-place under a city
  const addSubPlace = (cityIndex) => {
    const city = serviceableCities[cityIndex];
    const subPlace = subPlaceInput[city.city];

    if (subPlace && subPlace.trim() !== "") {
      const updatedCities = [...serviceableCities];
      updatedCities[cityIndex].subPlaces.push(subPlace);
      setServiceableCities(updatedCities);
      setSubPlaceInput({ ...subPlaceInput, [city.city]: "" });
    }
  };

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
              <div className="p-3 pt-5 rounded-xl border-2">
                <div className="grid grid-cols-3 mb-4">
                  <div className="grid col-span-1 px-2">
                    <div className="border border-gray-300 w-full h-full bg-background rounded-lg"></div>
                  </div>
                  <div className="grid col-span-2">
                    <div className="relative mb-4 lg:mb-6">
                      <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </div>

                    <div className="relative">
                      <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="relative mb-4 lg:mb-6">
                  <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
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
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative mb-4 lg:mb-6">
                    <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
                      CIN Certificate
                    </label>
                    <div className="grid grid-cols-2">
                      <div className="border-2 border-r-0 rounded-lg rounded-r-none w-full px-3 py-2">
                        {CIN ? CIN : ""}
                      </div>
                      <div
                        className="border-2 border-dashed rounded-lg rounded-l-none w-full px-3 py-2 inline cursor-pointer bg-layoutColor text-center"
                        onClick={handleUploadClick}
                      >
                        <input
                          type="file"
                          className="hidden" // Hide the default input
                          ref={fileInputRef}
                          onChange={handleFileChange}
                        />
                        <img src={upload} alt="" className="inline mr-2 pb-1" />
                        Upload
                      </div>
                    </div>
                  </div>
                  <div className="relative mb-4 lg:mb-6">
                    <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
                      GST Certificate
                    </label>
                    <div className="grid grid-cols-2">
                      <div className="border-2 border-r-0 rounded-lg rounded-r-none w-full px-3 py-2">
                        {CIN ? CIN : ""}
                      </div>
                      <div
                        className="border-2 border-dashed rounded-lg rounded-l-none w-full px-3 py-2 inline cursor-pointer bg-layoutColor text-center"
                        onClick={handleUploadClick}
                      >
                        <input
                          type="file"
                          className="hidden" // Hide the default input
                          ref={fileInputRef}
                          onChange={handleFileChange}
                        />
                        <img src={upload} alt="" className="inline mr-2 pb-1" />
                        Upload
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative mb-4 lg:mb-6">
                    <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
                      GST Number
                    </label>
                    <input
                      type="text"
                      className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
                      value={gstNumber}
                      onChange={(e) => setGstNumber(e.target.value)}
                    />
                  </div>
                  <div className="relative mb-4 lg:mb-6">
                    <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
                      Product Brochure
                    </label>
                    <div className="grid grid-cols-2">
                      <div className="border-2 border-r-0 rounded-lg rounded-r-none w-full px-3 py-2">
                        {CIN ? CIN : ""}
                      </div>
                      <div
                        className="border-2 border-dashed rounded-lg rounded-l-none w-full px-3 py-2 inline cursor-pointer bg-layoutColor text-center"
                        onClick={handleUploadClick}
                      >
                        <input
                          type="file"
                          className="hidden" // Hide the default input
                          ref={fileInputRef}
                          onChange={handleFileChange}
                        />
                        <img src={upload} alt="" className="inline mr-2 pb-1" />
                        Upload
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative mb-4 lg:mb-6">
                  <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
                    Serviceable City
                  </label>
                  <div className="grid grid-cols-3">
                    <div className="col-span-2 border-2 border-r-0 rounded-lg rounded-r-none w-full px-3 py-2">
                      <input
                        value={newCity}
                        type="text"
                        className="bg-layoutColor outline-none"
                        onChange={(e) => setNewCity(e.target.value)}
                      />
                    </div>
                    <div
                      className=" border-2 border-dashed rounded-lg rounded-l-none w-full px-3 py-2 inline cursor-pointer bg-layoutColor text-center"
                      onClick={addCity}
                    >
                      <img src={add} alt="" className="inline mr-2 pb-1" />
                      Add
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  {serviceableCities.map((city, cityIndex) => (
                    <div
                      key={cityIndex}
                      className="border p-4 mb-4 rounded-lg relative"
                    >
                      <label className="absolute -top-2.5 left-3 bg-layoutColor px-2 text-black">
                        {city.city}
                      </label>
                      {/* Input for adding sub-places */}
                      <div className="flex">
                        <input
                          type="text"
                          className="px-1 bg-layoutColor outline-none"
                          value={subPlaceInput[city.city] || ""}
                          onChange={(e) =>
                            handleSubPlaceChange(city.city, e.target.value)
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              addSubPlace(cityIndex);
                            }
                          }}
                          placeholder="Add sub-place"
                        />
                      </div>

                      {/* List of sub-places */}
                      <ul className="mt-2 flex gap-4">
                        {city.subPlaces.map((subPlace, subPlaceIndex) => (
                          <li
                            key={subPlaceIndex}
                            className="text-sm bg-background w-fit px-3 py-1 rounded-lg"
                          >
                            {subPlace}
                            <img
                              src={add}
                              alt=""
                              className="inline ml-2 pb-1 rotate-45"
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium">
                    Service Days
                  </label>
                  <div className="flex space-x-2">
                    {["S", "M", "T", "W", "Th", "F", "Sa"].map((day, index) => (
                      <button
                        key={index}
                        className={`bg-gray-200 hover:bg-primary text-black hover:text-white px-3 py-1 rounded-full ring-0 outline-none  ${
                          serviceDays.includes(day)
                            ? "bg-primary text-white"
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
