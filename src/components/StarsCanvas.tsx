// components/StarsCanvas.tsx
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo, Suspense } from "react";
import { Points as PointsType } from "three";
import { useTheme } from "@/contexts/ThemeContext";

function Stars({ theme }: { theme: "dark" | "light" }) {
  const ref = useRef<PointsType>(null);
  const sphere = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < positions.length; i += 3) {
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 1.2 * Math.cbrt(Math.random());
      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
      ref.current.rotation.z = Math.PI / 4;
    }
  });

  const isDark = theme === "dark";

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={isDark ? "#ffffff" : "#000000"}
        opacity={isDark ? 0.9 : 0.35}
        size={isDark ? 0.002 : 0.0015}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

export default function StarsCanvas() {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }} gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <Stars theme={theme} />
        </Suspense>
      </Canvas>
    </div>
  );
}