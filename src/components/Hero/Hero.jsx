import React from "react";
import { AiFillEye } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaCode, FaReact } from "react-icons/fa";
import { motion, useSpring } from "framer-motion/dist/framer-motion";

import "../../index.css";
import "./Hero.css";

const Hero = () => {
  const transition = { duration: 1, type: useSpring };
  
  return (
    <header className="hero-section" id="home">
      <div className="hero-bg-elements">
        <div className="hero-circle hero-circle-1"></div>
        <div className="hero-circle hero-circle-2"></div>
        <div className="hero-circle hero-circle-3"></div>
        <div className="floating-icon icon-1"><FaReact /></div>
        <div className="floating-icon icon-2"><FaCode /></div>
      </div>
      
      <div className="container">
        <div className="hero">
          <motion.div
            className="hero-content"
            whileInView={{ opacity: 1 }}
            transition={transition}
            initial={{ opacity: 0 }}
          >
            <div className="hero-text-container">
              <motion.h1 
                className="welcome-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hello, I'm
              </motion.h1>
              
              <motion.h2 
                className="name-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Youssef Fawzi
              </motion.h2>
              
              <motion.div 
                className="title-highlight"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.6, duration: 1 }}
              ></motion.div>
              
              <motion.p 
                className="info"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                MERN & Nest.js Full-Stack Engineer
              </motion.p>
              
              <motion.div 
                className="btns-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <button className="aboutme-btn">
                  <a href="#about">
                    About Me{" "}
                    <span className="icon">
                      <BsFillPersonFill />
                    </span>
                  </a>
                </button>
                <button className="projects-btn">
                  <a href="#portfolio">
                    Projects
                    <span className="icon">
                      <AiFillEye />
                    </span>
                  </a>
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Hero;