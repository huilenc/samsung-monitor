import { useMemo } from "react";
import { BoxGeometry, CylinderGeometry } from "three";

export const BackDetails = () => {
  const centralScrewGeometry = useMemo(
    () => new CylinderGeometry(0.02, 0.02, 0.02, 16),
    [],
  );
  const vemaPortGeometry = useMemo(() => new BoxGeometry(0.2, 0.2, 0.05), []);
  const hdmiPortGeometry = useMemo(() => new BoxGeometry(0.08, 0.04, 0.05), []);

  return (
    <group position={[0, -0.5, -0.33]}>
      {/* Four screws in the center (VESA pattern) */}
      {[
        [-0.6, 0.6],
        [0.6, 0.6],
        [-0.6, -0.6],
        [0.6, -0.6],
      ].map(([x, y], i) => (
        <mesh
          key={i}
          geometry={centralScrewGeometry}
          position={[x, y, -0.015]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial color="#333" metalness={0.9} roughness={0.2} />
        </mesh>
      ))}

      {/* VEMA connection port on the left side */}
      <mesh geometry={vemaPortGeometry} position={[3, -0.755, -0.005]}>
        <meshStandardMaterial color="#080808" roughness={1} />
      </mesh>

      {/* HDMI connection */}
      <mesh geometry={hdmiPortGeometry} position={[-3, -0.785, -0.005]}>
        <meshStandardMaterial color="#111" metalness={0.5} roughness={0.5} />
      </mesh>
    </group>
  );
};
