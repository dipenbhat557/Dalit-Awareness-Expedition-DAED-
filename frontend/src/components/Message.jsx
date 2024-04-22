import React from "react";
import { styles } from "../styles";
import { messageBg, president } from "../assets";
import { useRecoilValue } from "recoil";
import { translatorState } from "../store";
import { data } from "../translation";

const Message = () => {
  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  };
  const texts = useRecoilValue(translatorState);

  const backgroundImageStyle = {
    backgroundImage: `url(${messageBg})`,
    position: "relative",
    height: "550px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div style={backgroundImageStyle} className="flex flex-col sm:flex-row">
      <div style={overlayStyle}></div>
      <div
        className={`${styles.padding} w-full sm:w-[40%] h-[60%] overflow-y-hidden sm:h-[80%] flex flex-col  justify-evenly z-20`}
      >
        <p
          className={` font-semibold text-[#0766FF] ${styles.sectionHeadText}`}
        >
          {data.message?.[texts]}
        </p>
        <p className=" font-medium sm:font-semibold text-[14px] sm:text-[18px] text-white leading-relaxed">
          {data.realMessage?.[texts]}
        </p>
        <p className="font-semibold text-[18px] sm:text-[22px] text-[#0766FF] w-full text-right">
          {data.messageName?.[texts]}
        </p>
      </div>
      <div className="w-[80%] sm:w-[45%] h-[45%] sm:h-[90%] z-20 pb-2 sm:pb-0">
        <img
          src={president}
          alt="president"
          className="object-cover w-full h-full "
        />
      </div>
    </div>
  );
};

export default Message;
