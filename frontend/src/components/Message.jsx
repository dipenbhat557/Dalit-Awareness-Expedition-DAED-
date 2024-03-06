import React from "react";
import { styles } from "../styles";
import { messageBg, president } from "../assets";

const Message = () => {
  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Adjust the alpha value for the desired opacity
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
    <div style={backgroundImageStyle}>
      <div style={overlayStyle}></div>
      <div
        className={`${styles.padding} w-[40%] h-[80%] flex flex-col justify-evenly z-20`}
      >
        <p
          className={` font-semibold text-[#FFBF00] ${styles.sectionHeadText}`}
        >
          Message from our President
        </p>
        <p className="font-semibold text-[18px] text-white leading-relaxed">
          As the President of DAED (Democratic Alliance for Economic
          Development), I would like to convey a message of unity, progress, and
          inclusivity. Our organization stands committed to fostering economic
          growth, innovation, and prosperity for all citizens, regardless of
          background or circumstance.
        </p>
        <p className="font-semibold text-[22px] text-[#FFBF00] w-full text-right">
          -Shashi Pariyar
        </p>
      </div>
      <img
        src={president}
        alt="president"
        className="object-contain w-[45%] h-[90%] z-20"
      />
    </div>
  );
};

export default Message;
