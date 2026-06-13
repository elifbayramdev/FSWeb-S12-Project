import { useLanguage } from "../../context/useLanguage";

export default function Profile() {
  const { content } = useLanguage();

  return (
    <section className="py-16 px-6 lg:px-20 bg-gray-100 dark:bg-[#2A262B] flex flex-col justify-around items-center">
      <h2 className="text-center text-2xl mb-10">{content.profile.title}</h2>

      <div className="grid lg:grid-cols-2 gap-10 justify-center">

        {/* LEFT */}
        <div className="bg-white dark:bg-[#525252]
                        p-6 rounded-lg 
                        shadow-[4px_4px_0px_rgba(0,0,0,0.1)]
                        max-w-md w-full">

          <div className="space-y-3">
            {content.profile.info.map((item, i) => (
              <div key={i} className="grid grid-cols-[140px_1fr]">
                <span className="font-bold dark:text-white">{item.label}</span>
                <span className="dark:text-white font-normal">{item.value}</span>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT */}
        <div className="max-w-md w-full">
          <h3 className="font-semibold mb-2">About me</h3>
          <p>{content.profile.about}</p>
        </div>

      </div>
    </section>
  );
}