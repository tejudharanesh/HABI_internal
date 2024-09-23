import React from "react";
import Header from "../../header/Header";
import TaskFilter from "../../Home/TaskFilters";
import TaskCard from "./TaskCard";
import DelayCard from "./DelayCard";
import PieChart from "./PieChart";
import PeopleCard from "./PeopleCard";

function Timeline() {
  const tasks = [
    {
      title: "Site Clearance",
      status: "Started",
      progress: 50,
      images: ["/path/to/image1.png", "/path/to/image2.png"],
      actions: [
        { label: "No", type: "reject" },
        { label: "Yes", type: "approve" },
        { label: "Complete", type: "complete" },
      ],
    },
  ];

  const delayTask = [
    {
      title: "Work has been stopped",
      status: "Delay",
      reason: "Nin Hundrun",
      images: ["/path/to/image1.png", "/path/to/image2.png"],
      actions: [
        { label: "Reject", type: "reject" },
        { label: "Submit", type: "complete" },
      ],
    },
  ];

  const employees = [
    {
      desgn: "Site Supervisor",
      name: "Yashwanth",
    },
    {
      desgn: "Site Supervisor",
      name: "Yashwanth",
    },
  ];

  const taskOverviewData = [50, 30, 20]; // Sample data for Pie Chart

  return (
    <div className="min-h-screen flex flex-col items-center bg-layoutColor font-poppins">
      <div
        className={`flex flex-col bg-layoutColor  md:px-2 h-auto w-screen md:pl-24 lg:pl-40`}
      >
        <Header />
        <TaskFilter />

        <div className="p-1 md:p-4 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="col-span-1 lg:col-span-2 rounded-xl p-2">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                {tasks.map((task, index) => (
                  <TaskCard key={index} {...task} />
                ))}
                {delayTask.map((task, index) => (
                  <DelayCard key={index} {...task} />
                ))}
              </div>
            </div>
            <div className="col-span-1 p-1">
              <div className="bg-layoutColor py-2 px-2 rounded-lg border-2">
                <h3 className="font-semibold text-black">Tasks Overview</h3>
                <div className="w-60 mx-auto">
                  <PieChart data={taskOverviewData} />
                </div>
                <div className="flex space-x-4 justify-center mt-2">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p className="text-black text-xs">In Progress</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p className="text-black text-xs">In Progress</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p className="text-black text-xs">In Progress</p>
                  </div>
                </div>
              </div>
              <div className="bg-layoutColor border-2 rounded-xl p-4 space-y-2 mt-3">
                {employees.map((emp, index) => (
                  <PeopleCard key={index} {...emp} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
