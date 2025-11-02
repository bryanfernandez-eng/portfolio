import { useState } from "react";

function Resume() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const experiences = [
    {
      role: "Junior Software Engineer",
      company: "FEAM Aero, Miami FL",
      period: "August 2025 - Present",
      desc:
        "Improved workflow efficiency by 30% for 1,500+ employees by developing billing and business rules modules in React/JavaScript, expanding digital platform coverage from initial mechanical workflows to multiple business departments.",
      achievements: [
        "30% workflow efficiency gain",
        "Company-wide adoption in 6 months",
        "3s advanced search vs 20s legacy",
      ],
      details: [
        "Built reliable React/Flask system replacing legacy .NET/C# infrastructure with robust API integrations and error handling",
        "Accelerated team velocity by creating reusable component libraries, 30+ Python unit tests, and Azure DevOps CI/CD",
        "Cut billing document processing to 20s by automating multi-form D407 PDF generation",
      ],
    },
    {
      role: "Software Engineering Intern",
      company: "FEAM Aero, Miami FL",
      period: "May 2025 - August 2025",
      desc:
        "Reduced mechanic work order processing from hours to minutes by developing a full-stack digitization system using React, Flask, and SQL for aircraft servicing operations.",
      achievements: [
        "500+ daily D407 orders supported",
        "Instant-load mobile UI vs 5s legacy",
        "Guided 4-step sequence reduced errors",
      ],
      details: [
        "Restructured a single-page form into a guided 4-step sequence for faster completion and fewer errors",
        "Delivered tablet/phone-responsive React interface with real-time search and validation",
        "Implemented SQL-backed REST APIs with secure validation and optimized query patterns",
      ],
    },
  ];

  const toggleExpanded = (index: number) => {
    const next = new Set(expandedItems);
    next.has(index) ? next.delete(index) : next.add(index);
    setExpandedItems(next);
  };

  return (
    <section id="resume" className="py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-16 text-center scan-in">
          Professional Experience
        </h2>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-green-700"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute left-4 top-6 w-4 h-4 bg-[var(--panel)] border-2 border-green-700 rounded-full"></div>

                <div className="ml-12 window overflow-hidden">
                  <div
                    className="p-6 cursor-pointer"
                    onClick={() => toggleExpanded(index)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-[var(--text)] mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-[var(--text)] font-medium text-lg">
                          {exp.company}
                        </p>
                        <p className="text-sm text-[var(--text)]">{exp.period}</p>
                      </div>
                      <button
                        className="ml-4 p-2 text-green-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpanded(index);
                        }}
                      >
                        <svg
                          className={`w-6 h-6 transition-transform duration-200 ${
                            expandedItems.has(index) ? "rotate-45" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {expandedItems.has(index) && (
                    <div className="border-t border-green-700 bg-[var(--panel)]">
                      <div className="p-6">
                        <p className="text-[var(--text)] leading-relaxed mb-4">
                          {exp.desc}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {exp.achievements.map((a, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 border border-green-700 text-[var(--text)] text-sm"
                            >
                              {a}
                            </span>
                          ))}
                        </div>
                        <h4 className="font-semibold text-[var(--text)] mb-3">
                          Key Contributions:
                        </h4>
                        <ul className="space-y-2">
                          {exp.details.map((detail, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-2 h-2 bg-[var(--accent)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-[var(--text)]">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <div className="absolute left-6 top-6 w-6 h-0.5 bg-green-700"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Achievements Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          <div className="p-6 border border-green-700">
            <h3 className="text-xl font-semibold text-[var(--text)] mb-4">Education</h3>
            <div className="space-y-3">
              <div>
                <p className="font-bold text-[var(--text)]">
                  Florida International University
                </p>
                <p className="text-[var(--text)]">
                  - Bachelor of Science in Computer Science
                </p>
                <p className="text-[var(--text)]">- Minor in Mathematical Sciences</p>
                <p className="text-[var(--text)]">-- GPA: 4.0/4.0</p>
                <p className="text-[var(--text)] text-sm">
                  -- Expected Graduation: December 2026
                </p>
              </div>
              <div>
                <p className="font-medium text-[var(--text)] text-sm">Awards:</p>
                <p className="text-[var(--text)] text-sm">
                  - ShellHacks 2025 – Top 10/245 teams (Multi-Agent AI Translation
                  System)
                </p>
              </div>
              <div>
                <p className="font-medium text-[var(--text)] text-sm">Organizations:</p>
                <p className="text-[var(--text)] text-sm">
                  - INIT, BreakThrough Tech, CodePath E3, Color Stack, SHPE
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 border border-green-700">
            <h3 className="text-xl font-semibold text-[var(--text)] mb-4">
              Relevant Coursework
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Data Structures",
                "Algorithms",
                "Database Systems",
                "Artificial Intelligence",
                "Machine Learning",
                "Data Mining",
                "Statistics",
                "Computer Architecture", 
                "Database Management", 
                "Algorithm Techniques", 
                "Calculus 1/2/3", 
                
              ].map((course) => (
                <span
                  key={course}
                  className="px-2 py-1 bg-[var(--panel)] text-[var(--text)] text-xs border border-green-700"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-green-700 text-[var(--text)] rounded-none hover:bg-green-700 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/bryanafernandez/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-green-700 text-[var(--text)] rounded-none hover:bg-green-700 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;





