import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Header from "../header/Header";
import upload from "../../assets/svg/upload.svg";
import add from "../../assets/svg/add.svg";
import file from "../../assets/svg/file.svg";
import InputField from "./InputField";
import Materials from "./materials";

const AddVendors = ({ addVendor }) => {
  const navigate = useNavigate();

  const companyInputRef = useRef(null);
  const cinInputRef = useRef(null);
  const gstInputRef = useRef(null);
  const brochureInputRef = useRef(null);

  const [companyProfile, setCompanyProfile] = useState(null);
  const [companyImage, setCompanyImage] = useState(null);

  const [cinFileName, setCinFileName] = useState("");
  const [gstFileName, setGstFileName] = useState("");
  const [brochureFileName, setBrochureFileName] = useState("");
  const [cinFile, setCinFile] = useState(null);
  const [gstFile, setGstFile] = useState(null);
  const [brochureFile, setBrochureFile] = useState(null);

  // States for form fields
  const [formData, setFormData] = useState({
    companyName: "",
    phoneNumber: "",
    email: "",
    address: "",
    gstNumber: "",
    bankName: "",
    accountHolderName: "",
    accountNumber: "",
    confirmAccountNumber: "",
    ifscCode: "",
    upiId: "",
    materialName: "",
    materialPrice: "",
    materialDescription: "",
  });
  const [serviceDays, setServiceDays] = useState([]);
  const [materials, setMaterials] = useState([]);

  const [serviceableCities, setServiceableCities] = useState([]);
  const [newCity, setNewCity] = useState("");
  const [subPlaceInput, setSubPlaceInput] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      switch (type) {
        case "company":
          const companyURL = URL.createObjectURL(file);
          setCompanyProfile(file);
          setCompanyImage(companyURL);
          break;
        case "cin":
          setCinFile(file);
          setCinFileName(file.name);
          break;
        case "gst":
          setGstFile(file);
          setGstFileName(file.name);
          break;
        case "brochure":
          setBrochureFile(file);
          setBrochureFileName(file.name);
          break;

        default:
          break;
      }
    }
  };

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

  const handleAddVendor = async () => {
    // Create a vendor object in the same format as initialVendors
    const newVendor = {
      name: formData.companyName,
      phone: formData.phoneNumber,
      email: formData.email,
      address: formData.address,
      logo: companyImage, // Assuming companyProfile is a file object
      Cin: cinFileName,
      brochure: brochureFileName, // Assuming brochureFile is a file object
      gst: gstFileName,
      gstNumber: formData.gstNumber,
      serviceableCities: serviceableCities,
      serviceDays: serviceDays,
      bankName: formData.bankName,
      accountHolderName: formData.accountHolderName,
      accountNumber: formData.accountNumber,
      confirmAccountNumber: formData.confirmAccountNumber,
      ifscCode: formData.ifscCode,
      upiId: formData.upiId,
    };

    // Append other necessary data if required (e.g., serviceable cities, materials)
    newVendor.materials = materials.map((material) => ({
      name: material.name,
      price: material.price,
      description: material.description,
      image: material.profile, // Assuming this is a URL or base64 string
    }));

    // Log the new vendor object to see its structure
    console.log("New Vendor:", newVendor);

    // Here, you can add the new vendor to the state or make an API call
    addVendor(newVendor);

    // If you need to navigate back to the Vendors page, you can do so here
    navigate("/dashboard/vendors");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-layoutColor font-poppins">
      <div
        className={`flex flex-col bg-layoutColor pl-2 md:px-2 h-auto w-screen md:pl-24 lg:pl-40`}
      >
        <Header />
        <div className="p-1 md:p-4 text-black xl:px-60">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Left side form */}
            <div>
              <div className="p-3 pt-5 rounded-xl border-2">
                <div className="grid grid-cols-3 mb-4">
                  <div className="grid col-span-1 w-[100px] h-[100px] lg:w-[150px] lg:h-[120px]">
                    {/* company image upload */}
                    <div
                      className="border border-gray-300 w-full h-full bg-background rounded-lg "
                      onClick={() => companyInputRef.current.click()}
                    >
                      <input
                        type="file"
                        ref={companyInputRef}
                        style={{ display: "none" }}
                        onChange={(e) => handleFileChange(e, "company")}
                      />
                      {companyImage ? (
                        <img
                          src={companyImage}
                          alt="Material"
                          className="rounded-lg w-[100px] h-[100px] lg:w-[150px] lg:h-[120px]"
                        />
                      ) : (
                        <img
                          src={file}
                          alt="Upload"
                          className="m-auto flex mt-[25%] h-6 w-6"
                        />
                      )}
                    </div>
                  </div>
                  <div className="grid col-span-2">
                    <InputField
                      label="Company Name"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                    />

                    <InputField
                      label="Phone Number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <InputField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />

                <InputField
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />

                <div className="grid lg:grid-cols-2 gap-4">
                  <div className="relative mb-4 lg:mb-6">
                    <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
                      CIN Certificate
                    </label>
                    <div className="grid grid-cols-2">
                      <div className="border-2 border-r-0 rounded-lg rounded-r-none w-full px-3 py-2">
                        {cinFileName ? cinFileName : ""}
                      </div>
                      <div
                        className="border-2 border-dashed rounded-lg rounded-l-none w-full px-3 py-2 inline cursor-pointer bg-layoutColor text-center"
                        onClick={() => cinInputRef.current.click()}
                      >
                        <input
                          type="file"
                          className="hidden" // Hide the default input
                          ref={cinInputRef}
                          onChange={(e) => handleFileChange(e, "cin")}
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
                        {gstFileName ? gstFileName : ""}
                      </div>
                      <div
                        className="border-2 border-dashed rounded-lg rounded-l-none w-full px-3 py-2 inline cursor-pointer bg-layoutColor text-center"
                        onClick={() => gstInputRef.current.click()}
                      >
                        <input
                          type="file"
                          className="hidden" // Hide the default input
                          ref={gstInputRef}
                          onChange={(e) => handleFileChange(e, "gst")}
                        />
                        <img src={upload} alt="" className="inline mr-2 pb-1" />
                        Upload
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-4">
                  <InputField
                    label="GST Number"
                    name="gstNumber"
                    value={formData.gstNumber}
                    onChange={handleInputChange}
                  />
                  <div className="relative mb-4 lg:mb-6">
                    <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
                      Product Brochure
                    </label>
                    <div className="grid grid-cols-2">
                      <div className="border-2 border-r-0 rounded-lg rounded-r-none w-full px-3 py-2">
                        {brochureFileName ? brochureFileName : ""}
                      </div>
                      <div
                        className="border-2 border-dashed rounded-lg rounded-l-none w-full px-3 py-2 inline cursor-pointer bg-layoutColor text-center"
                        onClick={() => brochureInputRef.current.click()}
                      >
                        <input
                          type="file"
                          className="hidden" // Hide the default input
                          ref={brochureInputRef}
                          onChange={(e) => handleFileChange(e, "brochure")}
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
                <div className="grid">
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                      Days
                    </label>
                    <div className="flex flex-wrap space-x-0.5 lg:space-x-2">
                      {["S", "M", "T", "W", "Th", "F", "Sa"].map(
                        (day, index) => (
                          <button
                            key={index}
                            className={`bg-gray-200 hover:bg-primary text-black hover:text-white lg:px-4 lg:py-2 px-3 py-2 rounded-full ring-0 outline-none ${
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
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div>
              <div className="md:flex justify-end mb-2 hidden">
                <button
                  className="bg-primary text-white rounded-xl"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddVendor(); // Call this to add the vendor and handle navigation
                  }}
                >
                  Add Vendor
                </button>
              </div>
              <div className="p-3 pt-5 rounded-xl border-2">
                <h2 className="text-lg font-semibold mb-4">Account Details</h2>
                <div className="grid lg:grid-cols-2 gap-4">
                  <InputField
                    label="Bank Name"
                    value={formData.bankName}
                    name="bankName"
                    onChange={handleInputChange}
                  />
                  <InputField
                    label="Account Holder Name"
                    value={formData.accountHolderName}
                    name="accountHolderName"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid lg:grid-cols-2 gap-4">
                  <InputField
                    label="Account Number"
                    value={formData.accountNumber}
                    name="accountNumber"
                    onChange={handleInputChange}
                  />
                  <InputField
                    label="Confirm Account Number"
                    value={formData.confirmAccountNumber}
                    name="confirmAccountNumber"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid lg:grid-cols-2 gap-4">
                  <InputField
                    label="IFSC Code"
                    value={formData.ifscCode}
                    name="ifscCode"
                    onChange={handleInputChange}
                  />
                  <InputField
                    label="UPI ID"
                    value={formData.upiId}
                    name="upiId"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <Materials
                materials={materials}
                setMaterials={setMaterials}
                formData={formData}
                setFormData={setFormData}
              />
            </div>
          </div>
        </div>
        <div className="md:hidden justify-center mb-2 sticky bottom-1 px-8 ">
          <button className="bg-primary text-white rounded-xl w-full">
            Add Vendor
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddVendors;
