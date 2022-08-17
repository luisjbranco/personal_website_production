import React from "react";
import { TbSquareRotated } from "react-icons/tb";

const Separator = () => {
  return (
    <div className=" h-[300px] flex items-center justify-center bg-[#413F42]">
      <TbSquareRotated size={30} style={{ fill: "#D2042D" }} />
      <TbSquareRotated size={30} style={{ fill: "#D2042D" }} />
      <TbSquareRotated size={30} style={{ fill: "#D2042D" }} />
    </div>
  );
};

export default Separator;
