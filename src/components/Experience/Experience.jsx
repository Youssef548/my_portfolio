import React from "react";
import "./Experience.css";
import { experience } from "../../data";
import { motion, useSpring } from "framer-motion/dist/framer-motion";

const Experience = () => {
  const transition = {
    duration: 0.5,
    type: useSpring,
  };

  return (
    <div className="experience-section" id="experience">
      <div className="">
        <motion.div
          whileInView={{ opacity: 1 }}
          transition={{ transition }}
          initial={{ opacity: 0 }}
          className="text"
        >
          <h3 className="section-title">my journey</h3>
          <h4 className="special-in">professional experience</h4>
        </motion.div>
        
        <div className="experiences">
          {experience.map((item) => {
            const { id, title, company, date, description, responsibilities } = item;
            return (
              <motion.div
                whileInView={{ opacity: 1 }}
                transition={transition}
                initial={{ opacity: 0 }}
                key={id}
                className="experience-box"
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
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
