import React, { useState } from "react";
import { navLinks } from "../constants";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { BiSolidDownArrow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { translatorState } from "../store";

const Navbar = ({ active }) => {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [toggleAbout, setToggleAbout] = useState(false);
  const [toggleEvent, setToggleEvent] = useState(false);
  const language = useRecoilValue(translatorState);

  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
    setShowDropdown2(false);
  };

  const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
    setShowDropdown1(false);
  };

  return (
    <nav className="w-full py-4 z-20 relative bg-blue-700  ">
      <ul className="list-none hidden sm:flex sm:justify-around gap-6 relative">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={` text-18px font-semibold text-white sm:cursor-pointer ${
              active === link.title ? "font-extrabold" : ""
            }  hover:text-[#FFBF00] `}
            onClick={() => {
              if (link.id === "aboutus") {
                toggleDropdown1();
              } else if (link.id === "events") {
                toggleDropdown2();
              } else {
                setShowDropdown1(false);
                setShowDropdown2(false);
              }
            }}
          >
            {link.id === "aboutus" || link.id === "events" ? (
              <>
                {link.title?.[language]}
                <BiSolidDownArrow className="inline text-white ml-2" />
              </>
            ) : (
              <a href={link.route}>{link.title?.[language]}</a>
            )}
          </li>
        ))}
      </ul>
      {showDropdown1 && (
        <div className="dropdown-menu mt-2 left-[22%] p-3 rounded-b-xl rounded-r-xl text-black bg-slate-200 w-[16%] absolute z-30">
          <ul>
            <li className="hover:bg-[#D9D9D9] click:bg-[#FFBF00] p-2 rounded-sm">
              <a href="/about/us" onClick={toggleDropdown1}>
                {["About DAED", "DAED को बारेमा"]?.[language]}
              </a>
            </li>
            <li className="hover:bg-[#D9D9D9]  click:bg-[#FFBF00] p-2 rounded-sm">
              <a href="/about/team" onClick={toggleDropdown1}>
                {["About Team", "टोलीको बारेमा"]?.[language]}
              </a>
            </li>
          </ul>
        </div>
      )}

      {showDropdown2 && (
        <div className="dropdown-menu mt-2 left-[40%] p-3 rounded-b-xl rounded-r-xl text-black bg-slate-200 w-[15%] absolute z-30">
          <ul>
            <li className="hover:bg-[#D9D9D9]  click:bg-[#FFBF00] p-2 rounded-sm">
              <a href="/event/present" onClick={toggleDropdown2}>
                {["Past Events", "विगतका कार्यक्रमहरू"]?.[language]}
              </a>
            </li>
            <li className="hover:bg-[#D9D9D9]  click:bg-[#FFBF00] p-2 rounded-sm">
              <a href="/event/past" onClick={toggleDropdown2}>
                {["Upcoming Events", "आगामी कार्यक्रमहरू"]?.[language]}
              </a>
            </li>
          </ul>
        </div>
      )}
      {/* Mobile menu */}
      <div className="sm:hidden cursor-pointer flex items-center w-[90%] mr-3 justify-end ">
        {toggle ? (
          <AiOutlineMenuUnfold
            className="text-2xl text-black"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <AiOutlineMenuFold
            className="text-2xl text-black"
            onClick={() => setToggle(!toggle)}
          />
        )}
        <ul
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-[#ffffff]  absolute top-12 right-0 mx-4 my-4 min-w-[140px] z-10 rounded-xl flex flex-col items-end gap-4`}
        >
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-black" : "text-black"
              } font-poppins text-[17px]   font-medium cursor-pointer hover:bg-[#D9D9D9] hover:p-1 hover:text-[15px] hover:rounded-md`}
            >
              {link.id === "aboutus" ? (
                <div className="flex flex-col gap-3">
                  <p
                    className="font-poppins text-[17px]   font-medium"
                    onClick={() => {
                      setToggleAbout(!toggleAbout);
                      setToggleEvent(false);
                    }}
                  >
                    {link.title?.[language]}
                  </p>
                  {toggleAbout && (
                    <>
                      <a href="/about/us" className="bg-slate-100 pl-2">
                        {["About DAED", "DAED को बारेमा"]?.[language]}
                      </a>
                      <a href="/about/team" className="bg-slate-100 pl-2">
                        {["About Team", "टोलीको बारेमा"]?.[language]}
                      </a>
                    </>
                  )}
                </div>
              ) : link.id === "events" ? (
                <div className="flex flex-col gap-3">
                  <p
                    onClick={() => {
                      setToggleEvent(!toggleEvent);
                      setToggleAbout(false);
                    }}
                    className="font-poppins text-[17px]   font-medium"
                  >
                    {link.title?.[language]}
                  </p>
                  {toggleEvent && (
                    <>
                      <a href="/event/past" className="bg-slate-100 pl-2">
                        {["Past Events", "विगतका कार्यक्रमहरू"]?.[language]}
                      </a>
                      <a href="/event/present" className="bg-slate-100 pl-2">
                        {["Upcoming Events", "आगामी कार्यक्रमहरू"]?.[language]}
                      </a>
                    </>
                  )}
                </div>
              ) : (
                <a
                  href={link.route}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  {link.title?.[language]}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
