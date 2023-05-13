import React from "react";

const Introduction = () => {
  const introductiondetails = [
    {
      id: 1,
      title: "Name",
      content: "Amos Kibet",
    },
    {
      id: 2,
      title: "Location",
      content: "Nairobi, Kenya",
    },
    {
      id: 3,
      title: "Freelance",
      content: "Available",
    },
    {
      id: 4,
      title: "Education",
      content: "Moringa School",
    },
  ];
  return (
    <section id="introduction">
      <h1 className="text-4xl libre font-bold text-start p-4 text-white">
        About Me
      </h1>
      <div className="flex  justify-center">
        <p
          className="w-[50%] text-gray-400  p-4 "
          style={{
            borderRight: "1px solid white",
            borderTop: "1px solid white",
          }}
        >
          I'm Amos Kibet, a dedicated Data Scientist passionate about uncovering
          insights from complex datasets. From data analysis to machine
          learning, I'm here to share my expertise. Whether you're a data
          enthusiast, a business owner, or simply curious, I've got you covered.
          Let's dive into the world of data science together!
        </p>
        <div
          className="flex flex-col gap-2  p-4 justify-between w-[50%]"
          style={{
            borderTop: "1px solid white",
          }}
        >
          {introductiondetails.map((detail) => (
            <div className="flex flex-col gap-2">
              <div className="flex w-[80%] mx-auto items-center justify-between">
                <p className="bg-[#5FBFF9] rounded-md flex justify-center text-black items-center mplus  w-[90px]">{detail.title}:</p>
                <p className="text-gray-400 QUE">{detail.content}</p>
              </div>
              <p className="w-[70%] mx-auto bg-[#5FBFF9] h-[1px] " />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
