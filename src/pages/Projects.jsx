import { useContext, useEffect, useState, useMemo } from "react";
import styles from "./Projects.module.css";
import searchIcon from "../assets/search.svg";
import ProjectCard from "./../components/ProjectCard";
import { ProjectsContext } from "./../context/ProjectsContext";
import NoProjectsFound from "./../components/NoProjectsFound";

function Projects() {
  const projects = useContext(ProjectsContext);

  const [inputText, setInputText] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  function handleFilterProjects(projectName) {
    setFilteredProjects(
      projects.filter(function (project) {
        return project.title.toLowerCase().includes(projectName.toLowerCase());
      })
    );
  }

  function debounce(cb, waitTime) {
    let timerId;
    return function (...args) {
      clearTimeout(timerId);
      timerId = setTimeout(function () {
        cb(...args);
      }, waitTime);
    };
  }

  const debouncedHandleFilterProjects = useMemo(
    () => debounce(handleFilterProjects, 400),
    []
  );

  function handleInputChange(e) {
    if (/^$|^[^0-9]+$/.test(e.target.value.trimStart())) {
      setInputText(e.target.value.trimStart());
      debouncedHandleFilterProjects(e.target.value.trimStart());
    }
  }

  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className={styles["projects-page-section"]}>
        <div className={styles["projects-page-heading-container"]}>
          <h1>Projects</h1>
          <p>
            I love building projects and practice my engineering skills, here's
            an archive of things that I've worked on
          </p>
          <div className={styles["input-container"]}>
            <img src={searchIcon} alt="search" width="16" />
            <input
              type="text"
              placeholder="Search projects"
              value={inputText}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {filteredProjects.length === 0 ? (
          <NoProjectsFound />
        ) : (
          <div className={styles["projects-card-grid"]}>
            {filteredProjects.map(function (project) {
              return <ProjectCard project={project} key={project.title} />;
            })}
          </div>
        )}
      </section>
    </>
  );
}

export default Projects;
