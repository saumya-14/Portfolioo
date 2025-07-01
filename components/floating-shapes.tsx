"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingSphere({ position, color, speed = 1 }: { position: [number, number, number], color: string, speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * speed * 0.2) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={0.5}>
      <sphereGeometry args={[1, 32, 32]} />
      <MeshDistortMaterial
        color={color}
        transparent
        opacity={0.6}
        distort={0.3}
        speed={2}
        roughness={0.1}
      />
    </mesh>
  );
}

function FloatingCube({ position, color, speed = 1 }: { position: [number, number, number], color: string, speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.015 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.4) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={0.4}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.7}
        wireframe
      />
    </mesh>
  );
}

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.6} />
        
        <FloatingSphere position={[-4, 2, -2]} color="#00D4FF" speed={0.8} />
        <FloatingSphere position={[4, -1, -3]} color="#FF6B6B" speed={1.2} />
        <FloatingSphere position={[2, 3, -1]} color="#4ECDC4" speed={0.6} />
        
        <FloatingCube position={[-3, -2, -2]} color="#FFD93D" speed={0.9} />
        <FloatingCube position={[3, 2, -4]} color="#6BCF7F" speed={1.1} />
        <FloatingCube position={[-1, -3, -3]} color="#A8E6CF" speed={0.7} />
      </Canvas>
    </div>
  );
}