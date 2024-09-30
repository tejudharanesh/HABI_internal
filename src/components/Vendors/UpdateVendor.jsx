import React, { useState, useRef } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

import Header from "../header/Header";
import upload from "../../assets/svg/upload.svg";
import add from "../../assets/svg/add.svg";
import file from "../../assets/svg/file.svg";
import InputField from "./InputField";
import Materials from "./materials";

const UpdateVendor = ({ vendorData, updateVendor }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const [vendor, setVendor] = useState(null);
  useEffect(() => {
    if (vendorData && id) {
      const selectedVendor = vendorData.find((v) => v.id === parseInt(id)); // Find vendor by ID
      if (selectedVendor) {
        setVendor(selectedVendor); // Set vendor data for editing
      }
    }
  }, [id, vendorData]);

  const companyInputRef = useRef(null);
  const cinInputRef = useRef(null);
  const gstInputRef = useRef(null);
  const brochureInputRef = useRef(null);

  const [isEditing, setIsEditing] = useState(false); // State to track edit mode
  const [companyImage, setCompanyImage] = useState(vendor ? vendor.logo : "");
  const [cinFileName, setCinFileName] = useState(vendor ? vendor.Cin : "");
  const [gstFileName, setGstFileName] = useState(vendor ? vendor.gst : "");
  const [brochureFileName, setBrochureFileName] = useState(
    vendor ? vendor.brochure : ""
  );
  const [serviceDays, setServiceDays] = useState(
    vendor ? vendor.serviceDays : []
  );
  const [materials, setMaterials] = useState(vendor ? vendor.materials : []);
  const [serviceableCities, setServiceableCities] = useState(
    vendor ? vendor.serviceableCities : []
  );

  const [formData, setFormData] = useState({
    companyName: vendor ? vendor.name : "",
    phoneNumber: vendor ? vendor.phone : "",
    email: vendor ? vendor.email : "",
    address: vendor ? vendor.address : "",
    gstNumber: vendor ? vendor.gstNumber : "",
    bankName: vendor ? vendor.bankName : "",
    accountHolderName: vendor ? vendor.accountHolderName : "",
    accountNumber: vendor ? vendor.accountNumber : "",
    confirmAccountNumber: vendor ? vendor.confirmAccountNumber : "",
    ifscCode: vendor ? vendor.ifscCode : "",
    upiId: vendor ? vendor.upiId : "",
  });

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

  const handleAddVendor = async () => {
    const updatedVendor = {
      ...vendor, // Keep existing vendor data
      name: formData.companyName,
      phone: formData.phoneNumber,
      email: formData.email,
      address: formData.address,
      logo: companyImage,
      Cin: cinFileName,
      gst: gstFileName,
      brochure: brochureFileName,
      gstNumber: formData.gstNumber,
      serviceableCities,
      serviceDays,
      bankName: formData.bankName,
      accountHolderName: formData.accountHolderName,
      accountNumber: formData.accountNumber,
      confirmAccountNumber: formData.confirmAccountNumber,
      ifscCode: formData.ifscCode,
      upiId: formData.upiId,
      materials: materials.map((material) => ({
        name: material.name,
        price: material.price,
        description: material.description,
        image: material.image, // Assuming this is a URL or base64 string
      })),
    };

    // Log the updated vendor object to see its structure
    console.log("Updated Vendor:", updatedVendor);

    // Here, you can update the vendor data in the state or make an API call
    updateVendor(updatedVendor);

    // If you need to navigate back to the Vendors page, you can do so here
    navigate("/dashboard/vendors");
  };

  return vendor ? (
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
                      className="border border-gray-300 w-full h-full bg-background rounded-lg"
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
                      disabled={!isEditing} // Disable input when not editing
                    />
                    <InputField
                      label="Phone Number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                <InputField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />

                <InputField
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  disabled={!isEditing}
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
                          disabled={!isEditing}
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
                          disabled={!isEditing}
                        />
                        <img src={upload} alt="" className="inline mr-2 pb-1" />
                        Upload
                      </div>
                    </div>
                  </div>
                </div>

                <InputField
                  label="GST Number"
                  name="gstNumber"
                  value={formData.gstNumber}
                  onChange={handleInputChange}
                  disabled={!isEditing}
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
                        disabled={!isEditing}
                      />
                      <img src={upload} alt="" className="inline mr-2 pb-1" />
                      Upload
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">
                    Serviceable Cities
                  </h3>
                  {serviceableCities.map((city, index) => (
                    <div key={index} className="border p-4 mb-2 rounded-lg">
                      <label className="block text-sm font-medium">
                        {city.city}
                      </label>
                      <ul className="mt-1">
                        {city.subPlaces.map((subPlace, subIndex) => (
                          <li key={subIndex} className="text-sm">
                            {subPlace}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {isEditing && (
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={newCity}
                        onChange={(e) => setNewCity(e.target.value)}
                        placeholder="New City"
                        className="border-2 border-gray-300 p-2 rounded-lg"
                      />
                      <button
                        onClick={addCity}
                        className="bg-primary text-white rounded-lg px-4 py-2"
                      >
                        Add City
                      </button>
                    </div>
                  )}
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
                            className={`bg-gray-200 text-black lg:px-4 lg:py-2 px-3 py-2 rounded-full ring-0 outline-none ${
                              serviceDays.includes(day)
                                ? "bg-primary text-white"
                                : ""
                            }`}
                            onClick={() => {
                              if (isEditing) {
                                if (serviceDays.includes(day)) {
                                  setServiceDays(
                                    serviceDays.filter((d) => d !== day)
                                  );
                                } else {
                                  setServiceDays([...serviceDays, day]);
                                }
                              }
                            }}
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
              <div className="p-3 pt-5 rounded-xl border-2">
                <h2 className="text-lg font-semibold mb-4">Account Details</h2>
                <div className="grid lg:grid-cols-2 gap-4">
                  <InputField
                    label="Bank Name"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                  <InputField
                    label="Account Holder Name"
                    name="accountHolderName"
                    value={formData.accountHolderName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
                <div className="grid lg:grid-cols-2 gap-4">
                  <InputField
                    label="Account Number"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                  <InputField
                    label="Confirm Account Number"
                    name="confirmAccountNumber"
                    value={formData.confirmAccountNumber}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
                <div className="grid lg:grid-cols-2 gap-4">
                  <InputField
                    label="IFSC Code"
                    name="ifscCode"
                    value={formData.ifscCode}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                  <InputField
                    label="UPI ID"
                    name="upiId"
                    value={formData.upiId}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
              </div>
              <Materials
                materials={materials}
                setMaterials={setMaterials}
                formData={formData}
                setFormData={setFormData}
                isEditing={isEditing} // Pass edit state for enabling/disabling fields
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center px-8 mb-2 sticky bottom-1">
          <button
            className="bg-primary text-white rounded-xl w-1/2"
            onClick={() => setIsEditing(!isEditing)} // Toggle edit mode
          >
            {isEditing ? "Cancel" : "Edit Vendor"}
          </button>
          {isEditing && (
            <button
              className="bg-secondary text-white rounded-xl w-1/2"
              onClick={handleAddVendor} // Save changes
            >
              Save Changes
            </button>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div>Loading vendor Data</div>
  );
};

export default UpdateVendor;
