import { useLocation, useNavigate } from "react-router-dom";
import HeroHeader from "./HeroHeader";
import SideHero from "./SideHero";
import { eventBg, pdf } from "../assets";
import { styles } from "../styles";
import { events } from "../constants";
import Footer from "./Footer";

// location?.state?.id;

const AfterEvent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="w-full h-auto flex flex-col">
      <HeroHeader active="events" />
      <SideHero title="Ongoing Projects" img={eventBg} />

      <div
        className={`${styles.padding} mt-10 h-auto w-full flex flex-col gap-5`}
      >
        <div className="w-full h-full flex items-center justify-around">
          <div className="w-[40%] flex flex-col h-[550px] justify-between">
            <div className="w-full h-[75%]">
              <img
                src={location?.state?.event?.imageUrl}
                className=" rounded-t-lg h-full w-full object-cover"
              />
            </div>
            <div className="flex h-[20%] w-full items-end gap-4 justify-center">
              <p className="text-[20px] h-[30%] flex items-center">
                Project Details :{" "}
              </p>
              <img
                src={pdf}
                onClick={() =>
                  window.open(location?.state?.event?.imageUrl, "_blank")
                }
                className="h-[70%] w-[20%] object-contain cursor-pointer"
              />
            </div>
          </div>
          <div className={`flex w-[55%] h-auto flex-col gap-3 `}>
            <p className={`text-[20px]`}>
              {location?.state?.id?.["_event_date"]}
            </p>

            <p className={`text-[23px] font-semibold font-sans `}>
              {location?.state?.id?.title?.rendered}
            </p>

            <div className="border-2 border-slate-500 rounded-md p-2">
              <p
                className={`text-[16px] `}
                dangerouslySetInnerHTML={{
                  __html: location?.state?.event?.content?.rendered,
                }}
              ></p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button
            className=" px-16 border-2 border-[#FFBF00] rounded-lg font-semibold hover:text-white hover:bg-[#FFBF00]"
            onClick={() => navigate("/events/present")}
          >
            Back
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AfterEvent;
