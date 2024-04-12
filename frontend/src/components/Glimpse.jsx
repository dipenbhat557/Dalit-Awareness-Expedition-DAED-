import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { g1, g2, g3, g4 } from "../assets";
import { FiEye } from "react-icons/fi";

const Glimpse = () => {
  return (
    <div className={`${styles.padding} w-full h-[1050px] relative`}>
      <p
        className={`font-semibold text-[#FFBF00] ${styles.sectionHeadText} pb-10`}
      >
        Glimpses of DAED
      </p>

      <div className="w-full h-[40%] flex justify-between">
        {/* Image 1 */}
        <div className="w-[45%] h-full relative flex justify-center">
          <img src={g1} alt="Image 1" className="object-cover w-full h-full" />
          <div className="w-full h-full bg-black absolute bg-opacity-40 " />
          <div className="bg-white w-[50px] h-[50px] flex items-center justify-center rounded-full left-[50%] top-[50%] bg-opacity-40 text-[#FFBF00] absolute text-3xl hover:bg-[#FFBF00] hover:text-white">
            <FiEye className="cursor-pointer" />
          </div>
          <p className="w-[50%] text-[13px] sm:text-[23px] font-thin text-white h-auto my-4 left-[50%] top-[70%] absolute">
            DAED Committee in Dang
          </p>
        </div>

        {/* Image 2 */}
        <div className="w-[45%] h-full relative flex justify-center mt-12">
          <img src={g2} alt="Image 2" className="object-cover w-full h-full" />
          <div className="w-full h-full bg-black absolute bg-opacity-40 " />
          <div className="bg-white w-[50px] h-[50px] flex items-center justify-center rounded-full left-[50%] top-[50%] bg-opacity-40 text-[#FFBF00] absolute text-3xl hover:bg-[#FFBF00] hover:text-white">
            <FiEye className="cursor-pointer" />
          </div>
          <p className="w-[50%] text-[13px] sm:text-[23px] font-thin text-white h-auto my-4 left-[50%] top-[70%] absolute">
            DAED Committee in Dang
          </p>
        </div>
      </div>

      {/* Add a separator or additional styling as needed */}
      <p className="text-[#B7B7B7] text-[37px] font-bold my-2">
        "Empower. Elevate. Inspire. Thrive."
      </p>

      <div className="w-full h-[40%] flex justify-between">
        {/* Image 3 */}
        <div className="w-[45%] h-full relative flex justify-center  mt-12">
          <img src={g3} alt="Image 3" className=" object-cover w-full h-full" />
          <div className="w-full h-full bg-black absolute bg-opacity-40 " />
          <div className="bg-white w-[50px] h-[50px] flex items-center justify-center rounded-full left-[50%] top-[45%] bg-opacity-40 text-[#FFBF00] absolute text-3xl hover:bg-[#FFBF00] hover:text-white">
            <FiEye className="cursor-pointer" />
          </div>
          <p className="w-[50%] text-[13px] sm:text-[23px] font-thin text-white h-auto my-4 left-[50%] top-[70%] absolute">
            DAED Committee in Dang
          </p>
        </div>

        {/* Image 4 */}
        <div className="w-[45%] h-full relative flex justify-center">
          <img src={g4} alt="Image 4" className=" object-cover w-full h-full" />
          <div className="w-full h-full bg-black absolute bg-opacity-40 " />
          <div className="bg-white w-[50px] h-[50px] flex items-center justify-center rounded-full left-[50%] top-[50%] bg-opacity-40 text-[#FFBF00] absolute text-3xl hover:bg-[#FFBF00] hover:text-white">
            <FiEye className="cursor-pointer" />
          </div>
          <p className="w-[50%] text-[13px] sm:text-[23px] font-thin text-white h-auto my-4 left-[50%] top-[70%] absolute">
            DAED Committee in Dang
          </p>
        </div>
      </div>
    </div>
  );
};

export default Glimpse;
