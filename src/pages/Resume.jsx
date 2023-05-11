import React from "react";
import ExperienceEducation from "../components/ResumeComponents/ExperienceEducation";
import Skills from "../components/ResumeComponents/Skills";

const Resume = () => {
  return (
    <div className="p-8 ml-[100px] h-[600px] overflow-y-scroll">
      <ExperienceEducation />
      <Skills />
    </div>
  );
};

export default Resume;
