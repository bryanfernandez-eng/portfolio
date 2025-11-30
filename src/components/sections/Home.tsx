import { Suspense, lazy } from 'react';

const Scene3D = lazy(() => import('../3d/Scene3D'));

function Home() {
  return (
    <section id="home" className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        {/* 3D Terminal Scene */}
        <div className="w-full h-[400px] md:h-[500px] mb-12">
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-[var(--accent)] font-mono">[ LOADING 3D TERMINAL... ]</div>
            </div>
          }>
            <Scene3D />
          </Suspense>
        </div>

        {/* Content */}
        <div className="text-center">
          <h1 className="h1-retro text-3xl md:text-5xl text-[var(--text)] mb-6">
            Bryan Fernandez
          </h1>

          <h2 className="text-base md:text-lg text-[var(--text)] mb-3 font-mono">
            Full Stack Developer & CS Student
          </h2>
          <div className="text-xs md:text-sm text-[var(--text)] mb-10 font-mono flex flex-wrap items-center justify-center gap-3">
            <a href="mailto:b305ryan123@gmail.com" className="hover:text-[var(--accent)]">b305ryan123@gmail.com</a>
            <span className="text-[var(--accent)]">|</span>
            <a href="https://linkedin.com/in/bryanafernandez" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] break-all max-w-full min-w-0">linkedin.com/in/bryanafernandez</a>
            <span className="text-[var(--accent)]">|</span>
            <a href="https://github.com/bryanfernandez-eng" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] break-all max-w-full min-w-0">github.com/bryanfernandez-eng</a>
          </div>

          <p className="text-sm md:text-base text-[var(--text)] mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating technology that makes a positive impact. Currently studying Computer Science at FIU while building full stack applications and exploring the exciting world of AI & Machine Learning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-retro btn-retro--solid"
            >
              View My Work
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-retro"
            >
              Get In Touch
            </button>
          </div>

          <div className="mt-12">
            <p className="text-xs text-[var(--text)] font-mono">
              Currently interning at Feam Aero -- Graduating December 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;







