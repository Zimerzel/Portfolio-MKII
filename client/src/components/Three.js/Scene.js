import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <div className="porsche">
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-1.09, -1.09, 1.81]} scale={[0.07, 0.04, 0.04]}>
            <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
            <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} />
            <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
          </group>
          <group position={[-1.09, -1.09, 1.86]}>
            <mesh geometry={nodes.mesh_3.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
            <mesh geometry={nodes.mesh_5.geometry} material={materials['Material.003']} />
            <mesh geometry={nodes.mesh_6.geometry} material={materials['Material.006']} />
            <mesh geometry={nodes.mesh_7.geometry} material={materials['Material.011']} />
            <mesh geometry={nodes.mesh_8.geometry} material={materials['Material.012']} />
            <mesh geometry={nodes.mesh_9.geometry} material={nodes.mesh_9.material} />
            <mesh geometry={nodes.mesh_10.geometry} material={nodes.mesh_10.material} />
            <mesh geometry={nodes.mesh_11.geometry} material={materials['Material.010']} />
            <mesh geometry={nodes.mesh_12.geometry} material={nodes.mesh_12.material} />
            <mesh geometry={nodes.mesh_13.geometry} material={materials['Material.014']} />
          </group>
          <group position={[-1.09, -1.09, 1.86]}>
            <mesh geometry={nodes.mesh_14.geometry} material={nodes.mesh_14.material} />
          </group>
          <group position={[-1.09, -1.09, 1.86]}>
            <mesh geometry={nodes.mesh_15.geometry} material={nodes.mesh_15.material} />
          </group>
          <group position={[-1.09, -1.08, 1.86]}>
            <mesh geometry={nodes.mesh_16.geometry} material={nodes.mesh_16.material} />
          </group>
          <group position={[-0.78, -0.85, 0.62]} rotation={[0.59, -0.11, -0.16]} scale={0.87}>
            <mesh geometry={nodes.mesh_17.geometry} material={nodes.mesh_17.material} />
          </group>
          <group position={[-1.7, -1.32, 1.08]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.26, 0.26, 0.26]}>
            <mesh geometry={nodes.mesh_18.geometry} material={nodes.mesh_18.material} />
            <mesh geometry={nodes.mesh_19.geometry} material={nodes.mesh_19.material} />
            <mesh geometry={nodes.mesh_20.geometry} material={nodes.mesh_20.material} />
          </group>
          <group position={[-0.47, -1.32, -0.72]} rotation={[0, 0, -Math.PI / 2]} scale={[0.26, 0.27, 0.26]}>
            <mesh geometry={nodes.mesh_21.geometry} material={nodes.mesh_21.material} />
            <mesh geometry={nodes.mesh_22.geometry} material={nodes.mesh_22.material} />
            <mesh geometry={nodes.mesh_23.geometry} material={nodes.mesh_23.material} />
          </group>
          <group position={[-1.71, -1.32, -0.72]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.26, 0.27, 0.26]}>
            <mesh geometry={nodes.mesh_24.geometry} material={nodes.mesh_24.material} />
            <mesh geometry={nodes.mesh_25.geometry} material={nodes.mesh_25.material} />
            <mesh geometry={nodes.mesh_26.geometry} material={nodes.mesh_26.material} />
          </group>
          <group position={[-1.09, -1.09, -0.21]} scale={[0.53, 0.51, 0.83]}>
            <mesh geometry={nodes.mesh_27.geometry} material={nodes.mesh_27.material} />
          </group>
          <group position={[-0.49, -1.32, 1.08]} rotation={[0, 0, -Math.PI / 2]} scale={[0.26, 0.26, 0.26]}>
            <mesh geometry={nodes.mesh_29.geometry} material={nodes.mesh_29.material} />
            <mesh geometry={nodes.mesh_30.geometry} material={nodes.mesh_30.material} />
          </group>
          <group position={[-0.58, -0.96, 0.84]} rotation={[0.04, -0.03, -0.61]} scale={[0.06, 0.06, 0.08]}>
          </group>
        </group>
      </group>
    </group>
    </div>
  )
}

useGLTF.preload('/scene.gltf')