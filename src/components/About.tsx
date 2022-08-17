import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen sm:h-auto bg-[#413F42] text-[#DDDDDD]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-screen-lg w-full p-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl sm:text-7xl font-bold inline border-b-4 border-[#D2042D]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000PX] w-full grid sm:grid-cols-2 gap-10 px-3">
          <div className="sm:text-right text-5xl font-bold">
            <p>Nice to meet you.</p>
          </div>
          <div className="text-2xl">
            <p>
              Ultimately I am passionate about learning. This website is one
              example. I have taken steps to learn web development related
              concepts and tools in order to build it. Learning new tech is very
              rewarding. Data Science is a field where I can continue to learn
              and grow. Would you like to go on this path with me?{" "}
            </p>
          </div>
        </div>
        <div className="mt-[100px]">
          <button className="text-black text-3xl group border-2 py-3 px-6 my-2 w-fit flex items-center bg-[#E2DCC8] hover:bg-[#D2042D] hover:border-[#D2042D] hover:text-[#DDDDDD]">
            <a href="/resume/Luis_Branco_CV_ENG.pdf" download>
              Download my CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
