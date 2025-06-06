import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { projectsData } from "../../data";
import { projectsNav } from "../../data";

import Project from "./Project";
import "./Projects.css";

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(1);

  useEffect(() => {
    if (item.name === "all") {
      return setProjects(projectsData);
    }
    const newProjets = projectsData.filter((project) => {
      return project.category === item.name; // Remove toLowerCase() as categories are case-sensitive
    });
    setProjects(newProjets);
  }, [item]);

  const handleClick = (event, id) => {
    // Get the original category name from projectsNav instead of using the display text
    const categoryName = projectsNav.find(item => item.id === id)?.name || "all";
    setItem({ name: categoryName });
    setActive(id);
  };

  return (
    <div className="portfolio-projects">
      <motion.nav 
        className="portfolio-nav"
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="portfolio-items">
          {projectsNav.map((project) => {
            const { id, name, displayName } = project;
            return (
              <motion.li
                onClick={(e) => {
                  handleClick(e, id);
                }}
                className={`${active === id ? "active" : ""}`}
                key={id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {displayName || name}
              </motion.li>
            );
          })}
        </ul>
      </motion.nav>
      <section>
        <AnimatePresence mode="wait">
          <motion.div
            layout
            className="projects-data"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            key={item.name}
          >
            {projects.map((project) => {
              return <Project project={project} key={project.id} />;
            })}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Projects;
