import React, { useState, useRef } from "react";
import Header from "../header/Header";
import upload from "../../assets/svg/upload.svg";
import add from "../../assets/svg/add.svg";
import file from "../../assets/svg/file.svg";

const AddVendors = () => {
  const companyInputRef = useRef(null);
  const cinInputRef = useRef(null);
  const gstInputRef = useRef(null);
  const brochureInputRef = useRef(null);
  const materialInputRef = useRef(null);

  const [companyImage, setCompanyImage] = useState(null);
  const [cinFileName, setCinFileName] = useState("");
  const [gstFileName, setGstFileName] = useState("");
  const [brochureFileName, setBrochureFileName] = useState("");
  const [materialImage, setMaterialImage] = useState(null);

  // States for form fields
  const [formData, setFormData] = useState({
    companyName: "",
    phoneNumber: "",
    email: "",
    address: "",
    gstNumber: "",
    serviceableCity: "",
    time: "",
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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      switch (type) {
        case "company":
          const companyURL = URL.createObjectURL(file);
          setCompanyImage(companyURL);
          break;
        case "cin":
          setCinFileName(file.name);
          break;
        case "gst":
          setGstFileName(file.name);
          break;
        case "brochure":
          setBrochureFileName(file.name);
          break;
        case "material":
          const materialURL = URL.createObjectURL(file);
          setMaterialImage(materialURL);
          break;
        default:
          break;
      }
    }
  };
  const handleUploadClick = (type) => {
    switch (type) {
      case "company":
        companyInputRef.current.click();
        break;
      case "cin":
        cinInputRef.current.click();
        break;
      case "gst":
        gstInputRef.current.click();
        break;
      case "brochure":
        brochureInputRef.current.click();
        break;
      case "material":
        materialInputRef.current.click();
        break;
      default:
        break;
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

  const addMaterial = () => {
    const newMaterial = {
      name: formData.materialName,
      price: formData.materialPrice,
      description: formData.materialDescription,
      image: materialImage, // Add image to material
    };

    setMaterials([...materials, newMaterial]);
    setFormData((prevData) => ({
      ...prevData,
      materialName: "",
      materialPrice: "",
      materialDescription: "",
    }));
    // Clear material fields
    setMaterialImage(""); // Clear the image after adding the material
  };
  const InputField = ({ label, name, value, type = "text" }) => (
    <div className="relative mb-4 lg:mb-6">
      <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center bg-layoutColor font-poppins">
      <div
        className={`flex flex-col bg-layoutColor pl-2 md:px-2 h-auto w-screen md:pl-24 lg:pl-40`}
      >
        <Header />
        <div className="p-4 text-black xl:px-60">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Left side form */}
            <div>
              <div className="p-3 pt-5 rounded-xl border-2">
                <div className="grid grid-cols-3 mb-4">
                  <div className="grid col-span-1 w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]">
                    {/* company image upload */}
                    <div
                      className="border border-gray-300 w-full h-full bg-background rounded-lg "
                      onClick={() => handleUploadClick("company")}
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
                          className="rounded-lg"
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
                    />

                    <InputField
                      label="Phone Number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                    />
                  </div>
                </div>

                <InputField label="Email" name="email" value={formData.email} />

                <InputField
                  label="Address"
                  name="address"
                  value={formData.address}
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
                        onClick={() => handleUploadClick("cin")}
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
                        onClick={() => handleUploadClick("gst")}
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
                        onClick={() => handleUploadClick("brochure")}
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
                <div className="grid lg:grid-cols-3 gap-2">
                  <div className="mb-4 lg:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                      Days
                    </label>
                    <div className="flex space-x-1 lg:space-x-2">
                      {["S", "M", "T", "W", "Th", "F", "Sa"].map(
                        (day, index) => (
                          <button
                            key={index}
                            className={`bg-gray-200 hover:bg-primary text-black hover:text-white lg:px-2 lg:py-0.5 px-3 py-2 rounded-full ring-0 outline-none  ${
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
                  <div className="lg:mt-4">
                    <InputField
                      label="Time"
                      name="time"
                      value={formData.time}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div>
              <div className="md:flex justify-end mb-2 hidden">
                <button className="bg-primary text-white rounded-xl">
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
                  />
                  <InputField
                    label="Account Holder Name"
                    value={formData.accountHolderName}
                    name="accountHolderName"
                  />
                </div>
                <div className="grid lg:grid-cols-2 gap-4">
                  <InputField
                    label="Account Number"
                    value={formData.accountNumber}
                    name="accountNumber"
                  />
                  <InputField
                    label="Confirm Account Number"
                    value={formData.confirmAccountNumber}
                    name="confirmAccountNumber"
                  />
                </div>
                <div className="grid lg:grid-cols-2 gap-4">
                  <InputField
                    label="IFSC Code"
                    value={formData.ifscCode}
                    name="ifscCode"
                  />
                  <InputField
                    label="UPI ID"
                    value={formData.upiId}
                    name="upiId"
                  />
                </div>
              </div>
              <div className="rounded-xl border-2 mt-3">
                {/* Material Section */}
                <div className="bg-layoutColor p-3 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <h2 className="text-lg font-semibold mb-2">
                      Add Materials
                    </h2>
                    <button
                      className="bg-layoutColor text-black m-0 py-0 inline "
                      onClick={addMaterial}
                    >
                      <img src={add} alt="" className="inline mr-2 mb-1" />
                      Add
                    </button>
                  </div>

                  <div className="grid grid-cols-3 mb-1">
                    <div className="grid col-span-1 px-2">
                      <div className="grid col-span-1 w-[100px] h-[100px] lg:w-[150px] lg:h-[120px]">
                        {/* material image upload */}
                        <div
                          className="border border-gray-300 w-full h-full bg-background rounded-lg"
                          onClick={() => handleUploadClick("material")}
                        >
                          <input
                            type="file"
                            ref={materialInputRef}
                            style={{ display: "none" }}
                            onChange={(e) => handleFileChange(e, "material")}
                          />
                          {materialImage ? (
                            <img
                              src={materialImage}
                              alt="Material"
                              className="w-full h-full object-cover rounded-lg"
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
                    </div>
                    <div className="grid col-span-2">
                      <InputField
                        label="Material Name"
                        value={formData.materialName}
                        name=" materialName"
                      />

                      <InputField
                        label="Price"
                        value={formData.materialPrice}
                        name="materialPrice"
                      />
                    </div>
                  </div>

                  <div className="relative mb-4 lg:mb-6">
                    <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-black">
                      Description
                    </label>
                    <textarea
                      className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
                      value={formData.materialDescription}
                      name="materialDescription"
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Material List */}
                  <div className="mt-4">
                    <h3 className="text-md font-semibold">Materials</h3>
                    {materials.length === 0 ? (
                      <p>Add materials to display Here.</p>
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
