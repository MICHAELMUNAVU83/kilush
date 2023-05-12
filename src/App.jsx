import React, { useCallback } from "react";
import "./App.css";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Particles from "react-tsparticles";
import { polygonPathName, loadPolygonPath } from "tsparticles-path-polygon";
function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadPolygonPath(engine);
  }, []);
  return (
    <>
      <Particles
        options={{
          fpsLimit: 80,
          particles: {
            color: {
              value: "#5FBFF9",
              animation: {
                enable: true,
                speed: 30,
              },
            },
            move: {
              attract: {
                enable: true,
                rotate: {
                  distance: 200,
                  x: 2500,
                  y: 2500,
                },
              },
              direction: "none",
              enable: true,
              outModes: {
                default: "destroy",
              },
              path: {
                clamp: false,
                enable: true,
                delay: {
                  value: 0,
                },
                generator: polygonPathName,
                options: {
                  sides: 6,
                  turnSteps: 50,
                  angle: 30,
                },
              },
              random: false,
              speed: 3,
              straight: true,
              trail: {
                fillColor: "#071322",
                length: 20,
                enable: true,
              },
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 0,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 2,
            },
          },
          background: {
            color: "#ffffff",
          },
          fullScreen: {
            zIndex: -1,
          },
          detectRetina: true,
          emitters: {
            direction: "none",
            rate: {
              quantity: 1,
              delay: 0.25,
            },
            size: {
              width: 0,
              height: 0,
            },
            position: {
              x: 50,
              y: 50,
            },
          },
        }}
        init={particlesInit}
      />

      <div className="  h-screen flex flex-col justify-center items-center z-10">
        <div className=" w-[85%] mx-auto text-white">
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

   
    </>
  );
}

export default App;
