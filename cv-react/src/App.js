import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
