import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { MdWorkspacesFilled } from "react-icons/md";
import { MdSchool } from "react-icons/md";

const ExperienceEducation = () => {
  const experiences = [
    {
      id: 1,
      title: "Freelance Data Scientist",
      company: "Upwork",
      description:
        "As an Upwork data scientist freelancer, I work remotely with clients on predictive modeling, data analysis, machine learning, and visualization using Python, R, SQL, Excel, Tableau, and Power BI. Communication and collaboration are key to delivering quality solutions within the deadline.",
      timeframe: "2022-present",
    },
    {
      id: 2,
      title: "Agricultural and Biosystems Engineer",
      company: "Jkuat attachee",
      description:
        "At Jkaut Attachments , I gained valuable hands-on experience in developing and operating heavy machinery, enhancing my industry knowledge and practical skills.",
      timeframe: "July-August 2022",
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
      degree: "Agricultural and Biosystems Engineering",
      timeframe: "2019-2025",
      description:
        "At JKUAT, I acquired skills in product processing and package handling, recycling of waste, maintenance and servicing, soil water analysis, GIS, design and fabrication of equipment, design and control of irrigation systems, and industrial effluent disposal.",
    },
  ];
  return (
    <div>
      <div className="flex  justify-between">
        <div className="flex flex-col w-[50%]">
          <h1 className="text-2xl p-4 font-semibold libre  text-start">
            <FaBriefcase className="text-[#5FBFF9] border-[#5FBFF9]  inline-block mr-2 w-12 h-12 rounded-full  border-2 p-2" />
            Experience
          </h1>
          {experiences.map((experience) => (
            <div
              className="flex flex-col h-[350px] p-4 gap-2"
              style={{
                borderBottom: "1px solid #fff",
                borderTop: "1px solid #fff",
              }}
            >
              <p
                className={
                  experience.id === 1
                    ? " flex justify-center items-center mplus  text-green-500 border-green-500 border-2 p-2 w-[60%]"
                    : " flex justify-center items-center mplus  border-gray-400 border-2 p-2 w-[60%]"
                }
              >
                {experience.timeframe}
              </p>
              <p className="text-gray-500 libre uppercase font-bold">
                {experience.company}
              </p>
              <p className="flex items-center mplus gap-2 text-[#5FBFF9]">
                <MdWorkspacesFilled />

                {experience.title}
              </p>
              <p className="que">{experience.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-[50%] border-l-2 border-white">
          <h1 className="text-2xl libre p-4 font-semibold text-start">
            <FaUserGraduate className="text-[#5FBFF9] border-[#5FBFF9] inline-block mr-2 w-12 h-12 rounded-full  border-2 p-2" />
            Education
          </h1>
          {educations.map((education) => (
            <div
              className="flex flex-col h-[350px] p-4 gap-2"
              style={{
                borderBottom: "1px solid #fff",
                borderTop: "1px solid #fff",
              }}
            >
              <p
                className={
                  education.id === 1
                    ? " flex justify-center items-center mplus text-green-500 border-green-500 border-2 p-2 w-[50%]"
                    : " flex justify-center items-center  mplus border-gray-400 border-2 p-2 w-[50%]"
                }
              >
                {education.timeframe}
              </p>
              <p className="text-gray-500 libre uppercase font-bold">
                {education.school}
              </p>
              <p className="flex items-center mplus text-sm text-[#5FBFF9] gap-2">
                <MdSchool />

                {education.degree}
              </p>
              <p  className="que"> {education.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceEducation;
