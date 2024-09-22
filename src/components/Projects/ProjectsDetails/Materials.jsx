import React from "react";
import steel from "../../../assets/images/steel.png";

function Materials() {
  return (
    <div>
      <header className="m-2 relative">
        <p className="text-lg font-semibold text-black inline-block">
          Materials
        </p>
        <p className="inline-block absolute right-0 top-0 xl:right-40 text-primary cursor-pointer">
          View more
        </p>
      </header>

      <div className="p-2 flex">
        <div className="inline-block mr-2">
          <img src={steel} alt="" className="w-[60px]" />
        </div>
        <div className="inline">
          <p className="font-semibold text-black">TATA Steel</p>
          <p className="text-xs text-gray-400  ">
            brand TATA, diameter: 32 mm & above
          </p>
        </div>
        <hr className="mt-2" />
      </div>
    </div>
  );
}

export default Materials;
