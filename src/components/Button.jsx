import React from "react";
import styles from "./Button.module.css";

function Button({ socialName, children, url }) {
  return (
    <>
      <a href={url} target="_blank">
        <button className={styles["socials-btn"]}>
          {children}
          {socialName}
        </button>
      </a>
    </>
  );
}

export default Button;
