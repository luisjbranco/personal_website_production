import React from "react";
import { FaGithub, FaKaggle, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#413F42] text-[#DDDDDD] items-center h-auto">
      <div className="bg-[#D2042D] text-[#EBD5D5] text-8xl font-bold py-10 text-center flex justify-center m-auto w-[20%]">
        LB
      </div>
      <div className="flex justify-center h-[80px] items-center my-6">
        <a
          href="https://www.linkedin.com/in/luis-j-branco/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin
            size={50}
            style={{ margin: "20px", color: "#E2DCC8" }}
            className="cursor-pointer hover:duration-300 hover:scale-150"
          />
        </a>
        <a
          href="https://github.com/luisjbranco"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub
            size={50}
            style={{ margin: "20px", color: "#E2DCC8" }}
            className="cursor-pointer hover:duration-300 hover:scale-150"
          />
        </a>
        <a
          href="https://www.kaggle.com/luisbranco"
          target="_blank"
          rel="noreferrer"
        >
          <FaKaggle
            size={50}
            style={{ margin: "20px", color: "#E2DCC8" }}
            className="cursor-pointer hover:duration-300 hover:scale-150"
          />
        </a>
        <a
          href="https://twitter.com/luisbranco_aloh"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter
            size={50}
            style={{ margin: "20px", color: "#E2DCC8" }}
            className="cursor-pointer hover:duration-300 hover:scale-150"
          />
        </a>
      </div>
      <h4 className="text-3xl font-bold text-center pb-9">
        &copy;{` ${year}`}, Luís Branco
      </h4>
    </div>
  );
};

export default Footer;
