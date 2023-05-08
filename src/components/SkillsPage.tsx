import SkillsImage from "../images/skills.png";
import SkillsList from "./SkillsList";
import ReactLogo from "../images/react.svg";
import NextJsLogo from "../images/nextjs.svg";
import JavascriptLogo from "../images/javascript.svg";
import HtmlLogo from "../images/html.svg";
import TypescriptLogo from "../images/typescript.svg";
import CssLogo from "../images/css3.svg";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skills = [
  {
    logo: HtmlLogo,
    skill: "HTML5",
  },
  {
    logo: JavascriptLogo,
    skill: "Javascript",
  },
  {
    logo: ReactLogo,
    skill: "React",
  },
  {
    logo: NextJsLogo,
    skill: "Next JS",
  },
  {
    logo: TypescriptLogo,
    skill: "Typescript",
  },
  {
    logo: CssLogo,
    skill: "CSS3",
  },
];

function SkillsPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#skills_section_two", {
      scrollTrigger: {
        trigger: "#skills_section_two",
        scrub: true,
      },
      x: -600,
      duration: 5,
    });
  }, []);
  return (
    <section
      id="skills"
      className="sm:block md:flex justify-between relative z-10 mt-40 text-white"
    >
      <div id="skills_section_one">
        <img src={SkillsImage} alt="" className="hidden md:block" />
      </div>
      <div
        id="skills_section_two"
        className="pr-14 relative"
        style={{
          left: "500px",
        }}
      >
        <h1 className="text-[90px] font-bold text-center md:text-right">
          SKILLS
        </h1>
        <p className="text-white text-lg text-right">
          My main area of my expertise are front-end tools like:
        </p>
        <SkillsList skills={skills} />
      </div>
    </section>
  );
}

export default SkillsPage;
