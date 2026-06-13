import { useLanguage } from "../../context/useLanguage";

export default function Projects() {
  const { content } = useLanguage();

  return (
    <section className="py-20 px-6 lg:px-20 bg-gray-100 dark:bg-[#484148]">
      <h2 className="text-center dark:text-white text-3xl mb-12 font-semibold">
        {content.projectsSection.title}
      </h2>

      <div className="grid lg:grid-cols-2 gap-10">
        {content.projects.map((project, i) => (
          <div
            key={i}
            className={`p-8 rounded-2xl ${
              i === 0 ? "bg-[#DDEEFE] dark:bg-[#2D3235]" : "bg-[#D9F6F1] dark:bg-[#495351]"
            }`}
          >
            <h3 className="text-xl font-semibold mb-3  dark:text-white">
              {project.title}
            </h3>

            <p className="text-sm mb-5 text-gray-700 dark:text-white">
              {project.desc}
            </p>

            <div className="flex gap-2 mb-6 flex-wrap">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs bg-white/70 dark:text-white dark:bg-[#525252] px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex justify-between text-sm mb-6">
              <a href={project.github} className="font-medium dark:text-white">
                {content.projectsSection.viewGithub}
              </a>

              <a
                href={project.live}
                className="font-medium flex items-center gap-1 dark:text-white"
              >
                {content.projectsSection.goApp}
              </a>
            </div>

            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg w-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}