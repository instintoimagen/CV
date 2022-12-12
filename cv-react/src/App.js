import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <ThemeProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
