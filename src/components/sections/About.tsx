function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="h2-retro scan-in text-2xl md:text-3xl text-[var(--accent)] mb-12 text-center">About Me</h2>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Portrait column */}
          <div className="space-y-6 md:sticky md:top-24 self-start">
            <div className="window p-6 text-center">
              <img
                src="/PFP.jpg"
                alt="Bryan Alexander Fernandez portrait"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto border border-green-700"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Content column */}
          <div className="space-y-6 md:col-span-2">
            <p className="text-sm md:text-base text-[var(--text)] leading-relaxed font-mono">
              I build pragmatic, fast full-stack software with a soft spot for clean
              developer experience and performance. Recent work spans React/TypeScript
              UIs, Python backends (Flask/FastAPI), and shipping production features
              that actually move the needle for users.
            </p>

            <div className="window p-6">
              <h3 className="text-sm font-semibold text-[var(--text)] mb-3 font-mono">Now</h3>
              <ul className="text-[var(--text)] font-mono text-sm space-y-2 list-disc list-inside">
                <li>Shipping FEAM platform features (React + Flask)</li>
                <li>Iterating AI-assisted flows and internal tooling</li>
                <li>Polishing developer experience and component systems</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-[var(--text)] mb-3 font-mono">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React","TypeScript","JavaScript","Node.js","Flask","FastAPI",
                  "Python","Django","PostgreSQL","MongoDB","AWS","Git"
                ].map((skill) => (
                  <span key={skill} className="px-2 py-1 border border-green-700 text-[var(--text)] text-xs font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>


            <div className="window p-6">
              <h3 className="text-sm font-semibold text-[var(--text)] mb-2 font-mono">Focus Areas</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Full-stack Web","Machine Learning","Artifial Intellegence", "APIs & Data","Database Management"
                ].map((tag) => (
                  <span key={tag} className="px-2 py-1 border border-green-700 text-[var(--text)] text-xs font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="window p-6">
              <h3 className="text-sm font-semibold text-[var(--text)] mb-2 font-mono">Beyond Code</h3>
              <p className="text-[var(--text)] font-mono text-sm">
                Sports, film, and live events keep me energized. I like building things
                that make teams faster and users happier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
