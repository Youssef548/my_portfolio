import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-10 bg-[#3d3e42]">
      <div className="flex justify-center items-center  text-[#ffd070] ">
        <h3 className="text-center mx-auto text-4xl flex ">
          <FaQuoteLeft className="text-[#ffd070] text-sm self-start" />
          Thanks for scrolling
          <FaQuoteRight className="text-[#ffd070] text-sm self-end" />
        </h3>
      </div>
    </div>
  );
};

export default Footer;
