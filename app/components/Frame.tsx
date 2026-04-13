import { useMemo } from "react";
import { ExtrudeGeometry, Path, Shape } from "three";
import {
  BEZEL_BOTTOM,
  BEZEL_SIDE,
  BEZEL_TOP,
  DEPTH,
  OUTER_HEIGHT,
  OUTER_WIDTH,
} from "../utils/constants";

export const Frame = () => {
  const frameGeometry = useMemo(() => {
    const innerLeft = -OUTER_WIDTH + BEZEL_SIDE;
    const innerRight = OUTER_WIDTH - BEZEL_SIDE;
    const innerTop = OUTER_HEIGHT - BEZEL_TOP;
    const innerBottom = -OUTER_HEIGHT + BEZEL_BOTTOM;

    const shape = new Shape();
    shape.moveTo(-OUTER_WIDTH, -OUTER_HEIGHT);
    shape.lineTo(OUTER_WIDTH, -OUTER_HEIGHT);
    shape.lineTo(OUTER_WIDTH, OUTER_HEIGHT);
    shape.lineTo(-OUTER_WIDTH, OUTER_HEIGHT);
    shape.lineTo(-OUTER_WIDTH, -OUTER_HEIGHT);

    const hole = new Path();
    hole.moveTo(innerLeft, innerBottom);
    hole.lineTo(innerLeft, innerTop);
    hole.lineTo(innerRight, innerTop);
    hole.lineTo(innerRight, innerBottom);
    hole.lineTo(innerLeft, innerBottom);

    shape.holes.push(hole);

    return new ExtrudeGeometry(shape, {
      depth: DEPTH,
      bevelEnabled: true,
      bevelThickness: 0.001,
      bevelSize: 0.001,
      bevelSegments: 4,
    });
  }, []);

  return (
    <mesh geometry={frameGeometry} position={[0, 0, 0]}>
      <meshStandardMaterial color="#1a1a1a" roughness={0.5} />
    </mesh>
  );
};
