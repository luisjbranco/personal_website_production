import React from "react";
import { v4 as uuidv4 } from "uuid";
import { projects, Project } from "./config";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <div id="projects" className="w-full h-auto bg-[#413F42] text-[#DDDDDD]">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center">
        {/* Title */}
        <div className="pb-8">
          <p className="text-4xl sm:text-7xl font-bold inline border-b-4 border-[#D2042D]">
            Projects
          </p>
          <p className="py-6 text-3xl">Check out my projects!</p>
        </div>
        {/* Title */}
        {/* Project cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project: Project) => {
            return (
              <div key={uuidv4()} className="shadow-[#E2DCC8] shadow-lg p-4">
                <div>
                  <img
                    className="w-full object-cover rounded-2xl hover:scale-105 duration-500"
                    src={project.image.src}
                  ></img>
                </div>
                <h3 className="text-3xl p-3 md:text-5xl mb-2 md:mb-3 border-b-4 border-[#D2042D]">
                  {project.name}
                </h3>
                <p className="text-xl md:text-3xl m-4">{project.description}</p>
                <div className="flex flex-wrap flex-row gap-2 items-center justify-center text-lg">
                  {project.technologies.map((item) => (
                    <span
                      key={item.id}
                      className="inline-block px-2 py-1 rounded-lg bg-[#D2042D] text-[#DDDDDD] text-2xl text-bold"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
                <div className="mx-[15%] flex p-3 mt-3 text-[#413F42]">
                  <button className="transform mouse-pointer bg-[#E2DCC8] mx-2 py-2 px-4 font-semibold rounded mr-[30px] hover:bg-[#D2042D] hover:scale-90 focus:outline-none hover:text-white">
                    <AiFillGithub style={{ fill: "#413F42" }} size={50} />
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xl"
                    >
                      GitHub
                    </a>
                  </button>
                  <button className="transform mouse-pointer bg-[#E2DCC8] px-4 font-semibold rounded hover:bg-[#D2042D] hover:scale-90 focus:outline-none ml-6 hover:text-white">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xl"
                    >
                      Check it out!
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* Project cards */}
        <div className="items-center mt-[100px]">
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
