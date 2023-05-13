import React from "react";
import { BsCardList } from "react-icons/bs";
import { GiGiftOfKnowledge } from "react-icons/gi";
const Skills = () => {
  const skills = [
    {
      name: "Data Analysis",
      level: 100,
      difference: 25,
    },

    {
      name: "Machine Learning",
      level: 80,
      difference: 25,
    },

    {
      name: "Web Scraping",
      level: 70,
      difference: 25,
    },
    {
      name: "Database Management",
      level: 70,
      difference: 25,
    },

    {
      name: "Website Automation",
      level: 80,
      difference: 25,
    },

    {
      name: "Model Deployment",
      level: 80,
      difference: 25,
    },
  ];
  const knowldges = [
    "Python",
    "Pandas",
    "Pytorch",
    "Tableau",
    "Selenium",
    "Tensorflow",
    "Scikit-learn",
    "MongoDB",
    "MySQL",
  ];
  return (
    <div>
      <h1 className="text-5xl libre font-semibold text-start p-4 text-white">
        Skills
      </h1>
      <p className="h-[1px] bg-white w-[100%]  my-4" />
      <div className="flex md:flex-row flex-col ">
        <div className="flex p-4 flex-col md:w-[50%]">
          <div className="flex items-center ">
            <h1 className="uppercase font-bold libre text-gray-400 text-2xl">OVERALL</h1>
            <div className="p-2 border-[#5FBFF9] border-2 text-[#5FBFF9] rounded-full flex items-center justify-center ml-2">
              <BsCardList />
            </div>
          </div>
          <p className="h-[2px] bg-[#5FBFF9] md:w-[70%] w-[90%]  my-4" />
          {skills.map((skill) => (
            <div className="flex flex-col my-2">
              <p>{skill.name}</p>
              <div className="flex md:w-[90%] w-[95%] p-2">
                <p className={`bg-green-500 h-[4px] w-[${skill.level}%]`} />
                <p
                  className={`bg-gray-400 h-[4px] w-[${skill.difference}%] `}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex p-4  flex-col md:w-[50%]">
          <div className="flex items-center ">
            <h1 className="uppercase font-bold libre text-gray-400 text-2xl">KNOWLEDGE</h1>
            <div className="p-2 border-[#5FBFF9] border-2 text-[#5FBFF9] rounded-full flex items-center justify-center ml-2">
              <GiGiftOfKnowledge  />
            </div>
          </div>
          <p className="h-[2px] bg-[#5FBFF9] md:w-[70%] w-[90%]  my-4" />
          <ul className=" space-y-4">
            {knowldges.map((knowldge) => (
              <li className="flex my-2  items-center">
                <span className="w-4 h-4 mr-2 text-green-500 fill-current">
                  <svg viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M0 11l2-2 5 5L18 3l2 2L7 18z"
                    ></path>
                  </svg>
                </span>
                <span className="text-white">{knowldge}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
