import React from "react";
import { GiBookshelf } from "react-icons/gi";
import { VscGraphScatter } from "react-icons/vsc";
import { MdTravelExplore } from "react-icons/md";
import { RiNeteaseCloudMusicFill } from "react-icons/ri";
import { FaCoffee } from "react-icons/fa";
const About = () => {
  const introductiondetails = [
    {
      id: 1,
      title: "Name",
      content: "Harper Ryan",
    },
    {
      id: 2,
      title: "Age",
      content: "25",
    },
    {
      id: 3,
      title: "Address",
      content: "New York, USA",
    },
    {
      id: 4,
      title: "Education",
      content: "Moringa School",
    },
  ];

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
  const introduction = (
    <section id="introduction">
      <h1>About me</h1>
      <div className="flex mt-8 justify-center">
        <p className="w-[50%] border-t-2 border-r-2 p-4 border-white">
          Hello! I'm Harper Ryan. I have rich experience in management,
          accountancy, law, human resources, financial control. I love to talk
          with you about our unique.
        </p>
        <div className="flex flex-col gap-2 border-t-2 border-white p-4 justify-between w-[50%]">
          {introductiondetails.map((detail) => (
            <div className="flex flex-col gap-2">
              <div className="flex w-[80%] mx-auto justify-between">
                <p className="bg-red-500 px-2">Name:</p>
                <p>Harper Ryan</p>
              </div>
              <p className="w-[70%] mx-auto bg-red-500 h-[1px] " />
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const fun_facts = (
    <section id="introduction">
      <h1>Fun Facts</h1>
      <div className="flex mt-8 justify-center w-[100%] ">
        {funfactsdetails.map((detail) => (
          <div className="flex border-white w-[25%] p-2 border-t-2 border-r-2 items-center flex-col gap-2">
            <p className="text-xl h-12 w-12 flex items-center justify-center mx-auto rounded-full border-white border-2 p-2">{detail.icon}</p>
            <p className="w-[70%] mx-auto text-center">{detail.title}</p>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="bg-[#0F0F0F] text-white">
      {introduction}
      {fun_facts}
    </div>
  );
};

export default About;
