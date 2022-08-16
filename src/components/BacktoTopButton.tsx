import React from "react";
import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed w-full left-[50%] bottom-[40px] h-[20px] text-5xl z-1 cursor-pointer">
      <FaArrowCircleUp
        onClick={scrollUp}
        style={{
          display: backToTopButton ? "inline" : "none",
          fill: "#D2042D",
        }}
      />
    </div>
  );
};

export default BackToTopButton;
