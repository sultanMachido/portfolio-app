type Skill = {
  logo: string;
  skill: string;
};

type SkillsProp = { skills: Skill[] };

function SkillsList({ skills }: SkillsProp) {
  return (
    <ul className="md:flex w-100 md:mt-4 md:flex-wrap md:justify-end">
      {skills.length &&
        skills.map((skill) => (
          <li
            key={skill.skill}
            className="flex rounded-lg w-auto md:w-3/12 border-2 justify-center md:justify-around border-secondaryColor mr-4 mb-4 p-2"
          >
            <img width="20px" height="20px" src={skill.logo} />
            {skill.skill}
          </li>
        ))}
    </ul>
  );
}

export default SkillsList;
