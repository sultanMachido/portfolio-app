import ProjectCard from "./ProjectCard";
import { Carousel } from "react-responsive-carousel";
import SkillsList from "./SkillsList";

type ProjectsType = {
  image: string;
  title: string;
  link: string;
};
type ProjectListType = {
  projects: ProjectsType[];
};

const ProjectList = ({ projects }: ProjectListType) => {
  return (
    <>
      {/* <div className="block md:flex md:flex-wrap md:justify-around">
        {projects.length &&
          projects.map((project, index) => (
            <ProjectCard key={index} projectInfo={project} />
          ))}
      </div> */}
      <div className="w-[80%] mx-auto rounded-md bg-black p-5">
        <div className="text-white flex justify-between p-2">
          <p className="text-white font-bold text-lg">Resume Writer</p>
          <p>+</p>
        </div>
        <div>
          <p className="leading-2 text-white text-lg">
            This project involves leveraging the rich text editor feature of
            draft js to build a resume builder.The resume created can be
            downloaded after the user has been authenticated with the help of
            supabase Google Oauth.
          </p>
          <a
            href="https://resume-writer.netlify.app/"
            className="text-secondaryColor"
          >
            View
          </a>
        </div>
        <SkillsList
          skills={[
            { skill: "React" },
            { skill: "Typescript" },
            { skill: "Tailwind CSS" },
            { skill: "Git" },
            { skill: "Supabase" },
          ]}
        />
      </div>
      <div className="w-[80%] mx-auto mt-2 rounded-md bg-black p-5">
        <div className="text-white flex justify-between p-2">
          <p className="text-white font-bold text-lg">Zipu</p>
          <p>+</p>
        </div>
        <div>
          <p className="leading-2 text-white text-lg">
            This project involved building a transport management system that
            allows passengers book tickets, and allow transport companies
            register and provide information about their transport service
          </p>
          <a
            href="https://ziputransport.netlify.app/"
            className="text-secondaryColor"
          >
            View
          </a>
        </div>
        <SkillsList
          skills={[
            { skill: "React" },
            { skill: "Typescript" },
            { skill: "Tailwind CSS" },
            { skill: "Git" },
          ]}
        />
      </div>
    </>
  );
};

export default ProjectList;
