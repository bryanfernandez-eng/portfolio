export default function AnimatedGrid () {
  return (
    <div className="absolute inset-0 opacity-5 sm:opacity-10">
      <div className="grid grid-cols-8 sm:grid-cols-12 grid-rows-6 sm:grid-rows-8 h-full w-full">
        {[...Array(96)].map((_, i) => (
          <div
            key={i}
            className="border border-cyan-400/20 transition-all duration-1000"
            style={{
              animationDelay: `${Math.random() * 5}s`,
              animation: `gridPulse ${3 + Math.random() * 4}s ease-in-out infinite alternate`,
              transform: `translateZ(${Math.random() * 20}px)`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};