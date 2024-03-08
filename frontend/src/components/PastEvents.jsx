import { FiEye } from "react-icons/fi";
import { eventBg } from "../assets";
import { eventGallery, events } from "../constants";
import { styles } from "../styles";
import Footer from "./Footer";
import HeroHeader from "./HeroHeader";
import Navbar from "./Navbar";
import SideHero from "./SideHero";
import Subscription from "./Subscription";

const PastEvents = () => {
  return (
    <div className="w-full h-auto flex flex-col">
      <HeroHeader active="events" />
      <SideHero title="Past Programs" img={eventBg} />

      <div className={`w-full h-auto flex flex-col ${styles.padding} `}>
        <div className="w-full h-[70px] flex items-center justify-center bg-slate-300">
          <div className="w-[23%] h-full flex items-center justify-center font-semibold border-r-2 border-black">
            Name of Programme
          </div>
          <div className="w-[18%] h-full flex items-center justify-center font-semibold border-r-2 border-black">
            Partner
          </div>
          <div className="w-[23%] h-full flex items-center justify-center font-semibold border-r-2 border-black">
            Area Coverage
          </div>
          <div className="w-[18%] h-full flex items-center justify-center font-semibold border-r-2 border-black">
            Duration
          </div>
          <div className="w-[18%] h-full flex items-center justify-center font-semibold ">
            PDF
          </div>
        </div>

        {events?.[0]?.map((event, index) => {
          return (
            <div
              className={`w-full h-[70px] flex items-center justify-center ${
                index % 2 == 0 ? " " : "bg-slate-300"
              } `}
              key={index}
            >
              <div className="w-[23%] h-full flex items-center justify-center font-semibold border-r-2 border-black">
                {event?.title}
              </div>
              <div className="w-[18%] h-full flex items-center justify-center font-semibold border-r-2 border-black">
                {event?.partner}
              </div>
              <div className="w-[23%] h-full flex items-center justify-center font-semibold border-r-2 border-black">
                {event?.area}
              </div>
              <div className="w-[18%] h-full flex items-center justify-center font-semibold border-r-2 border-black">
                {event?.duration}
              </div>
              <div
                className={`w-[18%] h-full flex items-center justify-center font-semibold  `}
              >
                PDF
              </div>
            </div>
          );
        })}
      </div>
      <div className={`w-full h-auto flex flex-col ${styles.padding} `}>
        <p
          className={` font-semibold text-[#000] bg-[#FFBF00] rounded-xl w-[20%]  py-2  text-center ${styles.sectionHeadText}`}
        >
          Gallery
        </p>
        <div className="w-full h-auto flex flex-wrap justify-between items-center gap-5">
          {eventGallery.map((g, i) => {
            return (
              <div
                className={`w-[45%] h-[500px] relative mt-5 flex ${
                  index % 2 == 0 ? "justify-start" : "justify-end"
                }`}
              >
                <img
                  src={g.img}
                  alt="Image 1"
                  className="object-cover w-full h-[90%]"
                />
                <div className="w-full h-full bg-black absolute bg-opacity-50 " />
                <div className="bg-white z-10 w-[50px] h-[50px] flex items-center justify-center rounded-full left-[50%] top-[50%] bg-opacity-40 text-[#FFBF00] absolute text-3xl hover:bg-[#FFBF00] hover:text-white">
                  <FiEye />
                </div>
                <p className="w-[50%] z-10 text-[18px] sm:text-[23px] font-thin text-white h-auto my-4 left-[50%] top-[70%] absolute">
                  {g.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <Subscription />
      <Footer />
    </div>
  );
};
export default PastEvents;
