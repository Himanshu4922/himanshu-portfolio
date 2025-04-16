import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer className={styles["footer"]}>
        <p>
          Developed by <span>Himanshu Bisht</span>
        </p>
        <p>
          Built with <span>ReactJs</span>, Hosted on <span>Vercel</span>
        </p>
      </footer>
    </>
  );
}

export default Footer;
