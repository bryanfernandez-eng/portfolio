import { CircuitPattern } from "../CircuitPattern";
// import { Card3D } from "../Card3D";
import type { SectionVisibleProps } from "../../types/props";

function Resume({ visibleSections }: SectionVisibleProps) {
  return (
    <section
      id="resume"
      className="relative min-h-screen py-12 sm:py-20 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950"
    >
      <CircuitPattern />
      <div
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative transition-all duration-1000 delay-500 ${
          visibleSections.has("resume")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 sm:mb-16 text-center">
          Experience & Skills
        </h2>
        
          {/* <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">
                Professional Journey
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    role: "Role 1",
                    company: "Comapny 1",
                    period: "2025 - Present",
                    desc: "Description 1",
                  },
                  {
                    role: "Role 2",
                    company: "Company 2",
                    period: "2025 - Present",
                    desc: "Description 2",
                  },
                  {
                    role: "Role 3",
                    company: "Company 3",
                    period: "2025 - Present",
                    desc: "Description 3",
                  },
                ].map((exp, index) => (
                  <Card3D key={index} intensity={1.2}>
                    <div className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border-l-4 border-cyan-400 h-full">
                      <h4 className="text-base sm:text-lg font-semibold text-white">
                        {exp.role}
                      </h4>
                      <p className="text-cyan-300 font-medium text-sm sm:text-base">
                        {exp.company}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400 mb-2">
                        {exp.period}
                      </p>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        {exp.desc}
                      </p>
                    </div>
                  </Card3D>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">
                Technical Arsenal
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    category: "Frontend",
                    skills: ["Skills 1", "Skill 2", "Skill 3"],
                    level: 100,
                  },
                  {
                    category: "Backend",
                    skills: ["Skills 1", "Skill 2", "Skill 3"],
                    level: 100,
                  },
                  {
                    category: "AI",
                    skills: ["Skills 1", "Skill 2", "Skill 3"],
                    level: 100,
                  },
                ].map((skillGroup, index) => (
                  <Card3D key={index} intensity={1.2}>
                    <div className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg h-full">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="text-base sm:text-lg font-semibold text-white">
                          {skillGroup.category}
                        </h4>
                        <span className="text-cyan-300 font-medium text-sm sm:text-base">
                          {skillGroup.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                        <div
                          className="bg-gradient-to-r from-cyan-400 to-blue-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skillGroup.level}%` }}
                        ></div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 sm:px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs sm:text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card3D>
                ))}
              </div>
            </div>
          </div>
         */}

        <div className="text-center mt-12 sm:mt-16">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-slate-600 to-gray-700 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-slate-500/25 text-sm sm:text-base"
          >
            Preview My Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;