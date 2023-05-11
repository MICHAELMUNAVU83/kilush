import React from "react";

const Introduction = () => {
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
  return (
    <section id="introduction">
      <h1 className="text-4xl font-semibold text-start p-4 text-white">
        About Me
      </h1>
      <div className="flex  justify-center">
        <p
          className="w-[50%]  p-4 "
          style={{
            borderRight: "1px solid white",
            borderTop: "1px solid white",
          }}
        >
          Hello! I'm Harper Ryan. I have rich experience in management,
          accountancy, law, human resources, financial control. I love to talk
          with you about our unique.
        </p>
        <div
          className="flex flex-col gap-2  p-4 justify-between w-[50%]"
          style={{
            borderTop: "1px solid white",
          }}
        >
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
};

export default Introduction;
