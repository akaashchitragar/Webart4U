import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  PerspectiveCamera, 
  Environment, 
  useGLTF, 
  Stars,
  Sparkles
} from '@react-three/drei';
import FloatingIsland from './FloatingIsland';

function Particles({ count = 200, color = '#88c0d0' }) {
  return (
    <Sparkles
      count={count}
      scale={10}
      size={4}
      speed={0.3}
      color={color}
      opacity={0.5}
    />
  );
}

export function HeroScene({ scrollY }) {
  return (
    <Canvas shadows dpr={[1, 2]} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <fog attach="fog" args={['#000000', 5, 20]} />
      <color attach="background" args={['#050505']} />
      
      <PerspectiveCamera makeDefault position={[0, 1, 6]} fov={40} />
      
      <Suspense fallback={null}>
        <FloatingIsland scrollY={scrollY} position={[0, 0, 0]} />
        
        <Particles count={200} color="#a5b4fc" />
        
        <Stars 
          radius={50} 
          depth={50} 
          count={1000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1} 
        />
        
        <Environment preset="night" />
        
        {/* Lighting */}
        <ambientLight intensity={0.2} />
        <spotLight 
          position={[5, 5, 5]} 
          angle={0.3} 
          penumbra={0.8} 
          intensity={1} 
          castShadow 
          color="#4c1d95" 
        />
        <spotLight 
          position={[-5, 5, -5]} 
          angle={0.3} 
          penumbra={0.8} 
          intensity={0.8} 
          castShadow 
          color="#312e81" 
        />
        <pointLight position={[0, 5, 0]} intensity={0.5} color="#8b5cf6" />
      </Suspense>
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        minPolarAngle={Math.PI / 3} 
        maxPolarAngle={Math.PI / 2.5} 
        rotateSpeed={0.5}
      />
    </Canvas>
  );
}

export default HeroScene; 