import "../index.css";


import { useState } from "react";

import Navbar from "./navbar";
import Footer from "./footer";
import Overlay from "./overlay";
import Contact from "../pages/contact";
import Projects from "../pages/projects";
import Home from "../pages/home";
import About from "../pages/about";
import CRT from "./crt";

function Main() {
    const [showOverlay, setShowOverlay] = useState(true);
  return (
    <div>
     {showOverlay && <Overlay onClose={() => setShowOverlay(false)} />}
      <Navbar />
      <div className="sections-container">
  <Home/>
      <About/>
        <Projects />
        <Contact /> 
      </div>
      <Footer/>
    </div>
  );
}


export default Main;
