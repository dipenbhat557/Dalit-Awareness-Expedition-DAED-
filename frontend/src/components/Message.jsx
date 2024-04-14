import React from "react";
import { styles } from "../styles";
import { messageBg, president } from "../assets";

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
          className={` font-semibold text-[#FFBF00] ${styles.sectionHeadText}`}
        >
          Message from our President
        </p>
        <p className=" font-medium sm:font-semibold text-[14px] sm:text-[18px] text-white leading-relaxed">
          As the President of DAED (Democratic Alliance for Economic
          Development), I would like to convey a message of unity, progress, and
          inclusivity. Our organization stands committed to fostering economic
          growth, innovation, and prosperity for all citizens, regardless of
          background or circumstance.
        </p>
        <p className="font-semibold text-[18px] sm:text-[22px] text-[#FFBF00] w-full text-right">
          -Shashi Pariyar
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
