import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { DeviceOrientationControls, Html, OrbitControls, useGLTF, useProgress } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Lights = () => {
return(
  <>
      <ambientLight intensity={1.5}/>
      <directionalLight position={[60, 150, 0]} intensity={0.8} color="#9147fe" castShadow/>
      <directionalLight position={[-100, 10, -100]} intensity={2} color="white" castShadow/>
      <directionalLight position={[-100, 0, -100]} intensity={4} color="white" castShadow/>
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
        color="#9147fe"
      />
       <directionalLight
        castShadow
        position={[-100, 0, 20]}
        intensity={4}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        color="grey"
      />
      <directionalLight intensity={4} position={[150, 0, 150]} castShadow color="#9147fe"/>
      <directionalLight intensity={3} position={[150, 0, -300]} castShadow color="#9147fe"/>
      <ambientLight intensity={10} position={[0,0,0]} castShadow color="#9147fe"/>
  </>
)
}


function Loader(){
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}


/* GLTF LOADER */

// const Model = () => {
//   const {scene} = useGLTF("./scene.gltf");
//   return (
//     <>
//       <primitive object={scene} scale={60.0} dispose={null}/>
//     </>
//   );
// };


/* GLB LOADER */

const Model = () => {
  const { scene } = useGLTF( "./scene.glb" );
  return (
    <>
      <primitive object={scene} scale={130.0} dispose={null}/>
    </>
  );
};

var fovNum = 50
var x = 0;
var y = 0;
var z = -100



const coord = [
  x,
  y,
  z
]

export default function Mando() {
  return(
    <>
      <div className="mando">
      <Canvas frameloop="demand" camera={{fov: fovNum, position: coord}}>
     <ambientLight intensity={0.3} />
      <directionalLight color="grey" position={[0, 0, 5]} />
      <Lights />
        <Suspense fallback={<Loader />}>
          <DeviceOrientationControls />
          <Model />
           <OrbitControls 
          enablePan={true} enableZoom={false} 
          enableDamping={true}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={1.2} 
          />
        </Suspense>
      </Canvas>
    </div>
    );
    </>
  )


  // return (
  //   <div className="porsche">
  //     <Canvas frameloop="demand" camera={{fov: fovNum, position: coord}}>
  //     <ambientLight intensity={0.3} />
  //     <directionalLight color="grey" position={[0, 0, 5]} />
  //     <Lights />
  //       <Suspense fallback={<Loader />}>
  //         <DeviceOrientationControls />
  //         <Model />
  //         <OrbitControls 
  //         enablePan={true} enableZoom={false} 
  //         enableDamping={true} maxPolarAngle={1.2}
  //         minAzimuthAngle={-0.1}
  //         maxAzimuthAngle={Math.PI * 0.08} enableRotate={true} 
  //         pa
  //         />
  //       </Suspense>
  //     </Canvas>
  //   </div>
  // );
}