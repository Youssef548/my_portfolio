import React, { useState, useEffect } from "react";
import { links } from "../../data";
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineMagnifyingGlass, HiOutlineXCircle } from "react-icons/hi2";
import "./navBar.css";

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [focused, setFocused] = useState(false);
  const [navFix, setNavFixed] = useState(false);

  const [showLinks, setShowLinks] = useState(false); // Add this state

  const fixNav = () => {
    const scrollY = window.scrollY;
    const sections = [
      { start: 0, end: 872, active: 0 },
      { start: 873, end: 2648, active: 1 },
      { start: 2648, end: Infinity, active: 2 },
    ];

    for (const section of sections) {
      if (scrollY >= section.start && scrollY <= section.end) {
        // if between start range and end range

        setNavFixed(scrollY > 783); // return boolean value
        setActive(section.active);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", fixNav);
    return () => {
      window.removeEventListener("scroll", fixNav);
    };
  }, []);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav
      className={`${showLinks ? "open" : ""} ${
        navFix
          ? "fixed w-full z-[100] bg-[#34353Af7] border-b border-gray-100"
          : ""
      } text-[#b0b1b2] transition`}
    >
      <div className="container flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          {/* <img src="logo.png" alt="Logo" className="h-8 mr-2" /> */}
          <span className="text-2xl font-bold text-[#f0bf6c] ">
            Youssef Ahmed
          </span>
        </div>
        {/* List Icon */}
        <div className="lg:hidden">
          {!showLinks && (
            <AiOutlineMenu
              className="text-xl cursor-pointer"
              onClick={toggleLinks}
            />
          )}
          {showLinks && (
            <HiOutlineXCircle
              className="lg:hidden close-menu fixed top-20 right-20 text-6xl z-[3] text-red cursor-pointer"
              onClick={toggleLinks}
            />
          )}
        </div>
        {/* Links */}
        <ul className="links hidden lg:flex gap-4">
          {links?.map((link, index) => {
            const { id, url, text } = link;

            return (
              <li
                key={index}
                className={`${
                  active === index ? "text-white" : "text-[#8f8f91]"
                } text-3.5rem text-center capitalize transition hover:text-white`}
                onClick={() => {
                  setActive(index);
                  setShowLinks(false);
                }}
              >
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
        {/* {showLinks && (
          <div className="lg:hidden fixed top-20 right-20 text-6rem text-gray-600 cursor-pointer">
          </div>
        )} */}

        {/* Search Bar */}
        <div className="hidden lg:flex items-center space-x-4 relative">
          <input
            type="text"
            placeholder={`${!focused ? "Search..." : ""}`}
            className="py-2 px-3 rounded-md w-48 text-[#c6c5c6] bg-[#3d3e42] "
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <HiOutlineMagnifyingGlass className="absolute right-[10px] text-xl cursor-pointer transition-transform ease-in-out duration-300 transform hover:scale-110" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
