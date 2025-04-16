import React from "react";
import Button from "./Button";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./FooterSection.module.css";

function FooterSection() {
  return (
    <>
      <section className={styles["footer-section"]}>
        <h1>Keep In Touch</h1>
        <div className={styles["footer-section-text"]}>
          <p>
            I'm currently specializing in <span>Front-end Development</span>
          </p>
          <p>Feel free to get in touch and talk more about your projects</p>
        </div>
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
      </section>
    </>
  );
}

export default FooterSection;
