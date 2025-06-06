import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaHeart } from "react-icons/fa";
import { links } from "../../data";
import { socialLinks } from "../../data";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const socialIconVariants = {
    hover: { 
      scale: 1.2,
      y: -5,
      transition: { type: "spring", stiffness: 300 }
    },
    tap: { scale: 0.9 }
  };

  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      <div className="container">
        <motion.div 
          className="footer-nav"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={footerVariants}
        >
          <motion.div className="logo" variants={itemVariants}>
            <a href="/"><FaCode className="logo-icon" /> Youssef Fawzi</a>
          </motion.div>
          
          <motion.ul className="footer-links" variants={itemVariants}>
            {links.map((link, index) => {
              const { url, text } = link;
              return (
                <motion.li 
                  key={index}
                  whileHover={{ 
                    y: -3, 
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <a href={url}>{text}</a>
                </motion.li>
              );
            })}
          </motion.ul>
          
          <motion.ul className="footer-social-links" variants={itemVariants}>
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
          </motion.ul>
        </motion.div>
        
        <div className="break-line"></div>
        
        <motion.div 
          className="terms"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerVariants}
        >
          <motion.div className="made-by" variants={itemVariants}>
            <h4>Made with <FaHeart className="heart-icon" /> by Youssef Fawzi © {currentYear}</h4>
          </motion.div>
          
          <motion.div className="rules" variants={itemVariants}>
            <ul>
              <motion.li whileHover={{ color: "#7562e0" }}>Privacy Policy</motion.li>
              <motion.li whileHover={{ color: "#7562e0" }}>Terms of Service</motion.li>
              <motion.li whileHover={{ color: "#7562e0" }}>Cookies Settings</motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
