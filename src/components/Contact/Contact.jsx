import React from "react";
import { socialLinks } from "../../data";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
const Contact = () => {
  return (
    <section className=" bg-[#31333b]" id="contact">
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-center mx-auto text-4xl -top-[1.3rem] relative font-bold text-white">
          Contact Me
        </h2>
        <div className="contacts justify-center flex gap-4 lg:gap-2 lg:py-10 py-4 ">
          <div className="transition duration-300 email bg-[#3b3c40]  flex items-center py-2 px-4 rounded-lg cursor-pointer  hover:text-white border border-transparent hover:border-yellow-400 gap-2">
            <BiEnvelope className="text-white" />
            <p className="text-[#ffd070]">youssefahmedpvp@gmail.com</p>
          </div>

          <div className="transition duration-300 phone bg-[#3b3c40]  flex items-center py-2 px-4 rounded-lg cursor-pointer  hover:text-white border border-transparent hover:border-yellow-400 gap-2">
            <BiPhone className="text-white" />
            <p className="text-[#ffd070]">01018529903</p>
          </div>
        </div>
        <div className="mb-4 transition duration-300 map bg-[#3b3c40]  flex items-center py-2 px-4 rounded-lg cursor-pointer  hover:text-white border border-transparent hover:border-yellow-400 gap-2">
          <BiMap className="text-white" />
          <p className="text-[#ffd070]">Egypt, Cairo</p>
        </div>
        <ul className="social-links flex gap-2 relative -bottom-[0.7rem]">
          {socialLinks?.map((link) => {
            const { id, name, icon, url } = link;
            return (
              <li key={id}>
                <a
                  href={url}
                  target="_blank"
                  alt={name}
                  className=" text-md text-white rounded-[50%]  w-6 h-6 cursor-pointer flex justify-center items-center"
                >
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
