import React from "react";
import { socialLinks } from "../../data";

const Header = () => {
  return (
    <header className="h-[90vh] flex items-center relative">
      <div className="container ">
        <div className="info text-white p-4  max-w-xl">
          <h1 className="text-4xl">
            I'M{" "}
            <span className="ml-2 text-[#f0bf6c] text-6xl">Youssef Ahmed</span>
          </h1>
          <p className="mt-2 text-2xl">
            JavaScript Developer
            <br />
            MERN Stack
          </p>
          <button className="transition duration-300 mt-3 font-semi-bold py-2 px-4  border-2 border-[#f0bf6c] text-[#f0bf6c] rounded-md  hover:bg-[#f0bf6c] hover:text-white hover:border-[#34353A] hover:font-bold">
            Contact Me
          </button>
        </div>
        <div className="social-media absolute bottom-[10px] right-[30px]">
          <div className="line mb-3">
            <span className="block mx-auto h-[100px] border border-[#f0bf6c] w-[1px]"></span>
          </div>
          <div className="social-media">
            <ul className="links flex flex-col  gap-2">
              {socialLinks?.map((link) => {
                const { id, name, icon, url } = link;
                return (
                  <li key={id}>
                    <a
                      href={url}
                      target="_blank"
                      alt={name}
                      className=" text-2xl text-white rounded-[50%]  w-12 h-12 flex items-center justify-center cursor-pointer"
                    >
                      {icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
