"use client";

import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Tilt } from "./components/Tilt";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#e0e0e0" }}>
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 1, 8]} fov={55} />

        {/* Lighting */}
        <ambientLight intensity={0.8} />
        <spotLight
          position={[20, 20, 20]}
          angle={0.2}
          penumbra={1}
          intensity={4}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <Tilt />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
