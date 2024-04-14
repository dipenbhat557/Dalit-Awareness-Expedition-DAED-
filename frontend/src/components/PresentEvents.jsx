import { useNavigate } from "react-router-dom";
import { eventBg } from "../assets";
// import { events } from "../constants";
import { styles } from "../styles";
import Footer from "./Footer";
import HeroHeader from "./HeroHeader";
import SideHero from "./SideHero";
import useFetch from "./UseFetch";

const PresentEvents = () => {
  const navigate = useNavigate();
  let events = useFetch(`${import.meta.env.VITE_APP_API_ROOT}/events`);

  return (
    <div className="w-full h-auto flex flex-col">
      <HeroHeader active="events" />
      <SideHero title="Present Programs" img={eventBg} />

      <div
        className={`flex flex-col mt-20 sm:flex-row sm:flex-wrap justify-between gap-3 items-start h-auto w-full ${styles.padding}`}
      >
        {events?.map((event, index) => {
          if (
            event?.["_event_stat"].trim() === "ongoing" ||
            event?.["_event_stat"].trim() === "upcoming"
          ) {
            return (
              <div
                key={index}
                onClick={() =>
                  navigate("/afterevent", { state: { event: event } })
                }
                className="cursor-pointer flex flex-col justify-around h-[500px] sm:h-[650px] line-clamp-6 w-full sm:w-[28%] rounded-lg hover:bg-[#FFBF00] hover:text-white"
              >
                <div className="w-full h-[50%] relative">
                  <img
                    src={event?.imageUrl || def}
                    alt={`img-${index}`}
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                  <p className="absolute bg-[#F1E8D7] text-slate-800 top-0 right-0 text-[11px] sm:text-[14px] w-[30%] h-[13%] p-1 sm:p-2 rounded-bl-md rounded-tr-lg">
                    {`#${event?.["_event_stat"] || "Loading.."}`}
                  </p>
                </div>
                <div className="w-[full] h-[50%] flex flex-col ">
                  <p className="w-full h-[10%] pr-3 text-end mt-2">
                    {event?.["_event_date"] || "Loading..."}
                  </p>
                  <p
                    className="w-full h-[90%] p-3 sm:leading-loose text-[14px] sm:text-[20px]"
                    dangerouslySetInnerHTML={{
                      __html: event?.content?.rendered || "Loading...",
                    }}
                  ></p>
                </div>
              </div>
            );
          }
        })}
      </div>
      <Footer />
    </div>
  );
};
export default PresentEvents;
