import { useMemo } from "react";
import { ExtrudeGeometry, Shape } from "three";
import {
  BEZEL_SIDE,
  BEZEL_TOP,
  DEPTH,
  OUTER_HEIGHT,
  OUTER_WIDTH,
} from "../utils/constants";

export function Display() {
  const displayGeometry = useMemo(() => {
    const displayWidth = OUTER_WIDTH - BEZEL_SIDE * 2;
    const displayHeight = OUTER_HEIGHT - BEZEL_TOP;

    const shape = new Shape();
    shape.moveTo(-displayWidth, -displayHeight);
    shape.lineTo(-displayWidth, displayHeight);
    shape.lineTo(displayWidth, displayHeight);
    shape.lineTo(displayWidth, -displayHeight);
    shape.lineTo(-displayWidth, -displayHeight);

    return new ExtrudeGeometry(shape, {
      depth: DEPTH / 2,
      bevelEnabled: true,
      bevelThickness: 0.001,
      bevelSize: 0.001,
      bevelSegments: 4,
    });
  }, []);

  return (
    <mesh
      args={[displayGeometry]}
      position={[0, OUTER_HEIGHT - OUTER_HEIGHT, DEPTH / 3]}
    >
      <meshStandardMaterial color="#050505" roughness={0.1} metalness={0.8} />
    </mesh>
  );
}
