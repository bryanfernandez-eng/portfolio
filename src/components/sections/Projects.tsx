import { projects as legacyProjects, featuredProjects } from "../../constants/constants";

export default function Projects() {
  const allProjects = [...featuredProjects, ...legacyProjects];
  const hero = allProjects[0];
  const rest = allProjects.slice(1);
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="h2-retro scan-in text-2xl md:text-3xl text-center text-[var(--accent)] mb-8">Projects</h2>
        <p className="text-[var(--text)] text-center mb-12 max-w-2xl mx-auto font-mono">
          A selection of shipped work and experiments.
        </p>

        {/* Hero project */}
        {hero && (
          <div className="window mb-10 overflow-hidden">
            <div className="window-header px-4 py-2 flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-mono text-[var(--text)]">{hero.title}</h3>
              <div className="flex gap-2">
                <a href={hero.github} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:opacity-80">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                {hero.demo && (
                  <a href={hero.demo} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:opacity-80">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                )}
              </div>
            </div>
            {hero.image && (
              <div className="w-full h-64 md:h-80 overflow-hidden bg-[var(--panel)]">
                <img
                  src={hero.image}
                  alt={hero.title}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-6">
              <p className="text-xs text-[var(--text)] mb-3 font-mono">{hero.period}</p>
              <p className="text-[var(--text)] mb-4 leading-relaxed font-mono">{hero.desc}</p>
              <div className="flex flex-wrap gap-2">
                {hero.tech.map((t: string) => (
                  <span key={t} className="px-2 py-1 border border-green-700 text-[var(--text)] text-xs font-mono">{t}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Remaining projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {rest.map((project, index) => (
            <div key={index} className="window p-0 overflow-hidden group hover:shadow-lg hover:shadow-green-900/20 transition-all duration-300">
              <div className="window-header px-4 py-2 flex justify-between items-center">
                <h3 className="text-base md:text-lg font-mono text-[var(--text)]">{project.title}</h3>
                <div className="flex gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:opacity-80">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:opacity-80">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  )}
                </div>
              </div>
              {project.image && (
                <div className="w-full h-48 overflow-hidden bg-[var(--panel)] relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--panel)] to-transparent opacity-50"></div>
                </div>
              )}
              <div className="p-6">
                <p className="text-xs text-[var(--text)] mb-3 font-mono">{project.period}</p>
                <p className="text-[var(--text)] mb-4 leading-relaxed font-mono">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 border border-green-700 text-[var(--text)] text-xs font-mono">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/bryanfernandez-eng"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 btn-retro btn-retro--solid"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

