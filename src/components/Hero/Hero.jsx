import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [role, setRole] = useState("FullStack Developer");
  const [roleColor, setRoleColor] = useState("#00a8e8"); // Initial color
  const roles = ["FullStack Developer", "Problem Solver"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRole((prevRole) => (prevRole === roles[0] ? roles[1] : roles[0]));
      setRoleColor((prevColor) => (prevColor === "#00a8e8" ? "#808080" : "#00a8e8")); // Alternate colors
    }, 1500); // Change text and color every 1.5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handleContactClick = (e) => {
    // Try to open the default email client
    const mailtoLink = "mailto:siddarthareddy308@gmail.com?subject=Let's Connect&body=Hi Siddartha, I came across your portfolio and would like to connect!";
    window.location.href = mailtoLink;

    // Fallback: Copy email to clipboard if mailto fails
    e.preventDefault();
    navigator.clipboard.writeText("siddarthareddy308@gmail.com")
      .then(() => {
        alert("Email copied to clipboard! You can now paste it into your email client.");
      })
      .catch(() => {
        alert("Failed to copy email to clipboard. Please manually copy siddarthareddy308@gmail.com.");
      });
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Siddartha!</h1>
        <p className={styles.description}>
          A{" "}
          <strong className={styles.roleText} style={{ color: roleColor }}>
            {role}
          </strong>
        </p>
        <p className={styles.description}>
          A passionate <strong>Full-Stack Developer</strong> skilled in{" "}
          <strong>React</strong> and <strong>Node.js</strong>. I build seamless,
          scalable, and high-performance applications.
        </p>
        <p className={styles.description}>
          📍<strong>Based in India.</strong>
        </p>
        <a
          href="mailto:siddarthareddy308@gmail.com"
          className={styles.contactBtn}
          onClick={handleContactClick}
        >
          Let's Connect 🚀
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};