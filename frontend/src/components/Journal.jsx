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
      <p className={`font-semibold  text-[#FFBF00] ${styles.sectionHeadText}`}>
        Journals
      </p>

      {journalConst?.map((journal, index) => {
        return (
          <div
            onClick={() => navigate("/afterjournal", { state: { id: index } })}
            className="flex cursor-pointer justify-between items-center w-full bg-[#FFBF00] p-3 h-[500px] rounded-3xl"
            key={index}
          >
            <div className="w-[25%] h-[80%]">
              <img
                src={journal?.imageUrl}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[80%] w-[65%] flex flex-col p-5 justify-center">
              <p className="text-[18px] font-semibold">
                {journal?.title?.rendered}
              </p>
              <p
                className="text-[18px]"
                dangerouslySetInnerHTML={{ __html: journal?.content?.rendered }}
              ></p>
            </div>
          </div>
        );
      })}
      <div className="w-full h-[100px] flex items-center justify-center">
        <button
          onClick={() => navigate("/journals")}
          className="px-44 py-3 rounded-2xl border-2 border-[#FFBF00] font-semibold hover:text-white text-[18px] hover:bg-[#FFBF00]"
        >
          More
        </button>
      </div>
    </div>
  );
};

export default Journal;
