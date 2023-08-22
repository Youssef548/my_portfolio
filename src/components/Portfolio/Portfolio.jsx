import React, { useState } from "react";
import { projectsData } from "../../data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

const Portfolio = () => {
  const [projectsToShow, setProjectsToShow] = useState(6);
  const [slices, setSlices] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setSlices(slices + 6);
      setProjectsToShow(projectsToShow - 6);
    }
  };

  const goToNextPage = () => {
    if (projectsToShow < projectsData.length) {
      setCurrentPage(currentPage + 1);
      setSlices(slices - 6);
      setProjectsToShow(projectsToShow + 6);
    }
  };

  return (
    <section className="py-10" id="portfolio">
      <div className="container flex flex-col gap-4">
        <h2 className="section-title text-center text-4xl text-white">
          Portfolio
        </h2>
        {/* <img src={PNG} alt={"helloworld"} /> */}
        <section className="project-boxes ease-in transition-all duration-300 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center justify-items-center text-light p-4 lg:p-0">
          {projectsData.slice(slices, projectsToShow).map((project) => {
            const {
              id,
              category,
              projectImage,
              projectName,
              projectDesc,
              demoLink,
              gitHubLink,
            } = project;

            return (
              <article
                key={id}
                className="w-full group ease-in transition-all duration-300 
                drop-shadow-[0_4px_2px_rgba(251,157,38,0.10)] 
                hover:drop-shadow-[0_4px_5px_rgba(251,157,38,0.06)]
                 active:drop-shadow-[0_4px_5px_rgba(251,157,38,0.06)]
                rounded-lg overflow-hidden bg-darkColor pb-4 hover:scale-105
                  active:scale-105 border border-[#ffc86b] hov flex flex-col justify-between ring-[#ffc86b] hover:ring-2"
              >
                <div className="relative ease-in transition-all duration-300 overflow-hidden">
                  <img
                    src={projectImage}
                    className="w-full h-[200px] ease-in transition-all duration-300  group-hover:brightness-50
                     group-hover:scale-105 group-active:brightness-50 group-active:scale-105 group-focus:brightness-50 group-focus:scale-105"
                    alt=""
                  />{" "}
                  <div
                    className="absolute ease-in transition-all duration-300 z-10 top-1/2 left-1/2 -translate-x-1/2 
                -translate-y-1/2 w-max flex items-center justify-center 
                text-[#ffc86b] gap-4 opacity-0 pointer-events-none invisible 
                group-hover:opacity-100 group-hover:pointer-events-auto 
                group-hover:visible group-active:opacity-100 
                group-active:pointer-events-auto group-active:visible 
                group-focus:opacity-100 group-focus:pointer-events-auto 
                group-focus:visible"
                  >
                    <a
                      href={demoLink}
                      target="_blank"
                      className="ease-in transition-all duration-300 border-2
                      w-16 h-16 flex justify-center items-center rounded-full curosor-pointer 
                      group-hover:border-[#ffb35d] hover:text-[#ffb35d]
                       border-lightGold  hover:ring-2 ring-[#ffb35d] bg-[#18191d85]"
                    >
                      <BsArrowUpRight
                        className="transition ease-all duration-300 text-2xl 
                        text-white group-hover:text-[#ffb35d] "
                      />
                    </a>
                    <a
                      href={gitHubLink}
                      target="_blank"
                      className="ease-in transition-all duration-300 border-2
                  w-16 h-16 flex justify-center items-center rounded-full curosor-pointer 
                  group-hover:border-[#ffb35d] hover:text-[#ffb35d]
                   border-lightGold  hover:ring-2 ring-[#ffb35d] bg-[#18191d85]"
                    >
                      <BsGithub
                        className="transition ease-all duration-300 text-2xl 
                        text-white group-hover:text-[#ffb35d] "
                      />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col grow justify-between">
                  <div className="mt-4 px-2">
                    <h2 className="text-2xl text-[#ffc86b] font-bold font-serif mb-2">
                      {projectName}
                    </h2>
                    <p className="text-white text-xl mb-4">{projectDesc}</p>
                  </div>
                  <div></div>
                </div>
              </article>
            );
          })}
        </section>{" "}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={goToPrevPage}
            className="bg-[#ffc86b] text-black py-2 px-2 rounded-md disabled:opacity-50 flex gap-1 items-center"
            disabled={currentPage === 1}
          >
            <FaChevronLeft className="mr-1" />
            Prev
          </button>
          <button
            onClick={goToNextPage}
            className="bg-[#ffc86b] text-black py-2 px-2 rounded-md disabled:opacity-50 flex gap-1 items-center"
            disabled={projectsToShow >= projectsData.length}
          >
            Next
            <FaChevronRight className="ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
