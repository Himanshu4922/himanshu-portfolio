import React from "react";
import styles from "./Techbar.module.css";

function Techbar({ projectTech }) {
  return (
    <>
      <div className={styles["tech-used"]} style={{backgroundColor:projectTech.bgColor}}>
        <img src={projectTech.techIcon} alt={projectTech.techName} width="16"/>
        <p style={{color:projectTech.color}}>{projectTech.techName}</p>
      </div>
    </>
  );
}

export default Techbar;
