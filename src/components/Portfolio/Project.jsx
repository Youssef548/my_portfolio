import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsArrowRight } from "react-icons/bs";

import "./Project.css";

const Project = (props) => {
  const { projectImage, projectName, projectDesc, demoLink, gitHubLink, id } =
    props.project;
    
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  return (
    <motion.div 
      ref={ref}
      layout 
      className="project-box glass-card" 
      key={id}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      <div className="project-image-container">
        {projectImage ? (
          <img src={projectImage} alt={projectName} className="project-image" />
        ) : (
          <div className="project-image-placeholder">
            <span>{projectName}</span>
          </div>
        )}
        <div className="project-overlay"></div>
      </div>
      <div className="project-box-text">
        <h3 className="project-name">{projectName}</h3>
        <p className="project-info">{projectDesc}</p>
        <div className="link-btns">
          <motion.a
            className="btn view-demo"
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live demo of ${projectName}`}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            view live <BsArrowRight className="btn-icon" />
          </motion.a>
          <motion.a
            className="btn git-repo"
            href={gitHubLink}
            aria-label={`View GitHub repository for ${projectName}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            github repo <BsArrowRight className="btn-icon" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
