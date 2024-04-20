import { sponsor1 } from "../assets";
import {} from "../constants";
const OurPartners = () => {
  return (
    <>
      <div className="flex justify-center text-[32px] font-semibold  text-[blue] mt-9">
        <h1>Our partners</h1>
      </div>
      <div className="flex justify-between items-center px-11 mt-4 ">
        <img src={sponsor1} alt="" className="w-32 h-32" />
        <img src={sponsor1} alt="" className="w-32 h-32" />
        <img src={sponsor1} alt="" className="w-32 h-32" />
      </div>
    </>
  );
};
export default OurPartners;
