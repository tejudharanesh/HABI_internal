import React from "react";
import PaymentBlock from "./PaymentBlock";
import PaymentSummary from "./PaymentSummary";
import Header from "../../header/Header";
const paymentStages = [
  {
    stage: "Stage 01",
    title: "Acceptance of Proposal",
    cost: "01% of the Total cost",
    stages: [],
    week: "1st Week",
    date: "25 May 2024",
  },
  {
    stage: "Stage 02",
    title: "Mobilization Advance",
    cost: "20% of the Total cost",
    stages: ["Site Marking", "Excavation", "Foundation", "Upto Plinth Level"],
    week: "2nd Week",
    date: "25 May 2024",
    dueDate: "22 June",
  },
  {
    stage: "Stage 03",
    title: "Completion of Slab",
    cost: "30% of the Total cost",
    stages: ["Ground Floor", "First Floor"],
    week: "9th - 23rd Week",
    date: "",
    dueDate: "22 June",
  },
  {
    stage: "Stage 04",
    title: "Completion of Internal Work",
    cost: "30% of the Total cost",
    stages: [
      "Ground Floor",
      "First Floor",
      "Second Floor",
      "Third Floor",
      "Forth Floor",
    ],
    week: "9th - 23rd Week",
    date: "",
    dueDate: "22 June",
  },
  // Add more stages as needed
];

const currentStage = 3;
function Payment() {
  const paidSegments = 1;
  const totalSegments = 7;
  const segmentAngle = 360 / totalSegments;
  const paidAngle = paidSegments * segmentAngle;
  return (
    <div className="min-h-screen flex flex-col items-center bg-layoutColor font-poppins">
      <div
        className={`flex flex-col bg-layoutColor pl-2 md:px-2 h-auto w-screen md:pl-24  lg:pl-40`}
      >
        <Header />
        <div className="flex flex-col md:pl-10 md:pr-60 lg:pr-[45%] lg:pl-[10%]">
          {paymentStages.map((stages, index) => (
            <PaymentBlock
              key={index}
              data={stages}
              currentStage={currentStage}
              stageNumber={index + 1}
            />
          ))}

          <PaymentSummary paidAngle={paidAngle} />
        </div>
      </div>
    </div>
  );
}

export default Payment;
