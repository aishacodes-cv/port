import React from "react";
import ProjectTemplate from "../components/ProjectTemplate";
import { ProjectData } from "../data/ProjectData";

const ProjectSection = () => {
  return (
    <div className="w-9/12 mx-auto space-y-28 ">
      {ProjectData.projects.map((project, index) => (
        <ProjectTemplate key={index} />
      ))}
    </div>
  );
};

export default ProjectSection;
