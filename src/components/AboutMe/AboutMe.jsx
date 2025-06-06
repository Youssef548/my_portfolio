import React from "react";
import { motion, useSpring } from "framer-motion";

import "./AboutMe.css";
import "../../index.css";
import me from "../../imgs/me.jpg";
import BackgroundElements from "../common/BackgroundElements";

const AboutMe = () => {
  const transition = {
    duration: 1,
    type: useSpring,
  };

  return (
    <article className="about-section" id="about">
      <BackgroundElements />
      <div className="container">
        <div className="about-me">
          <motion.div
            className="img-section"
            whileInView={{ transform: "translateX(0%)", opacity: 1 }}
            transition={transition}
            initial={{
              transform: "translateX(-100%)",
              opacity: 0,
            }}
          >
            <img src={me} alt="Youssef Fawzi" />
          </motion.div>
          <motion.div
            whileInView={{ transform: "translateX(0%)", opacity: 1 }}
            transition={transition}
            initial={{
              transform: "translateX(100%)",
              opacity: 0,
            }}
            className="info-section"
          >
            <h3 className="section-title">About Me</h3>
            <div className="info">
              <p>
                I'm a MERN & Nest.js Full-Stack Engineer with 2+ years of experience building scalable SaaS and real-time systems. I specialize in delivering performant, secure APIs and creating intuitive user interfaces with modern design principles.
              </p>
              <p>
                At Native Code IQ, I engineered HR and healthcare platforms serving 1,000+ users, including biometric attendance tracking, payroll automation, and backend scaling to handle 180K+ daily requests using PM2 and Docker.
              </p>
              <p>
                I'm passionate about creating clean, maintainable code and currently focused on mastering backend architecture while continuing to enhance my frontend expertise.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </article>
  );
};

export default AboutMe;
