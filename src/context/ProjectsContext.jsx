import { createContext, useContext } from "react";
import restCountriesImg from "../assets/restCountriesImg.png";
import focusOnTodayImg from "../assets/focusOnTodayImg.png";
import jsIcon from "../assets/jsIcon.svg";
import reactIcon from "../assets/reactIcon.svg";
import htmlIcon from "../assets/htmlIcon.svg";
import cssIcon from "../assets/cssIcon.svg";
import portfolioImg from "../assets/portfolioImg.png";
import educaseIndiaImg from "../assets/educaseIndiaImg.png";
import miniReactImg from "../assets/miniReactImg.png";

export const ProjectsContext = createContext();

export function ProjectsContextProvider({ children }) {
  const projects = [
    {
      title: "Mini React Clone (Custom JavaScript Rendering Engine)",
      techStack: [
        {
          techName: "Javascript",
          techIcon: jsIcon,
          color: "rgb(250, 240, 137)",
          bgColor: "rgba(250, 240, 137, 0.329)",
        },
        {
          techName: "HTML",
          techIcon: htmlIcon,
          color: "rgb(241, 101, 41)",
          bgColor: "rgba(241, 101, 41, 0.322)",
        },
        {
          techName: "CSS",
          techIcon: cssIcon,
          color: "rgb(51, 170, 221)",
          bgColor: "rgba(51, 170, 221, 0.358)",
        },
      ],
      link: "https://github.com/Himanshu4922/myOwnReact",
      description:
        "A simplified reimplementation of React’s core functionality built from scratch using vanilla JavaScript. This project showcases how JSX like elements are manually transformed into DOM elements and rendered onto the page without using any third party library.",
      projectImage: miniReactImg,
    },
    {
      title: "Rest Countries API",
      techStack: [
        {
          techName: "Javascript",
          techIcon: jsIcon,
          color: "rgb(250, 240, 137)",
          bgColor: "rgba(250, 240, 137, 0.329)",
        },
        {
          techName: "React",
          techIcon: reactIcon,
          color: "rgb(144, 206, 244)",
          bgColor: "rgba(144, 206, 244, 0.337)",
        },
        {
          techName: "HTML",
          techIcon: htmlIcon,
          color: "rgb(241, 101, 41)",
          bgColor: "rgba(241, 101, 41, 0.322)",
        },
        {
          techName: "CSS",
          techIcon: cssIcon,
          color: "rgb(51, 170, 221)",
          bgColor: "rgba(51, 170, 221, 0.358)",
        },
      ],
      link: "https://rest-countries-api-project-gypf9o0me.vercel.app/",
      description:
        "A React app that displays detailed info about countries using the REST Countries API. Includes search, filter by region, and dark mode support.",
      projectImage: restCountriesImg,
    },
    {
      title: "Focus On Today",
      techStack: [
        {
          techName: "Javascript",
          techIcon: jsIcon,
          color: "rgb(250, 240, 137)",
          bgColor: "rgba(250, 240, 137, 0.329)",
        },
        {
          techName: "HTML",
          techIcon: htmlIcon,
          color: "rgb(241, 101, 41)",
          bgColor: "rgba(241, 101, 41, 0.322)",
        },
        {
          techName: "CSS",
          techIcon: cssIcon,
          color: "rgb(51, 170, 221)",
          bgColor: "rgba(51, 170, 221, 0.358)",
        },
      ],
      link: "https://focus-on-today-lac.vercel.app/",
      description:
        "A minimal productivity app designed to help users prioritize what truly matters by setting just 3 key targets each day. With a clean interface and intentional focus, it encourages mindful planning and daily goal completion without overwhelm.",
      projectImage: focusOnTodayImg,
    },
    {
      title: "Portfolio",
      techStack: [
        {
          techName: "Javascript",
          techIcon: jsIcon,
          color: "rgb(250, 240, 137)",
          bgColor: "rgba(250, 240, 137, 0.329)",
        },
        {
          techName: "HTML",
          techIcon: htmlIcon,
          color: "rgb(241, 101, 41)",
          bgColor: "rgba(241, 101, 41, 0.322)",
        },
        {
          techName: "CSS",
          techIcon: cssIcon,
          color: "rgb(51, 170, 221)",
          bgColor: "rgba(51, 170, 221, 0.358)",
        },
        {
          techName: "React",
          techIcon: reactIcon,
          color: "rgb(144, 206, 244)",
          bgColor: "rgba(144, 206, 244, 0.337)",
        },
      ],
      link: "https://himanshu-portfolio-one.vercel.app/",
      description:
        "A personal portfolio website to showcase my projects, skills, and experiences with a responsive design and smooth user experience.",
      projectImage: portfolioImg,
    },
    {
      title: "Login & Signup Feature for Educase India",
      techStack: [
        {
          techName: "Javascript",
          techIcon: jsIcon,
          color: "rgb(250, 240, 137)",
          bgColor: "rgba(250, 240, 137, 0.329)",
        },
        {
          techName: "HTML",
          techIcon: htmlIcon,
          color: "rgb(241, 101, 41)",
          bgColor: "rgba(241, 101, 41, 0.322)",
        },
        {
          techName: "CSS",
          techIcon: cssIcon,
          color: "rgb(51, 170, 221)",
          bgColor: "rgba(51, 170, 221, 0.358)",
        },
        {
          techName: "React",
          techIcon: reactIcon,
          color: "rgb(144, 206, 244)",
          bgColor: "rgba(144, 206, 244, 0.337)",
        },
      ],
      link: "https://educase-india-six.vercel.app/",
      description:
        "Developed a secure and user-friendly login and signup functionality as part of an assignment for EducaSendia. The system includes form validation, user authentication logic, and responsive UI design.",
      projectImage: educaseIndiaImg,
    },
  ];

  return (
    <ProjectsContext.Provider value={projects}>
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjectsContext() {
  return useContext(ProjectsContext);
}
