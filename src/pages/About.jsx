import React from "react";
import Introduction from "../components/AboutComponents/Introduction";
import FunFacts from "../components/AboutComponents/FunFacts";
import Testimonials from "../components/AboutComponents/Testimonials";
import Pricing from "../components/AboutComponents/Pricing";
import Services from "../components/AboutComponents/Services";

const About = () => {
  return (
    <div
      className="md:ml-[550px] bg-[#0B0612]   h-[80vh] md:mt-[5vh] mb-[5vh] overflow-y-scroll"
      style={{
        boxShadow: "0px 0px 10px 0px #5FBFF9",
      }}
      id="about"
    >
      <Introduction />
      <Services />
      <Pricing />

      <Testimonials />
      <FunFacts />
    </div>
  );
};

export default About;
