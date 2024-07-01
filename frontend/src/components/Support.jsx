import { useRecoilValue } from "recoil";
import { eventBg, supportUs } from "../assets";
import { styles } from "../styles";
import Button from "./Button";
import Footer from "./Footer";
import HeroHeader from "./HeroHeader";
import PayForm from "./PayForm";
import SideHero from "./SideHero";
import useFetch from "./UseFetch";
import { translatorState } from "../store";
import { data } from "../translation";

const Support = () => {
  const text = useRecoilValue(translatorState);
  return (
    <div className="w-full h-auto flex flex-col">
      <Button />
      <HeroHeader active="contactus" />

      <SideHero title={data?.sideHeroHeading3?.[text]} img={supportUs} />
      <div
        className={`flex lg:flex-row flex-col  lg:justify-around     mb-4 ${styles.padding} `}
      >
        <div className="flex lg:flex-row lg:justify-around justify-around items-center  flex-col ">
          <div className="max-w-[400px] mt-8 flex flex-col h-auto gap-4 ">
            <h1 className="text-md sm:text-xl text-justify">
              {data?.suppoData?.[text]}
            </h1>
            <div className="max-w-[400px] h-full my-4">
              <img
                src="https://tds-images.thedailystar.net/sites/default/files/feature/images/underprivileged_women.jpg"
                alt=""
                className="rounded-lg"
              />
            </div>

            <div className="my-8 mx-2">
              <div>
                <h1 className="text-2xl sm:text-4xl block">Our Address</h1>
                <h1 className="block text-xl sm:text-2xl">
                  Dalit Awareness Expedition Dang
                </h1>
              </div>
              <div className="py-4 space-y-4">
                <h1>Lamahi-5 Dang ,Nepal</h1>

                <h1>+977 9857840388</h1>
                <h1>dacdang2066@gmail.com</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-0">
          <PayForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;
