import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';
import RetroTerminal from './RetroTerminal';
import RetroBackground from './RetroBackground';

interface Scene3DProps {
  className?: string;
}

export default function Scene3D({ className = '' }: Scene3DProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        dpr={isMobile ? [1, 1.5] : [1, 2]} // Lower pixel ratio on mobile for performance
        performance={{ min: 0.5 }} // Allow frame rate to drop if needed
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />

          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={0.5} />
          <directionalLight position={[-5, -5, -5]} intensity={0.2} />

          {/* Background elements - reduce on mobile */}
          {!isMobile && <RetroBackground />}

          {/* 3D Content */}
          <RetroTerminal />

          {/* Controls - allow user to rotate */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
            autoRotate
            autoRotateSpeed={isMobile ? 0.3 : 0.5} // Slower rotation on mobile
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
