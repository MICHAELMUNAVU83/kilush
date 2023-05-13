import React from "react";
import { IoRocketSharp } from "react-icons/io5";
import { FaCrown } from "react-icons/fa";

const Pricing = () => {
  const prices = [
    {
      id: 1,
      icon: <IoRocketSharp />,
      title: "Basic",
      price: "24K KSH",
      features: ["1 website scrapped", "Database mangement", "1 model trained"],
    },
    {
      id: 2,
      icon: <FaCrown />,
      title: "Premium",
      price: "40K KSH",
      features: [
        "4 website scrapped",
        "Database mangement",
        "3 models trained",
      ],
    },
  ];
  return (
    <>
      <h1 className="text-4xl font-bold libre text-start p-4 text-white">
        Rates
      </h1>

      <div className="flex md:flex-row flex-col items-center justify-center my-8  ">
        {prices.map((price) => (
          <div
            className="flex flex-col items-center justify-center w-[90%] md:w-1/2 p-4 border-l-2 md:border-l-0 border-t-2 border-r-2 border-b-2  border-white  shadow-lg"
            style={{
              borderTop: "1px solid white",
              borderBottom: "1px solid white",
              borderRight: "1px solid white",
            }}
          >
            <div className="flex items-center justify-center w-12 h-12 bg-[#5FBFF9] text-black rounded-full">
              {price.icon}
            </div>
            <h2 className="mt-4 text-2xl mplus font-semibold text-white">
              {price.title}
            </h2>
            <span className="mt-1 text-gray-600 que">{price.price}</span>
            <ul className="mt-6 space-y-4">
              {price.features.map((feature) => (
                <li className="flex que items-center">
                  <span className="w-4 h-4 mr-2 text-green-500 fill-current">
                    <svg viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M0 11l2-2 5 5L18 3l2 2L7 18z"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-gray-400">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="bg-white h-[2px]  mx-auto w-[80%] my-4" />
            <p className="uppercase cursor-pointer mplus hover:scale-105 transition-all duration-500">
              Order Now {">"}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pricing;
