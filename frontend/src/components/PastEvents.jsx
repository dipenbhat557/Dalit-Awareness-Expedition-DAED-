import { FiEye } from "react-icons/fi";
import { eventBg, pdf } from "../assets";
import { eventGallery, events } from "../constants";
import { styles } from "../styles";
import Footer from "./Footer";
import HeroHeader from "./HeroHeader";
import Navbar from "./Navbar";
import SideHero from "./SideHero";
import Subscription from "./Subscription";
import useFetch from "./UseFetch";

const PastEvents = () => {
  let count = 0;
  let events = useFetch(`${import.meta.env.VITE_APP_API_ROOT}/events`);
  let glimpses = useFetch(`${import.meta.env.VITE_APP_API_ROOT}/glimpses`);
  return (
    <div className="w-full h-auto flex flex-col">
      <HeroHeader active="events" />
      <SideHero title="Past Programs" img={eventBg} />

      <div className={`w-full h-auto flex flex-col ${styles.padding} my-20`}>
        <div className="w-full text-center h-[70px] flex items-center justify-center bg-slate-300">
          <div className="w-[23%] h-full flex items-center justify-center font-semibold sm:text-[16px] text-[10px] border-r-2 border-black">
            Name of Programme
          </div>
          <div className="w-[18%] h-full flex items-center justify-center font-semibold sm:text-[16px] text-[10px] border-r-2 border-black">
            Partner
          </div>
          <div className="w-[23%] h-full flex items-center justify-center font-semibold sm:text-[16px] text-[10px] border-r-2 border-black">
            Area Coverage
          </div>
          <div className="w-[18%] h-full flex items-center justify-center font-semibold sm:text-[16px] text-[10px] border-r-2 border-black">
            Date
          </div>
          <div className="w-[18%] h-full flex items-center sm:text-[16px] text-[10px] justify-center font-semibold ">
            PDF
          </div>
        </div>

        {events?.map((event, index) => {
          if (event?.["_event_stat"] === "completed") {
            count = count + 1;
            return (
              <div
                className={`w-full h-[70px] flex text-center items-center justify-center ${
                  count % 2 == 1 ? " " : "bg-slate-300"
                } `}
                key={index}
              >
                <div className="w-[23%] sm:text-[16px] text-[10px] h-full flex items-center justify-center font-semibold border-r-2 border-black">
                  {event?.title?.rendered}
                </div>
                <div className="w-[18%] sm:text-[16px] text-[10px] h-full flex items-center justify-center font-semibold border-r-2 border-black">
                  {event?.["_event_partner"]}
                </div>
                <div className="w-[23%] sm:text-[16px] text-[10px] h-full flex items-center justify-center font-semibold border-r-2 border-black">
                  {event?.["_event_area"]}
                </div>
                <div className="w-[18%] sm:text-[16px] text-[10px] h-full flex items-center justify-center font-semibold border-r-2 border-black">
                  {event?.["_event_date"]}
                </div>
                <div
                  className={`w-[18%] h-full flex items-center justify-center font-semibold  `}
                >
                  <img
                    src={pdf}
                    onClick={() => window.open(event?.imageUrl, "_blank")}
                    className="w-[50%] h-[50%] object-contain"
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className={`w-full h-auto flex flex-col ${styles.padding} `}>
        <p
          className={` font-semibold text-[#000] bg-[#FFBF00] rounded-xl mb-5 w-[35%] sm:w-[20%]  py-2  text-center ${styles.sectionHeadText}`}
        >
          Gallery
        </p>
        <div className="w-full h-auto flex flex-wrap justify-between items-center gap-2">
          {glimpses?.map((g, i) => {
            return (
              <div
                className={`w-[45%] h-[400px] sm:h-[700px] relative flex ${
                  i % 2 == 0 ? "items-start" : "items-end"
                }`}
                key={i}
              >
                <img
                  src={g?.imageUrl || def}
                  alt="Image 1"
                  className="object-cover w-full h-[80%]"
                />
                <div
                  className={`w-full h-[80%] bg-black absolute bg-opacity-50 ${
                    i % 2 == 0 ? "items-start" : "items-end"
                  }`}
                />
                <div
                  className={`bg-white z-10 w-[50px] h-[50px] flex items-center justify-center rounded-full left-[50%] ${
                    i % 2 == 0 ? " top-[40%]" : " top-[60%]"
                  } bg-opacity-40 text-[#FFBF00] absolute text-3xl hover:bg-[#FFBF00] hover:text-white`}
                >
                  <FiEye onClick={() => window.open(g?.imageUrl, "_blank")} />
                </div>
                <p
                  className={`w-[50%] z-10 text-[14px] sm:text-[23px] font-thin text-white h-auto my-4 left-[50%]  ${
                    i % 2 == 0 ? " top-[50%]" : " top-[70%]"
                  } absolute`}
                >
                  {g?.title?.rendered}
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
