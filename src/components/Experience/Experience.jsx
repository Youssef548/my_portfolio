import React from "react";
import "./exp.css";

const Experience = () => {
  return (
    <>
      <div className=" bg-[#3d3e42]">
        <h2 className="px-4 text-4xl -top-[1.4rem] relative text-white font-bold">
          Experience
        </h2>
        <div className="pt-10 pb-24">
          <div className="container">
            <div className="lg:pl-[300px] lg:pr-[100px]">
              <div className="flex">
                <div className="relative">
                  <h2 className="text-2xl text-white mb-2">
                    Software Engineer, Kolbnyan El marsos
                  </h2>
                  <span className="text-white text-xl ">
                    Internship Remotely
                  </span>
                  <p className="mt-4 text-[#989899]">
                    During my internship, I completed a series of courses and
                    projects that have enriched my programming expertise and
                    provided me with practical software development insights.
                    Here's a snapshot of my accomplishments: Become a
                    Programmer: Foundations (LinkedIn Learning): Covered a range
                    of essential programming topics, from fundamentals to APIs,
                    databases, and version control with Git. HTML & CSS - Build
                    Responsive Real-World Websites (Udemy): Gained proficiency
                    in HTML, CSS, flexbox, and grid layout by creating a
                    responsive website called "Omnifood." JavaScript - The
                    Modern JavaScript Bootcamp (Udemy): Developed real-world
                    applications like hangman game, todo app, and notes app.
                    Explored JavaScript's inner workings and modern features.
                    React - The Complete Guide (Udemy): Built, tested, and
                    deployed React apps, mastering functional components,
                    authentication, and utilizing React libraries. Node.js
                    Developer Course (Udemy): Acquired skills in Node.js,
                    Express, and MongoDB, resulting in the creation of practical
                    apps including a chat app, notes app, and weather app. These
                    experiences have expanded my skill set and deepened my
                    understanding of programming and software development. I
                    look forward to applying these capabilities to future
                    challenges and projects.{" "}
                  </p>
                  <div className="absolute left-[-100px] h-full top-0 ">
                    <div className="flex flex-col items-center h-full gap-4">
                      <span className="block circle w-6 h-6 rounded-full bg-yellow-400"></span>
                      <div className="block line h-full w-[2px] bg-yellow-400"></div>
                    </div>
                  </div>
                  <div className="absolute left-[-200px] top-[-8px]">
                    <div className="test mr-[16px] block  py-1 px-3 bg-[#606063]">
                      <span className="text-white">2022</span>
                    </div>
                  </div>
                  {/* <span className="circle absolute w-6 h-6  shadow-md shadow-yellow rounded-full bg-yellow-400"></span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
