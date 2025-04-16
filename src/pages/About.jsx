import { useEffect } from "react";
import AboutSection from "./../components/AboutSection";
import SkillsSection from "./../components/SkillsSection";
import EducationSection from "./../components/EducationSection";

function About() {
  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AboutSection />
      <SkillsSection />
      <EducationSection />
    </>
  );
}

export default About;
