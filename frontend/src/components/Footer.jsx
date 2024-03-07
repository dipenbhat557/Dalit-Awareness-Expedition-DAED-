import { facebook, gmail, logo, twitter } from "../assets";
import { styles } from "../styles";

const Footer = () => {
  return (
    <div
      className={`${styles.paddingX} w-full h-[420px] flex justify-between flex-col bg-[#212529] pt-2`}
    >
      <div className="flex w-[60%] mx-auto h-[30%] gap-3 items-center justify-between">
        <img
          src={logo}
          alt="Deukhuri logo"
          className="w-[30%] rounded-3xl  bg-white h-full object-contain"
        />
        <p
          className={` sm:text-[20px] text-[#FFBF00]  text-[16px] text-center w-[70%] tracking-widest `}
        >
          The Dalit Awareness Expedition Dang (DAED)
        </p>
      </div>

      <div className="flex w-full h-[65%] justify-around items-start">
        <div className="flex flex-col gap-3 w-[40%] h-full items-center justify-around">
          <div className="flex flex-col w-full h-[25%]">
            <p className="text-[16px] font-semibold w-full text-center sm:text-[18px] text-slate-500">
              Social Links
            </p>

            <div className="flex w-full h-full items-center gap-5 justify-center">
              <a href="#" target="_blank" className="w-[25%] h-[25%] ">
                <img
                  src={gmail}
                  alt="gmail"
                  className="rounded-2xl cursor-pointer"
                />
              </a>
              <a href="#" className="w-[25%] h-[25%]">
                <img
                  src={twitter}
                  alt="twitter"
                  className="rounded-2xl cursor-pointer"
                />
              </a>
              <a href="#" target="_blank" className="w-[25%] h-[25%]">
                <img
                  src={facebook}
                  alt="facebook"
                  className="rounded-2xl  cursor-pointer "
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[14px] sm:text-[16px] text-slate-500">
              "Empower. Elevate. Inspire. Thrive."
            </p>
            <p className="text-[14px] sm:text-[16px] text-slate-500">
              Lamahi-6, Dang, Nepal{" "}
            </p>
            <p className="text-[14px] sm:text-[16px] text-slate-500">
              +977 9809781908
            </p>
            <p className="text-[14px] sm:text-[16px] text-slate-500">
              daeddang@gmail.com
            </p>
          </div>
        </div>

        <div className="w-[30%] h-full gap-4 flex flex-col">
          <p className="text-[16px] font-semibold sm:text-[18px] text-slate-500">
            Other Links
          </p>
          <a className="text-[14px] sm:text-[16px] text-slate-500" href="#">
            Event
          </a>
          <a className="text-[14px] sm:text-[16px] text-slate-500" href="#">
            Gallery
          </a>
          <a className="text-[14px] sm:text-[16px] text-slate-500" href="#">
            Committee Members
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
