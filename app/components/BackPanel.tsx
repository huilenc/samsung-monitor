import { useMemo } from "react";
import { BoxGeometry } from "three";

export const BackPanel = () => {
  const backPanelGeometry = useMemo(() => {
    const width = 8.255;
    const height = 4.255;
    const depth = 0.02;
    // More Y segments = smoother belly
    const geo = new BoxGeometry(width, height, depth, 1, 48, 1);
    const pos = geo.attributes.position;
    const halfH = height / 2;

    const angleDeg = 5;
    const angleRad = (angleDeg * Math.PI) / 360;
    const deltaDepth = height * Math.tan(angleRad); // total increase top->bottom
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      const z = pos.getZ(i);
      // pick the panel face you want to deform
      if (z < 0) {
        // t: 0 at top, 1 at bottom
        const t = (halfH - y) / height;
        // linear 5deg taper
        const outward = deltaDepth * t;
        // outward direction: try + first; if inverted, switch to -
        pos.setZ(i, z - outward);
      }
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
    return geo;
  }, []);

  return (
    <mesh geometry={backPanelGeometry} position={[0, 0, 0.0015]}>
      <meshStandardMaterial color="#151515" roughness={0.8} />{" "}
      {/* TODO: Add texture */}
    </mesh>
  );
};
