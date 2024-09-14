import React from "react";
import Header from "../../components/header/Header";
import TaskFilters from "../../components/Admin/TaskFilters";

function Home() {
  return (
    <div className="min-h-screen items-center bg-background font-poppins w-full">
      <div className={`w-screen bg-layoutColor p-2 h-auto md:pl-24 lg:pl-40`}>
        <Header />
        <TaskFilters />
      </div>
    </div>
  );
}

export default Home;
