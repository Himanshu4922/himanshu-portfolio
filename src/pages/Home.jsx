import { useEffect } from "react";
import Header from "./../components/Header";
import IntroSection from "./../components/IntroSection";
import AboutSection from "./../components/AboutSection";
import ProjectsSection from "./../components/ProjectsSection";
import HobbySection from "./../components/HobbySection";
import FooterSection from "./../components/FooterSection";

function Home() {
  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <HobbySection />
      <FooterSection />
    </>
  );
}

export default Home;
