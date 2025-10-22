// components/StarsCanvas.tsx
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import { useRef, useMemo, Suspense } from "react";
import { BufferAttribute, Points as PointsType } from "three";

function Stars() {
  const ref = useRef<PointsType>(null);
  
  // Generar las posiciones de las estrellas de forma segura
  const sphere = useMemo(() => {
    try {
      // Crear un array Float32Array con valores iniciales válidos
      const positions = new Float32Array(5000 * 3);
      
      // Generar posiciones aleatorias dentro de una esfera
      for (let i = 0; i < positions.length; i += 3) {
        const theta = 2 * Math.PI * Math.random();
        const phi = Math.acos(2 * Math.random() - 1);
        const radius = 1.2 * Math.cbrt(Math.random());
        
        positions[i] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i + 2] = radius * Math.cos(phi);
      }
      
      return positions;
    } catch (error) {
      console.error("Error generating star positions:", error);
      // Fallback: crear una esfera simple si hay error
      return new Float32Array([
        -1, 0, 0, 1, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0, -1, 0, 0, 1
      ]);
    }
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function StarsCanvas() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        gl={{ antialias: false }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
}