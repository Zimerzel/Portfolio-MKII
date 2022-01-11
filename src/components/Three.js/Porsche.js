import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { DeviceOrientationControls, Html, OrbitControls, useGLTF, useProgress } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Lights = () => {
return(
  <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[100, 100, 100]} intensity={0.8} color="white" castShadow/>
      <directionalLight position={[-100, 100, -100]} intensity={2} color="#9147fe" castShadow/>
      <directionalLight
        castShadow
        position={[10, 60, 10]}
        intensity={2}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        color="#454343"
      />
      <spotLight intensity={2} position={[1000, 0, 0]} castShadow color="white"/>
  </>
)
}


function Loader(){
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}


/* GLTF LOADER */

// const Model = () => {
//   const gltf = useLoader(GLTFLoader, "./scene1.gltf");
//   return (
//     <>
//       <primitive object={gltf.scene} scale={60.0} dispose={null}/>
//     </>
//   );
// };


/* GLB LOADER */

const Model = () => {
  const { scene } = useGLTF( "./untitled.glb" );
  return (
    <>
      <primitive object={scene} scale={60.0} dispose={null}/>
    </>
  );
};

var fovNum = 100
var x = 0;
var y = 200;
var z = 120

// let scale = 62
// var fovNum = 70
// var x = 60;
// var y = 38;
// var z = 80

const coord = [
  x,
  y,
  z
]

var s = window.matchMedia("(max-width:1080px")

function viewChange(s){
if (s.matches){
  fovNum = 100;
  x = 0;
  y = 200;
  z = 120;
}
}

viewChange(s)

export default function Porsche() {
  return (
    <div className="porsche">
      <Canvas frameloop="demand" camera={{fov: fovNum, position: coord}}>
      <ambientLight intensity={0.3} />
      <directionalLight color="grey" position={[0, 0, 5]} />
      <Lights />
        <Suspense fallback={<Loader />}>
          <DeviceOrientationControls />
          <Model />
          <OrbitControls 
          enablePan={true} enableZoom={false} 
          enableDamping={true} maxPolarAngle={1.2}
          minAzimuthAngle={-0.1}
          maxAzimuthAngle={Math.PI * 0.08} enableRotate={true} 
          pa
          />
        </Suspense>
      </Canvas>
    </div>
  );
}