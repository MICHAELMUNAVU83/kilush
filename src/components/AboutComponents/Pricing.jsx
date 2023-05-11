import React from "react";
import { IoRocketSharp } from "react-icons/io5";
import { FaCrown } from "react-icons/fa";

const Pricing = () => {
  const prices = [
    {
      id: 1,
      icon: <IoRocketSharp />,
      title: "Basic",
      price: 9.99,
      features: [
        "1 GB Storage",
        "2 Users",
        "Send up to 3 GB",
        "Send up to 3 GB",
      ],
    },
    {
      id: 2,
      icon: <FaCrown />,
      title: "Premium",
      price: 19.99,
      features: [
        "1 GB Storage",
        "2 Users",
        "Send up to 3 GB",
        "Send up to 3 GB",
      ],
    },
  ];
  return (
    <div className="flex items-center justify-center my-12  ">
      {prices.map((price) => (
        <div className="flex flex-col items-center justify-center w-1/2 p-4  border-t-2 border-r-2 border-b-2 border-white  shadow-lg">
          <div className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-full">
            {price.icon}
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-white">
            {price.title}
          </h2>
          <span className="mt-1 text-white">
            ${price.price}
            <span className="ml-1 text-sm text-gray-600">/mo</span>
          </span>
          <ul className="mt-6 space-y-4">
            {price.features.map((feature) => (
              <li className="flex items-center">
                <span className="w-4 h-4 mr-2 text-green-500 fill-current">
                  <svg viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M0 11l2-2 5 5L18 3l2 2L7 18z"
                    ></path>
                  </svg>
                </span>
                <span className="text-white">{feature}</span>
              </li>
            ))}
          </ul>
          <p className="bg-white h-[2px]  mx-auto w-[80%] my-4" />
          <p className="uppercase cursor-pointer hover:scale-105 transition-all duration-500">
            Buy Now {">"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Pricing;
