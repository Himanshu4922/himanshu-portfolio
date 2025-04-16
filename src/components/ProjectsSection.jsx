import { useContext } from "react";
import styles from "./ProjectsSection.module.css";
import { Link } from "react-router";
import ProjectCard from "./ProjectCard";
import {
  useProjectsContext,
} from "./../context/ProjectsContext";

function ProjectsSection() {
  const projects = useProjectsContext();

  return (
    <>
      <section className={styles["projects-section"]}>
        <div className={styles["projects-text"]}>
          <h2>All Creative Works</h2>
          <p>Here's some of my projects that I have worked on.</p>
          <Link to="/projects">Explore more &rarr;</Link>
        </div>
        {projects.map(function (project) {
          return <ProjectCard project={project} key={project.title} />;
        })}
      </section>
    </>
  );
}

export default ProjectsSection;
