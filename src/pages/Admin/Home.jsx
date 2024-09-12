import React from "react";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-background font-poppins w-full h-auto">
      <div className="flex flex-col items-center w-screen bg-layoutColor h-full  top-0">
        <h1 className="text-black">start</h1>
      </div>
      <div className="flex flex-col w-screen bg-layoutColor h-auto">
        <h1 className="text-black">end</h1>{" "}
      </div>
    </div>
  );
}

export default Home;
