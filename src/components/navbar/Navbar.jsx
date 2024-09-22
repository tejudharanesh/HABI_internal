import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SelectionIndicator from "./SelectionIndicator";

import home from "../../assets/svg/home.svg";
import leads from "../../assets/svg/leads.svg";
import meeting from "../../assets/svg/meeting.svg";
import projects from "../../assets/svg/projects.svg";
import report from "../../assets/svg/report.svg";
import team from "../../assets/svg/team.svg";
import vendors from "../../assets/svg/vendors.svg";
import logo from "../../assets/habi_logo.png";
import logout from "../../assets/svg/logout.svg";
import hamberger from "../../assets/svg/burger.svg";
import close from "../../assets/svg/close.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [selected, setSelected] = useState(
    location.pathname.split("/")[2] || "home"
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const buttons = [
    {
      id: "home",
      icon: home,
      alt: "Home",
      label: "Home",
      link: "/dashboard",
    },
    {
      id: "meeting",
      icon: meeting,
      alt: "Meeting",
      label: "Meetings",
      link: "/dashboard/meeting",
    },
    {
      id: "projects",
      icon: projects,
      alt: "Projects",
      label: "Projects",
      link: "/dashboard/projects",
    },
    {
      id: "leads",
      icon: leads,
      alt: "Leads",
      label: "Leads",
      link: "/",
    },
    {
      id: "vendors",
      icon: vendors,
      alt: "Vendors",
      label: "Vendors",
      link: "/",
    },
    {
      id: "team",
      icon: team,
      alt: "Teams",
      label: "Teams",
      link: "/",
    },
    {
      id: "report",
      icon: report,
      alt: "Report",
      label: "Report",
      link: "/",
    },
  ];

  return (
    <div className="fixed top-0 left-0 md:w-24 lg:w-40 z-20">
      {/* Side Navbar */}
      <div
        className={`h-full bg-layoutColor text-white transform md:translate-x-0 ${
          isOpen ? "translate-x-0 animate-elasticSlide " : "hidden md:inline"
        } transition-transform duration-300 ease-in-out md:translate-x-0`}
      >
        <nav className={`bg-layoutColor border-r-2 pt-10 md:pt-0 h-screen`}>
          <div className="flex flex-col justify-between h-screen relative">
            <div className={`flex justify-center px-4 items-center py-4`}>
              <img
                src={logo}
                alt="Logo"
                className={`ml-3 w-10 h-10 hidden md:inline`}
              />
            </div>

            <div className="flex flex-col w-auto gap-y-2 xl:gap-y-4 h-screen relative">
              {buttons.map((button) => (
                <div key={button.id} className={`relative w-auto `}>
                  <Link
                    to={button.link}
                    className={`px-7 md:px-3 lg:pl-2 lg:pr-5 py-2 flex flex-row space-x-3 hover:bg-primaryO w-full ${
                      selected === button.id ? " bg-primaryO" : "bg-inherit"
                    }`}
                    onClick={() => setSelected(button.id)}
                  >
                    <img
                      src={button.icon}
                      alt={button.alt}
                      className={`w-6 h-6 md:ml-6 ${
                        selected === button.id
                          ? "text-primary fill-primary"
                          : "#000000"
                      }`}
                    />
                    <span
                      className={`md:hidden lg:flex  font-[18px]  ${
                        selected === button.id ? "text-primary" : "text-black"
                      }`}
                    >
                      {button.label}
                    </span>
                  </Link>

                  <div>{selected === button.id && <SelectionIndicator />}</div>
                </div>
              ))}
              <button className="bg-layoutColor absolute bottom-10 outline-none focus:outline-none border-none ring-0">
                <img
                  src={logout}
                  alt="Logout"
                  className="inline-block mr-3 ml-4"
                />
                <span className="text-black inline-block md:hidden lg:inline">
                  Logout
                </span>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Hamburger Button */}
      <button
        className="md:hidden fixed top-2 z-50 bg-layoutColor outline-none focus:outline-none border-none ring-0"
        onClick={toggleMenu}
      >
        <img src={isOpen ? close : hamberger} alt="" className="w-6 p-0 h-6" />
      </button>
    </div>
  );
};

export default Navbar;
