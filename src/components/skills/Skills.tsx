import React from "react";
import { skills, Skill } from "../skills/config";
import Image from "next/image";

const Skills = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div id="skills" className="bg-[#413F42] text-[#DDDDDD]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen">
        <div>
          <p className="text-4xl sm:text-7xl font-bold inline border-b-4 border-[#D2042D]">
            Skills & Experience
          </p>
          <p className="py-4 text-3xl">Technologies I use</p>
        </div>
        {/* Tabs */}
        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-lg font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 1
                      ? "text-[#DDDDDD] bg-[#D2042D]"
                      : "text-[#DDDDDD] bg-gray-600")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  My Skills
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-lg font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 2
                      ? "text-[#DDDDDD] bg-[#D2042D]"
                      : "text-[#DDDDDD] bg-gray-600")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Education
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-lg font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 3
                      ? "text-[#DDDDDD] bg-[#D2042D]"
                      : "text-[#DDDDDD] bg-gray-600")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Experience
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-lg font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 4
                      ? "text-[#DDDDDD] bg-[#D2042D]"
                      : "text-[#DDDDDD] bg-gray-600")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(4);
                  }}
                  data-toggle="tab"
                  href="#link4"
                  role="tablist"
                >
                  Other Skills
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col min-w-0 break-words bg-[#E2DCC8] w-full mb-6 shadow-lg rounded-xl text-[#413F42] text-xl">
          <div className="p-5 flex-auto">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                  {skills.map((skill: Skill) => {
                    return (
                      <div
                        key={skill.id}
                        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${skill.style}`}
                      >
                        <Image
                          src={skill.img.src}
                          alt="skill-logo"
                          className="w-20 h-20 mx-auto"
                          width="100%"
                          height="100%"
                          layout="fixed"
                          objectFit="contain"
                        />
                        <p className="mt-4 text-2xl">{skill.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div className="flex w-fit h-fit antialiased mb-10 rounded-xl">
                  <div className=" m-auto">
                    <div className="max-w-4xl w-lg grid grid-cols-1">
                      <div className="p-8 my-3 cursor-default select-none rounded shadow-lg bg-[#413F42]">
                        <div className="mb-2 ml-2 text-[#DDDDDD] dark:text-white  ">
                          <h2 className="font-semibold text-5xl">
                            Nova School of Business and Economics{" "}
                          </h2>
                          <h4 className="text-4xl text-[#D2042D]">
                            Master&apos;s in Business Analytics
                          </h4>
                        </div>
                        <div className="my-2 mx-2 mr-5">
                          <p className="text-[#DDDDDD] text-2xl">
                            Relevant Coursework:
                            <ul>
                              <li>Machine Learning</li>
                              <li>Computational Thinking and Data Science</li>
                              <li>Advanced Data Analysis</li>
                              <li>Advanced Programming for Data Science</li>
                              <li>Web and Cloud Computing</li>
                            </ul>
                          </p>
                        </div>
                      </div>
                      <div className="p-8 my-3   cursor-default select-none rounded shadow-lg bg-[#413F42]">
                        <div className="mb-2 ml-2 text-[#DDDDDD] dark:text-white  ">
                          <h2 className="font-semibold text-5xl">
                            Insituto de Contabilidade e Administração de Lisboa
                          </h2>
                          <h4 className="text-4xl text-[#D2042D]">
                            Bachelor&apos;s in Management
                          </h4>
                        </div>
                        <div className="my-3 mx-2 mr-5">
                          <p className="text-[#DDDDDD] text-2xl">
                            <ul>
                              <li>Class Representative</li>
                              <li>ISCAL Academic Excellence Award</li>
                              <li>Project Simulation Winner</li>
                            </ul>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div className="flex w-fit h-fit antialiased mb-10 rounded-xl">
                  <div className="m-auto">
                    <div className="max-w-4xl w-lg grid grid-cols-1">
                      <div className="p-8 my-3 cursor-default select-none rounded shadow-lg bg-[#413F42]">
                        <div className="mb-2 ml-2 text-[#DDDDDD]  dark:text-white  ">
                          <h2 className="font-semibold text-5xl ">
                            IT Startup, Accenture and Nova SBE{" "}
                          </h2>
                          <h4 className="text-4xl text-[#D2042D]">
                            Data Science Consultant
                          </h4>
                        </div>
                        <div className="my-2 mx-2 mr-5">
                          <p className="text-[#DDDDDD]  text-2xl">
                            <ul>
                              <li>
                                ‣ Developing a Data Science project to forecast
                                sales
                              </li>
                              <li>
                                ‣ Working with a team of 5 people, supported by
                                2 mentors - a Data Science Advisor and a Project
                                Manager Advisor
                              </li>
                              <li>
                                ‣ End-to-end Data Science project, from the
                                business understanding and scoping, to the
                                delivery of a Machine Learning working prototype
                              </li>
                            </ul>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                <div className="max-w-4xl w-lg grid grid-cols-1">
                  <div className="p-8 my-3 cursor-default select-none rounded shadow-lg bg-[#413F42] text-[#DDDDDD]">
                    <div className="mb-2 ml-2">
                      <h2 className="font-semibold text-5xl">Soft Skills </h2>
                    </div>
                    <div className="my-2 mx-2 mr-5">
                      <p className="text-2xl">
                        <ul>
                          <li>‣ Predisposition to Lead</li>
                          <li>‣ Identifying and solving problems</li>
                          <li>‣ Competitive Spirit</li>
                          <li>‣ Organized and dedicated</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div className="p-8 my-3 cursor-default select-none rounded shadow-lg bg-[#413F42] text-[#DDDDDD]">
                    <div className="mb-2 ml-2">
                      <h2 className="font-semibold text-5xl">Languages </h2>
                    </div>
                    <div className="my-2 mx-2 mr-5">
                      <p className="text-2xl">
                        <ul>
                          <li>‣ Portuguese</li>
                          <li>‣ English</li>
                          <li>‣ Mandarin (HSK2 Exam)</li>
                          <li>‣ Spanish (Basic)</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
