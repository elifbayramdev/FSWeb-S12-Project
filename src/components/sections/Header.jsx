import { useTheme } from "../../context/useTheme";
import { useLanguage } from "../../context/useLanguage";

export default function Header() {
  const { dark, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLanguage();

  return (
    <header className="w-full flex justify-end px-6 lg:px-20 py-6 bg-gray-100 dark:bg-[#2A262B]">
      <div className="flex items-center gap-3 text-xs tracking-wide">

        <span className="uppercase opacity-70">
          {dark ? "LIGHT MODE" : "DARK MODE"}
        </span>

        <button
          onClick={toggleTheme}
          className="w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition"
        >
          <div
            className={`w-4 h-4 bg-pink-500 rounded-full shadow-md transform transition ${
              dark ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>

        <button
          onClick={toggleLang}
          className="uppercase text-pink-500"
        >
          {lang === "tr" ? "ENGLISH" : "TÜRKÇE"}
        </button>

      </div>
    </header>
  );
}