import { eventBg } from "../assets";
import HeroHeader from "./HeroHeader";
import SideHero from "./SideHero";

const PresentEvents = () => {
  return (
    <div className="w-full h-auto flex flex-col">
      <HeroHeader active="events" />
      <SideHero title="Present Programs" img={eventBg} />
    </div>
  );
};
export default PresentEvents;
