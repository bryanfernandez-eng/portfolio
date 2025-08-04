import WavePattern from "../shared/WavePattern";
import Card3D from "../shared/Card3D";
import type { SectionVisibleProps } from "../../types/props";
import { contacts } from "../../constants/constants";

export default function Contact({ visibleSections }: SectionVisibleProps) {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-teal-950 to-gray-950 py-12 sm:py-0"
    >
      <WavePattern />
      <div
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 transition-all duration-1000 delay-400 ${
          visibleSections.has("contact")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
          Let's Create Together
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
          Have an exciting project in mind? I'd love to hear about it and
          explore how we can bring your vision to life.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {contacts.map((contact, index) => (
            <Card3D key={index} intensity={1.4}>
              <div
                onClick={() => {
                  if (contact.url) {
                    window.open(contact.url, "_blank", "noopener,noreferrer");
                  }
                }}
                className="cursor-pointer bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg h-full border border-gray-700/30 min-h-[140px] sm:min-h-[160px] flex flex-col justify-center"
              >
                <div
                  className={`${contact.imageSize} rounded-lg flex items-center justify-center mx-auto`}
                >
                  <img src={contact.image} alt="" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  {contact.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  {contact.value}
                </p>
              </div>
            </Card3D>
          ))}
        </div>
        <button className="px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-teal-500/25 text-sm sm:text-base">
          Start a Conversation
        </button>
      </div>
    </section>
  );
}
