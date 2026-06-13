import { useLanguage } from "../../context/useLanguage";

export default function Hero() {
  const { content } = useLanguage();
  const hero = content.hero;

  return (
    <section className="flex flex-col lg:flex-row items-center justify-around px-16 lg:px-20 py-16 bg-gray-100 dark:bg-[#2A262B]">

      <div className="max-w-xl space-y-4 text-left">
        <p className="text-sm">{hero.greeting}</p>

        <h1 className="text-[#0A0A14] font-[Inter] dark:text-white text-[42px] not-italic font-medium leading-[64px]">
            {hero.desc}
        </h1>
      </div>

      <div className="mt-10 lg:mt-0 relative">
        <img
          src={hero.image}
          alt="hero"
        />
      </div>
    </section>
  );
}