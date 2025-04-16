import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router";
import hamburgerImg from "../assets/hamburger.svg";
import crossImg from "../assets/cross.svg";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className={styles["header"]}>
        <Link to="/" className={styles["logo"]}>
          <span>{"{"}</span>H<span>{"}"}</span>
        </Link>
        {isMobile ? (
          <div className={styles["hamburger-container"]}>
            <img
              src={hamburgerImg}
              alt="nav"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        ) : (
          <nav className={styles["nav"]}>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link target="_blank" to="./myResume.pdf" rel="noopener noreferrer">
              <button>Resume</button>
            </Link>
          </nav>
        )}
      </header>
      {isMobile && (
        <nav
          className={`${styles["nav-mobile"]} ${
            isOpen ? styles["nav-open"] : ""
          }`}
        >
          <img src={crossImg} alt="cross" onClick={() => setIsOpen(!isOpen)} />
          <Link to="/" onClick={() => setIsOpen(!isOpen)}>
            Home
          </Link>
          <Link to="/projects" onClick={() => setIsOpen(!isOpen)}>
            Projects
          </Link>
          <Link to="/about" onClick={() => setIsOpen(!isOpen)}>
            About
          </Link>
          <Link
            target="_blank"
            to="./myResume.pdf"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(!isOpen)}
          >
            Resume
          </Link>
        </nav>
      )}
    </>
  );
}

export default Header;
