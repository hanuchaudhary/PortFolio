import SkillIcon from "./SkillIcon";
import skills from "../../../data/skillsData.json"

export default function Skills() {
  return (
    <div className="w-full flex flex-col gap-4 px-20">
      <h1 className="text-5xl font-bold text-beige">Skills</h1>
      <div>
        <h1 className="text-base text-beige font-mono">Langauges</h1>
        <div className="flex gap-2 flex-wrap">
          {skills.langauges.map((skill, idx) => (
            <SkillIcon icon={skill.icon} name={skill.name} key={idx} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-base text-beige font-mono ">Backend</h1>
        <div className="flex gap-2 flex-wrap">
          {skills.backend.map((skill, idx) => (
            <SkillIcon icon={skill.icon} name={skill.name} key={idx} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-base text-beige font-mono ">
          Libraries Frameworks
        </h1>
        <div className="flex gap-2 flex-wrap">
          {skills.frameworks.map((skill, idx) => (
            <SkillIcon icon={skill.icon} name={skill.name} key={idx} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-base text-beige font-mono ">Database and ORMs</h1>
        <div className="flex gap-2 flex-wrap">
          {skills.database.map((skill, idx) => (
            <SkillIcon icon={skill.icon} name={skill.name} key={idx} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-base text-beige font-mono">
          Tools and Technologies
        </h1>
        <div className="flex gap-2 flex-wrap">
          {skills.tools.map((skill, idx) => (
            <SkillIcon icon={skill.icon} name={skill.name} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
