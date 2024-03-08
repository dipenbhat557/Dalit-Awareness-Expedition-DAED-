import { Suspense } from "react";

const SideHero = ({ title, img }) => {
  return (
    <div className="w-full h-[500px] sm:h-[616px] relative">
      <img
        src={img}
        alt="Past Events Bg"
        className="w-full h-full object-cover -z-10"
      />

      <Suspense fallback="Loading">
        <div
          className={`w-full h-full bg-black bg-opacity-20 absolute top-0 left-0 flex flex-col justify-end items-start `}
        >
          <div className="rounded-t-2xl w-[20%] h-[10%] ml-[5%] text-center pt-2 bg-[#FFBF00]">
            <p className="text-[35px] font-semibold">{title}</p>
          </div>
        </div>
      </Suspense>
    </div>
  );
};
export default SideHero;
