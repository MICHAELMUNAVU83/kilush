import React from "react";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { SiMicrosoftexcel } from "react-icons/si";
import { TbRobot } from "react-icons/tb";
import { SiThealgorithms } from "react-icons/si";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <BsDatabaseFillAdd />,
      title: "Data Analytics",
      description:
        "We provide data analytics services to help you make better decisions for your business.",
    },
    {
      id: 2,
      icon: <SiMicrosoftexcel />,
      title: "Data Management",

      description:
        "We provide data management services to help you make better decisions for your business.",
    },
    {
      id: 3,
      icon: <TbRobot />,
      title: "Data Science",

      description:
        "We provide data science services to help you make better decisions for your business.",
    },
    {
      id: 4,
      icon: <SiThealgorithms />,
      title: "Data Visualization",

      description:
        "We provide data visualization services to help you make better decisions for your business.",
    },
  ];

  return (
    <>
      <h1 className="text-4xl font-semibold text-start p-4 text-white">
        Our Services
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
            <div className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-full">
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
