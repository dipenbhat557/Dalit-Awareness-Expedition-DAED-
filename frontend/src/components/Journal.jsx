import React from "react";
import { styles } from "../styles";
// import { journalConst } from "../constants";
import { useNavigate } from "react-router-dom";
import useFetch from "./UseFetch";

const Journal = () => {
  const navigate = useNavigate();
  let journals = useFetch(`${import.meta.env.VITE_APP_API_ROOT}/journals`);

  let journalConst = journals?.length >= 2 ? journals.slice(0, 2) : journals;
  return (
    <div className={`${styles.padding} w-full h-auto flex flex-col gap-6 `}>
      <p className={`font-semibold  text-[blue] ${styles.sectionHeadText}`}>
        Journals
      </p>

      {journalConst?.map((journal, index) => {
        return (
          <div
            onClick={() => navigate("/afterjournal", { state: { id: index } })}
            className="flex flex-col sm:flex-row cursor-pointer justify-between items-center w-full bg-[#0766FF] p-3 h-[500px] rounded-3xl"
            key={index}
          >
            <div className="w-[90%] sm:w-[25%] h-[40%] sm:h-[80%]">
              <img
                src={journal?.imageUrl}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[55%] sm:h-[80%] w-[90%] sm:w-[65%] flex flex-col p-5 justify-center">
              <p className="text-[18px] text-white font-semibold">
                {journal?.title?.rendered}
              </p>
              <p
                className="text-[14px] sm:text-[18px] mt-9  text-white line-clamp-6 sm:line-clamp-none"
                dangerouslySetInnerHTML={{ __html: journal?.content?.rendered }}
              ></p>
            </div>
          </div>
        );
      })}
      <div className="w-full h-[100px] flex items-center justify-center">
        <button
          onClick={() => navigate("/journals")}
          className="sm:w-[30%] w-[60%] py-3 rounded-2xl border-2 border-[blue] font-semibold hover:text-white text-[18px] hover:bg-[blue]"
        >
          More
        </button>
      </div>
    </div>
  );
};

export default Journal;
