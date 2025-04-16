import React from "react";
import styles from "./Skill.module.css";

function Skill({ skill }) {
  return (
    <>
      <div className={styles["skill-container"]}>
        <div className={styles["skill-heading"]}>
          <div className={styles["skill-name-and-icon"]}>
            <img src={skill.icon} alt={skill.heading} />
            <h3>{skill.heading}</h3>
          </div>
          <p>{skill.level}</p>
        </div>
        <div className={styles["progress-bar"]}>
          <div
            className={styles["progress-value"]}
            style={{ width: skill.level }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Skill;
