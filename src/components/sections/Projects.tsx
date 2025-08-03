import { HexagonPattern } from "../HexagonPattern";
import { Card3D } from "../Card3D";
import type { SectionVisibleProps } from "../../types/props";

export default function Projects({ visibleSections }: SectionVisibleProps) {
  return (
    <div>
      <section
        id="projects"
        className="relative min-h-screen py-12 sm:py-20 bg-gradient-to-br from-gray-950 via-indigo-950 to-gray-950"
      >
        <HexagonPattern />
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative transition-all duration-1000 delay-300 ${
            visibleSections.has("projects")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 sm:mb-16 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Title",
                desc: "Desc",
                tech: ["Tech 1", "Tech 2", "Tech 3"],
                color: "from-cyan-500 to-blue-600",
              },
              {
                title: "Title",
                desc: "Desc",
                tech: ["Tech 1", "Tech 2", "Tech 3"],
                color: "from-purple-500 to-pink-600",
              },
              {
                title: "Title",
                desc: "Desc",
                tech: ["Tech 1", "Tech 2", "Tech 3"],
                color: "from-green-500 to-teal-600",
              },
              {
                title: "Title",
                desc: "Desc",
                tech: ["Tech 1", "Tech 2", "Tech 3"],
                color: "from-orange-500 to-red-600",
              },
              {
                title: "Title",
                desc: "Desc",
                tech: ["Tech 1", "Tech 2", "Tech 3"],
                color: "from-yellow-500 to-orange-600",
              },
              {
                title: "Title",
                desc: "Desc",
                tech: ["Tech 1", "Tech 2", "Tech 3"],
                color: "from-indigo-500 to-purple-600",
              },
            ].map((project, index) => (
              <Card3D key={index} intensity={1.3} className="h-full">
                <div className="h-full bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 min-h-[280px] sm:min-h-[320px] flex flex-col">
                  <div
                    className={`h-2 w-full bg-gradient-to-r ${project.color} rounded-full mb-4 flex-shrink-0`}
                  ></div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors flex-shrink-0">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed flex-grow">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 flex-shrink-0">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}