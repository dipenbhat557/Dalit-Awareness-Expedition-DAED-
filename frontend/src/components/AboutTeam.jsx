import { useRecoilValue } from "recoil";
import { aboutUs, eventBg } from "../assets";
import { teamDAED } from "../constants";
import { styles } from "../styles";
import Button from "./Button";
import Footer from "./Footer";
import HeroHeader from "./HeroHeader";
import SideHero from "./SideHero";
import Subscription from "./Subscription";
import useFetch from "./UseFetch";
import { translatorState } from "../store";
import { data } from "../translation";

const AboutTeam = () => {
  let teamDAED = useFetch(`${import.meta.env.VITE_APP_API_ROOT}/members`);
  let teamGeneralDAED = useFetch(
    `${import.meta.env.VITE_APP_API_ROOT}/general_members`
  );
  let teamStaffDAED = useFetch(
    `${import.meta.env.VITE_APP_API_ROOT}/staff_members`
  );

  const text = useRecoilValue(translatorState);
  return (
    <div className="w-full h-auto flex flex-col">
      <Button />
      <HeroHeader active="aboutus" />
      <SideHero title={data?.aboutteam?.[text]} img={aboutUs} />

      <div
        className={`${styles.padding} flex flex-col  justify-between items-start h-auto w-full `}
      >
        <div className={`w-full h-auto   my-5 `}>
          <p className="text-[16px] sm:text-[18px] leading-relaxed sm:leading-loose text-justify p-6 border-2 border-slate-500 rounded-md">
            {data?.aboutteamdata?.[text]}
          </p>
        </div>

        <div className="flex flex-col gap-8 w-full h-auto">
          <p className="text-[20px] font-semibold">
            Meet Our Executive Members
          </p>
          <div className="w-full justify-between gap-6 h-auto  flex flex-wrap my-4">
            {teamDAED?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full sm:w-[30%] h-[450px]  flex flex-col justify-between gap-3 hover:bg-[#0766FF] hover:text-white"
                >
                  <div className="w-full h-[75%]">
                    <img
                      src={item?.imageUrl}
                      alt="team img"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-medium text-[18px] px-3">
                    {item?.title?.rendered}
                  </p>
                  <p
                    className="font-semibold px-2 pb-3"
                    dangerouslySetInnerHTML={{
                      __html: item?.content?.rendered,
                    }}
                  ></p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full h-auto mb-9 mt-8">
          <p className="text-[20px] font-semibold">Meet Our General Members</p>
          <div className="w-full justify-between gap-6 h-auto  flex flex-wrap my-4">
            {teamGeneralDAED?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full sm:w-[30%] h-[450px]  flex flex-col justify-between gap-3 hover:bg-[#0766FF] hover:text-white"
                >
                  <div className="w-full h-[75%]">
                    <img
                      src={item?.imageUrl}
                      alt="team img"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-medium text-[18px] px-3">
                    {item?.title?.rendered}
                  </p>
                  <p
                    className=" px-3 pb-3"
                    dangerouslySetInnerHTML={{
                      __html: item?.content?.rendered,
                    }}
                  ></p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full h-auto mt-11 mb-9">
          <p className="text-[20px] font-semibold">Meet Our Staff</p>

          <div className="w-full justify-between gap-6 h-auto  flex flex-wrap my-4">
            {teamStaffDAED?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full sm:w-[30%] h-[450px]  flex flex-col justify-between gap-3 hover:bg-[#0766FF] hover:text-white"
                >
                  <div className="w-full h-[75%]">
                    <img
                      src={item?.imageUrl}
                      alt="team img"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-medium text-[18px] px-3">
                    {item?.title?.rendered}
                  </p>
                  <p
                    className=" px-3 pb-3"
                    dangerouslySetInnerHTML={{
                      __html: item?.content?.rendered,
                    }}
                  ></p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row items-center justify-between">
          <p className="h-full leading-loose traking-wide w-full sm:w-[40%] text-[18px] sm:text-[22px]">
            Our office is located by the Dang, Nepal. "Empower. Elevate.
            Inspire. Thrive." . We’re based in the heart of beautiful Dang, so
            don’t hesitate to visit by bike, boat, or jet ski too. We have an
            open door policy.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1354202.6980213935!2d82.07730032212807!3d27.76189270619047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399799b1ea979477%3A0x66d23a10685e1572!2sUdyog%20Banijya%20Sangh%2C%20Deukhury!5e0!3m2!1sen!2sin!4v1706104388854!5m2!1sen!2sin"
            allowFullScreen=""
            id="location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full sm:w-[50%] h-[500px] my-3 sm:my-auto"
          ></iframe>
        </div>
      </div>
      <Subscription />
      <Footer />
    </div>
  );
};
export default AboutTeam;
