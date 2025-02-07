import React from "react";
import { Typewriter } from "react-simple-typewriter";
import image from "../assets/myImage.png";
import resume from '../assets/Abdullah Resume (1).pdf'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section id="home">
          <div className="flex mt-[64px] gap-12 md:gap-2 flex-col-reverse md:flex-row items-center justify-between px-10 bg-black py-20 text-white">
      {/* Left Side Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-3">
        <p className="text-3xl font-semibold text-white">Hello I'm</p>
        <h1 className="text-5xl font-bold text-white">ABDULLAH AL-MAMUN</h1>
        <h1 className="text-xl md:text-3xl font-bold mt-4">
          {" "}
          <span className="text-blue-400">
            <Typewriter
              words={["Frontend Developer💻", "Junior Web Developer🖥️", "Creative Designer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="mt-6 text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto labore
          sint rem quis magni nostrum.
        </p>
        <div className="mt-8 flex justify-center md:justify-start gap-4">
        <button className="btn bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg shadow-md hover:from-cyan-500 hover:to-blue-500 transition-all duration-300">
           
           <a 
           download
           href={resume}>
            Get Resume
           </a>
          </button>
          <button className="transition-all duration-300 px-6 py-3 border border-blue-400 text-blue-400 rounded-lg shadow-md hover:bg-blue-400 hover:text-white">
            
            <a href="#contact">
              Contact Me
            </a>
          </button>
        </div>
        {/* Social Media Links */}
        <div className="mt-6 flex justify-center md:justify-start gap-6">
          <a
            href="https://github.com/abdullahalmamun111"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdullah-al-mamun-185b12317/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-400 text-white p-4 rounded-full shadow-lg hover:bg-blue-500 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a
            href="https://www.facebook.com/md.abdullah.almamun.778256"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-800 text-white p-4 rounded-full shadow-lg hover:bg-blue-900 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 flex justify-center">
        <div className="relative group">
          {/* Gradient Circle */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-400 to-green-400 rounded-full blur-md group-hover:blur-xl transition-all duration-500"></div>
          {/* Image */}
          <img
            src={image}
            alt="Hero"
            className="relative w-full max-w-md rounded-full border-[5px] border-white  transition-all duration-500"
          />
        </div>
      </div>
    </div>
    </section>
  );
};

export default Hero;
