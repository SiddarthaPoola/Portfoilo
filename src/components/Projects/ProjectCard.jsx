import React, { useRef, useEffect } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, source },
}) => {
  const cardRef = useRef(null);
  
  useEffect(() => {
    // Add animation delay based on card position
    if (cardRef.current) {
      const index = Array.from(cardRef.current.parentNode.children).indexOf(cardRef.current);
      cardRef.current.style.animationDelay = `${index * 0.1}s`;
    }
    
    // Optional: Add 3D tilt effect
    const card = cardRef.current;
    
    const handleMouseMove = (e) => {
      if (!card) return;
      
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    
    const handleMouseLeave = () => {
      if (!card) return;
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };
    
    // Add event listeners
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    }
    
    // Cleanup
    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const handleSourceClick = (event) => {
    if (!source) {
      event.preventDefault(); // Prevent default link behavior
      
      // Add more interactive feedback
      const target = event.currentTarget;
      target.classList.add(styles.denied);
      
      // Shake animation already applied in CSS
      
      // Custom alert with better styling
      const alertMsg = document.createElement('div');
      alertMsg.className = styles.customAlert;
      alertMsg.textContent = "Access Denied: The source code for this project is not available.";
      
      document.body.appendChild(alertMsg);
      
      // Remove after animation
      setTimeout(() => {
        alertMsg.classList.add(styles.fadeOut);
        setTimeout(() => {
          document.body.removeChild(alertMsg);
          target.classList.remove(styles.denied);
        }, 500);
      }, 2000);
    }
  };

  return (
    <div className={styles.container} ref={cardRef}>
      <div className={styles.image}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        {source ? (
          <a
            href={source}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        ) : (
          <span
            className={`${styles.link} ${styles.unauthorized}`}
            onClick={handleSourceClick}
          >
            Source
          </span>
        )}
      </div>
    </div>
  );
};