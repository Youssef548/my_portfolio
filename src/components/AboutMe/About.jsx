import React from "react";

import me from "./myPhoto.jpg";

const About = () => {
  return (
    <section id="about" className="py-10 bg-[#31333b]">
      <div className="container">
        <div className="flex justify-between gap-8 items-center">
          <div className="photo">
            <img src={me} alt="" className="w-[450px] rounded-3xl" />
          </div>

          <div className="flex grow flex-col gap-2 lg:-mt-24">
            <div className="text-[#f0bf6c] text-4xl font-bold relative  mb-4 ">
              About Me:
            </div>

            <p className="relative text-gray-400 text-lg max-w-md md:leading-relaxed lg:leading-loose ">
              a dedicated MERN Stack developer with a passion for crafting
              robust and user-centric web applications. With a strong foundation
              in the MERN (MongoDB, Express.js, React, Node.js) stack, I thrive
              on turning innovative ideas into tangible digital experiences.
              {/* <div className="absolute left-[-70px] top-[12px] transform -translate-y-1/2">
                <span className="w-14 block h-[3px] bg-yellow-400"></span>
              </div> */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
