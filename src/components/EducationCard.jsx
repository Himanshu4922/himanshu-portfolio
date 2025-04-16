import React from "react";
import styles from "./EducationCard.module.css";
import resultIcon from "../assets/result.svg";
import calenderIcon from "../assets/calender.svg";
import bookIcon from "../assets/book.svg";

function EducationCard({ education }) {
  return (
    <>
      <div className={styles["education-card"]}>
        <div className={styles["circle-education"]}>
          <img src={education.icon} alt="" />
        </div>
        <h2>{education.degree}</h2>
        <p>
          <img src={bookIcon} alt="" />
          <span>{education.college}</span>
        </p>
        <p>
          <img src={calenderIcon} alt="" />
          <span>{education.timeline}</span>
        </p>
        <p>
          <img src={resultIcon} alt="" />
          <span>{education.result}</span>
        </p>
      </div>
    </>
  );
}

export default EducationCard;
// #9CA3AF
