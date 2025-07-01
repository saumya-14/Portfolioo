"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00D4FF"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[3, 0, -2]}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#00D4FF"
        transparent
        opacity={0.3}
        wireframe
      />
    </mesh>
  );
}

function AnimatedTorus() {
  const torusRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.01;
      torusRef.current.rotation.y += 0.005;
      torusRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 2;
    }
  });

  return (
    <mesh ref={torusRef} position={[-3, 2, -3]}>
      <torusGeometry args={[0.8, 0.3, 16, 100]} />
      <meshStandardMaterial
        color="#FF6B6B"
        transparent
        opacity={0.4}
        wireframe
      />
    </mesh>
  );
}

export function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#FF6B6B" />
        
        <ParticleField />
        <FloatingGeometry />
        <AnimatedTorus />
      </Canvas>
    </div>
  );
}