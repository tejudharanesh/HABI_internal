import React from "react";
import done from "../../../assets/images/done1.png";
import circle from "../../../assets/images/circle.png";

function PaymentBlock({ data, currentStage, stageNumber }) {
  const renderStatus = () => {
    if (currentStage > stageNumber) {
      return (
        <div className="text-black">
          <div className="absolute top-6 right-14 h-full border-l-2  border-black border-dashed"></div>

          <div className="absolute top-5 right-11 rounded-full">
            <img src={done} alt="done" />
          </div>
          <div className="absolute top-11 right-2 lg:top-4 lg:-right-20">
            <h2 className="bg-layoutColor p-1 lg:text-lg text-gray-400">
              {data.date}
            </h2>
          </div>
          <div className="absolute top-[75px] right-4 lg:top-12 lg:-right-16">
            <h2 className="bg-layoutColor p-1 lg:text-lg text-black">
              ₹ XXXXXX
            </h2>
          </div>
        </div>
      );
    } else if (currentStage === stageNumber) {
      return (
        <div>
          <div className="absolute top-6 right-14 h-full border-l-2 border-dashed"></div>

          <div className="absolute top-4 right-1 lg:top-4 lg:right-20 rounded-full">
            <button className="bg-primary text-white px-3 py-2 rounded-lg">
              Notify User
            </button>
          </div>
          <div className="absolute top-5 right-11 rounded-full hidden lg:inline">
            <img src={circle} alt="done" className="h-7 w-7" />
          </div>
          <div className="absolute top-16 right-0 lg:top-4 lg:-right-24">
            <h2 className="bg-layoutColor p-1 lg:text-lg text-gray-400">
              Due on {data.dueDate}
            </h2>
          </div>
          <div className="absolute top-24 right-4 lg:top-12 lg:-right-16">
            <h2 className="bg-layoutColor p-1 lg:text-lg text-black">
              ₹ XXXXXX
            </h2>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="absolute top-6 right-14 h-full border-l-2 border-dashed"></div>

          <div className="absolute top-5 right-11 rounded-full">
            <img src={circle} alt="done" className="h-7 w-7" />
          </div>
          <div className="absolute top-12 right-4 lg:top-4 lg:-right-16">
            <h2 className="bg-layoutColor p-1 lg:text-lg text-black">
              ₹ XXXXXX
            </h2>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="relative">
      <div>
        <h3 className="text-lg m-1">{data.stage}</h3>
        <p className="text-black font-semibold text-[16px] m-1">{data.title}</p>

        {data.stages.map((stage, index) => (
          <p className="text-xs ml-1 text-black">{stage}</p>
        ))}

        {/* sub lists will be in p tag*/}
        <p className="text-md text-black m-1">{data.cost}</p>
        <p className="text-gray-400 m-1 text-sm">{data.week}</p>
      </div>
      {renderStatus()}

      <hr className="border-[1px] mt-5 w-4/6" />
    </div>
  );
}

export default PaymentBlock;
