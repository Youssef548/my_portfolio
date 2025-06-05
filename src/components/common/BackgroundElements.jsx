import React from 'react';
import { FaCode, FaReact, FaJs, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import '../../styles/glassmorphism.css';
import '../../styles/animations.css';

const BackgroundElements = ({ icons = true }) => {
  return (
    <div className="background-elements">
      {/* Gradient circles */}
      <div className="bg-circle bg-circle-1"></div>
      <div className="bg-circle bg-circle-2"></div>
      <div className="bg-circle bg-circle-3"></div>
      
      {/* Floating icons - only shown if icons prop is true */}
      {icons && (
        <>
          <div className="float-icon-1"><FaReact /></div>
          <div className="float-icon-2"><FaCode /></div>
          <div className="float-icon-3"><FaJs /></div>
          <div className="float-icon-1" style={{ top: '60%', right: '10%', animationDelay: '1s' }}><FaCss3Alt /></div>
          <div className="float-icon-2" style={{ top: '30%', left: '5%', animationDelay: '2s' }}><FaHtml5 /></div>
        </>
      )}
    </div>
  );
};

export default BackgroundElements;
