import React from "react";
import restCountriesImg from "../assets/restCountriesImg.png";
import styles from "./ProjectCard.module.css";
import Techbar from "./Techbar";
import { FaLink } from "react-icons/fa6";

function ProjectCard({ project }) {
  return (
    <>
      <div className={styles["project-card"]}>
        <div className={styles["project-card-img-container"]}>
          <img src={project.projectImage} alt={project.title} />
        </div>
        <div className={styles["description-container"]}>
          <h2>
            {project.title}
            <a href={project.link} target="_blank" title="Live Demo">
              <FaLink />
            </a>
          </h2>
          {project.techStack.map(function (projectTech) {
            return (
              <Techbar projectTech={projectTech} key={projectTech.techName} />
            );
          })}
          <p className={styles["description-text"]}>{project.description}</p>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
