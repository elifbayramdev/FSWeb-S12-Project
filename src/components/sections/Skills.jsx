import { useLanguage } from "../../context/useLanguage";

export default function Skills() {
  const { content } = useLanguage();

  return (
    <section className="py-16 text-center bg-white dark:bg-[#484148]">
      <h2 className="text-2xl mb-10">        
        {content.skillsSection.title}
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {content.skills.map((skill, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <img src={skill.icon} className="w-20 h-20" />
            <p className="text-xs">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}