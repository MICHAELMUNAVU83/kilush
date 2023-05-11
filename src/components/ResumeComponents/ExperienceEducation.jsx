import React from "react";

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
      <h1 className="text-4xl font-semibold text-start p-4 text-white">
        About Me
      </h1>

      <div className="flex  justify-between">
        <div className="flex flex-col w-[50%]">
          <h1 className="text-2xl p-4 font-semibold text-start">Experience</h1>
          {experiences.map((experience) => (
            <div className="flex flex-col gap-2">
              <p
                className={
                  experience.id === 1 ? " flex justify-center items-center border-green-500 border-2 px-2 w-[40%]" : "bg-red-500 px-2 w-[40%]"
                }
              >
                {experience.timeframe}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-red-500 w-[50%]">hbj k</div>
      </div>
    </div>
  );
};

export default ExperienceEducation;
