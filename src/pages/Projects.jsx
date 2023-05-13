import React from "react";
import MyProjects from "../components/ProjectComponents/MyProjects";

const Projects = ({ projects }) => {
  return (
    <div
      className="md:ml-[550px] p-8 bg-[#0B0612] h-[80vh] md:my-[4vh] overflow-y-scroll"
      style={{
        boxShadow: "0px 0px 10px 0px #5FBFF9",
      }}
    >
      <h1 className="text-4xl font-bold libre text-start my-4 text-white">
        Projects
      </h1>
      <p className="h-[1px] bg-white w-[100%]  my-4" />
      <MyProjects projects={projects} />
    </div>
  );
};

export default Projects;
