import { useLocation, useNavigate } from "react-router-dom";
import { eventBg, pdf } from "../assets";
import HeroHeader from "./HeroHeader";
import SideHero from "./SideHero";
import { journalConst } from "../constants";
import { styles } from "../styles";
import Footer from "./Footer";

const AfterJournalPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const journalConst = useFetch(
    `${import.meta.env.VITE_APP_API_ROOT}/journals`
  );

  return (
    <div className="w-full h-auto flex flex-col">
      <HeroHeader active="journals" />
      <SideHero title="Ongoing Projects" img={eventBg} />

      <div
        className={`${styles.padding} mt-10 h-auto w-full flex flex-col gap-5`}
      >
        <div className="w-full h-full flex items-center justify-around">
          <div className="w-[40%] flex flex-col h-[550px] justify-between">
            <div className="w-full h-[75%]">
              <img
                src={journalConst?.[location?.state?.id]?.imageUrl}
                className=" rounded-t-lg h-full w-full object-cover"
              />
            </div>
            <div className="flex h-[20%] w-full items-end gap-4 justify-center">
              <p className="text-[20px] h-[30%] flex items-center">
                Project Details :{" "}
              </p>
              <img
                src={pdf}
                className="h-[70%] w-[20%] object-contain cursor-pointer"
              />
            </div>
          </div>
          <div className={`flex w-[55%] h-auto flex-col gap-3 `}>
            <p className={`text-[23px] font-semibold font-sans `}>
              {journalConst?.[location?.state?.id]?.title?.rendered}
            </p>

            <div className="border-2 border-slate-500 rounded-md text-justify p-2">
              <p className={`text-[16px] `}>
                {journalConst?.[location?.state?.id]?.content?.rendered}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button
            className=" px-16 border-2 border-[#FFBF00] rounded-lg font-semibold hover:text-white hover:bg-[#FFBF00]"
            onClick={() => navigate("/journals")}
          >
            Back
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AfterJournalPage;
