import Card3D from "../shared/Card3D";
import PFP from "../../../public/PFP.jpg";
import AnimatedGrid from "../shared/AnimatedGrid";
import type { SectionVisibleProps } from "../../types/props";

function About({ visibleSections }: SectionVisibleProps) {
  return (
    <section
      id="about"
      className="relative min-h-screen py-14 sm:py-20 flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-950 to-gray-950"
    >
      <AnimatedGrid />
      <div
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 transition-all duration-1000 delay-200 ${
          visibleSections.has("about")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12 text-center">
          About Me
        </h2>

        <div className="flex justify-center mb-8 sm:mb-12">
          <Card3D
            className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48"
            intensity={1.5}
          >
            <div className="relative group w-full h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
              <div className="relative w-full h-full bg-gray-700 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-white/20 transition-all duration-300">
                <img
                  src={PFP}
                  alt="Bryan Alexander Fernandez Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Card3D>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              I'm passionate about developing technology that makes a positive
              impact and helps people solve real-world problems. As a Computer
              Science student, I find fulfillment in creating solutions that can
              improve lives and make a difference in communities.
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              Currently focusing on full stack development while exploring the
              exciting possibilities in AI and machine learning. I'm always
              eager to learn new technologies and apply them to create
              meaningful applications.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[
                "React",
                "JavaScript",
                "TypeScript",
                "Node.js",
                "Flask",
                "C",
                "C++",
                "Java",
                "Express.js",
                "Django",
                "Python",
                "AWS",
                "Design",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-xs sm:text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <Card3D intensity={1.2}>
              <div className="bg-gray-800/50 p-4 sm:p-6 rounded-lg backdrop-blur-sm h-full border border-gray-700/30">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Education
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  Pursuing a Bachelor of Science in Computer Science with a
                  Minor in Mathematical Sciences at Florida International
                  University. Expected graduation: December 2026.
                </p>
              </div>
            </Card3D>
            <Card3D intensity={1.2}>
              <div className="bg-gray-800/50 p-4 sm:p-6 rounded-lg backdrop-blur-sm h-full border border-gray-700/30">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Beyond Code
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  When I'm not coding, you'll find me cheering for my favorite
                  NBA and NFL teams, playing sports, catching the latest movies
                  and TV shows, or attending live sporting events. I believe in
                  maintaining a healthy work-life balance.
                </p>
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
