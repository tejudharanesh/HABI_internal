import { useState } from "react";
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

const Navbar = ({ isExpanded }) => {
  const location = useLocation();
  const [selected, setSelected] = useState(
    location.pathname.split("/")[2] || "home"
  );

  const buttons = [
    {
      id: "home",
      icon: home,
      alt: "Home",
      label: "Home",
      link: "/",
    },
    {
      id: "meeting",
      icon: meeting,
      alt: "Meeting",
      label: "Meeting",
      link: "/",
    },
    {
      id: "projects",
      icon: projects,
      alt: "Projects",
      label: "Projects",
      link: "/",
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
      alt: "Team",
      label: "Team",
      link: "/",
    },
    {
      id: "report",
      icon: report,
      alt: "Report",
      label: "Report",
      link: "/",
    },
    {
      id: "logout",
      icon: logout,
      alt: "Logout",
      label: "Logout",
      link: "/",
    },
  ];

  return (
    <nav
      className={`bg-layoutColor sticky h-screen w-auto border-r-2 z-10 md:z-10`}
    >
      <div className="flex flex-col justify-between h-screen">
        <div className={`hidden md:flex justify-center px-4 items-center py-4`}>
          <img src={logo} alt="Logo" className={`ml-3 w-10 h-10`} />
        </div>

        <div className="flex md:flex-col w-auto gap-y-4 h-screen relative">
          {buttons.map((button) => (
            <div
              key={button.id}
              className={`relative w-auto ${
                button.id === "logout" ? "absolute top-60" : ""
              }`}
            >
              <Link
                to={button.link}
                className={`pl-4 pr-7 py-2 flex flex-col md:flex-row md:space-x-2 hover:bg-primaryO w-full rounded-l-3xl ${
                  selected === button.id ? " bg-primaryO" : "bg-inherit"
                }`}
                onClick={() => setSelected(button.id)}
              >
                <img
                  src={button.icon}
                  alt={button.alt}
                  className={`w-6 h-6 md:ml-4 ${
                    selected === button.id
                      ? "text-primary fill-primary"
                      : "#000000"
                  }`}
                />
                <span
                  className={`hidden lg:flex  font-[18px]  ${
                    selected === button.id ? "text-primary" : "text-black"
                  }`}
                >
                  {button.label}
                </span>
              </Link>
              {selected === button.id && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-teal-500 md:hidden" />
              )}
              <div>{selected === button.id && <SelectionIndicator />}</div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
