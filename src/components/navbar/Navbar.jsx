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

const Navbar = ({ isExpanded }) => {
  const location = useLocation();
  const [selected, setSelected] = useState(
    location.pathname.split("/")[2] || "meet"
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
      label: "team",
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
    <nav
      className={`fixed bottom-0 left-0 bg-layoutColor md:sticky ${
        isExpanded ? "md:w-[81px]" : "md:w-[150px]"
      } md:flex-shrink-0 h-screen w-full border-r-2 z-10 md:z-10`}
    >
      <div className="flex flex-col justify-between relative h-auto">
        <div className={`hidden md:flex justify-center px-4 items-center py-4`}>
          <img
            src={logo}
            alt="Logo"
            className={`h-auto ml-3 ${isExpanded ? "w-[40px]" : "w-[80px]"}`}
          />
        </div>

        <div className="flex justify-around md:items-start md:flex-col md:space-y-5 w-full">
          {buttons.map((button) => (
            <div key={button.id} className="relative w-full">
              <Link
                to={button.link}
                className={`btn border-none flex flex-col md:flex-row md:items-center md:justify-start shadow-none md:space-x-3 hover:bg-primaryO w-full rounded-none ${
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
                  className={`hidden md:inline font-[18px] ${
                    selected === button.id ? "text-primary" : "text-black"
                  } ${isExpanded ? "md:hidden" : ""}`}
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
