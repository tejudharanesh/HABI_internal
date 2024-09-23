import React from "react";
import pdf from "../../../assets/images/pdf.png";
import more from "../../../assets/images/option.png";

const sections = [
  {
    title: "Costing",
    documents: [
      {
        id: 1,
        name: "Tentative Quotation",
        date: "18 July 2024",
        version: "version1",
      },
      {
        id: 2,
        name: "Final Quotation",
        date: "22 August 2024",
        version: "version2",
      },
    ],
  },
  {
    title: "Legal",
    documents: [
      {
        id: 3,
        name: "Contract Agreement",
        date: "5 September 2024",
        version: "version1",
      },
    ],
  },
];

function Documents() {
  return (
    <div className="border rounded-xl mt-4 border-gray-300 pl-2">
      <p className="text-black font-semibold my-2 p-2">Design and Documents</p>
      {sections.map((section, index) => (
        <div key={index} className="p-2">
          <p className="text-sm text-black">{section.title}</p>
          {section.documents.map((doc) => (
            <div
              key={doc.id}
              className="flex justify-between items-center my-1"
            >
              <div className="flex items-center space-x-1">
                <p className="text-black text-lg mr-1 xl:mr-4">{doc.id}.</p>
                <img src={pdf} alt="pdf icon" />
                <div>
                  <p className="text-black">{doc.name}</p>
                  <p className="text-gray-400 text-xs">{doc.date}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 xl:mr-5">
                <button className="bg-primaryO text-primary px-2 rounded-md border border-primary py-0 h-6 mr-2">
                  {doc.version}
                </button>
                <img src={more} alt="more" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Documents;
