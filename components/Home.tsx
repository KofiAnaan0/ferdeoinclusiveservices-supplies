import React from "react";
import Hero from "./HomePage/Hero";
import Approach from "./HomePage/Approach";
import Contact from "./HomePage/Contact";
// import PainPoint from "./HomePage/PainPoint";
import LogoCloud from "./logo-cloud";
import Story from "./HomePage/Story";
import Product from "./HomePage/Product";

const Home = () => {
  return (
    <div className="w-full space-y-10">
      <Hero />
      <LogoCloud />
      <Story />
      {/* <PainPoint /> */}
      {/* <Approach /> */}
      <Product />
      <Contact />
    </div>
  );
};

export default Home;
