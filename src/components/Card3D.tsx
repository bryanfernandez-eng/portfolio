import { useState } from "react";
import type { Card3DProps } from "../types/props";

export const Card3D = ({ children, className = "", intensity = 1 }: Card3DProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    setMousePosition({
      x: (x - centerX) / centerX,
      y: (y - centerY) / centerY
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const rotateX = isHovered ? mousePosition.y * -25 * intensity : 0;  
  const rotateY = isHovered ? mousePosition.x * 25 * intensity : 0;   
  const scale = isHovered ? 1.1 : 1;  
  const translateZ = isHovered ? 50 * intensity : 0;  

  return (
    <div 
      className={`relative transition-all duration-500 ${className}`}
      style={{ 
        perspective: '1500px',  
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative w-full h-full transition-all duration-500 ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale}) translateZ(${translateZ}px)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div 
          className="absolute inset-0 bg-black/40 rounded-xl blur-2xl transition-all duration-500"
          style={{
            transform: `translateZ(-80px) translateX(${mousePosition.x * 40}px) translateY(${mousePosition.y * 40}px)`,
            opacity: isHovered ? 0.8 : 0.4
          }}
        />
        <div 
          className="absolute inset-0 bg-cyan-500/20 rounded-xl blur-xl transition-all duration-500"
          style={{
            transform: `translateZ(-60px) translateX(${mousePosition.x * 30}px) translateY(${mousePosition.y * 30}px)`,
            opacity: isHovered ? 0.6 : 0.2
          }}
        />
        
        <div 
          className="relative w-full h-full"
          style={{
            transform: 'translateZ(0)',
            transformStyle: 'preserve-3d'
          }}
        >
          {children}
          
          <div 
            className="absolute inset-0 rounded-xl opacity-0 transition-all duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${50 + mousePosition.x * 50}% ${50 + mousePosition.y * 50}%, 
                rgba(34, 211, 238, 0.4) 0%, 
                rgba(147, 51, 234, 0.2) 30%, 
                transparent 70%)`,
              opacity: isHovered ? 1 : 0,
              transform: 'translateZ(10px)'
            }}
          />
          
          <div 
            className="absolute inset-0 rounded-xl opacity-0 transition-all duration-500 pointer-events-none"
            style={{
              background: `linear-gradient(${45 + mousePosition.x * 90}deg, 
                transparent 30%, 
                rgba(255, 255, 255, 0.1) 50%, 
                transparent 70%)`,
              opacity: isHovered ? 1 : 0,
              transform: 'translateZ(5px)'
            }}
          />
        </div>
      </div>
    </div>
  );
};