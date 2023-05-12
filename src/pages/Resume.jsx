import React from "react";
import ExperienceEducation from "../components/ResumeComponents/ExperienceEducation";
import Skills from "../components/ResumeComponents/Skills";

const Resume = () => {
  return (
    <div className="ml-[550px] bg-[#0F0F0F] h-[80vh] my-[4vh] overflow-y-scroll">
      <ExperienceEducation />
      <Skills />
    </div>
  );
};

export default Resume;
