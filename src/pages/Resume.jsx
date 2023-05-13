import React from "react";
import ExperienceEducation from "../components/ResumeComponents/ExperienceEducation";
import Skills from "../components/ResumeComponents/Skills";

const Resume = () => {
  return (
    <div
      className="ml-[550px] bg-[#0B0612] h-[80vh] my-[4vh] overflow-y-scroll"
      style={{
        boxShadow: "0px 0px 10px 0px #5FBFF9",
      }}
    >
      <ExperienceEducation />
      <Skills />
    </div>
  );
};

export default Resume;
