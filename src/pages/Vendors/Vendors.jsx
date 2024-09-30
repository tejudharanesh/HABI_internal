import React, { useState } from "react";
import Header from "../../components/header/Header";
import { useNavigate } from "react-router-dom";

function Vendors({ vendors, deleteSelectedVendors }) {
  const navigate = useNavigate();
  // Sample vendor data

  const [isSelectMode, setIsSelectMode] = useState(false); // Track select mode
  const [selectedVendors, setSelectedVendors] = useState([]); // Track selected vendors

  // Toggle select mode
  const toggleSelectMode = () => {
    setIsSelectMode(!isSelectMode);
    setSelectedVendors([]); // Reset selected vendors
  };

  // Handle checkbox toggle for selecting vendors
  const handleCheckboxChange = (id) => {
    if (selectedVendors.includes(id)) {
      setSelectedVendors(selectedVendors.filter((vendorId) => vendorId !== id));
    } else {
      setSelectedVendors([...selectedVendors, id]);
    }
  };
  const deleteSelectedVendors1 = () => {
    deleteSelectedVendors(selectedVendors);
  };

  // Handle delete of selected vendors

  return (
    <div className="min-h-screen flex flex-col items-center bg-layoutColor font-poppins">
      <div
        className={`flex flex-col bg-layoutColor pl-2 md:px-2 h-auto w-screen md:pl-24 lg:pl-40`}
      >
        <Header />

        <div className="p-6">
          <div className="flex justify-end mb-4">
            <div className="flex space-x-2">
              <button
                className="bg-primaryO text-primary px-4 py-2 rounded-lg border-primary"
                onClick={() => {
                  navigate("/dashboard/AddVendor");
                }}
              >
                + Add Vendor
              </button>
              {!isSelectMode && (
                <button
                  className={`px-9 py-2 rounded-lg outline-none focus:outline-none ring-0 bg-layoutColor text-gray-400 border-gray-300 `}
                  onClick={toggleSelectMode}
                >
                  Select
                </button>
              )}
              {isSelectMode && (
                <button
                  className={`   px-9 py-2 rounded-lg outline-none focus:outline-none ring-0 bg-red-100 text-red-400 border-red-500`}
                  onClick={deleteSelectedVendors1}
                >
                  Delete
                </button>
              )}
            </div>

            {isSelectMode && (
              <div className="flex space-x-2">
                <button
                  className="bg-layoutColor text-black px-4 py-2 rounded-lg border-gray-400 ml-2 outline-none focus:outline-none ring-0"
                  onClick={toggleSelectMode}
                >
                  {selectedVendors.length} Selected
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vendors.map((vendor) => (
              <div
                key={vendor.id}
                className="relative border border-gray-200 rounded-2xl p-4 bg-layoutColor shadow-sm"
              >
                {isSelectMode && (
                  <input
                    type="checkbox"
                    className="absolute right-3 top-3 h-5 w-5 bg-layoutColor border-gray-300 border-2 rounded appearance-none checked:appearance-auto checked:bg-primary checked:text-white"
                    checked={selectedVendors.includes(vendor.id)}
                    onChange={() => handleCheckboxChange(vendor.id)}
                  />
                )}
                <div className="flex items-center space-x-4">
                  <img
                    src={vendor.logo}
                    alt="Vendor Logo"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-black">{vendor.name}</h3>
                    <p className="text-sm text-gray-500">{vendor.phone}</p>
                    <p className="text-sm text-gray-500">{vendor.email}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-500">{vendor.address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vendors;
