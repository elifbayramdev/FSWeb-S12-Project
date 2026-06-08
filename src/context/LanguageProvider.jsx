import { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import data from "../data/data.json";

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("tr");

  const toggleLang = () => {
    setLang(prev => (prev === "tr" ? "en" : "tr"));
  };

  const content = data[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, content }}>
      {children}
    </LanguageContext.Provider>
  );
}