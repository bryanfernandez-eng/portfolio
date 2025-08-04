export default function FloatingParticles(){
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float3D ${4 + Math.random() * 6}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
            transform: `translateZ(${Math.random() * 100}px)`
          }}
        >
          <div 
            className="w-1 h-1 sm:w-2 sm:h-2 bg-cyan-400 rounded-full opacity-20 sm:opacity-30"
            style={{
              boxShadow: `0 0 ${10 + Math.random() * 20}px rgba(34, 211, 238, 0.5)`,
              animation: `pulse ${2 + Math.random() * 3}s ease-in-out infinite alternate`
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};