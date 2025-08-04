export default function CircuitPattern(){
  return (
    <div className="absolute inset-0 opacity-10 sm:opacity-15">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {[...Array(6)].map((_, i) => (
          <g key={i}>
            <line 
              x1={`${i * 16.67}%`} 
              y1="0%" 
              x2={`${i * 16.67}%`} 
              y2="100%" 
              stroke="rgba(34, 211, 238, 0.4)" 
              strokeWidth="1"
              style={{ 
                animation: `circuitPulse ${3 + i * 0.5}s ease-in-out infinite alternate`,
                animationDelay: `${i * 0.3}s`
              }}
            />
            <line 
              x1="0%" 
              y1={`${i * 16.67}%`} 
              x2="100%" 
              y2={`${i * 16.67}%`} 
              stroke="rgba(34, 211, 238, 0.4)" 
              strokeWidth="1"
              style={{ 
                animation: `circuitPulse ${3 + i * 0.5}s ease-in-out infinite alternate`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          </g>
        ))}
        {[...Array(8)].map((_, i) => (
          <circle
            key={i}
            cx={`${15 + (i % 4) * 25}%`}
            cy={`${25 + Math.floor(i / 4) * 50}%`}
            r="2"
            fill="rgba(34, 211, 238, 0.6)"
            style={{ 
              animation: `circuitNode ${2 + i * 0.2}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.4}s`
            }}
          />
        ))}
      </svg>
    </div>
  );
};