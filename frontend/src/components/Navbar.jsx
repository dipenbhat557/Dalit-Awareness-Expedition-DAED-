import React, { useState } from "react";
import { navLinks } from "../constants";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { BiSolidDownArrow } from "react-icons/bi";

const Navbar = ({ active }) => {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [toggle, setToggle] = useState(false);

  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
    setShowDropdown2(false);
  };

  const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
    setShowDropdown1(false);
  };

  return (
    <nav className="w-full py-4 z-20 relative bg-transparent">
      <ul className="list-none hidden sm:flex sm:justify-around gap-6 relative">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`text-slate-900 text-18px font-semibold sm:cursor-pointer ${
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
                {link.title}
                <BiSolidDownArrow className="inline text-black ml-2" />
              </>
            ) : (
              <a href={link.route}>{link.title}</a>
            )}
          </li>
        ))}
      </ul>
      {showDropdown1 && (
        <div className="dropdown-menu mt-2 left-[22%] p-3 rounded-b-xl rounded-r-xl text-black bg-slate-200 w-[16%] absolute z-30">
          <ul>
            <li className="hover:bg-[#D9D9D9] click:bg-[#FFBF00] p-2 rounded-sm">
              <a href="#" onClick={toggleDropdown1}>
                About DAED
              </a>
            </li>
            <li className="hover:bg-[#D9D9D9]  click:bg-[#FFBF00] p-2 rounded-sm">
              <a href="#" onClick={toggleDropdown1}>
                Our Team
              </a>
            </li>
            <li className="hover:bg-[#D9D9D9]  click:bg-[#FFBF00] p-2 rounded-sm">
              <a href="#" onClick={toggleDropdown1}>
                Working Districts
              </a>
            </li>
            <li className="hover:bg-[#D9D9D9]  click:bg-red-[#FFBF00] p-2 rounded-sm">
              <a href="#" onClick={toggleDropdown1}>
                Structure
              </a>
            </li>
            <li className="hover:bg-[#D9D9D9]  click:bg-[#FFBF00] p-2 rounded-sm">
              <a href="#" onClick={toggleDropdown1}>
                Our Partners
              </a>
            </li>
          </ul>
        </div>
      )}

      {showDropdown2 && (
        <div className="dropdown-menu mt-2 left-[40%] p-3 rounded-b-xl rounded-r-xl text-black bg-slate-200 w-[14%] absolute z-30">
          <ul>
            <li className="hover:bg-[#D9D9D9]  click:bg-[#FFBF00] p-2 rounded-sm">
              <a href="events/present" onClick={toggleDropdown2}>
                Upcoming Events
              </a>
            </li>
            <li className="hover:bg-[#D9D9D9]  click:bg-[#FFBF00] p-2 rounded-sm">
              <a href="/events/past" onClick={toggleDropdown2}>
                Past Events
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
          } p-6 bg-[#ffffff] absolute top-12 right-0 mx-4 my-4 min-w-[140px] z-10 rounded-xl flex flex-col items-end gap-4`}
        >
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-black" : "text-black"
              } font-poppins text-[17px]   font-medium cursor-pointer hover:bg-[#D9D9D9] hover:p-1 hover:text-[15px] hover:rounded-md`}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {link.id === "aboutus" || link.id === "events" ? (
                <a href={link.title}>{link.title}</a>
              ) : (
                <a href={link.route}>{link.title}</a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
