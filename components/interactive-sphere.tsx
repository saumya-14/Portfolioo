"use client";

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function InteractiveSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
      
      // Scale based on hover state
      const targetScale = hovered ? 1.2 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={1}
    >
      <sphereGeometry args={[1.5, 64, 64]} />
      <MeshDistortMaterial
        color={hovered ? "#FF6B6B" : "#00D4FF"}
        transparent
        opacity={0.8}
        distort={hovered ? 0.6 : 0.3}
        speed={hovered ? 3 : 1.5}
        roughness={0}
        metalness={0.1}
      />
    </mesh>
  );
}

function WireframeGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -2]} scale={2}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial
        color="#00D4FF"
        transparent
        opacity={0.1}
        wireframe
      />
    </mesh>
  );
}

export function InteractiveSphereCanvas() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 4], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF6B6B" />
        
        <WireframeGeometry />
        <InteractiveSphere />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}