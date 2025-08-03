export const HexagonPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 sm:opacity-20">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${5 + (i % 4) * 25}%`,
            top: `${5 + Math.floor(i / 4) * 30}%`,
            animation: `hexSpin ${15 + i * 2}s linear infinite`,
            transform: `translateZ(${Math.random() * 50}px)`
          }}
        >
          <div className="w-8 h-8 sm:w-12 sm:h-12 border-2 border-purple-400 transform rotate-45 opacity-60"></div>
        </div>
      ))}
    </div>
  );
};