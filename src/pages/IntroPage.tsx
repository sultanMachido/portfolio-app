import Header from "../components/Header";
import HeroSection from "../components/HeroPage";
import BackgroundAnimation from "../components/BackgroundAnim";
import SkillsSection from "../components/SkillsPage";

function IntroPage() {
  return (
    <>
      <BackgroundAnimation />
      <section className="relative pt-30">
        <Header />
        <HeroSection />
      </section>
      <SkillsSection />
    </>
  );
}

export default IntroPage;
