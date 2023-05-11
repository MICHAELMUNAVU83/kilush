import React from "react";
import "./App.css";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
function App() {
  return (
    <div className="bg-[#0F0F0F] text-white">
      <About />
      <Resume />

      <Contact />
    </div>
  );
}

export default App;
