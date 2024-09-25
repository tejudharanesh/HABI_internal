import React, { useState } from "react";
import option from "../../assets/images/option.png";

const Leads = () => {
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [showDropdown, setShowDropdown] = useState(null); // Change to hold ID or null
  const toggleDropdown = (leadId) => {
    setShowDropdown(showDropdown === leadId ? null : leadId); // Toggle dropdown for specific lead
  };

  const [leads, setLeads] = useState([
    {
      id: 1,
      name: "Charan",
      leadId: "CHA2024",
      phone: "1234567890",
      email: "Charan@gmail.com",
      level: "", // Blank level
    },
    {
      id: 2,
      name: "Charan",
      leadId: "CHA2024",
      phone: "1234567890",
      email: "Charan@gmail.com",
      level: "Level 0",
    },
    {
      id: 3,
      name: "Charan",
      leadId: "CHA2024",
      phone: "1234567890",
      email: "Charan@gmail.com",
      level: "Level 1",
    },
    {
      id: 4,
      name: "Charan",
      leadId: "CHA2024",
      phone: "1234567890",
      email: "Charan@gmail.com",
      level: "Level 2",
    },
    {
      id: 5,
      name: "Charan",
      leadId: "CHA2024",
      phone: "1234567890",
      email: "Charan@gmail.com",
      level: "Level 3",
    },
    // More leads can be added
  ]);

  const handleCheckboxChange = (id) => {
    setSelectedLeads((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((leadId) => leadId !== id)
        : [...prevSelected, id]
    );
  };

  const handleLevelChange = (id, newLevel) => {
    setLeads((prevLeads) =>
      prevLeads.map((lead) =>
        lead.id === id ? { ...lead, level: newLevel } : lead
      )
    );
  };
  const DeleteLead = (id) => {
    setLeads((prevLeads) => prevLeads.filter((lead) => lead.id !== id));
  };

  const handleDelete = () => {
    setLeads((prevLeads) =>
      prevLeads.filter((lead) => !selectedLeads.includes(lead.id))
    );
    setSelectedLeads([]); // Clear the selection after deletion
  };

  const isSelected = (id) => selectedLeads.includes(id);

  // Change levels for selected leads
  const ChangeLeadLevels = (newLevel) => {
    setLeads((prevLeads) =>
      prevLeads.map((lead) =>
        selectedLeads.includes(lead.id) ? { ...lead, level: newLevel } : lead
      )
    );
    setSelectedLeads([]); // Clear selection after updating
  };

  // Separate the leads by level
  const leadsWithBlankLevel = leads.filter((lead) => lead.level === "");
  const leadsWithLevels = leads.filter(
    (lead) =>
      lead.level === "Level 0" ||
      lead.level === "Level 1" ||
      lead.level === "Level 2" ||
      lead.level === "Level 3"
  );

  return (
    <div className="min-h-screen flex flex-col items-center bg-layoutColor font-poppins">
      <div
        className={`flex flex-col bg-layoutColor pl-2 md:px-2 min-h-screen h-auto w-screen md:pl-24 lg:pl-40 text-black`}
      >
        <div className="p-4">
          {/* Add Lead Button */}
          <div className="flex justify-end mb-4">
            <button className="bg-primaryO p-2 rounded-lg text-primary border border-primary">
              + Add Lead
            </button>
          </div>

          {/* First block: Leads with blank levels */}
          <div className="mb-6">
            <table className="min-w-full">
              <thead className="bg-secondary1">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-black">
                    <div className="h-4 w-4 border rounded border-gray-400"></div>
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-black">
                    Name
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-black">
                    Lead ID
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-black">
                    Phone No.
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-black">
                    Email
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-black">
                    Level
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {leadsWithBlankLevel.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50 relative">
                    <td className="px-4 py-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-primary bg-layoutColor border-gray-300 border-2 rounded focus:ring-primary appearance-none checked:appearance-auto checked:bg-layoutColor checked:border-black checked:text-black"
                        checked={isSelected(lead.id)}
                        onChange={() => handleCheckboxChange(lead.id)}
                      />
                    </td>
                    <td className="px-4 py-2">{lead.name}</td>
                    <td className="px-4 py-2">{lead.leadId}</td>
                    <td className="px-4 py-2">{lead.phone}</td>
                    <td className="px-4 py-2">{lead.email}</td>
                    <td className="px-4 py-2">
                      <select
                        value={lead.level}
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none text-black bg-white"
                        onChange={(e) =>
                          handleLevelChange(lead.id, e.target.value)
                        }
                      >
                        <option></option>
                        <option>Level 0</option>
                        <option>Level 1</option>
                        <option>Level 2</option>
                        <option>Level 3</option>
                      </select>
                    </td>
                    <img
                      src={option}
                      alt="more"
                      className="absolute right-0 top-3 cursor-pointer"
                      onClick={() => toggleDropdown(lead.id)}
                    />
                    {showDropdown === lead.id && ( // Check if the dropdown should be shown for this specific lead
                      <div className="absolute right-2 top-4 mt-2 bg-layoutColor shadow-lg rounded-lg z-10">
                        <button
                          className="block w-full px-3 text-red-600 hover:bg-layoutColor"
                          onClick={() => DeleteLead(lead.id)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Second block: Leads with Levels 0 to 3 */}
          <div className="">
            <h3 className="px-4 py-2 text-left text-gray-500">Leads Level</h3>
            <table className="min-w-full">
              <thead className="bg-secondary1">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-black">
                    <div className="h-4 w-4 border rounded border-gray-400"></div>
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-black">
                    Name
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-black">
                    Lead ID
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-black">
                    Phone No.
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-black">
                    Email
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-black">
                    Level
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {leadsWithLevels.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50 relative">
                    <td className="px-4 py-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-primary bg-layoutColor border-gray-300 border-2 rounded focus:ring-primary appearance-none checked:appearance-auto checked:bg-layoutColor checked:border-black checked:text-black"
                        checked={isSelected(lead.id)}
                        onChange={() => handleCheckboxChange(lead.id)}
                      />
                    </td>
                    <td className="px-4 py-2">{lead.name}</td>
                    <td className="px-4 py-2">{lead.leadId}</td>
                    <td className="px-4 py-2">{lead.phone}</td>
                    <td className="px-4 py-2">{lead.email}</td>
                    <td className="px-4 py-2">
                      <select
                        value={lead.level}
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none text-black bg-white"
                        onChange={(e) =>
                          handleLevelChange(lead.id, e.target.value)
                        }
                      >
                        <option>Level 0</option>
                        <option>Level 1</option>
                        <option>Level 2</option>
                        <option>Level 3</option>
                      </select>
                    </td>
                    <img
                      src={option}
                      alt="more"
                      className="absolute right-0 top-3 cursor-pointer"
                      onClick={() => toggleDropdown(lead.id)}
                    />
                    {showDropdown === lead.id && ( // Check if the dropdown should be shown for this specific lead
                      <div className="absolute right-2 top-4 mt-2 bg-layoutColor shadow-lg rounded-lg z-10">
                        <button
                          className="block w-full px-3 text-red-600 hover:bg-layoutColor"
                          onClick={() => DeleteLead(lead.id)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Footer with "Change Levels" and "Delete" options */}
      </div>
      {selectedLeads.length > 0 && (
        <div className="mt-4 flex justify-between items-center border-2 fixed bottom-2 px-4 rounded-lg text-black mx-auto w-[80%] ml-10 lg:ml-32">
          <p>{selectedLeads.length} Selected </p>
          <div className="flex items-center space-x-4">
            <p>Change Levels</p>
            <select
              className="border border-gray-400 bg-layoutColor rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              onChange={(e) => ChangeLeadLevels(e.target.value)}
            >
              <option>Level 0</option>
              <option>Level 1</option>
              <option>Level 2</option>
              <option>Level 3</option>
            </select>
            <button
              className="text-red-500 bg-layoutColor"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leads;
