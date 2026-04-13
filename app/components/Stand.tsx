import { RoundedBox } from "@react-three/drei";
import { DEPTH, OUTER_HEIGHT, OUTER_WIDTH } from "../utils/constants";

export const Stand = () => {
  return (
    <group position={[0, -0.5, -0.15]}>
      {/* Neck */}
      <mesh position={[0, -0.3, DEPTH - 0.25]}>
        <boxGeometry args={[0.4, 1.8, 0.22]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      <mesh position={[0, OUTER_HEIGHT / 5, DEPTH - 0.15]}>
        <RoundedBox
          args={[OUTER_WIDTH / 4, OUTER_HEIGHT / 5, 0.3]}
          radius={0.02}
          smoothness={4}
        >
          <meshStandardMaterial color="#1a1a1a" roughness={0.5} />
        </RoundedBox>
      </mesh>

      {/* Base */}
      <mesh position={[0, -1.2, -0.25]} rotation={[-Math.PI / 2, 0, 0]}>
        <RoundedBox args={[2, 2, 0.08]} radius={0.04}>
          <meshStandardMaterial color="#1a1a1a" roughness={0.6} />
        </RoundedBox>
      </mesh>
    </group>
  );
};
