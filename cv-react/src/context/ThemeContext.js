import { createContext, useState } from "react";

const ThemeContext = createContext();

if (localStorage.getItem("theme") === null)
  localStorage.setItem("theme", "light");
if (localStorage.getItem("theme") === "dark")
  document.body.classList.add("dark");

const initialTheme = localStorage.getItem("theme");

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  const darkMode = () => {
    setTheme("dark");
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };

  const lightMode = () => {
    setTheme("light");
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  };

  const handleTheme = (props) => {
    if (props === "light") darkMode();
    else lightMode();
  };

  const data = { theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
