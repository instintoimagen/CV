import { createContext, useState } from "react";
import Translations from "../db/Translations";

const LangContext = createContext();

let initialLang = "es";

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(initialLang);
  const [text, setText] = useState(Translations[lang]);

  const handleLang = (props) => {
    if (props === "es") {
      setLang("en");
      setText(Translations.en);
    } else {
      setLang("es");
      setText(Translations.es);
    }
  };

  const data = { text, lang, handleLang };

  return <LangContext.Provider value={data}>{children}</LangContext.Provider>;
};

export { LangProvider };
export default LangContext;
