import React, { useState, useRef } from "react";
import add from "../../assets/svg/add.svg";
import file from "../../assets/svg/file.svg";
import edit from "../../assets/images/edit.png";
import delete1 from "../../assets/images/delete.png";
import InputField from "./InputField";
const Materials = ({ materials, setMaterials, formData, setFormData }) => {
  const materialInputRef = useRef(null);
  const [materialImage, setMaterialImage] = useState(null);
  const [materialProfile, setMaterialProfile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const materialURL = URL.createObjectURL(file);
      setMaterialProfile(materialURL);
      setMaterialImage(file);
    }
  };

  const addMaterial = () => {
    const newMaterial = {
      name: formData.materialName,
      price: formData.materialPrice,
      description: formData.materialDescription,
      image: materialImage,
      profile: materialProfile,
    };

    setMaterials([...materials, newMaterial]);
    setFormData((prevData) => ({
      ...prevData,
      materialName: "",
      materialPrice: "",
      materialDescription: "",
    }));
    setMaterialProfile(null); // Clear the image after adding the material
    if (materialInputRef.current) {
      materialInputRef.current.value = ""; // Clear the file input
    }
  };

  return (
    <div className="rounded-xl border-2 mt-3">
      <div className="bg-layoutColor p-3 rounded-lg">
        <div className="flex justify-between mb-1">
          <h2 className="text-lg font-semibold mb-2">Add Materials</h2>
          <button
            className="bg-layoutColor text-black m-0 py-0 inline"
            onClick={addMaterial}
          >
            <img src={add} alt="" className="inline mr-2 mb-1" />
            Add
          </button>
        </div>

        <div className="grid grid-cols-3 mb-1">
          <div className="grid col-span-1 px-2">
            <div className="grid col-span-1 w-[100px] h-[100px] lg:w-[150px] lg:h-[120px]">
              <div
                className="border border-gray-300 w-full h-full bg-background rounded-lg"
                onClick={() => materialInputRef.current.click()}
              >
                <input
                  type="file"
                  ref={materialInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                {materialProfile ? (
                  <img
                    src={materialProfile}
                    alt="Material"
                    className="w-[100px] h-[100px] lg:w-[150px] lg:h-[120px] rounded-lg"
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
              name="materialName"
              onChange={(e) =>
                setFormData({ ...formData, materialName: e.target.value })
              }
            />
            <InputField
              label="Price"
              value={formData.materialPrice}
              name="materialPrice"
              onChange={(e) =>
                setFormData({ ...formData, materialPrice: e.target.value })
              }
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
            onChange={(e) =>
              setFormData({ ...formData, materialDescription: e.target.value })
            }
          />
        </div>

        <div className="mt-2">
          <h3 className="text-md font-semibold">Materials</h3>
          {materials.length === 0 ? (
            <p>Add materials to display here.</p>
          ) : (
            <div className="w-full">
              {materials.map((material, index) => (
                <div
                  key={index}
                  className="p-2 border-2 rounded-xl grid grid-cols-4"
                >
                  <div className="mr-2 col-span-1 ">
                    <img
                      src={material.profile}
                      alt=""
                      className="w-[90px] h-[90px] lg:w-[100px] lg:h-[100px] rounded-xl"
                    />
                  </div>
                  <div className="col-span-3">
                    <div className="grid grid-cols-3 justify-between">
                      <h3 className="font-semibold text-black">
                        {material.name}
                      </h3>
                      <h3 className="font-semibold text-black">
                        ₹{material.price}
                      </h3>
                      <div className="font-semibold text-black justify-end mr-3 flex">
                        <img
                          src={edit}
                          alt=""
                          className="mr-2 cursor-pointer"
                        />
                        <img src={delete1} alt="" className="cursor-pointer" />
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">
                      {material.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Materials;
