import React from "react";
import background from "../../assets/images/background.png";
import Header from "../../components/header/Header";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: "CHA2024",
    name: "Charan Project",
    location: "Marathalli, Bengaluru",
    date: "21 Sept 2024",
    status: "On going",
  },
  {
    id: "CHA2024",
    name: "Charan Project",
    location: "Marathalli, Bengaluru",
    date: "21 Sept 2024",
    status: "Delay",
  },
  {
    id: "CHA2024",
    name: "Charan Project",
    location: "Marathalli, Bengaluru",
    date: "21 Sept 2024",
    status: "On going",
  },
  {
    id: "CHA2024",
    name: "Charan Project",
    location: "Marathalli, Bengaluru",
    date: "21 Sept 2024",
    status: "Delay",
  },
  {
    id: "CHA2024",
    name: "Charan Project",
    location: "Marathalli, Bengaluru",
    date: "21 Sept 2024",
    status: "Delay",
  },
];

const completedProjects = [
  {
    id: "CHA2024",
    name: "Charan Project",
    location: "Marathalli, Bengaluru",
    date: "21 Sept 2024",
    status: "Completed",
  },
  {
    id: "CHA2024",
    name: "Charan Project",
    location: "Marathalli, Bengaluru",
    date: "21 Sept 2024",
    status: "Completed",
  },
  {
    id: "CHA2024",
    name: "Charan Project",
    location: "Marathalli, Bengaluru",
    date: "21 Sept 2024",
    status: "Completed",
  },
  {
    id: "CHA2024",
    name: "Charan Project",
    location: "Marathalli, Bengaluru",
    date: "21 Sept 2024",
    status: "Completed",
  },
  {
    id: "CHA2024",
    name: "Charan Project",
    location: "Marathalli, Bengaluru",
    date: "21 Sept 2024",
    status: "Completed",
  },
];

const StatusBadge = ({ status }) => {
  const getStatusStyles = () => {
    switch (status) {
      case "On going":
        return "text-green-400";
      case "Delay":
        return "text-red-400";
      case "Completed":
        return "text-blue-400";
      default:
        return "";
    }
  };
  const getStatusStyles1 = () => {
    switch (status) {
      case "On going":
        return "bg-green-400";
      case "Delay":
        return "bg-red-400";
      case "Completed":
        return "bg-blue-400";
      default:
        return "";
    }
  };

  return (
    <div
      className={`px-3 py-1 rounded-full text-sm font-semibold bg-white ${getStatusStyles()}`}
    >
      <div
        className={`w-2 h-2 rounded-full inline-block mr-1 ${getStatusStyles1()}`}
      ></div>

      {status}
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-layoutColor rounded-3xl bg-no-repeat w-[173px] h-[262px] md:w-[270px] md:h-[323px] relative cursor-pointer"
      style={{ backgroundImage: `url(${background})` }}
      onClick={() => {
        navigate("/dashboard/projectsDetails");
      }} // Navigate on click
    >
      <div className="relative">
        <div className="absolute top-11 left-4 md:left-auto md:top-2 md:right-2">
          <StatusBadge status={project.status} />
        </div>
        <div className="absolute top-2 left-4 border border-white p-1 px-2 rounded-xl text-sm bg-layoutColor1">
          {project.id}
        </div>
      </div>
      <div className="p-2 absolute bg-white w-[157px] md:w-[250px] h-[118px] md:h-[126px] rounded-b-xl bottom-3 left-2">
        <p className="text-black font-semibold">{project.name}</p>
        <p className="text-black text-sm mb-3">{project.location}</p>
        <p className="text-black text-sm">{project.date}</p>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-layoutColor font-poppins">
      <div
        className={`flex flex-col bg-layoutColor pl-2 md:px-2 h-auto w-screen md:pl-24 lg:pl-40`}
      >
        <Header />
        <div className="p-3 md:p-6 space-y-8">
          {/* Active Projects */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-600">
              Client Meeting
            </h2>
            <button className="bg-primaryO text-primary px-3 py-1.5 rounded-lg border-1 border-primary text-sm">
              + Add project
            </button>
          </div>
          <div className="md:pr-[20%] lg:pr-0">
            <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>

          {/* Completed Projects */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Completed Projects
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {completedProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
