import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import MySkills from "./MySkills";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <MySkills></MySkills>
        <Project></Project>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  );
};

export default Main;
