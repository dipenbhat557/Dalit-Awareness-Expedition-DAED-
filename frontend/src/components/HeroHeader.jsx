import React from "react";
import Navbar from "./Navbar";
import { logo } from "../assets";
import { useNavigate } from "react-router-dom";

const HeroHeader = ({ active }) => {
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="w-full  mt-2 h-[100px] flex items-center justify-center ">
        <div className="flex items-center justify-center w-[90%] gap-4 h-full">
          <img
            src={logo}
            alt="logo"
            className="object-contain cursor-pointer"
            style={{ width: "130px", height: "130px" }} // Adjust width and height here
            onClick={() => navigate("/")}
          />
          <div className="flex flex-col gap-1 items-center justify-center">
            <p className="text-[12px] text-blue-700 text-center sm:text-normal sm:text-[35px] flex items-center  font-extrabold">
              दलित सचेतना अभियान दाङ
            </p>
            <p className="text-[12px] text-blue-700 text-center sm:text-normal sm:text-[21px] flex items-center  font-bold font-serif italic">
              The Dalit Awareness Expedition Dang (DAED)
            </p>
          </div>
        </div>
      </div>
      <Navbar active={active} />
    </div>
  );
};

export default HeroHeader;
