import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import useReadingProgress from "./useReadingProgress";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const completion = useReadingProgress();

  return (
    <div className="fixed z-50 w-full h-[80px] flex justify-between items-center px-4 bg-[#E2DCC8] ">
      <Link to="home">
        <div className="flex  cursor-pointer">
          <div className="self-center bg-[#D2042D] text-[#EBD5D5] flex flex-col text-xl font-bold h-[40px] justify-center min-h-[40px] min-w-[40px] w-[40px] text-center">
            LB
          </div>
          <h3 className="self-center text-bold px-4 text-2xl">Luís Branco</h3>
        </div>
      </Link>

      {/* menu */}
      <div className="hidden md:flex text-[#413F42]">
        <ul className="flex text-2xl">
          <li className="hover:text-[#D2042D]">
            <Link to="home" smooth="true">
              Home
            </Link>
          </li>
          <li className="hover:text-[#D2042D]">
            <Link to="about" smooth="true">
              About Me
            </Link>
          </li>
          <li className="hover:text-[#D2042D]">
            <Link to="skills" smooth="true">
              Skills
            </Link>
          </li>
          <li className="hover:text-[#D2042D]">
            <Link to="projects" smooth="true">
              Projects
            </Link>
          </li>
          <li className="hover:text-[#D2042D]">
            <Link to="contact" smooth="true">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* hamburguer menu */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 cursor-pointer text-[#413F42]"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#E2DCC8] to-[#D2042D] text-[#413F42]"
        }
      >
        <li className="py-6 text-4xl ">
          <Link to="home" smooth="true">
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link to="about" smooth="true">
            About Me
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link to="skills" smooth="true">
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link to="projects" smooth="true">
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link to="contact" smooth="true">
            Contact
          </Link>
        </li>
      </ul>
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="absolute bg-[#D2042D] h-2 w-full bottom-0"
      />
    </div>
  );
};

export default Navbar;
