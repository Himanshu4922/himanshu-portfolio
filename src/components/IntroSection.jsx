import { useState, useEffect } from "react";
import styles from "./IntroSection.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import dotsImg from "../assets/dots.svg";
import Button from "./Button";
import { ReactTyped } from "react-typed";

function IntroSection() {

  return (
    <>
      <section className={styles["intro-section"]}>
        <div className={styles["intro"]}>
          <img
            src={dotsImg}
            className="dotsImg"
            alt="dotsImg"
            style={{ backgroundColor: "transparent" }}
          />
          <p className={styles["hey"]}>Hey there!, I'm-</p>
          <p className={styles["name"]}>Himanshu Bisht</p>
        </div>
        <div className={styles["profession"]}>
          <p>
            <ReactTyped
              strings={["Frontend Developer", "Software Engineer"]}
              typeSpeed={120}
              backSpeed={50}
              loop
            />
          </p>
        </div>
        <div className={styles["specialized"]}>
          <p>🚀 Currently specializing in Frontend (React / Javascript)</p>
          <p>🎓 National Institute of Technology Srinagar (B.Tech)</p>
        </div>
        <div>
          <Button
            socialName="Github"
            url="https://github.com/Himanshu4922?tab=repositories"
          >
            <FaGithub
              style={{
                fontSize: "16px",
                marginRight: "8px",
                verticalAlign: "middle",
                color: "#3ccf91",
              }}
            />
          </Button>

          <Button
            socialName="Linkedin"
            url="https://www.linkedin.com/in/himanshu-bisht-900a3b247/"
          >
            <FaLinkedin
              style={{
                fontSize: "16px",
                marginRight: "8px",
                verticalAlign: "middle",
                color: "#3ccf91",
              }}
            />
          </Button>
          <Button
            socialName="Email"
            url="mailto:bishthimanshu829@gmail.com?subject=Let's Connect&body=Hi Himanshu, I saw your portfolio and..."
          >
            <MdEmail
              style={{
                fontSize: "16px",
                marginRight: "8px",
                verticalAlign: "middle",
                color: "#3ccf91",
              }}
            />
          </Button>
        </div>
      </section>
    </>
  );
}

export default IntroSection;
