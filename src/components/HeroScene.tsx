import { Canvas, useFrame, RootState } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

// A slowly distorting wireframe-ish icosahedron with a subtle inner glow.
function Orb() {
  const mesh = useRef<THREE.Mesh>(null);
  const inner = useRef<THREE.Mesh>(null);
  useFrame((state: RootState) => {
    const t = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = t * 0.08;
      mesh.current.rotation.y = t * 0.12;
    }
    if (inner.current) {
      inner.current.rotation.x = -t * 0.05;
      inner.current.rotation.y = -t * 0.09;
      const s = 1 + Math.sin(t * 0.6) * 0.04;
      inner.current.scale.setScalar(s);
    }
  });
  const geom = useMemo(() => new THREE.IcosahedronGeometry(1.55, 4), []);
  return (
    <group>
      <mesh ref={mesh} geometry={geom}>
        <meshBasicMaterial color={"#d9b27a"} wireframe transparent opacity={0.55} />
      </mesh>
      <mesh ref={inner} geometry={geom}>
        <meshBasicMaterial color={"#7c5cff"} wireframe transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

function Particles({ count = 600 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.5 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);
  useFrame((s: RootState) => {
    if (ref.current) ref.current.rotation.y = s.clock.getElapsedTime() * 0.03;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={"#ffffff"} size={0.012} transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <Orb />
        <Particles />
      </Suspense>
    </Canvas>
  );
}
