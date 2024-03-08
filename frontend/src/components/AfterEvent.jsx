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
        <div className="w-full flex h-[550px] justify-between">
          <div className="w-[70%] h-[full]">
            <img
              src={events?.[1]?.[location?.state?.id]?.img}
              className=" rounded-t-lg h-full w-full object-cover"
            />
          </div>
          <div className="flex h-full w-[25%] items-end gap-4 justify-center">
            <p className="text-[20px] h-[10%] flex items-center">
              Project Details :{" "}
            </p>
            <img
              src={pdf}
              className="h-[10%] w-[20%] object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className={`flex flex-col gap-3 ${styles.padding}`}>
        <p className={`text-[23px]`}>
          {events?.[1]?.[location?.state?.id]?.date}
        </p>

        <p className={`text-[23px] font-semibold font-sans tracking-wider`}>
          {events?.[1]?.[location?.state?.id]?.title}
        </p>

        <p className={`text-[20px] `}>
          {events?.[1]?.[location?.state?.id]?.content}
        </p>
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
