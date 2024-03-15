import { useNavigate } from "react-router-dom";
import { eventBg } from "../assets";
import { journalConst } from "../constants";
import { styles } from "../styles";
import Footer from "./Footer";
import HeroHeader from "./HeroHeader";
import SideHero from "./SideHero";

const JournalPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-auto flex flex-col">
      <HeroHeader active="events" />
      <SideHero title="Journals" img={eventBg} />

      <div
        className={`flex flex-col sm:flex-row sm:flex-wrap  justify-between gap-3 items-start h-auto w-full ${styles.padding}`}
      >
        <div className="w-full h-auto  border-2 border-slate-500 rounded-md my-5">
          <p className="text-[18px] leading-loose text-justify p-2">
            "Dalit Awareness Expedition Dang" is a beacon of hope for the
            underprivileged, particularly those belonging to low caste
            communities. Through its dedicated efforts and unwavering
            commitment, the organization tirelessly works towards uplifting
            marginalized individuals, providing them with opportunities for
            growth, empowerment, and social justice. The journals featured on
            its page offer a compelling insight into the transformative impact
            of their initiatives, shedding light on the stories of resilience,
            courage, and triumph within these communities. Each entry serves as
            a testament to the organization's profound dedication to fostering
            positive change and creating a more inclusive society for all. As
            readers delve into these journals, they are not only exposed to the
            challenges faced by the marginalized, but also inspired by the
            relentless determination to overcome adversity and build a brighter
            future for generations to come.
          </p>
        </div>
        {journalConst.map((journal, index) => {
          return (
            <div
              onClick={() =>
                navigate("/afterjournal", { state: { id: index } })
              }
              className="flex justify-between cursor-pointer items-center w-full bg-[#FFBF00] p-3 h-[500px] rounded-3xl"
              key={index}
            >
              <img
                src={journal.img}
                className="w-[25%] h-[80%] object-contain"
              />
              <div className="h-[80%] w-[65%] flex flex-col p-5 justify-center">
                <p className="text-[18px] font-semibold">{journal.title}</p>
                <p className="text-[18px]">{journal.content}</p>
              </div>
            </div>
          );
        })}
        <div className="w-full h-[100px] flex items-center justify-center">
          <button className="px-44 py-3 rounded-2xl border-2 border-[#FFBF00] font-semibold hover:text-white text-[18px] hover:bg-[#FFBF00]">
            More
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default JournalPage;
