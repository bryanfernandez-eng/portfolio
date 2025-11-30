import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

export default function RetroTerminal() {
  const groupRef = useRef<THREE.Group>(null);
  const screenRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating and rotation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }

    if (screenRef.current) {
      // Subtle screen glow pulse
      const material = screenRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Monitor body */}
      <RoundedBox args={[3, 2.5, 0.3]} radius={0.05} smoothness={4} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </RoundedBox>

      {/* Screen */}
      <Box args={[2.6, 2, 0.1]} position={[0, 0.1, 0.16]} ref={screenRef}>
        <meshStandardMaterial
          color="#050607"
          emissive="#16a34a"
          emissiveIntensity={0.5}
          metalness={0.1}
          roughness={0.9}
        />
      </Box>

      {/* Screen text */}
      <Text
        position={[0, 0.5, 0.22]}
        fontSize={0.15}
        color="#16a34a"
        anchorX="center"
        anchorY="middle"
        font="/fonts/PressStart2P-Regular.ttf"
      >
        BRYAN_FERNANDEZ
      </Text>

      <Text
        position={[0, 0.2, 0.22]}
        fontSize={0.08}
        color="#16a34a"
        anchorX="center"
        anchorY="middle"
        font="/fonts/VT323-Regular.ttf"
      >
        {'> FULL_STACK_DEVELOPER'}
      </Text>

      <Text
        position={[0, -0.1, 0.22]}
        fontSize={0.06}
        color="#16a34a"
        anchorX="center"
        anchorY="middle"
        font="/fonts/VT323-Regular.ttf"
      >
        {'> CS_STUDENT @ FIU'}
      </Text>

      <Text
        position={[0, -0.35, 0.22]}
        fontSize={0.05}
        color="#16a34a"
        anchorX="center"
        anchorY="middle"
        font="/fonts/VT323-Regular.ttf"
      >
        {'> INTERN @ FEAM_AERO'}
      </Text>

      {/* Monitor stand */}
      <Box args={[0.5, 0.4, 0.3]} position={[0, -1.45, 0]}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </Box>

      {/* Monitor base */}
      <Box args={[1.2, 0.1, 0.8]} position={[0, -1.8, 0]}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </Box>

      {/* Scanlines effect on screen */}
      <lineSegments position={[0, 0.1, 0.22]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={40}
            array={new Float32Array(
              Array.from({ length: 40 }, (_, i) => [
                -1.3, 1 - (i * 0.05), 0,
                1.3, 1 - (i * 0.05), 0
              ]).flat()
            )}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#16a34a" opacity={0.1} transparent />
      </lineSegments>

      {/* Ambient light for terminal glow */}
      <pointLight position={[0, 0, 1]} intensity={0.5} color="#16a34a" distance={3} />
    </group>
  );
}
