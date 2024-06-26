import { useNavigate } from "react-router-dom";
// import { eventsItems } from "../constants";
import { styles } from "../styles";
// import useFetch from "./UseFetch";
import { def } from "../assets";
import { useEffect, useState } from "react";
import useFetch from "./UseFetch";
import { useRecoilValue } from "recoil";
import { translatorState } from "../store";
import { data } from "../translation";

const Event = () => {
  const navigate = useNavigate();
  const text = useRecoilValue(translatorState);
  let eventsItems = useFetch(`${import.meta.env.VITE_APP_API_ROOT}/events`);

  // const eventsItems = useFetch(`${import.meta.env.VITE_APP_LOCAL_ROOT}/events`);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to update the current events based on the currentIndex
  const updateCurrentEvents = () => {
    // console.log("Current index is ", currentIndex);
    const startIndex = currentIndex;
    const endIndex = startIndex + 3;
    const nextIndex = endIndex % eventsItems?.length;
    // console.log("Start index is ", startIndex, " end index is ", endIndex);
    if (endIndex !== eventsItems?.length - 1) {
      setCurrentEvents(
        eventsItems
          ?.slice(startIndex, endIndex)
          .concat(eventsItems?.slice(0, nextIndex))
      );
      // console.log("Event items : ", eventsItems);
      // console.log("Current events : ", currentEvents);
    } else {
      setCurrentEvents(eventsItems?.slice(startIndex, endIndex));
    }
  };

  // Function to handle automatic switching of events
  const handleAutoSwitch = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % eventsItems?.length;
      return newIndex;
    });
  };

  useEffect(() => {
    // Initialize current events
    updateCurrentEvents();

    // Set up automatic switching every 5 seconds (adjust as needed)
    const interval = setInterval(handleAutoSwitch, 3000);
    // console.log("current events inside useEffect is ", currentEvents);
    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentIndex, eventsItems]);

  return (
    <div
      className={`${styles.padding} h-auto w-full flex flex-col items-center justify-between`}
    >
      <p
        className={`w-full font-semibold text-[#0766FF] text-[20px] h-[80px] ${styles.sectionHeadText}`}
      >
        {data.events?.[text]}
      </p>

      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between gap-3 items-start h-auto w-full">
        {currentEvents?.map((event, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-around h-[500px] sm:h-[650px] w-full sm:w-[28%] rounded-lg hover:bg-[#0766FF] hover:text-white"
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
                  dangerouslySetInnerHTML={{
                    __html: event?.content?.rendered || "Loading...",
                  }}
                  className="w-full h-[90%] p-3 sm:leading-loose line-clamp-6 text-[14px] sm:text-[20px]"
                ></p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full h-[100px] flex items-center justify-center">
        <button
          onClick={() => navigate("/event/present")}
          className="sm:w-[30%] w-[60%] py-3 rounded-2xl border-2 border-[#0766FF] font-semibold hover:text-white text-[18px] hover:bg-[#0766FF]"
        >
          More
        </button>
      </div>
    </div>
  );
};

export default Event;
