import React from "react";
import Projects from "./Projects";
import { motion } from "framer-motion/dist/framer-motion";
import { useInView } from "react-intersection-observer";
import BackgroundElements from "../common/BackgroundElements";

import "./Portfolio.css";

const Portfolio = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  return (
    <section id="portfolio" className="portfolio">
      <BackgroundElements icons={true} />
      <div className="container">
        <motion.div
          ref={ref}
          className="portfolio-text"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="section-title">my work</h3>
          <h4 className="special-in">featured projects</h4>
        </motion.div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
