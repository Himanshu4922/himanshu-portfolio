import { useEffect, useRef } from "react";
import Header from "./../components/Header";
import IntroSection from "./../components/IntroSection";
import AboutSection from "./../components/AboutSection";
import ProjectsSection from "./../components/ProjectsSection";
import HobbySection from "./../components/HobbySection";
import FooterSection from "./../components/FooterSection";

function Home() {
  const aboutRef = useRef(null);

  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <IntroSection aboutRef={aboutRef}/>
      <AboutSection aboutRef={aboutRef}/>
      <ProjectsSection />
      <HobbySection />
      <FooterSection />
    </>
  );
}

export default Home;
