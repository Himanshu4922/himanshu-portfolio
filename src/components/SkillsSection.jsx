import React from "react";
import styles from "./SkillsSection.module.css";
import Skill from "./Skill";
import htmlCssIcon from "../assets/htmlCss.svg";
import jsIcon from "../assets/js.svg";
import uiIcon from "../assets/ui.svg";
import tailwindIcon from "../assets/tailwind.svg";
import nodeIcon from "../assets/node.svg";
import gitIcon from "../assets/git.svg";
import reduxIcon from "../assets/redux.svg";

function SkillsSection() {
  const skills = [
    {
      heading: "HTML & CSS",
      level: "90%",
      icon: htmlCssIcon,
    },
    {
      heading: "JavaScript",
      level: "90%",
      icon: jsIcon,
    },
    {
      heading: "React",
      level: "90%",
      icon: htmlCssIcon,
    },
    {
      heading: "Tailwind",
      level: "90%",
      icon: tailwindIcon,
    },
    {
      heading: "Git & Github",
      level: "90%",
      icon: gitIcon,
    },
    {
      heading: "UI/UX Design",
      level: "90%",
      icon: uiIcon,
    },
    {
      heading: "Node.js",
      level: "80%",
      icon: nodeIcon,
    },
    {
      heading: "Redux",
      level: "80%",
      icon: reduxIcon,
    },
  ];
  return (
    <>
      <section className={styles["skills"]}>
        <h1>Skills</h1>
        <div className={styles["skills-grid"]}>
          {skills.map(function (skill) {
            return <Skill skill={skill} key={skill.heading}/>;
          })}
        </div>
      </section>
    </>
  );
}

export default SkillsSection;
