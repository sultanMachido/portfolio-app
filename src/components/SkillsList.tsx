type Skill = {
  logo: string;
  skill: string;
};

type SkillsProp = { skills: Skill[] };

function SkillsList({ skills }: SkillsProp) {
  return (
    <ul className="flex w-100 mt-4 flex-wrap justify-end">
      {skills.length &&
        skills.map((skill) => (
          <li
            key={skill.skill}
            className="flex rounded-lg w-3/12 border-2 justify-around border-secondaryColor mr-4 mb-4 p-2"
          >
            <img width="20px" height="20px" src={skill.logo} />
            {skill.skill}
          </li>
        ))}
    </ul>
  );
}

export default SkillsList;
