import React from "react";
import Header from "../../components/header/Header";
import TaskFilters from "../../components/Admin/TaskFilters";
import Task from "../../components/Admin/Task";
import Meetings from "../../components/Admin/Meetings";
import PieChart from "../../components/Admin/PieChart";

function Home() {
  const tasks = [
    {
      title: "Interior Design",
      project: "Charan Project",
      dates: "25 May 2024 - 26 May 2024",
      status: "In Progress",
      priority: "low",
      team: [
        { name: "Person 1", avatar: "avatar-url" },
        { name: "Person 2", avatar: "avatar-url" },
      ],
    },
    {
      title: "Interior Design",
      project: "Charan Project",
      dates: "25 May 2024 - 26 May 2024",
      status: "In Progress",
      priority: "High",
      team: [
        { name: "Person 1", avatar: "avatar-url" },
        { name: "Person 2", avatar: "avatar-url" },
      ],
    },
    {
      title: "Interior Design",
      project: "Charan Project",
      dates: "25 May 2024 - 26 May 2024",
      status: "In Progress",
      priority: "High",
      team: [
        { name: "Person 1", avatar: "avatar-url" },
        { name: "Person 2", avatar: "avatar-url" },
      ],
    },
    {
      title: "Interior Design",
      project: "Charan Project",
      dates: "25 May 2024 - 26 May 2024",
      status: "In Progress",
      priority: "High",
      team: [
        { name: "Person 1", avatar: "avatar-url" },
        { name: "Person 2", avatar: "avatar-url" },
      ],
    },
    // Add more tasks
  ];
  const meetings = [
    { project: "Charan Project", date: "10 August 2024", time: "4:00 PM" },
    // Add more meetings
  ];

  const taskOverviewData = [50, 30, 20]; // Sample data for Pie Chart
  return (
    <div className="min-h-screen flex flex-col items-center bg-background font-poppins w-full">
      <div
        className={`w-screen flex flex-col bg-layoutColor p-2 h-auto md:pl-24 lg:pl-44`}
      >
        <Header />
        <TaskFilters />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <Task title="My Task" tasks={tasks} />
            <Task title="Assigned Task" tasks={tasks} />
          </div>
          <div className="space-y-4">
            <Meetings meetings={meetings} />
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold">Tasks Overview</h3>
              <PieChart data={taskOverviewData} />
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold">Assigned Tasks Overview</h3>
              <PieChart data={taskOverviewData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
