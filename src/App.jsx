import React from "react";
import "./App.css";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
function App() {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
    <div className="bg-[#0F0F0F] w-[70%] mx-auto text-white">
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
