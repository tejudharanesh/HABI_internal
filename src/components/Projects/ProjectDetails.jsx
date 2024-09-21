import React from "react";

function ProjectDetails() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-layoutColor font-poppins">
      <div
        className={`flex flex-col bg-layoutColor pl-2 md:px-2 h-auto w-screen md:pl-24 lg:pl-40`}
      >
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <PersonalInfo />
            <ProjectInfo />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <GallerySection />
              <Gallery />
            </div>
            <Materials />
          </div>
          <DesignDocuments />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
