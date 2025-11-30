import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function RetroBackground() {
  const gridRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (gridRef.current) {
      // Slowly move the grid
      gridRef.current.position.z = (state.clock.elapsedTime * 0.5) % 10;
    }

    if (particlesRef.current) {
      // Rotate particles slowly
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  // Create grid geometry
  const gridSize = 20;
  const divisions = 20;
  const gridHelper = new THREE.GridHelper(gridSize, divisions, 0x16a34a, 0x16a34a);
  gridHelper.material.opacity = 0.15;
  gridHelper.material.transparent = true;

  // Create particle positions
  const particleCount = 100;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <group>
      {/* Retro grid floor */}
      <primitive ref={gridRef} object={gridHelper} position={[0, -5, -10]} rotation={[0, 0, 0]} />

      {/* Floating particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#16a34a"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>

      {/* Ambient green glow */}
      <ambientLight intensity={0.1} color="#16a34a" />
      <hemisphereLight intensity={0.2} color="#16a34a" groundColor="#050607" />
    </group>
  );
}
