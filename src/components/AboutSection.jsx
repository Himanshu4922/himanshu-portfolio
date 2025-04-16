import React from "react";
import profileImg from "../assets/profile1.jpg";
import dots from "../assets/dots.svg";
import styles from "./AboutSection.module.css";

function AboutSection({aboutRef}) {

  return (
    <>
      <section className={styles["about-section"]} ref={aboutRef}>
        <div className={styles["about-text"]}>
          <h2>⚡ About Me</h2>
          <p>
            Hey! I’m Himanshu Bisht — to be honest, I wasn’t always into coding.
            But once I got introduced to JavaScript and started exploring how
            websites and user interfaces actually work behind the scenes,
            something just clicked.
          </p>
          <br />
          <p>
            The more I learned about the logic, structure, and the little
            details that make websites interactive, the more fascinated I
            became. Now, I love building smooth, responsive experiences using
            HTML, CSS, JavaScript, and React, and I’m always exploring new tools
            to sharpen my skills.
          </p>
          <br />
          <p>
            Outside of coding, I enjoy spending time with friends, watching a
            good series, or heading out for a quick game of cricket.🏏
          </p>
        </div>
        <div className={styles["picture"]}>
          <img
            src={dots}
            alt="dots"
            style={{
              position: "absolute",
              zIndex: "1",
            }}
            className={styles["dots-svg"]}
          />
          <div className={styles["picture-container"]}>
            <img
              src={profileImg}
              alt="profileImg"
              className={styles["profileImg"]}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
