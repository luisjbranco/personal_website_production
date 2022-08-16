import React from "react";
import { v4 as uuidv4 } from "uuid";
import { projects, Project } from "./config";
import { AiFillGithub } from "react-icons/ai";
import { Skill } from "../skills/config";
import Image from "next/image";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full md:h-screen bg-[#413F42] text-[#DDDDDD]"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Title */}
        <div className="pb-8">
          <p className="text-4xl sm:text-7xl font-bold inline border-b-4 border-[#D2042D]">
            Projects
          </p>
          <p className="py-6 text-3xl">Check out my projects!</p>
        </div>
        {/* Title */}
        {/* Project cards */}
        <div>
          {projects.map((project: Project) => {
            return (
              <div
                key={uuidv4()}
                className="flex w-fit h-fit antialiased mb-10 rounded-xl bg-[#E2DCC8]"
              >
                <div className=" m-auto">
                  <div className="z-50 p-8 mt-0 max-w-lg w-lg grid grid-cols-1 cursor-default select-none rounded dark:bg-gray-900 shadow-lg ">
                    <div className="font-semibold text-5xl mb-2 ml-2 text-gray-900 dark:text-white">
                      {project.name}
                    </div>
                    <div className="my-2 mx-2 mr-5">
                      <p className="text-gray-900 text-2xl">
                        {project.description}
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold text-2xl text-gray-900">
                        Tech Stack:
                      </div>
                      <div className="my-3">
                        <span className="transform transition-all duration-150 inline-block bg-blue-400 bg-opacity-75 rounded px-3 py-2 text-xl font-thin text-blue-900  hover:shadow-lg  hover:scale-105">
                          ReactJS
                        </span>
                        <span className="transform transition-all duration-150 inline-block bg-pink-400 bg-opacity-100 rounded px-3 py-2  text-xl font-thin text-pink-900  hover:shadow-lg  hover:scale-105">
                          Tailwind
                        </span>
                        <span className="transform transition-all duration-150 inline-block bg-yellow-400  bg-opacity-75 rounded px-3 py-2  text-xl font-thin text-yellow-900 hover:shadow-lg  hover:scale-105">
                          Javascript
                        </span>
                      </div>
                    </div>
                    <div className="flex p-3 mt-3">
                      <button className="transform mouse-pointer bg-gray-900 text-lg text-white mx-2 py-2 px-4 font-semibold rounded mr-[30px] hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90   focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                        <AiFillGithub />
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub
                        </a>
                      </button>
                      <button className="transform mouse-pointer bg-gray-900 text-lg text-white px-4 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600  hover:scale-90 dark:focus:bg-gray-600 focus:outline-none">
                        Demo
                      </button>
                    </div>
                  </div>
                  <Image
                    className="absolute z-0 mx-[500px] -my-[420px] h-[400px] max-w-xl w-xl object-cover object-top hover:bg-opacity-50 transform hover:scale-125 border-gray-600 border border-opacity-50 rounded-xl shadow-lg transition-all duration-150"
                    src={project.image.src}
                    alt="project-image"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="contain"
                  ></Image>
                </div>
              </div>
            );
          })}
        </div>
        {/* Project cards */}
        <div className="items-center mt-7">
          <p className="text-3xl text-bold text-center mt-7 mb-2 ">
            You can find my other projects on my GitHub
          </p>
          <a
            href="https://github.com/luisjbranco"
            target="_blank"
            rel="noreferrer"
          >
            <button className="text-black text-3xl border-2 py-3 px-6 mx-auto w-fit flex bg-[#E2DCC8] hover:bg-[#EA8A8A] hover:border-[#D2042D] justify-center">
              GitHub
            </button>
          </a>
          <p className="text-center text-2xl"> . . . more coming soon!</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
