import { Text } from "@react-three/drei";
import { BEZEL_BOTTOM, DEPTH, OUTER_HEIGHT } from "../utils/constants";
import { BackDetails } from "./BackDetails";
import { BackPanel } from "./BackPanel";
import { BackStandSupport } from "./BackStandSupport";
import { Display } from "./Display";
import { Frame } from "./Frame";
import { Stand } from "./Stand";

export const Monitor = () => {
  return (
    <group>
      <group position={[0, 1.5, 0]}>
        <Frame />
        <Display />

        <BackPanel />
        <BackStandSupport />

        <BackDetails />

        {/* Samsung Logo Back */}
        <Text
          position={[2.5, -0.6, DEPTH - 0.46]}
          fontSize={0.1}
          color="black"
          fontWeight={600}
          font={"./fonts/DDT_W00_Condensed_SemiBold.ttf"}
          scale={[-1, 1, 1]}
        >
          SAMSUNG
        </Text>

        {/* Samsung Logo Front */}
        <Text
          position={[0, -OUTER_HEIGHT + BEZEL_BOTTOM - BEZEL_BOTTOM / 2, 0.105]}
          fontSize={0.06}
          color="#777777"
          fontWeight={600}
          font={"./fonts/DDT_W00_Condensed_SemiBold.ttf"}
        >
          SAMSUNG
        </Text>
      </group>

      {/* --- Stand --- */}
      <Stand />
    </group>
  );
};
