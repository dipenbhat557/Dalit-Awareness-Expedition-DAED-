import React from "react";
import { useRecoilState } from "recoil";
import { translatorState } from "../store";

const Button = () => {
  const [language, setLanguage] = useRecoilState(translatorState);

  return (
    <div className="">
      <div className=" absolute top-6 right-4 z-50 h-[50px] justify-around w-[200px] flex gap-1 items-center ">
        <button
          className={`${
            language === 0 ? "text-white bg-blue-600" : "text-black"
          } w-[45%] h-[90%]`}
          onClick={() => setLanguage(0)}
        >
          English
        </button>
        <button
          className={`${
            language === 1 ? "text-white bg-blue-600" : "text-black"
          } w-[45%] h-[90%]`}
          onClick={() => setLanguage(1)}
        >
          Nepali
        </button>
      </div>
    </div>
  );
};

export default Button;
