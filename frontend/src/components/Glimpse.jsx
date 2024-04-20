import React from "react";
import { styles } from "../styles";
import { def } from "../assets";
import { FiEye } from "react-icons/fi";
import useFetch from "./UseFetch";

const Glimpse = () => {
  const glimpses = useFetch(`${import.meta.env.VITE_APP_API_ROOT}/glimpses`);
  return (
    <div className={`${styles.padding} w-full h-[1050px] relative`}>
      <p
        className={`font-semibold text-[#0766FF] ${styles.sectionHeadText} pb-10`}
      >
        Glimpses of DAED
      </p>
      <div className="w-full h-[95%] flex flex-col gap-6">
        <div className="w-full h-[30%] sm:h-[40%] flex justify-between">
          {/* Image 1 */}
          <div className="w-[45%] h-full relative flex justify-center">
            <img
              src={glimpses?.[0]?.imageUrl || def}
              alt="Image 1"
              className="object-cover w-full h-full"
            />
            <div className="w-full h-full bg-black absolute bg-opacity-40 " />
            <div className="bg-white w-[50px] h-[50px] flex items-center justify-center rounded-full left-[50%] top-[50%] bg-opacity-40 text-[#FFBF00] absolute text-3xl hover:bg-[#FFBF00] hover:text-white">
              <FiEye
                onClick={() => window.open(glimpses?.[0]?.imageUrl, "_blank")}
                className="cursor-pointer"
              />
            </div>
            <p className="w-[50%] text-[13px] sm:text-[23px] font-thin text-white h-auto my-4 left-[50%] top-[70%] absolute">
              {glimpses?.[0]?.title?.rendered}
            </p>
          </div>

          {/* Image 2 */}
          <div className="w-[45%] h-full relative flex justify-center mt-12">
            <img
              src={glimpses?.[1]?.imageUrl || def}
              alt="Image 2"
              className="object-cover w-full h-full"
            />
            <div className="w-full h-full bg-black absolute bg-opacity-40 " />
            <div className="bg-white w-[50px] h-[50px] flex items-center justify-center rounded-full left-[50%] top-[50%] bg-opacity-40 text-[#FFBF00] absolute text-3xl hover:bg-[#FFBF00] hover:text-white">
              <FiEye
                onClick={() => window.open(glimpses?.[1]?.imageUrl, "_blank")}
                className="cursor-pointer"
              />
            </div>
            <p className="w-[50%] text-[13px] sm:text-[23px] font-thin text-white h-auto my-4 left-[50%] top-[70%] absolute">
              {glimpses?.[1]?.title?.rendered}
            </p>
          </div>
        </div>

        {/* Add a separator or additional styling as needed */}
        <p className="text-[#B7B7B7] text-[37px] font-bold my-2">
          "Empower. Elevate. Inspire. Thrive."
        </p>

        <div className="w-full h-[30%] sm:h-[40%] flex justify-between">
          {/* Image 3 */}
          <div className="w-[45%] h-full relative flex justify-center  mt-12">
            <img
              src={glimpses?.[2]?.imageUrl || def}
              alt="Image 3"
              className=" object-cover w-full h-full"
            />
            <div className="w-full h-full bg-black absolute bg-opacity-40 " />
            <div className="bg-white w-[50px] h-[50px] flex items-center justify-center rounded-full left-[50%] top-[45%] bg-opacity-40 text-[#FFBF00] absolute text-3xl hover:bg-[#FFBF00] hover:text-white">
              <FiEye
                onClick={() => window.open(glimpses?.[2]?.imageUrl, "_blank")}
                className="cursor-pointer"
              />
            </div>
            <p className="w-[50%] text-[13px] sm:text-[23px] font-thin text-white h-auto my-4 left-[50%] top-[70%] absolute">
              {glimpses?.[2]?.title?.rendered}
            </p>
          </div>

          {/* Image 4 */}
          <div className="w-[45%] h-full relative flex justify-center">
            <img
              src={glimpses?.[3]?.imageUrl || def}
              alt="Image 4"
              className=" object-cover w-full h-full"
            />
            <div className="w-full h-full bg-black absolute bg-opacity-40 " />
            <div className="bg-white w-[50px] h-[50px] flex items-center justify-center rounded-full left-[50%] top-[50%] bg-opacity-40 text-[#FFBF00] absolute text-3xl hover:bg-[#FFBF00] hover:text-white">
              <FiEye
                className="cursor-pointer"
                onClick={() => window.open(glimpses?.[3]?.imageUrl, "_blank")}
              />
            </div>
            <p className="w-[50%] text-[13px] sm:text-[23px] font-thin text-white h-auto my-4 left-[50%] top-[70%] absolute">
              {glimpses?.[3]?.title?.rendered}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glimpse;
