import CircuitPattern from "../shared/CircuitPattern";
import Card3D from "../shared/Card3D";
import type { SectionVisibleProps } from "../../types/props";

function Resume({ visibleSections }: SectionVisibleProps) {
  return (
    <section
      id="resume"
      className="relative min-h-screen py-12 sm:py-20 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950"
    >
      <CircuitPattern />
      <div
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative transition-all duration-1000 delay-500 ${visibleSections.has("resume")
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
          }`}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 sm:mb-16 text-center">
          Experience & Skills
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Professional Journey */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">
              Professional Journey
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  role: "Software Engineer Intern",
                  company: "Feam Aero",
                  period: "May 2025 - Present",
                  desc: "Modernizing legacy business operations for 1,500+ employees, improving workflow efficiency by 30%. Building responsive React components with Flask REST APIs and developing reusable component libraries for 10+ developer team.",
                  achievements: ["30% efficiency improvement", "1,500+ employees served", "10+ developer team collaboration"]
                },
                {
                  role: "Co-lead Developer",
                  company: "GatherU - INIT BUILD",
                  period: "January 2025 - April 2025",
                  desc: "Led cross-functional team of 10 developers building full-stack event management platform for 500+ student organizations. Engineered Django REST API with React frontend featuring real-time RSVP and analytics dashboard.",
                  achievements: ["Led 10 developers", "500+ organizations served", "Real-time analytics"]
                },
                {
                  role: "Front-End Team Lead",
                  company: "CashCore - INIT BUILD",
                  period: "September 2024 - December 2024",
                  desc: "Led development of finance advisor app using React Native, Django, and SQLite. Integrated Plaid API for real-time financial tracking and implemented comprehensive data processing pipelines.",
                  achievements: ["Cross-platform development", "Plaid API integration", "Team leadership"]
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
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3">
                      {exp.desc}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {exp.achievements.map((achievement, i) => (
                        <span key={i} className="px-2 py-1 bg-cyan-500/10 text-cyan-300 rounded text-xs">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card3D>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">
              Technical Arsenal
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  category: "Languages",
                  skills: ["Python", "JavaScript", "TypeScript", "Java", "C/C++", "HTML/CSS"],
                  level: 90,
                },
                {
                  category: "Frontend",
                  skills: ["React", "TailwindCSS", "Bootstrap", "Chakra UI", "Daisy UI", "Responsive Design"],
                  level: 88,
                },
                {
                  category: "Backend",
                  skills: ["Node.js", "Flask", "Django", "Express.js", "REST APIs", "Microservices"],
                  level: 85,
                },
                {
                  category: "Database & Cloud",
                  skills: ["MongoDB", "PostgreSQL", "SQLite", "AWS", "Database Optimization"],
                  level: 80,
                },
                {
                  category: "Tools & APIs",
                  skills: ["Git", "Plaid API", "OpenAI API", "JWT", "VS Code", "IntelliJ"],
                  level: 85,
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

        {/* Bottom Row - Education & Achievements */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mt-8 sm:mt-12">
          {/* Academic Excellence */}
          <Card3D intensity={1.2}>
            <div className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-yellow-400/30 h-full">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-4">
                Academic 
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="text-yellow-300 font-medium text-sm sm:text-base">4.0 GPA</p>
                  <p className="text-gray-300 text-xs sm:text-sm">Bachelor of Science in Computer Science</p>
                  <p className="text-gray-300 text-xs sm:text-sm">Minor in Mathematical Sciences</p>
                </div>
                <div>
                  <p className="text-cyan-300 font-medium text-xs sm:text-sm">Dean's List</p>
                  <p className="text-gray-300 text-xs">Summer 2022 – Spring 2025</p>
                </div>
                <div>
                  <p className="text-purple-300 font-medium text-xs sm:text-sm">Organizations</p>
                  <p className="text-gray-300 text-xs">Init, Code Crunch, BreakThrough Tech, CodePath E3</p>
                </div>
              </div>
            </div>
          </Card3D>

          {/* Key Coursework */}
          <Card3D intensity={1.2}>
            <div className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-purple-400/30 h-full">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-4">
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Structures", "Systems Programming", "Data Mining", 
                  "Machine Learning", "Computer Architecture", "Programming Languages",
                  "Algorithms", "Discrete Mathematics", "Calculus", "Statistics",
                  "Artificial Intelligence"
                ].map((course) => (
                  <span
                    key={course}
                    className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </Card3D>
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-slate-600 to-gray-700 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-slate-500/25 text-sm sm:text-base"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/bryanafernandez/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Resume;