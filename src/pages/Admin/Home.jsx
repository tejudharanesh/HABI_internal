import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import TaskFilters from "../../components/Home/TaskFilters";
import { Task, Task1 } from "../../components/Home/Task";
import Meetings from "../../components/Home/Meetings";
import PieChart from "../../components/Home/PieChart";
import AssignTask from "../../components/Home/AssignTask";
import AddEmployee from "../../components/Home/AddEmployee";
import TaskDetails from "../../components/Home/TaskDetails";
import profile from "../../assets/images/profile.png";
import arrow from "../../assets/svg/downArrow.svg";
import DelayReport from "../../components/Home/DelayReport";

function Home() {
  const role = "Architect";
  const [isTaskDrawerOpen, setTaskDrawerOpen] = useState(false);
  const [isAddEmployeeDrawerOpen, setAddEmployeeDrawerOpen] = useState(false);
  const [isTaskDetailsOpen, setTaskDetailsOpen] = useState(false);

  const [filter, setFilter] = useState(""); // New state for filter

  const [selectedTask, setSelectedTask] = useState({}); // New state for selected task

  const [openClientIndex, setOpenClientIndex] = useState(null);

  const toggleClientTasks = (clientIndex) => {
    if (openClientIndex === clientIndex) {
      setOpenClientIndex(null); // Close the tasks if the same client is clicked again
    } else {
      setOpenClientIndex(clientIndex); // Open the clicked client's tasks
    }
  };

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
      body.classList.remove("no-scroll");
    };
  }, [isTaskDrawerOpen, isAddEmployeeDrawerOpen, isTaskDetailsOpen]);

  // Task state to store tasks
  const [tasks, setTasks] = useState([
    {
      title: "Interior Design",
      project: "Charan Project",
      projectId: "CHA2024",
      clientId: "1272829",
      category: "Architecture design",
      dueDate: "26 mar 2024",
      status: "Pending",
      priority: "High Priority",
      description: "this is a description for the task so complete fast ",
      team: [
        { name: "Darshan", desgn: "architect", avatar: profile },
        { name: "Teju", desgn: "Developer", avatar: profile },
      ],
    },
    // Other tasks...
  ]);

  const projects = [
    {
      clients: [
        {
          clientName: "jdjdjk2233",
          tasks: [
            {
              title: "Site Clearance",
              project: "Charan Project",
              projectId: "CHA2024",
              clientId: "1272829",
              Date: "26 mar 2024 - 27 mar 2024",
              status: "Pending",
              progress: 10,
            },
            {
              title: "Site",
              project: "Charan Project",
              projectId: "CHA2024",
              clientId: "1272829",
              Date: "2 mar 2024 - 7 mar 2024",
              status: "Pending",
              progress: 70,
            },
          ],
        },
        {
          clientName: "teju223",
          tasks: [
            {
              title: "Site Clearance",
              project: "Charan ",
              projectId: "CHA2024",
              clientId: "1272829",
              Date: "6 mar 2024 - 7 mar 2024",
              status: "Pending",
              progress: 50,
            },
            {
              title: "Clearance",
              project: "Charan Project",
              projectId: "CHA2024",
              clientId: "1272829",
              Date: "26 mar 2024 - 27 mar 2024",
              status: "Pending",
              progress: 80,
            },
          ],
        },
      ],
    },
  ];
  // Other tasks...
  const addNewTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const meetings = [
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
    <div className="min-h-screen flex flex-col items-center bg-layoutColor font-poppins">
      <div
        className={`flex flex-col bg-layoutColor pl-2 md:px-2 h-auto w-screen md:pl-24 lg:pl-40`}
      >
        <Header title="Home" />
        <TaskFilters
          role={role}
          toggleTaskDrawer={toggleTaskDrawer}
          toggleAddEmployeeDrawer={toggleAddEmployeeDrawer}
          setFilter={setFilter} // Pass setFilter function
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pr-3 md:px-4 gap-4">
          <div className="md:col-span-1 lg:col-span-2 xl:col-span-3">
            <h4 className="text-black font-semibold mb-3">My Task</h4>
            <Task tasks={filteredTasks} toggleTaskDetails={toggleTaskDetails} />
            {role == "Admin" && (
              <Task
                tasks={filteredTasks}
                toggleTaskDetails={toggleTaskDetails}
              />
            )}
            {role === "siteSupervisor" ||
              (role === "Architect" &&
                projects.map((project, projectIndex) =>
                  project.clients.map((client, clientIndex) => (
                    <div key={clientIndex} className="dropdown my-10">
                      {/* Client name that toggles the visibility of tasks */}
                      <p
                        className="text-black my-1 ml-2 cursor-pointer w-fit"
                        onClick={() => toggleClientTasks(clientIndex)} // Toggle tasks on click
                      >
                        {client.clientName}
                        <img
                          src={arrow}
                          alt=""
                          className={`inline ml-2 ${
                            clientIndex == openClientIndex
                              ? "pb-1"
                              : "rotate-180"
                          }`}
                        />
                      </p>

                      {/* Conditionally render Task1 based on the open client */}
                      {openClientIndex === clientIndex && (
                        <Task1 tasks={client.tasks} />
                      )}
                    </div>
                  ))
                ))}
          </div>
          <div className="space-y-4 md:col-span-1 xl:col-span-1">
            {role == "siteSupervisor" ? (
              <DelayReport />
            ) : (
              <Meetings meetings={meetings} />
            )}

            {role === "siteSupervisor" ||
              (role === "Architect" &&
                projects.map((project, projectIndex) =>
                  project.clients.map((client, clientIndex) => (
                    <PieChart
                      data={taskOverviewData}
                      title={client.clientName}
                    />
                  ))
                ))}
            {tasks.length >= 1 && <PieChart data={taskOverviewData} />}
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
          className={`fixed top-0 right-0 w-full md:w-2/4 lg:w-[40%] xl:w-1/3 h-full bg-layoutColor shadow-lg z-50 transform transition-transform duration-300 overflow-y-auto ${
            isTaskDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <AssignTask closeDrawer={toggleTaskDrawer} addNewTask={addNewTask} />
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
          className={`fixed top-0 right-0 w-full md:w-2/4 lg:w-[40%] xl:w-1/3 h-full bg-layoutColor shadow-lg z-50 transform transition-transform duration-300 overflow-y-auto ${
            isAddEmployeeDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <AddEmployee closeDrawer={toggleAddEmployeeDrawer} />
        </div>

        {/* Overlay for task Details */}
        {isTaskDetailsOpen && (
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
            onClick={() => {
              setTaskDetailsOpen(false);
            }}
          ></div>
        )}

        {/* Sliding Drawer for Task Details */}
        <div
          className={`fixed top-0 right-0 w-full md:w-2/4 lg:w-[40%] xl:w-1/3 h-full bg-layoutColor shadow-lg z-50 transform transition-transform duration-300 overflow-y-auto ${
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
