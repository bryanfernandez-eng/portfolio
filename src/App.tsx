import { useEffect, useState } from "react";
import Navbar from "./components/shared/NavBar";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Resume from "./components/sections/Resume";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const MIN_SHOW = 3000; // keep loader visible at least this long (ms)
    const start = performance.now();

    const hideAfterMin = () => {
      const elapsed = performance.now() - start;
      const remaining = Math.max(0, MIN_SHOW - elapsed);
      const t = window.setTimeout(() => setLoading(false), remaining);
      return () => clearTimeout(t);
    };

    if (document.readyState === 'complete') {
      // Page already loaded; still keep loader up for MIN_SHOW
      const cleanup = hideAfterMin();
      return cleanup;
    } else {
      const onReady = () => {
        window.removeEventListener('load', onReady);
        hideAfterMin();
      };
      window.addEventListener('load', onReady);
      // Safety: if load never fires, hide after MIN_SHOW + 1s
      const safety = window.setTimeout(() => {
        window.removeEventListener('load', onReady);
        hideAfterMin();
      }, MIN_SHOW + 1000);
      return () => {
        window.removeEventListener('load', onReady);
        clearTimeout(safety);
      };
    }
  }, []);
  return (
    <div className="min-h-screen retro-bg crt">
      {loading && (
        <div className="loader-overlay" role="status" aria-live="polite" aria-label="Loading">
          <div className="loader-box">
            <div className="loader-title">[ INITIALIZING PORTFOLIO ]</div>
            <div className="loader-bar" />
          </div>
        </div>
      )}
      <Navbar />
      <main className="pt-20">
        <Home />
        <div className="max-w-6xl mx-auto px-4"><hr className="border-green-700/40 my-16" /></div>
        <About />
        <div className="max-w-6xl mx-auto px-4"><hr className="border-green-700/40 my-16" /></div>
        <Projects />
        <div className="max-w-6xl mx-auto px-4"><hr className="border-green-700/40 my-16" /></div>
        <Resume />
        <div className="max-w-6xl mx-auto px-4"><hr className="border-green-700/40 my-16" /></div>
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="btn-retro fixed bottom-6 right-6 z-50"
    >
      ↑ Top
    </button>
  );
}

export default App;
