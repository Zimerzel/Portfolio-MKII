import React from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Html, OrbitControls, PresentationControls, useProgress } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";


const Lights = () => {
return(
  <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[100, 100, 100]} intensity={2} />
      <directionalLight position={[-100, 100, -100]} intensity={2} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={0}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <spotLight intensity={3} position={[1000, 0, 0]} castShadow />
  </>
)
}

function Loader(){
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./scene.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={1.0} dispose={null}/>
    </>
  );
};

export default function Porsche() {
  return (
    <div className="porsche">
      <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight color="white" position={[0, 0, 5]} />
      <Lights />
        <Suspense fallback={<Loader />}>
          <PresentationControls
            global={false} // Spin globally or by dragging the model
            snap={true} // Snap-back to center (can also be a spring config)
            speed={.5} // Speed factor
            zoom={.5} // Zoom factor when half the polar-max is reached
            rotation={[0, 0, 0]} // Default rotation
          >
          <Model />
          </PresentationControls>
          {/* <Environment
            background={false} // Whether to affect scene.background
            files={['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']} // Array of cubemap files OR single equirectangular file
            path={'../../assets/images'} // Path to the above file(s)
            scene={undefined} // adds the ability to pass a custom THREE.Scene
          /> */}
          <OrbitControls enablePan={true} enableZoom={false} enableRotate={true}/>
          {/* <Environment preset="lobby" background /> */}
        </Suspense>
      </Canvas>
    </div>
  );
}