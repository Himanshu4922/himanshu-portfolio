import React from "react";
import styles from "./Error.module.css";
import { Link } from "react-router";

function Error() {
  return (
    <>
      <section className={styles["error-section"]}>
        <div className={styles["error-container"]}>
          <h1>
            <span>404</span>
          </h1>
          <h1>
            Oops! The page you are looking for does not exists or has been
            temporarily removed. Try returning to the Home page.
          </h1>
          <Link to="/">
            <button url="/">Home</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Error;
