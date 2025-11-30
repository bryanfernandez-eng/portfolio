import { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { RoundedBox, Image } from '@react-three/drei';
import * as THREE from 'three';

interface ProjectCard3DProps {
  image: string;
  position: [number, number, number];
  index: number;
}

export default function ProjectCard3D({ image, position, index }: ProjectCard3DProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { viewport } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      const offset = index * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + offset) * 0.1;

      // Subtle rotation
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3 + offset) * 0.05;

      // Hover effect
      if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.1, 1.1, 1.1), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <group>
      <RoundedBox
        ref={meshRef}
        args={[2, 2.5, 0.1]}
        radius={0.05}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          color="#0a0d0a"
          metalness={0.3}
          roughness={0.7}
          emissive="#16a34a"
          emissiveIntensity={hovered ? 0.2 : 0.05}
        />
      </RoundedBox>

      {/* Project image */}
      <Image
        url={image}
        scale={[1.8, 1.8]}
        position={[position[0], position[1] + 0.3, position[2] + 0.06]}
        transparent
        opacity={0.9}
      />

      {/* Border glow */}
      <lineSegments position={position}>
        <edgesGeometry args={[new THREE.BoxGeometry(2, 2.5, 0.1)]} />
        <lineBasicMaterial color="#16a34a" opacity={hovered ? 0.8 : 0.3} transparent />
      </lineSegments>

      {/* Point light for glow effect */}
      {hovered && (
        <pointLight position={[position[0], position[1], position[2] + 0.5]} intensity={0.5} color="#16a34a" distance={2} />
      )}
    </group>
  );
}
