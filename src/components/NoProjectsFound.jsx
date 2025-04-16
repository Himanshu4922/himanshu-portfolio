import React from "react";
import styles from "./NoProjectsFound.module.css";

function NoProjectsFound() {
  return (
    <>
      <h2 className={styles["error-heading"]}>
        No such <span style={{ color: "white" }}>project</span> exists
      </h2>
    </>
  );
}

export default NoProjectsFound;
