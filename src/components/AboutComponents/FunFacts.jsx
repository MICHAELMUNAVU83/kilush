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
      <h1>Fun Facts</h1>
      <div className="flex mt-8 justify-center w-[100%] ">
        {funfactsdetails.map((detail) => (
          <div className="flex cursor-pointer border-white w-[25%] p-2 border-t-2 border-r-2 items-center flex-col gap-2">
            <p className="text-xl h-12 w-12 flex items-center justify-center mx-auto rounded-full border-white border-2 p-2">
              {detail.icon}
            </p>
            <p className="w-[70%] mx-auto text-center">{detail.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FunFacts;
