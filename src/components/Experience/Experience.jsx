import React from "react";
import "./Experience.css";
import { experience } from "../../data";
import { motion, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BackgroundElements from "../common/BackgroundElements";

const ExperienceItem = ({ item, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });
  
  const { id, title, company, date, description, responsibilities } = item;
  
  return (
    <motion.div
      ref={ref}
      className="experience-box glass-card"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="experience-header">
        <h3 className="experience-title">{title}</h3>
        <div className="experience-meta">
          <h4 className="experience-company">{company}</h4>
          <span className="experience-date">{date}</span>
        </div>
      </div>
      <p className="experience-description">{description}</p>
      <div className="experience-responsibilities">
        {responsibilities.map((responsibility, index) => (
          <div key={index} className="responsibility-item">
            <span className="bullet"></span>
            <p>{responsibility}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <section className="experience-section" id="experience">
      <BackgroundElements />
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text"
        >
          <h3 className="section-title">my journey</h3>
          <h4 className="special-in">professional experience</h4>
        </motion.div>
        
        <div className="experiences">
          {experience.map((item, index) => (
            <ExperienceItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
