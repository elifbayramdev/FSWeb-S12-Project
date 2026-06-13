import { useLanguage } from "../../context/useLanguage";

export default function Footer() {
  const { content } = useLanguage();
  const footer = content.footer;

  return (
    <footer className="py-16 flex justify-center gap-14 dark:bg-[#484148]">
      <h2 className="text-[42px] mb-4 text-end max-w-[400px]">
        {footer.workTogether}
      </h2>

      <div className="flex justify-center items-start gap-3 flex-col text-[16px] font-sans">
        {footer.links.map((item, i) => (
          <a
            key={i}
            href={item.url}
            className={item.color || ""}
          >
            {item.label}
          </a>
        ))}
      </div>
    </footer>
  );
}