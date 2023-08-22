import React from "react";
import { skills } from "../../data";

const Skills = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="flex flex-col gap-4">
          <h2 className="skills-title text-center text-4xl text-white">
            My Skills
          </h2>
          <div className="skills-boxes justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills?.map((skill) => {
              const { id, image, text } = skill;
              return (
                <div
                  key={id}
                  className="box cursor-pointer transition-all hover:bg-[#f0bf6c] p-[25px] bg-[#3d3e42] flex justify-center items-center rounded-xl"
                >
                  <div className="skill flex flex-col gap-3 items-center text-white capitalize">
                    <img src={image} alt={`${text} img`} />
                    <p className="">{text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
