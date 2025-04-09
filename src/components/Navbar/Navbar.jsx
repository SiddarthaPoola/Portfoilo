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
          <li className={styles.mobileResumeItem}>
            <a
              className={styles.resumeLink}
              href="dist\assets\resume\P Naga Siddartha Reddy .Resume (5).pdf"
              download="Siddartha_Resume.pdf"
            >
              Resume👜
            </a>
          </li>
        </ul>
        {/* Resume Button - Desktop only */}
        <div className={styles.desktopResumeContainer}>
          <a
            className={styles.resumeLink}
            href="dist\assets\resume\P Naga Siddartha Reddy .Resume (5).pdf"
            download="Siddartha_Resume.pdf"
          >
            Resume👜
          </a>
        </div>
      </div>
    </nav>
  );
};