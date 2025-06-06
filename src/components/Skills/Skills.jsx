import React, { useState, useRef, useEffect } from "react";
import { skills } from "../../data";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsArrowRight } from "react-icons/bs";
import BackgroundElements from "../common/BackgroundElements";

import "./Skills.css";

const SkillCard = ({ skill, index }) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <motion.div 
      className="skill-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -10, 
        rotateZ: 2,
        boxShadow: "0 15px 30px rgba(117, 98, 224, 0.4), 0 5px 15px rgba(0, 0, 0, 0.2)"
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
      role="button"
      aria-label={`Skill: ${skill.text}`}
    >
      <div className="skill-icon">
        <img src={skill.image} alt="" aria-hidden="true" />
      </div>
      <div className="skill-content">
        <span className="skill-text">{skill.text.toUpperCase()}</span>
        <motion.span 
          className="skill-arrow"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -10 }}
          transition={{ duration: 0.2 }}
        >
          <BsArrowRight />
        </motion.span>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });
  const controls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);
  
  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <BackgroundElements />
      
      <div className="container">
        <motion.div 
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Skills</h2>
        </motion.div>
        
        {/* Marquee for larger screens */}
        <motion.div 
          className="skills-marquee-container"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          <div className="skills-marquee" aria-hidden="true">
            <div className="skills-track">
              {/* We render the skills list three times to create a seamless infinite loop */}
              {[...Array(3)].map((_, setIndex) => (
                <React.Fragment key={`set-${setIndex}`}>
                  {skills.map((skill, index) => (
                    <SkillCard 
                      key={`${setIndex}-${skill.id}`} 
                      skill={skill} 
                      index={index} 
                    />
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Grid for mobile screens */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillCard key={`grid-${skill.id}`} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
