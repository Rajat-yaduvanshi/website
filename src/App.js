import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";
import particles from "./utils.js/particles";
import { loadSlim } from "tsparticles-slim";

function App() {
  const location = useLocation();

  const handleInit = async (main) => {
    // console.log(main)
    await loadSlim(main);
  };

  const renderParticleInHome = location.pathname === "/";

  return (
    <div className="App">
      {/* particles js */}

      {renderParticleInHome && (
        <Particles id="particles" init={handleInit} options={particles} />
      )}


      {/* navbar */}
      <Navbar />

      {/* main page content */}

      <div className="App_main-page-content">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>

    </div>
  );
}

export default App;
