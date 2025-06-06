import React from "react";
import { motion } from "framer-motion";
import { socialLinks } from "../../data";

const Connect = () => {
  const socialIconVariants = {
    hover: { 
      scale: 1.2,
      y: -5,
      transition: { type: "spring", stiffness: 300 }
    },
    tap: { scale: 0.9 }
  };

  return (
    <div className="connect-text">
      <h3>connect with me</h3>
      <p>Satisfied with my work? Let's collaborate!</p>
      
      <div className="contact-info">
        <div className="contact-item">
          <span className="contact-label">Email:</span>
          <a href="mailto:youssefcodesdev@gmail.com" className="contact-value">
            youssefcodesdev@gmail.com
          </a>
        </div>
        
        <div className="contact-item">
          <span className="contact-label">Based in:</span>
          <span className="contact-value">Cairo, Egypt</span>
        </div>
      </div>
      
      <h4 className="social-title">Find me on</h4>
      <ul className="social-icon-links">
        {socialLinks.map((item, index) => {
          const { name, icon, url } = item;
          return (
            <motion.li 
              key={index}
              whileHover="hover"
              whileTap="tap"
              variants={socialIconVariants}
            >
              <a
                href={url}
                aria-label={name}
                rel="noopener noreferrer"
                target="_blank"
                className="social-icon-link"
              >
                {icon}
              </a>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default Connect;
