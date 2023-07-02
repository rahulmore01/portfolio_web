import React from "react";
import Hero from "./hero/Hero";
import { Projects, ProjectsCard } from "./projects/Projects";
import Slider from "./slider/Slider";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <Aboutme /> */}
      <Projects />
      <Slider />
    </div>
  );
};

export default Home;
