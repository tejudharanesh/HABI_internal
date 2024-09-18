import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import TaskFilters from "../../components/Admin/TaskFilters";
import Task from "../../components/Admin/Task";
import Meetings from "../../components/Admin/Meetings";
import PieChart from "../../components/Admin/PieChart";
import AssignTask from "../../components/Admin/AssignTask";
import AddEmployee from "../../components/Admin/AddEmployee";
import TaskDetails from "../../components/Admin/TaskDetails";
function Home() {
  const [isTaskDrawerOpen, setTaskDrawerOpen] = useState(false);
  const [isAddEmployeeDrawerOpen, setAddEmployeeDrawerOpen] = useState(false);
  const [isTaskDetailsOpen, setTaskDetailsOpen] = useState(false);

  const [filter, setFilter] = useState(""); // New state for filter

  const [selectedTask, setSelectedTask] = useState({}); // New state for selected task

  // Function to toggle the task drawer
  const toggleTaskDrawer = () => {
    setTaskDrawerOpen(!isTaskDrawerOpen);
  };
  const toggleAddEmployeeDrawer = () => {
    setAddEmployeeDrawerOpen(!isAddEmployeeDrawerOpen);
  };
  const toggleTaskDetails = (task) => {
    if (task) {
      setSelectedTask(task);
      console.log(task);

      setTaskDetailsOpen(true);
    } else {
      setTaskDetailsOpen(false);
    }
  };

  useEffect(() => {
    const body = document.body;
    if (isTaskDrawerOpen || isAddEmployeeDrawerOpen || isTaskDetailsOpen) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }

    // Cleanup on component unmount
    return () => {
      body.classList.remove("no-scroll", "no-pointer-events");
    };
  }, [isTaskDrawerOpen, isAddEmployeeDrawerOpen, isTaskDetailsOpen]);

  const tasks = [
    {
      title: "Interior Design",
      project: "Charan Project",
      projectId: "CHA2024",
      category: "Architecture design",
      dates: "25 May 2024 - 26 May 2024",
      status: "Pending",
      priority: "High Priority",
      team: [
        { name: "Person 1", avatar: "avatar-url" },
        { name: "Person 2", avatar: "avatar-url" },
      ],
    },
    {
      title: "Interior Design",
      project: "Teju project",
      projectId: "CHA2024",
      category: "Architecture design",
      dates: "25 May 2024 - 26 May 2024",
      status: "In Progress",
      priority: "Low",
      team: [
        { name: "Person 1", avatar: "avatar-url" },
        { name: "Person 2", avatar: "avatar-url" },
      ],
    },
    {
      title: "Interior Design",
      project: "Balaji Project",
      projectId: "CHA2024",
      category: "Architecture design",
      dates: "25 May 2024 - 26 May 2024",
      status: "In Progress",
      priority: "Low",
      team: [
        { name: "Person 1", avatar: "avatar-url" },
        { name: "Person 2", avatar: "avatar-url" },
      ],
    },
    {
      title: "Interior Design",
      project: "Charan Project",
      dates: "25 May 2024 - 26 May 2024",
      status: "Pending",
      priority: "High Priority",
      team: [
        { name: "Person 1", avatar: "avatar-url" },
        { name: "Person 2", avatar: "avatar-url" },
      ],
    },
    // Add more tasks
  ];
  const meetings = [
    {
      project: "Charan Project",
      date: "10 August 2024",
      time: "4:00 PM",
      projectId: "CHA2024",
    },
    {
      project: "Charan Project",
      date: "10 August 2024",
      time: "4:00 PM",
      projectId: "CHA2024",
    },

    {
      project: "Charan Project",
      date: "10 August 2024",
      time: "4:00 PM",
      projectId: "CHA2024",
    },

    // Add more meetings
  ];

  const taskOverviewData = [50, 30, 20]; // Sample data for Pie Chart

  const filteredTasks = tasks.filter((task) => {
    if (filter === "") return true; // No filter applied
    return task.status === filter || task.priority === filter; // Matching either status or priority
  });

  return (
    <div className="min-h-screen flex flex-col items-center bg-background font-poppins">
      <div
        className={`flex flex-col bg-layoutColor pl-2 md:px-2 h-auto w-screen md:pl-24 lg:pl-40`}
      >
        <Header />
        <TaskFilters
          toggleTaskDrawer={toggleTaskDrawer}
          toggleAddEmployeeDrawer={toggleAddEmployeeDrawer}
          setFilter={setFilter} // Pass setFilter function
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pr-3 md:px-4 gap-4">
          <div className="md:col-span-1 lg:col-span-2 xl:col-span-3">
            <Task
              title="My Task"
              tasks={filteredTasks}
              toggleTaskDetails={toggleTaskDetails}
            />
            <Task
              title="Assigned Task"
              tasks={filteredTasks}
              toggleTaskDetails={toggleTaskDetails}
            />
          </div>
          <div className="space-y-4  md:col-span-1 xl:col-span-1">
            <Meetings meetings={meetings} />
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
            <div className="bg-layoutColor p-2 rounded-lg border-2">
              <h3 className="font-semibold text-black">
                Assigned Tasks Overview
              </h3>
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
          </div>
        </div>
        {isTaskDrawerOpen && (
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
            onClick={toggleTaskDrawer}
          ></div>
        )}

        {/* Sliding Drawer for Assign Task */}
        <div
          className={`fixed top-0 right-0 w-full md:w-1/3 h-full bg-layoutColor shadow-lg z-50 transform transition-transform duration-300 overflow-y-auto ${
            isTaskDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <AssignTask closeDrawer={toggleTaskDrawer} />
        </div>

        {/* Overlay for Add Employee Drawer */}
        {isAddEmployeeDrawerOpen && (
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
            onClick={toggleAddEmployeeDrawer}
          ></div>
        )}

        {/* Sliding Drawer for Add Employee */}
        <div
          className={`fixed top-0 right-0 w-full md:w-1/3 h-full bg-layoutColor shadow-lg z-50 transform transition-transform duration-300 overflow-y-auto ${
            isAddEmployeeDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <AddEmployee closeDrawer={toggleAddEmployeeDrawer} />
        </div>

        {/* Overlay for task Details */}
        {isTaskDetailsOpen && (
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
            onClick={toggleTaskDetails}
          ></div>
        )}

        {/* Sliding Drawer for Task Details */}
        <div
          className={`fixed top-0 right-0 w-full md:w-1/3 h-full bg-layoutColor shadow-lg z-50 transform transition-transform duration-300 overflow-y-auto ${
            isTaskDetailsOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <TaskDetails
            closeDrawer={() => {
              toggleTaskDetails(false);
            }}
            task={selectedTask}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
