import Header from "../components/Header";
import HeroSection from "../components/HeroPage";
import BackgroundAnimation from "../components/BackgroundAnim";
import SkillsSection from "../components/SkillsPage";
import Projects from "../components/Projects";
import Articles from "../components/Articles";
import Nav from "../components/Nav";
import { useEffect } from "react";

function IntroPage() {
  return (
    <section
      onScroll={(e) => {
        console.log(e);
      }}
    >
      <Nav />
      <div>
        <Header />
        <HeroSection />
        <SkillsSection />
        <Projects />
        <Articles />
      </div>
    </section>
  );
}

export default IntroPage;
