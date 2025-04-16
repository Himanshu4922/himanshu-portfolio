import React from "react";
import profileImg from "../assets/profile1.jpg";
import dots from "../assets/dots.svg";
import styles from "./AboutSection.module.css";

function AboutSection({ aboutRef }) {
  return (
    <>
      <section className={styles["about-section"]} ref={aboutRef}>
        <div className={styles["about-text"]}>
          <h2>⚡ About Me</h2>
          <p>
            My journey into the world of tech wasn’t a straight path. While I
            didn’t always know I would end up here, discovering the world of web
            development sparked something in me that’s kept me hooked ever
            since.
          </p>
          <br />
          <p>
            As I delved deeper into web technologies, I found myself captivated
            by how design and functionality come together to create meaningful
            user experiences. Now, I focus on building clean, intuitive, and
            responsive websites using HTML, CSS, JavaScript, and React, with a
            constant curiosity to learn and explore new tools and techniques to
            enhance my skills.
          </p>
          <br />
          <p>
            When I’m not coding, you can find me writing some posts, catching up
            on a good series, or playing a quick game of cricket 🏏
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
