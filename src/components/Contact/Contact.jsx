import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const handleEmailClick = () => {
    const email = "siddarthareddy308@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Email copied to clipboard: " + email);
      })
      .catch(() => {
        window.location.href = `mailto:${email}`; // Fallback to mailto
      });
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/Phone.png")} alt="Phone" />
          <a href="tel:+918897774808">+91 8897774808</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:siddarthareddy308@gmail.com" onClick={handleEmailClick}>
            siddarthareddy308@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="http://www.linkedin.com/in/siddartha-reddy-938154214" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/SiddarthaPoola" target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
        </li>
      </ul>
    </footer>
  );
};