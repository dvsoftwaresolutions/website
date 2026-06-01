import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Preload, Points, PointMaterial } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function ParticleBackground() {
  const ref = useRef<THREE.Points>(null!);
  const count = 2000;
  
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 15;
      p[i * 3 + 1] = (Math.random() - 0.5) * 15;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    return p;
  }, [count]);

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    ref.current.rotation.x = state.clock.elapsedTime * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function TechNetwork() {
  const groupRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <group ref={groupRef} position={[0, -0.5, 0]}>
        {/* Central Data Core */}
        <mesh>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshStandardMaterial color="#3b82f6" wireframe roughness={0.2} metalness={0.8} />
        </mesh>
        
        {/* Inner Core */}
        <mesh>
          <icosahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial color="#60a5fa" transparent opacity={0.6} roughness={0.1} metalness={0.8} />
        </mesh>

        {/* Satellite Nodes */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const radius = 3 + Math.sin(i) * 0.5;
          const y = Math.cos(i * 2) * 1.5;
          return (
            <group key={i}>
              <mesh position={[Math.cos(angle) * radius, y, Math.sin(angle) * radius]}>
                <boxGeometry args={[0.3, 0.3, 0.3]} />
                <meshStandardMaterial color="#818cf8" roughness={0.2} metalness={0.8} />
              </mesh>
            </group>
          );
        })}
        
        {/* Orbiting Tech Rings */}
        <mesh rotation={[Math.PI / 2.5, 0, 0]}>
          <torusGeometry args={[3.5, 0.015, 16, 100]} />
          <meshStandardMaterial color="#60a5fa" transparent opacity={0.3} />
        </mesh>
        <mesh rotation={[-Math.PI / 3, Math.PI / 4, 0]}>
          <torusGeometry args={[2.5, 0.015, 16, 100]} />
          <meshStandardMaterial color="#818cf8" transparent opacity={0.3} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 6]}>
          <torusGeometry args={[4.5, 0.015, 16, 100]} />
          <meshStandardMaterial color="#3b82f6" transparent opacity={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

export function ThreeCanvas() {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#60a5fa" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#a855f7" />
        <ParticleBackground />
        <TechNetwork />
        <Environment preset="city" />
        <Preload all />
      </Canvas>
    </div>
  );
}
