import SkillsImage from "../images/skills.png";
import SkillsList from "./SkillsList";
import ReactLogo from "../images/react.svg";
import NextJsLogo from "../images/nextjs.svg";
import JavascriptLogo from "../images/javascript.svg";
import HtmlLogo from "../images/html.svg";
import TypescriptLogo from "../images/typescript.svg";
import CssLogo from "../images/css3.svg";

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
  return (
    <section
      id="skills"
      className="flex justify-between relative z-10 mt-40 text-white"
    >
      <div>
        <img src={SkillsImage} alt="" />
      </div>
      <div className="pr-14">
        <h1
          className="text-right"
          style={{ fontSize: "90px", fontWeight: "bold" }}
        >
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
