import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";

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
      school: "moringa school",
      degree: "data science",
      timeframe: "2020-2021",
      description: "I was a data scientist at moringa school",
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
            <FaBriefcase className="inline-block mr-2" />
            Experience
          </h1>
          {experiences.map((experience) => (
            <div
              className="flex flex-col p-4 gap-2"
              style={{
                borderBottom: "1px solid #fff",
                borderTop: "1px solid #fff",
              }}
            >
              <p
                className={
                  experience.id === 1
                    ? " flex justify-center items-center border-green-500 border-2 p-2 w-[30%]"
                    : "border-gray-400 border-2 p-2 w-[30%]"
                }
              >
                {experience.timeframe}
              </p>
              <p>{experience.company}</p>
              <p>{experience.title}</p>
              <p>{experience.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-[50%] border-l-2 border-white">
          <h1 className="text-2xl p-4 font-semibold text-start">
            <FaUserGraduate className="inline-block mr-2" />
            Education
          </h1>
          {educations.map((education) => (
            <div
              className="flex flex-col p-4 gap-2"
              style={{
                borderBottom: "1px solid #fff",
                borderTop: "1px solid #fff",
              }}
            >
              <p
                className={
                  education.id === 1
                    ? " flex justify-center items-center border-green-500 border-2 p-2 w-[30%]"
                    : "border-gray-400 border-2 p-2 w-[30%]"
                }
              >
                {education.timeframe}
              </p>
              <p>{education.school}</p>
              <p>{education.degree}</p>
              <p>{education.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceEducation;
