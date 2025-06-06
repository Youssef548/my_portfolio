import React, { useEffect, useState, useRef } from "react";
import { links } from "../../data";
import { BsList } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import "../../index.css";
import "./Nav.css";

const Nav = () => {
  const [navFix, setNavFixed] = useState(false);
  const [active, setActive] = useState(0);

  const [openList, setOpenList] = useState(false);

  const handleClick = (e, index) => {
    setActive(index);
  };
  const handleOpenNav = () => {
    setOpenList(true);
  };
  const handleCloseNav = () => {
    setOpenList(false);
  };

  const fixNav = () => {
    // Fix the navbar after scrolling past the hero section
    if (window.scrollY > 100) {
      setNavFixed(true);
    } else {
      setNavFixed(false);
    }
    
    const sectionIds = ['home', 'about', 'skills', 'services', 'experience', 'portfolio', 'contact'];
    
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
    
    const scrollPosition = window.scrollY + 300;
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (!section) continue;
      
      // Get section position and dimensions
      const sectionTop = section.offsetTop;
      
      // If we've scrolled to or past this section, make it active
      if (scrollPosition >= sectionTop) {
        const sectionId = section.getAttribute('id');
        const navIndex = links.findIndex(link => link.url === `#${sectionId}`);
        
        if (navIndex !== -1 && navIndex !== active) {
          setActive(navIndex);
        }
        break; // Exit the loop once we've found our section
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", fixNav);
  }, []);

  return (
    <div className={`${navFix ? "nav-section fixed" : "nav-section"}`}>
      <nav className={`${openList ? "header-nav open" : "header-nav"}`}>
        <div className="logo">
          <a href="/"><FaCode className="logo-icon" /> Youssef Fawzi</a>
        </div>
        <span className="bullet-list" onClick={handleOpenNav}>
          <BsList />
        </span>
        <ul className="links">
          <span className="close-menu" onClick={handleCloseNav}>
            <AiOutlineCloseCircle />
          </span>
          {links.map((link, index) => {
            const { id, url, text } = link;
            return (
              <li
                key={id}
                onClick={(e) => handleClick(e, index)}
                className={`${active === index ? "active" : ""}`}
              >
                <a 
                  href={url} 
                  onClick={(e) => {
                    handleCloseNav();
                    
                    // Smooth scroll to section when clicking nav links
                    if (url.startsWith('#')) {
                      e.preventDefault();
                      const element = document.querySelector(url);
                      if (element) {
                        const yOffset = -80; // Offset for fixed header
                        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({top: y, behavior: 'smooth'});
                      }
                    }
                  }}
                >
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
