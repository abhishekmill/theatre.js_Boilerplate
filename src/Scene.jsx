import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { getProject } from "@theatre/core";
import { PerspectiveCamera, SheetProvider } from "@theatre/r3f";
import r3fExtension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";
import { editable as e } from "@theatre/r3f";
studio.initialize();
studio.extend(r3fExtension);

const project = getProject("driModel");
const mainSheet = project.sheet("main");

const Scene = () => {
  return (
    <div>
      <Canvas gl={{ preserveDrawingBuffer: true }}>
        {/* <OrbitControls /> */}
        <PerspectiveCamera makeDefault theatreKey="camera" />
        <SheetProvider sheet={mainSheet}>
          <e.pointLight theatreKey="light" />
          <e.mesh theatreKey="box">
            <boxGeometry />
            <meshBasicMaterial color={"red"} />
          </e.mesh>
        </SheetProvider>
      </Canvas>
    </div>
  );
};

export default Scene;
