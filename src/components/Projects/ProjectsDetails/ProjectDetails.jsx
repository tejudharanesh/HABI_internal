import React from "react";
import Header from "../../header/Header";
import cover from "../../../assets/images/cover.png";
import profile from "../../../assets/images/profile.png";
import PersonalInformation from "./PersonalInformation";
import ProjectInformation from "./ProjectInformation";
import DVisualise from "./DVisualise";
import Gallery from "./Gallery";
import Materials from "./Materials";
import TimelinePayment from "./TimelinePayment";
import Documents from "./Documents";
function ProjectDetails() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-layoutColor font-poppins">
      <div
        className={`flex flex-col bg-layoutColor  md:px-2 h-auto w-screen md:pl-24 lg:pl-40`}
      >
        <Header />
        <div className="md:hidden md:px-4 p-2">
          <TimelinePayment />
        </div>
        <div className="p-1 md:p-4 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
            <div className="col-span-1 lg:col-span-2 border-2 rounded-xl p-2">
              <div className="relative w-full h-40">
                <img
                  src={cover}
                  alt="Background"
                  className="w-full h-[110px] object-cover md:rounded-lg "
                />
                <div className="absolute bottom-0 left-1 flex items-center">
                  <img
                    src={profile}
                    alt="Profile"
                    className="w-[94px] h-[94px] rounded-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <div className="lg:col-span-1 p-1 lg:hidden">
                  <PersonalInformation />
                  <ProjectInformation />
                  <DVisualise />

                  <Gallery />
                </div>
                <div className="hidden lg:inline lg:col-span-1 p-1">
                  <PersonalInformation />
                  <DVisualise />
                  <Gallery />
                </div>
                <div className="lg:col-span-1 p-1 lg:hidden">
                  <Materials />
                </div>
                <div className="hidden lg:inline lg:col-span-1 p-1">
                  <ProjectInformation />
                  <Materials />
                </div>
              </div>
            </div>
            <div className="col-span-1 p-1">
              <div className="hidden md:inline">
                <TimelinePayment />
              </div>

              <Documents />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
