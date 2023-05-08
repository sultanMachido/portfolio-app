import Header from "../components/Header";
import HeroSection from "../components/HeroPage";
import BackgroundAnimation from "../components/BackgroundAnim";
import SkillsSection from "../components/SkillsPage";
import Projects from "../components/Projects";
import Articles from "../components/Articles";

function IntroPage() {
  return (
    <>
      <BackgroundAnimation />
      <section className="relative pt-30">
        <Header />
        <HeroSection />
      </section>
      <SkillsSection />
      <Projects />
      <Articles />
    </>
  );
}

export default IntroPage;
