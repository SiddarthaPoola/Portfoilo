import React, { useState } from "react"; 
import styles from "./Navbar.module.css"; 
import { getImageUrl } from "../../utils";  

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Siddartha<span className={styles.blueText}>.dev</span>
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        {/* Resume Button */}
        <div className={styles.resumeContainer}>
          <a
            className={styles.resumeLink}
            href="public/assets/resume/P Naga Siddartha Reddy .Resume (3).pdf"
            download="Siddartha_Resume.pdf"
          >
            Resume👜
          </a>
        </div>
      </div>
    </nav>
  );
};