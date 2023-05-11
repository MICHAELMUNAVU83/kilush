import React from "react";

import Introduction from "../components/AboutComponents/Introduction";
import FunFacts from "../components/AboutComponents/FunFacts";
import Testimonials from "../components/AboutComponents/Testimonials";
import Pricing from "../components/AboutComponents/Pricing";
import Services from "../components/AboutComponents/Services";
const About = () => {
  return (
    <div>
      <Introduction />
      <Services />
      <Pricing />

      <Testimonials />
      <FunFacts />
    </div>
  );
};

export default About;
