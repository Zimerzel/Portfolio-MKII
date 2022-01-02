import React from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, Html, OrbitControls, useProgress } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";


function Loader(){
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./scene.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} dispose={null}/>
    </>
  );
};

export default function Porsche() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={<Loader />}>
          <Model />
          <OrbitControls />
          {/* <Environment preset="lobby" background /> */}
        </Suspense>
      </Canvas>
    </div>
  );
}