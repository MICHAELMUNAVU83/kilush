import React from "react";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { TbRobot } from "react-icons/tb";
import { SiSimpleanalytics } from "react-icons/si";
import { SiWebmoney } from "react-icons/si";
import { AiFillDatabase } from "react-icons/ai";
import {GrInternetExplorer} from "react-icons/gr"

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <SiSimpleanalytics />,
      title: "Data Analysis",
      description:
        " Analyzing data to derive meaningful insights for informed decision-making.",
    },
    {
      id: 2,
      icon: <SiWebmoney />,
      title: "Web Scrapping",

      description:
        "Extracting data from websites for analysis or automation purposes.",
    },
    {
      id: 3,
      icon: <BsDatabaseFillAdd />,
      title: "Database Management",

      description:
        " Organizing and optimizing data storage for efficient retrieval and manipulation.",
    },
    {
      id: 4,
      icon: <TbRobot />,
      title: "Machine Learning",

      description:
        "Utilizing algorithms to enable systems to learn and improve autonomously.",
    },
    {
      id: 5,
      icon: <AiFillDatabase />,
      title: "Model Deployment",
      description:
        "Deploying machine learning models to production for real-world use.",
    },
    {
      id: 6,
      icon: <GrInternetExplorer />,
      title: "Website Automation",
      description:
        "Automating repetitive tasks on websites to save time and effort.",
    },
  ];

  return (
    <>
      <h1 className="text-4xl font-semibold text-start p-4 text-white">
        My Services
      </h1>
      <div className="grid grid-cols-2 my-8">
        {services.map((service) => (
          <div
            className="flex flex-col items-center justify-center  p-4  shadow-lg"
            style={{
              borderTop: "1px solid white",
              borderBottom: "1px solid white",
              borderRight: "1px solid white",
            }}
          >
            <div className="flex items-center justify-center w-12 h-12 bg-[#5FBFF9] text-black rounded-full">
              {service.icon}
            </div>

            <h2 className="mt-4 text-2xl font-semibold text-white">
              {service.title}
            </h2>
            <p className="text-center text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
