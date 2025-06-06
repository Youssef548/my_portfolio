import React from "react";
import Connect from "./Connect";
import { motion } from "framer-motion/dist/framer-motion";
import { useInView } from "react-intersection-observer";

import "./Contact.css";
import ContactForm from "./ContactForm";
import BackgroundElements from "../common/BackgroundElements";

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      }
    }
  };

  return (
    <div className="contact-section" id="contact">
      <BackgroundElements showIcons={true} />
      <div className="container">
        <motion.div 
          className="section-title"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants}>CONTACT</motion.h2>
          <motion.p variants={itemVariants}>Get in touch with me</motion.p>
        </motion.div>

        <motion.div 
          className="contact"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="connect-with-me glass-card"
          >
            <Connect />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="contact-form glass-card"
          >
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
