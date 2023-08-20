import React from "react";
import harsh from "../assets/harsh.png";
import { FiArrowRightCircle } from "react-icons/fi";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full  px-4 md:flex-row ">
        <div className=" h-full sm:flex flex-col justify-center ">
          <h2 className="text-3xl sm:text-7xl font-bold text-white ">
            I'm a full stack developer
          </h2>
          <p className=" pt-2 text-gray-500 py mx-w-sm ">
            I'm well-versed in web development, excelling in HTML, JavaScript, CSS, React, and Firebase. My skill set extends to UI/UX design through Figma, ensuring both aesthetics and functionality. Proficient in data structures with C++ expertise and a foundation in Python, I bring a holistic approach to problem-solving. Join me in exploring the dynamic intersection of creativity and technology.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer flex gap-1 mt-4">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FiArrowRightCircle size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div class="flex justify-center">
          <img
            src={harsh}
            alt=""
            className=" w-2/3 mb-10 sm:mx-auto mx-w-sm md:w-100 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
