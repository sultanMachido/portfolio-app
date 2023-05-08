import ProjectCard from "./ProjectCard";
import { Carousel } from "react-responsive-carousel";

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
    <div className="block md:flex md:flex-wrap md:justify-around">
      {projects.length &&
        projects.map((project, index) => (
          <ProjectCard key={index} projectInfo={project} />
        ))}
    </div>
  );
};

export default ProjectList;
