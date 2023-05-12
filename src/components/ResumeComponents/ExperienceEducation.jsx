import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { MdWorkspacesFilled } from "react-icons/md";
import { MdSchool } from "react-icons/md";

const ExperienceEducation = () => {
  const experiences = [
    {
      id: 1,
      title: "data analyst",
      company: "moringa school",

      description: "I was a data analyst at moringa school",
      timeframe: "2022-present",
    },
    {
      id: 2,
      title: "data scientist",
      company: "moringa school",
      description: "I was a data scientist at moringa school",
      timeframe: "2020-2021",
    },
  ];
  const educations = [
    {
      id: 1,
      school: "Moringa School",
      degree: "Data Science Course",
      timeframe: "2022-present",
      description:
        "At Moringa School, I gained expertise in Python, data analysis, SQL, scientific computing, and machine learning. Proficient in libraries, statistical analysis, and advanced techniques. Ready for an impactful data science world.",
    },
    {
      id: 2,
      school: "JKUAT",
      degree: "2016-2020",
      timeframe: "2020-2021",
      description: "I was a data scientist at moringa school",
    },
  ];
  return (
    <div>
      <div className="flex  justify-between">
        <div className="flex flex-col w-[50%]">
          <h1 className="text-2xl p-4 font-semibold text-start">
            <FaBriefcase className="text-[#5FBFF9] border-[#5FBFF9]  inline-block mr-2 w-12 h-12 rounded-full  border-2 p-2" />
            Experience
          </h1>
          {experiences.map((experience) => (
            <div
              className="flex flex-col h-[300px] p-4 gap-2"
              style={{
                borderBottom: "1px solid #fff",
                borderTop: "1px solid #fff",
              }}
            >
              <p
                className={
                  experience.id === 1
                    ? " flex justify-center items-center  text-green-500 border-green-500 border-2 p-2 w-[50%]"
                    : " flex justify-center items-center  border-gray-400 border-2 p-2 w-[50%]"
                }
              >
                {experience.timeframe}
              </p>
              <p className="text-gray-500 uppercase font-bold">
                {experience.company}
              </p>
              <p className="flex items-center gap-2">
                <MdWorkspacesFilled className="text-[#5FBFF9] " />

                {experience.title}
              </p>
              <p>{experience.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-[50%] border-l-2 border-white">
          <h1 className="text-2xl p-4 font-semibold text-start">
            <FaUserGraduate className="text-[#5FBFF9] border-[#5FBFF9] inline-block mr-2 w-12 h-12 rounded-full  border-2 p-2" />
            Education
          </h1>
          {educations.map((education) => (
            <div
              className="flex flex-col h-[300px] p-4 gap-2"
              style={{
                borderBottom: "1px solid #fff",
                borderTop: "1px solid #fff",
              }}
            >
              <p
                className={
                  education.id === 1
                    ? " flex justify-center items-center text-green-500 border-green-500 border-2 p-2 w-[50%]"
                    : " flex justify-center items-center  border-gray-400 border-2 p-2 w-[50%]"
                }
              >
                {education.timeframe}
              </p>
              <p className="text-gray-500 uppercase font-bold">
                {education.school}
              </p>
              <p className="flex items-center gap-2">
                <MdSchool className="text-[#5FBFF9] " />

                {education.degree}
              </p>
              <p>{education.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceEducation;
