import React from "react";

import Introduction from "../components/AboutComponents/Introduction";
import FunFacts from "../components/AboutComponents/FunFacts";
import Testimonials from "../components/AboutComponents/Testimonials";
const About = () => {
  return (
    <div>
      <Introduction />

      <Testimonials />
      <FunFacts />
    </div>
  );
};

export default About;
