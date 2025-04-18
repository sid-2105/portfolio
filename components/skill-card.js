const SkillCard = ({ title, skills }) => {
  return (
    <div className="h-fit border border-primary/40">
      <h5 className="px-2 py-1">{title}</h5>
      <ul className="py-2 px-1 flex flex-wrap gap-x-2 gap-y-1 border-t border-primary/40">
        {skills.map((skill) => (
          <li key={skill} className="text-primary">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;