import { Suspense } from "react";

const SideHero = ({ title, img }) => {
  return (
    <div className="w-full h-[500px] sm:h-[550px] relative">
      <img
        src={img}
        alt="Past Events Bg"
        className="w-[100%] h-full bottom-0 object-cover -z-1"
      />

      <Suspense fallback="Loading">
        <div
          className={`w-full h-full bg-black bg-opacity-20 absolute top-0 left-0 flex flex-col justify-end items-start `}
        >
          <div className="rounded-t-2xl w-auto p-3 h-[10%] ml-[5%] text-center pt-2 bg-[#0766FF]">
            <p className=" text-[20px] sm:text-[25px] text-white font-semibold">
              {title}
            </p>
          </div>
        </div>
      </Suspense>
    </div>
  );
};
export default SideHero;
