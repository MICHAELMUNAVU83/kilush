import React from "react";

const Skills = () => {
  const skills = [
    {
      name: "Data Analysis",
      level: 80,
      difference: 30,
    },

    {
      name: "Machine Learning",
      level: 80,
      difference: 25,
    },

    {
      name: "Web Scraping",
      level: 90,
      difference: 30,
    },
    {
      name: "Database Management",
      level: 80,
      difference: 30,
    },

    {
      name: "Website Automation",
      level: 80,
      difference: 25,
    },

    {
      name: "Model Deployment",
      level: 90,
      difference: 30,
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
      <h1 className="text-4xl font-semibold text-start p-4 text-white">
        Skills
      </h1>
      <div className="flex ">
        <div className="flex p-4 flex-col w-[50%]">
          <h1 className="uppercase">OVERALL</h1>
          <p className="h-[1px] bg-red-500 w-[70%]  my-2" />
          {skills.map((skill) => (
            <div className="flex flex-col my-2">
              <p>{skill.name}</p>
              <div className="flex w-[90%] p-2">
                <p
                  className={`bg-green-500 h-[4px] w-[${skill.level}%]`}
                />
                <p
                  className={`bg-gray-400 h-[4px] w-[${skill.difference}%] `}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex p-4  flex-col w-[50%]">
          <h1 className="uppercase">KNOWLEDGE</h1>
          <p className="h-[1px] bg-red-500 w-[70%]  my-2" />
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
