import React from "react";
import { services } from "../../data";
import { motion, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BackgroundElements from "../common/BackgroundElements";

import "./Services.css";

const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });
  
  return (
    <motion.div
      ref={ref}
      className="service-box"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 15px 30px rgba(117, 98, 224, 0.3), 0 5px 15px rgba(0, 0, 0, 0.2)"
      }}
    >
      <div className="service-icon-box">
        <img
          className="service-icon"
          src={service.serviceIcon}
          alt={service.text}
        />
        <h3 className="service-title">{service.text}</h3>
      </div>
      <p className="service-info">{service.serviceInfo}</p>
    </motion.div>
  );
};

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <section className="services-section" id="services">
      <BackgroundElements icons={true} />
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text"
        >
          <h3 className="section-title">what i do</h3>
          <h4 className="special-in">specializing in</h4>
        </motion.div>
        <div className="services">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
        <motion.div
          className="cv"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button className="cv-btn">
            <a
              href="/assets/Youssef_Fawzi_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Youssef_Fawzi_CV.pdf"
            >
              Download CV
            </a>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
