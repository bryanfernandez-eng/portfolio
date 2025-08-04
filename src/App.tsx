import { useState, useEffect } from "react";
import Navbar  from "./components/shared/NavBar";
// import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Resume from "./components/sections/Resume";
import Home from "./components/sections/Home";
// import About from "./components/sections/About";
import "./index.css"

function App() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 overflow-x-hidden">
      <Navbar />
      <Home visibleSections={visibleSections} />
      {/* <About visibleSections={visibleSections}/> */}
      {/* <Projects visibleSections={visibleSections} /> */}
      <Contact visibleSections={visibleSections} />
      <Resume visibleSections={visibleSections} />
    </div>
  );
}

export default App;