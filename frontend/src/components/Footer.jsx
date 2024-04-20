import { facebook, gmail, logo, twitter, footerBg } from "../assets";
import { styles } from "../styles";

const Footer = () => {
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
    backgroundImage: `url(${footerBg})`,
    backgroundRepeat: "no-repeat", // Prevent image repetition
    backgroundSize: "cover",
    position: "relative",
    height: "550px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div
      className={`${styles.paddingX} w-full h-[420px] flex justify-between flex-col pt-2`}
      style={backgroundImageStyle}
    >
      <div style={overlayStyle}></div>
      <div className="flex w-[60%] mx-auto h-[30%] gap-3 items-center justify-between">
        <div className="w-[50%] sm:w-[20%] h-[50%] sm:h-full z-10 ">
          <img
            src={logo}
            alt="Deukhuri logo"
            className="w-full  rounded-[50%]  bg-white h-full object-contain"
          />
        </div>
        <p
          className={` sm:text-[20px] text-[#0766FF] z-10  text-[16px] text-center w-[70%] tracking-widest `}
        >
          The Dalit Awareness Expedition Dang (DAED)
        </p>
      </div>

      <div className="flex w-full h-[65%] justify-around sm:justify-between items-start">
        <div className="flex flex-col gap-3 w-[30%] h-full items-center justify-around">
          <div className="flex flex-col w-full h-[35%]">
            <p className="text-[16px] font-semibold text-center sm:text-[18px] text-white z-10">
              Social Links
            </p>

            <div className="flex w-full h-[80%] items-center justify-center">
              <img
                src={gmail}
                alt="gmail"
                className="rounded-2xl z-10 w-[30%] h-[90%] object-contain cursor-pointer"
              />
              <div className=" w-[27%] h-[65%] flex items-center justify-center ">
                <img
                  src={twitter}
                  alt="twitter"
                  className="rounded-full z-10 object-cover cursor-pointer"
                />
              </div>
              <div className=" w-[27%] h-[65%] flex items-center justify-center">
                <img
                  src={facebook}
                  alt="facebook"
                  className="rounded-full z-10 object-cover cursor-pointer "
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start gap-2 h-[50%]">
            <p className="text-[14px] sm:text-[16px] text-white z-10">
              "Empower. Elevate. Inspire. Thrive."
            </p>
            <p className="text-[14px] sm:text-[16px] text-white z-10">
              Lamahi-6, Dang, Nepal{" "}
            </p>
            <p className="text-[14px] sm:text-[16px] text-white z-10">
              +977 9809781908
            </p>
            <p className="text-[14px] sm:text-[16px] text-white z-10">
              daeddang@gmail.com
            </p>
          </div>
        </div>

        <div className="w-[30%] h-full gap-4 flex flex-col justify-center">
          <p className="text-[16px] font-semibold sm:text-[18px] text-white z-10">
            Other Links
          </p>
          <a className="text-[14px] sm:text-[16px] text-white z-10" href="#">
            Event
          </a>
          <a className="text-[14px] sm:text-[16px] text-white z-10" href="#">
            Gallery
          </a>
          <a className="text-[14px] sm:text-[16px] text-white z-10" href="#">
            Committee Members
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
