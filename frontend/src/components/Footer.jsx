import { facebook, gmail, logo, twitter } from "../assets";
import { styles } from "../styles";

const Footer = () => {
  return (
    <div
      className={`${styles.paddingX} w-full h-[420px] flex flex-col bg-[#212529] pt-2`}
    >
      <div className="flex w-[60%] mx-auto h-[37%] items-center justify-between">
        <img
          src={logo}
          alt="Deukhuri logo"
          className="w-[30%] rounded-3xl  bg-white h-full object-contain"
        />
        <p
          className={`md:text-[35px] sm:text-[30px] text-[#FFBF00]  xs:text-[25px] text-[20px] text-center w-[70%] tracking-widest `}
        >
          The Dalit Awareness Expedition Dang (DAED)
        </p>
      </div>
      <div className="w-full h-[42%] text-white flex justify-between items-center mb-8">
        <div className="h-full w-[50%] sm:w-[35%] flex flex-col items-start justify-around">
          <p className="text-[16px] sm:text-[18px] font-semibold tracking-wider">
            Deukhuri Multiple Campus
          </p>
          <p className="text-[14px] sm:text-[16px] text-slate-500">
            Lamahi-5, Dang, Nepal
          </p>
          <p className="text-[14px] sm:text-[16px] text-slate-500">
            082417016, 9857847016, 9857847017, 9857847018
          </p>
          <p className="text-[14px] sm:text-[16px] text-slate-500">
            deukhuri.campus@gmail.com
          </p>
        </div>
        <div className="h-full w-[30%] sm:w-[20%] flex flex-col items-start justify-around">
          <p className="text-[16px] sm:text-[18px] font-semibold tracking-wider">
            Other Links
          </p>
          <a
            href="/admission"
            className="text-[14px] sm:text-[16px] text-slate-500 cursor-pointer"
          >
            Admission
          </a>
          <a
            href="/contact"
            className="text-[14px] sm:text-[16px] text-slate-500 cursor-pointer"
          >
            Contact
          </a>
          <a
            href="/contact#location"
            className="text-[14px] sm:text-[16px] text-slate-500 cursor-pointer"
          >
            Location
          </a>
          <a
            href="https://tuexam.edu.np/"
            target="_blank"
            className="text-[14px] sm:text-[16px] text-slate-500 cursor-pointer"
          >
            TU Updates
          </a>
        </div>
        <div className="h-full w-[35%] hidden sm:flex flex-col items-center justify-around">
          <p className="text-[18px] font-semibold tracking-wider">
            Social Links
          </p>
          <div className="flex w-full h-full items-center gap-5 justify-center">
            <a
              href="#"
              target="_blank"
              className="w-[38%]  h-[41%] mt-5 items-center flex "
            >
              <img
                src={gmail}
                alt="youtube"
                className="rounded-2xl cursor-pointer object-contain w-full h-full"
              />
            </a>
            <a href="#" className="w-[30%] h-[30%]">
              <img
                src={twitter}
                alt="twitter"
                className="rounded-2xl cursor-pointer"
              />
            </a>
            <a href="#" target="_blank" className="w-[30%] h-[30%]">
              <img
                src={facebook}
                alt="facebook"
                className="rounded-2xl  cursor-pointer "
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
