import React, { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutSectionRef = useRef(null);
  
  const aboutItems = [
    {
      icon: "about/cursorIcon.png",
      title: "Frontend Developer",
      description:
        "I'm a frontend developer with experience in building responsive and optimized sites.",
    },
    {
      icon: "about/serverIcon.png",
      title: "Backend Developer",
      description:
        "I have experience developing fast and optimized back-end systems and APIs.",
    },
    {
      icon: "about/cursorIcon.png",
      title: "DevOps",
      description:
        "I have completed DevOps training at ProCorp, gaining hands-on experience with tools for automation, integration, testing, delivery, and deployment. I have acquired the skills to manage the software development lifecycle efficiently.",
    },
  ];

  useEffect(() => {
    // Animation on page load
    setIsVisible(true);
    
    // Observer for subtle scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.inView);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      className={`${styles.container} ${isVisible ? styles.visible : ""}`} 
      id="about" 
      ref={aboutSectionRef}
    >
      <h2 className={`${styles.title} ${isVisible ? styles.titleVisible : ""}`}>About</h2>
      <div className={styles.content}>
        <div className={`${styles.imageContainer} ${isVisible ? styles.imageVisible : ""}`}>
          <img
            src={getImageUrl("about/aboutImage.png")}
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
          <div className={styles.imageOverlay}></div>
          <div className={styles.imageGlow}></div>
        </div>
        <ul className={styles.aboutItems}>
          {aboutItems.map((item, index) => (
            <li 
              key={index} 
              className={`${styles.aboutItem} ${isVisible ? styles.itemVisible : ""}`}
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              <div className={styles.iconWrapper}>
                <img src={getImageUrl(item.icon)} alt={`${item.title} icon`} />
                <div className={styles.iconGlow}></div>
              </div>
              <div className={styles.aboutItemText}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.backgroundElements}>
        <div className={`${styles.bgCircle} ${styles.circle1}`}></div>
        <div className={`${styles.bgCircle} ${styles.circle2}`}></div>
        <div className={`${styles.bgCircle} ${styles.circle3}`}></div>
      </div>
    </section>
  );
};