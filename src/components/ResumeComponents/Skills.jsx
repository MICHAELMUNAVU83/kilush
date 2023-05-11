import React from "react";

const Skills = () => {
  const skills = [
    {
      name: "Data Structures",
      level: 70,
      difference: 30,
    },

    {
      name: "C++",
      level: 80,
      difference: 20,
    },

    {
      name: "C++",
      level: 90,
      difference: 10,
    },
  ];
  return (
    <div>
      <h1 className="text-4xl font-semibold text-start p-4 text-white">
        Skills
      </h1>
      <div className="flex">
        <div className="flex p-4 flex-col w-[50%]">
          <h1 className="uppercase">OVERALL</h1>
          <p className="h-[1px] bg-red-500 w-[70%]  my-2" />
          {skills.map((skill) => (
            <div className="flex flex-col my-2">
              <p>{skill.name}</p>
              <div className="flex w-[90%] p-2">
                <p
                  className={`bg-green-500 h-[8px] w-[${skill.level}%] my-2`}
                />
                <p
                  className={`bg-gray-400 h-[8px] w-[${skill.difference}%] my-2`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
