import { FloatingParticles } from '../FloatingParticles'
import type { SectionVisibleProps } from '../../types/props'


function Home({visibleSections}: SectionVisibleProps) {
  return (
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950">
        <FloatingParticles />
        <div className={`text-center z-10 px-4 sm:px-6 transition-all duration-1000 ${
          visibleSections.has('home') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text">
            Under Construction!!! 
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
            I am currently developing this portfolio. Daily updates will be made!
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 text-sm sm:text-base"
          >
            Explore My Work
          </button>
        </div>
      </section>
  )
}

export default Home
