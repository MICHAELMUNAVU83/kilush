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
import AnimatedCursor from "react-animated-cursor";
function App() {
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
          "Particles",
          "button",
          ".link",
        ]}
      />
      <Particles
        id="tsparticles"
        options={{
          autoPlay: true,
          background: {
            color: {
              value: "#071322",
            },
            image: "",
            position: "",
            repeat: "",
            size: "",
            opacity: 1,
          },
          backgroundMask: {
            composite: "destination-out",
            cover: {
              color: {
                value: "#fff",
              },
              opacity: 1,
            },
            enable: false,
          },
          backgroundMode: {
            enable: true,
            zIndex: -1,
          },
          detectRetina: true,
          fpsLimit: 60,
          infection: {
            cure: true,
            delay: 0,
            enable: false,
            infections: 0,
            stages: [],
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: {
                enable: false,
                mode: [],
              },
              onDiv: {
                selectors: [],
                enable: false,
                mode: [],
                type: "circle",
              },
              onHover: {
                enable: false,
                mode: "attract",
                parallax: {
                  enable: false,
                  force: 2,
                  smooth: 10,
                },
              },
              resize: false,
            },
            modes: {
              attract: {
                distance: 200,
                duration: 0.4,
                speed: 1,
              },
              bounce: {
                distance: 200,
              },
              bubble: {
                distance: 200,
                duration: 0.4,
              },
              connect: {
                distance: 80,
                links: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance: 100,
                links: {
                  blink: false,
                  consent: false,
                  opacity: 1,
                },
              },
              light: {
                area: {
                  gradient: {
                    start: {
                      value: "#ffffff",
                    },
                    stop: {
                      value: "#000000",
                    },
                  },
                  radius: 1000,
                },
                shadow: {
                  color: {
                    value: "#000000",
                  },
                  length: 2000,
                },
              },
              push: {
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
                speed: 1,
              },
              slow: {
                factor: 3,
                radius: 200,
              },
              trail: {
                delay: 0.005,
                quantity: 5,
                particles: {
                  color: {
                    value: "#5FBFF9",
                    animation: {
                      enable: true,
                      speed: 400,
                      sync: true,
                    },
                  },
                  collisions: {
                    enable: false,
                    bounce: {
                      horizontal: {
                        random: {},
                      },
                      vertical: {
                        random: {},
                      },
                    },
                  },
                  links: {
                    enable: false,
                    shadow: {},
                    triangles: {},
                  },
                  move: {
                    outMode: "destroy",
                    speed: 5,
                    angle: {},
                    attract: {
                      rotate: {},
                    },
                    gravity: {},
                    noise: {
                      delay: {
                        random: {},
                      },
                    },
                    outModes: {},
                    trail: {},
                  },
                  size: {
                    value: 5,
                    animation: {
                      enable: true,
                      speed: 5,
                      minimumValue: 1,
                      sync: true,
                      startValue: "min",
                      destroy: "max",
                    },
                    random: {},
                  },
                  bounce: {
                    horizontal: {
                      random: {},
                    },
                    vertical: {
                      random: {},
                    },
                  },
                  life: {
                    delay: {
                      random: {},
                    },
                    duration: {
                      random: {},
                    },
                  },
                  number: {
                    density: {},
                  },
                  opacity: {
                    animation: {},
                    random: {},
                  },
                  rotate: {
                    animation: {},
                  },
                  shadow: {
                    offset: {},
                  },
                  shape: {},
                  stroke: {
                    color: {
                      value: "",
                      animation: {
                        enable: false,
                        speed: 0,
                        sync: false,
                      },
                    },
                  },
                  twinkle: {
                    lines: {},
                    particles: {},
                  },
                },
              },
            },
          },
          manualParticles: [],
          motion: {
            disable: false,
            reduce: {
              factor: 16,
              value: true,
            },
          },
          particles: {
            bounce: {
              horizontal: {
                random: {
                  enable: false,
                  minimumValue: 12,
                },
                value: 1,
              },
              vertical: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
            },
            collisions: {
              bounce: {
                horizontal: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
                vertical: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
              },
              enable: true,
              mode: "bounce",
            },
            color: {
              value: "#5FBFF9",
              animation: {
                enable: false,
                speed: 100,
                sync: false,
              },
            },
            life: {
              count: 37,
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                sync: false,
              },
              duration: {
                random: {
                  enable: false,
                  minimumValue: 0.0001,
                },
                value: 0,
                sync: true,
              },
            },
            links: {
              blink: true,
              color: {
                value: "random",
              },
              consent: false,
              distance: 100,
              enable: true,
              frequency: 0,
              opacity: 1,
              shadow: {
                blur: false,
                color: {
                  value: "#5FBFF9",
                },
                enable: false,
              },
              triangles: {
                enable: false,
                frequency: 0,
              },
              width: 1,
              warp: false,
            },
            move: {
              angle: {
                offset: 45,
                value: 90,
              },
              attract: {
                enable: false,
                rotate: {
                  x: 3000,
                  y: 3000,
                },
              },
              direction: "none",
              distance: 0,
              enable: true,
              gravity: {
                acceleration: 9.81,
                enable: false,
                maxSpeed: 50,
              },
              noise: {
                delay: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                },
                enable: false,
              },
              outModes: {
                default: "out",
              },
              random: false,
              size: false,
              speed: 2,
              straight: false,
              trail: {
                enable: false,
                length: 10,
                fillColor: {
                  value: "#5FBFF9",
                },
              },
              vibrate: false,
              warp: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
                factor: 1000,
              },
              limit: 0,
              value: 100,
            },
            opacity: {
              random: {
                enable: true,
                minimumValue: 0.3,
              },
              value: 0.8,
              animation: {
                enable: true,
                minimumValue: 0.3,
                speed: 0.5,
                sync: false,
              },
            },
            reduceDuplicates: false,
            rotate: {
              random: false,
              value: 0,
              animation: {
                enable: false,
                speed: 0,
                sync: false,
              },
              direction: "clockwise",
              path: false,
            },
            shadow: {
              blur: 51,
              color: {
                value: "#5FBFF9",
              },
              enable: false,
              offset: {
                x: 0,
                y: 0,
              },
            },
            shape: {
              options: {},
              type: "circle",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 1,
              },
              value: 3,
              animation: {
                destroy: "none",
                enable: true,
                minimumValue: 1,
                speed: 3,
                startValue: "max",
                sync: false,
              },
            },
            stroke: {
              width: 0,
              color: {
                value: "",
                animation: {
                  enable: false,
                  speed: 0,
                  sync: false,
                },
              },
            },
            twinkle: {
              lines: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
              particles: {
                enable: false,
                frequency: 13,
                opacity: 1,
              },
            },
          },
          pauseOnBlur: false,
          pauseOnOutsideViewport: true,
          themes: [],
        }}
      />

      <div className="  md:h-screen flex flex-col justify-center items-center ">
        <div className=" md:w-[85%] w-[88%]  mx-auto text-white">
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
