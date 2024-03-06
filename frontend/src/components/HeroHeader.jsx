import React from "react";
import Navbar from "./Navbar";
import { logo } from "../assets";
import { useNavigate } from "react-router-dom";

const HeroHeader = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-[100px] flex items-center justify-center ">
        <div className="flex items-center justify-center w-[60%] gap-4 h-full">
          <img
            src={logo}
            alt="logo"
            className="object-contain w-20 h-20 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <p className=" text-[12px] text-center sm:text-normal sm:text-[30px] flex items-center text-[#FFBF00] font-semibold">
            The Dalit Awareness Expedition Dang (DAED)
          </p>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default HeroHeader;
