import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
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

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          {aboutItems.map((item, index) => (
            <li key={index} className={styles.aboutItem}>
              <img src={getImageUrl(item.icon)} alt={`${item.title} icon`} />
              <div className={styles.aboutItemText}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};