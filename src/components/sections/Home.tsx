import FloatingParticles from '../shared/FloatingParticles'
import type { SectionVisibleProps } from '../../types/props'


function Home({visibleSections}: SectionVisibleProps) {
  return (
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950">
        <FloatingParticles />
        <div className={`text-center z-10 px-4 sm:px-6 transition-all duration-1000 ${
          visibleSections.has('home') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-4 sm:mb-6">
            <p className="text-lg sm:text-xl text-cyan-400 font-medium mb-2">
              Hi, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text ">
              Bryan Alexander Fernandez
            </h1>
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 sm:mb-6">
            Full Stack Developer & CS Student
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 leading-relaxed">
            Passionate about creating technology that makes a positive impact. Currently studying Computer Science at FIU while building full stack applications and exploring the exciting world of AI & Machine Learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 text-sm sm:text-base"
            >
              Explore My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 hover:bg-cyan-500/10 text-sm sm:text-base"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="mt-8 sm:mt-12">
            <p className="text-sm text-gray-400 mb-4">
              Currently interning at Feam Aero • Graduating December 2026
            </p>
          </div>
        </div>
      </section>
  )
}

export default Home