import { RoundedBox } from "@react-three/drei";
import { useMemo } from "react";
import { ExtrudeGeometry, Shape } from "three";
import {
  BEZEL_TOP,
  DEPTH,
  OUTER_HEIGHT,
  OUTER_WIDTH,
} from "../utils/constants";

export const BackStandSupport = () => {
  const backScrewGeometry = useMemo(() => {
    const backScrewWidth = OUTER_WIDTH * 0.85;
    const backScrewHeight = (OUTER_HEIGHT - BEZEL_TOP) / 2.5;

    const shape = new Shape();
    shape.moveTo(-backScrewWidth, -backScrewHeight);
    shape.lineTo(-backScrewWidth, backScrewHeight);
    shape.lineTo(backScrewWidth, backScrewHeight);
    shape.lineTo(backScrewWidth, -backScrewHeight);
    shape.lineTo(-backScrewWidth, -backScrewHeight);

    return new ExtrudeGeometry(shape, {
      depth: DEPTH / 4,
      bevelEnabled: true,
      bevelThickness: 0.001,
      bevelSize: 0.001,
      bevelSegments: 4,
    });
  }, []);

  return (
    <group position={[0, -0.5, 0.0015]}>
      <mesh geometry={backScrewGeometry} position={[0, 0, DEPTH - 0.2]}>
        <meshStandardMaterial color="#151515" roughness={0.8} />
      </mesh>

      <mesh geometry={backScrewGeometry} position={[0, 0, DEPTH - 0.25]}>
        <meshStandardMaterial color="#151515" roughness={0.8} />
      </mesh>
      <mesh geometry={backScrewGeometry} position={[0, 0, DEPTH - 0.3]}>
        <meshStandardMaterial color="#151515" roughness={0.8} />
      </mesh>
      <mesh geometry={backScrewGeometry} position={[0, 0, DEPTH - 0.35]}>
        <meshStandardMaterial color="#151515" roughness={0.8} />
      </mesh>
      <mesh geometry={backScrewGeometry} position={[0, 0, DEPTH - 0.4]}>
        <meshStandardMaterial color="#151515" roughness={0.8} />
      </mesh>
      <mesh geometry={backScrewGeometry} position={[0, 0, DEPTH - 0.45]}>
        <meshStandardMaterial color="#151515" roughness={0.8} />
      </mesh>

      <mesh position={[0, -0.02, DEPTH - 0.3]}>
        <RoundedBox
          args={[OUTER_WIDTH * 1.7, OUTER_HEIGHT - 0.45, 0.3]}
          radius={0.02}
          smoothness={4}
        >
          <meshStandardMaterial color="#1a1a1a" roughness={0.5} />
        </RoundedBox>
      </mesh>
    </group>
  );
};
