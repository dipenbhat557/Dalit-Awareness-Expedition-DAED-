import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useRecoilValue } from "recoil";
import { translatorState } from "../store";
import { data } from "../translation";
const Subscription = () => {
  const handleSubscribe = () => {};
  const text = useRecoilValue(translatorState);
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      className="flex flex-col w-[100%] h-[330px] sm:h-[300px] justify-center items-center text-white bg-gradient-to-b from-[#0766FF] to-[#0c1d37] pt-4"
    >
      <div className="flex flex-row w-[25%] items-center justify-center mt-2">
        <div className="w-[8%] h-[5px] border-b-4 border-[#0766FF]  mr-2 flex-grow" />
        <p className="font-extrabold text-xl sm:text-2xl">
          {data.subs1?.[text]}
        </p>
        <div className="w-[8%] h-[5px] border-b-4 ml-2 border-[#0766FF] flex-grow" />
      </div>
      <p className="font-extrabold my-2 sm:my-3 text-[16px] sm:text-[20px]">
        {data.subs4?.[text]}
      </p>
      <p className="w-[40%] sm:w-[25%] text-center font-semibold text-[12px] md:text-[16px] md:leading-loose m-2">
        {data.subs2?.[text]}
      </p>
      <div className="my-2 mb-6 flex-wrap justify-center items-center flex flex-row">
        <input
          type="text"
          placeholder="Enter your mail address"
          className="p-2 px-4 sm:px-10 rounded-xl"
        />
        <button
          onClick={handleSubscribe}
          className="bg-[#0766FF] font-bold text-white  mt-2 hover:bg-[#0766FF] ml-3 p-2 px-4 shadow-lg shadow-black  rounded-xl"
        >
          {data.subs3?.[text]}
        </button>
      </div>
    </motion.div>
  );
};
export default SectionWrapper(Subscription, "");
