import React from "react";
import { profilePic } from "../assets";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div
      id="home"
      className="pt-[200px] w-full md:h-screen sm:h-auto bg-[#413F42] text-[#DDDDDD]"
    >
      {/* Intro Text and button */}
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center items-center h-full md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <p className="text-[#D2042D] text-4xl">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold ">Luís Branco</h1>
          <h2 className="text-4xl sm:text-6xl font-bold pt-6">
            I am a Data Scientist & Developer.
          </h2>
          <p className="text-2xl py-8 max-w-md">
            Welcome to my personal website. I am looking for interesting and
            challenging projects to work on. If you have a challenge for me, I
            am ready!
          </p>
          <div>
            <button className="text-black text-3xl group border-2 py-3 px-6 my-2 w-fit flex items-center bg-[#E2DCC8] hover:bg-[#D2042D] hover:border-[#D2042D] hover:text-[#DDDDDD]">
              View More
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-4" />
              </span>
            </button>
          </div>
        </div>
        {/* Profile pic */}
        <div>
          <img
            src={profilePic.src}
            alt="profile-pic"
            className="rounded-2xl mx-auto w-[300px] md:w-[600px]"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
