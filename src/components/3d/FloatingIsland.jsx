import { useRef, useState, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Float } from '@react-three/drei';
import * as THREE from 'three';

// Pre-defined values to replace Math.random() for consistent server/client rendering
const cubeScales = [0.12, 0.15, 0.18, 0.14, 0.11, 0.16, 0.13, 0.17];
const cubeHeights = [0.15, 0.25, 0.18, 0.22, 0.17, 0.21, 0.19, 0.23];
const cubeRotations = [
  [0.1, 0.2, 0.3],
  [0.4, 0.5, 0.6],
  [0.7, 0.8, 0.9],
  [1.0, 1.1, 1.2],
  [1.3, 1.4, 1.5],
  [1.6, 1.7, 1.8],
  [1.9, 2.0, 2.1],
  [2.2, 2.3, 2.4]
];

// This is a simplified 3D island component that will float and rotate slightly
export function FloatingIsland({ scrollY, ...props }) {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  
  // Create a simple geometry for our island
  useFrame((state, delta) => {
    if (ref.current) {
      // Subtle rotation based on mouse position
      ref.current.rotation.y += delta * 0.1;
      
      // Apply scroll effect
      if (scrollY) {
        ref.current.position.y = THREE.MathUtils.lerp(
          ref.current.position.y,
          Math.sin(scrollY.current / 1000) * 0.5,
          0.1
        );
        ref.current.rotation.x = THREE.MathUtils.lerp(
          ref.current.rotation.x,
          (scrollY.current / 1000) * Math.PI * 0.1,
          0.1
        );
      }
    }
  });

  return (
    <Float 
      speed={2} 
      rotationIntensity={0.2} 
      floatIntensity={0.5}
      {...props}
    >
      <group
        ref={ref}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        {/* Base platform */}
        <mesh position={[0, -0.2, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[2, 2.5, 0.5, 32, 1]} />
          <meshStandardMaterial 
            color="#1e1e2f" 
            metalness={0.2}
            roughness={0.8}
          />
        </mesh>
        
        {/* Top surface */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[2, 2, 0.2, 32, 1]} />
          <meshStandardMaterial 
            color={hovered ? "#4c3aff" : "#3730a3"} 
            metalness={0.3}
            roughness={0.7}
          />
        </mesh>
        
        {/* Decorative elements */}
        <group position={[0, 0.2, 0]}>
          {/* Central element */}
          <mesh position={[0, 0.3, 0]} castShadow>
            <torusGeometry args={[0.6, 0.1, 16, 32]} />
            <meshStandardMaterial 
              color={hovered ? "#8b5cf6" : "#6366f1"} 
              emissive={hovered ? "#4c1d95" : "#312e81"}
              emissiveIntensity={0.5}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          
          {/* Floating orb */}
          <mesh position={[0, 0.8, 0]} castShadow>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshStandardMaterial 
              color={hovered ? "#c4b5fd" : "#a5b4fc"} 
              emissive={hovered ? "#7c3aed" : "#4f46e5"}
              emissiveIntensity={0.8}
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
          
          {/* Small decorative cubes */}
          {[...Array(8)].map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            const radius = 1.5;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            const scale = cubeScales[i];
            const rot = cubeRotations[i];
            
            return (
              <mesh 
                key={i} 
                position={[x, cubeHeights[i], z]} 
                rotation={[rot[0], rot[1], rot[2]]}
                scale={[scale, scale, scale]}
                castShadow
              >
                <boxGeometry />
                <meshStandardMaterial 
                  color={hovered ? "#c4b5fd" : "#818cf8"} 
                  emissive={hovered ? "#7c3aed" : "#4f46e5"}
                  emissiveIntensity={0.5}
                  metalness={0.7}
                  roughness={0.3}
                />
              </mesh>
            );
          })}
        </group>
      </group>
    </Float>
  );
}

export default FloatingIsland; 