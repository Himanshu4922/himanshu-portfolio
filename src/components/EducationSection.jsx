import React from "react";
import styles from "./EducationSection.module.css";
import EducationCard from "./EducationCard";
import schoolIcon from "../assets/school.svg";
import graduateIcon from "../assets/graduate.svg";

function EducationSection() {
  const educationDetails = [
    {
      degree: "Bachelor Of Technology",
      college: "National Institute Of Technology Srinagar",
      timeline: "2021 - 2025",
      result: "72.2%",
      icon: graduateIcon,
    },
    {
      degree: "Senior Seconday Education",
      college: "Heera Public School, New Delhi",
      timeline: "2019 - 2020",
      result: "94.3%",
      icon: schoolIcon,
    },
    {
      degree: "Secondary Education",
      college: "Heera Public School, New Delhi",
      timeline: "2017 - 2018",
      result: "86.7%",
      icon: schoolIcon,
    },
  ];
  return (
    <>
      <section className={styles["education-section"]}>
        <h1>Education</h1>
        {educationDetails.map(function (education) {
          return <EducationCard education={education} key={education.degree} />;
        })}
      </section>
    </>
  );
}

export default EducationSection;
