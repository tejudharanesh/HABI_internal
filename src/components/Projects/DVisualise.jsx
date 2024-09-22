import React from "react";
import site from "../../assets/images/site.png";

function DVisualise() {
  return (
    <div>
      <header className="m-2 relative">
        <p className="text-lg font-semibold text-black inline-block">
          3D Visualize
        </p>
        <p className="inline-block absolute right-0 top-0 text-primary cursor-pointer">
          View more >
        </p>
      </header>
      <div className="grid grid-cols-4 justify-around items-center">
        <img
          src={site}
          alt="Site Photo 1"
          className="w-[60px] h-[60px] object-cover rounded-lg"
        />
        <img
          src={site}
          alt="Site Photo 1"
          className="w-[60px] h-[60px] object-cover rounded-lg "
        />
        <img
          src={site}
          alt="Site Photo 1"
          className="w-[60px] h-[60px] object-cover rounded-lg"
        />
        <img
          src={site}
          alt="Site Photo 1"
          className="w-[60px] h-[60px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default DVisualise;
