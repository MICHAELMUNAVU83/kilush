import React, { useCallback, useState, useEffect } from "react";
import "./App.css";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import MyProject from "./pages/MyProject";
import project1 from "./components/images/project1.jpeg";
import project2 from "./components/images/project2.jpeg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Particles from "react-tsparticles";
import { polygonPathName, loadPolygonPath } from "tsparticles-path-polygon";
import AnimatedCursor from "react-animated-cursor";
function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadPolygonPath(engine);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Skin disease classifier.",
      description:
        "This project aimed to develop a skin disease image classifier that can identify skin diseases in images uploaded by users. The classifier was integrated into a website where users can upload photos of their skin diseases and receive an accurate diagnosis",
      image: project1,
      link: "https://github.com/FridahKimathi/Skin-Disease-Image-Classifier-for-Accurate-and-Accessible-Diagnosis",
      technologies: ["sklearn", "nltk", "VADER", "surprise", "Sarima"],
    },
    {
      id: 2,
      title: "Airbnb Recommender System",
      description:
        "This project aims to optimize timing and customer satisfaction for a South African housing company entering the Airbnb business. A recommender system using InsideAirbnb data will provide budget travelers with recommendations on when to visit Cape Town, optimal pricing and listing strategies, and property maintenance timing. Sentiment analysis of guest reviews will also be conducted to enhance satisfaction.",
      image: project2,
      link: "https://github.com/MercyMoraa/InsideAirbnb",
      technologies: ["Python", "JavaScript", "Selenium", "TensorFlow", "HTML"],
    },
  ];

  return (
    <>
      <AnimatedCursor
        innerSize={20}
        outerSize={20}
        color="255, 255, 255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          "img",
          "Link",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'div[className="projects"]',
          "label[for]",
          "h1",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Particles
        options={{
          fpsLimit: 60,
          particles: {
            color: {
              value: "#5FBFF9",
              animation: {
                enable: true,
                speed: 10,
              },
            },
            move: {
              attract: {
                enable: true,
                rotate: {
                  distance: 100,
                  x: 2000,
                  y: 2000,
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
                  turnSteps: 30,
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
            color: "#3c5570",
          },
          fullScreen: {
            zIndex: -1,
          },
          detectRetina: true,
          emitters: {
            direction: "none",
            rate: {
              quantity: 1,
              delay: 0.5,
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

      <div className="  h-screen flex flex-col justify-center items-center ">
        <div className=" w-[85%] mx-auto text-white">
          <Router>
            <SideBar />
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route
                path="/projects"
                element={<Projects projects={projects} />}
              />
              <Route
                path="/projects/:id"
                element={<MyProject projects={projects} />}
              />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
