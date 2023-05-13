import React from "react";
import { GiBookshelf } from "react-icons/gi";
import { VscGraphScatter } from "react-icons/vsc";
import { MdTravelExplore } from "react-icons/md";
import { RiNeteaseCloudMusicFill } from "react-icons/ri";
import { FaCoffee } from "react-icons/fa";
const FunFacts = () => {
  const funfactsdetails = [
    {
      id: 1,
      title: "20 books read",
      icon: <GiBookshelf />,
    },
    {
      id: 2,
      title: "100 graphs made",
      icon: <VscGraphScatter />,
    },
    {
      id: 3,
      title: "10 countries visited",
      icon: <MdTravelExplore />,
    },
    {
      id: 4,
      title: "50 albums listened",
      icon: <RiNeteaseCloudMusicFill />,
    },
    {
      id: 5,
      title: "1000 cups of coffee",
      icon: <FaCoffee />,
    },
  ];
  return (
    <section id="introduction">
      <h1 className="text-4xl font-bold libre text-start p-4 text-white">
        Fun Facts
      </h1>
      <div className="flex mt-8 justify-center w-[100%] ">
        {funfactsdetails.map((detail) => (
          <button
            className="flex cursor-pointer  w-[25%] p-2  items-center flex-col gap-2"
            style={{
              borderTop: "1px solid white",

              borderRight: "1px solid white",
            }}
          >
            <p className="text-xl h-12 w-12 flex items-center text-[#5FBFF9] justify-center mx-auto rounded-full border-[#5FBFF9] border-2 p-2">
              {detail.icon}
            </p>
            <p className="w-[70%] mx-auto text-gray-400 que  text-sm text-center">
              {detail.title}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default FunFacts;
