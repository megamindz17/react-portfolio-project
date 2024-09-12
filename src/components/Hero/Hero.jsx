import React from "react";
import { FaGithub, FaLinkedin, FaFacebookF } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import proImg from "../img/proImg.jpeg";

function Hero() {
  return (
    <div className="hero_wrapper bg-bright py-10">
      <div className="container mx-auto">
        <div className="font-medium flex flex-col md:flex-row items-center justify-between">
          <div className="hero_info text-center md:text-left">
            <p className="text-3xl text-gray-700 font-medium">What about me.</p>
            <h3 className="text-4xl font-bold text-gray-900">
              Sikarin Tanasumpunkul
            </h3>
            <p className="text-xl my-4">
              <span className="mr-2">I’m a</span>
              <TypeAnimation
                sequence={["Front-end Developer", 1000, "Web Developer", 1000]}
                speed={50}
                repeat={Infinity}
              />
            </p>
            <p className="text-gray-600 mb-6 font-medium">
              Overview A modern and responsive personal web profile built using
              React and Tailwind CSS. It showcases personal details,
              <br />
              programming skills, a portfolio, and contact information in a
              clean, professional layout.
            </p>
            <ul className="flex justify-center md:flex-row  hero_social space-x-4 ">
              <li>
                <a href="#">
                  <FaGithub className="text-[40px] text-gray-800 hover:text-gray-600" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedin className="text-[40px] text-blue-700 hover:text-blue-500" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebookF className="text-[40px] text-blue-600 hover:text-blue-400" />
                </a>
              </li>
            </ul>
          </div>

          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <div className="hero_img w-[300px] h-[300px] rounded-full mx-auto md:mx-0 mt-8 md:mt-0">
              <img
                src={proImg}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Hero;
