import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { LangProvider } from "./context/LangContext";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";

function App() {
  return (
    <>
      <ThemeProvider>
        <LangProvider>
          <HashRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog/*" element={<Blog />} />
            </Routes>
          </HashRouter>
        </LangProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
