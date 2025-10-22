"use client";
import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import { useRef, useMemo } from "react";
import * as THREE from "three";

export default function StarsCanvas() {
  const ref = useRef<THREE.Points | null>(null);

  const sphere = useMemo(() => {
    const arr = new Float32Array(5000);
    random.inSphere(arr, { radius: 1.2 });
    return arr;
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Points ref={ref} positions={sphere} stride={3}>
          <PointMaterial
            transparent
            color="#ffffff"
            size={0.005}
            sizeAttenuation
            depthWrite={false}
          />
        </Points>
      </Canvas>
    </div>
  );
}
