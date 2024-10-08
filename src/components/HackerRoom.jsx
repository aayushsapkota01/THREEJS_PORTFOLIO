import { useGLTF, useTexture } from "@react-three/drei";
import { useMemo } from "react";

const HackerRoom = (props) => {
  // Load GLTF model and textures
  const { nodes, materials } = useGLTF("/models/hacker-room.glb");
  const monitorTexture = useTexture("textures/desk/monitor.png");
  const screenTexture = useTexture("textures/desk/screen.png");

  // Memoize textures to avoid unnecessary re-renders
  const textures = useMemo(
    () => ({
      monitor: monitorTexture,
      screen: screenTexture,
    }),
    [monitorTexture, screenTexture]
  );

  // Ensure textures are loaded before rendering
  if (!textures.monitor || !textures.screen) {
    return null; // or a loading indicator
  }

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.screen_screens_0.geometry}
        material={materials.screens}
      >
        <meshMatcapMaterial map={textures.screen} />
      </mesh>
      <mesh
        geometry={nodes.screen_glass_glass_0.geometry}
        material={materials.glass}
      />
      <mesh
        geometry={nodes.table_table_mat_0_1.geometry}
        material={materials.table_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_2.geometry}
        material={materials.computer_mat}
      >
        <meshMatcapMaterial map={textures.monitor} />
      </mesh>
      <mesh
        geometry={nodes.table_table_mat_0_3.geometry}
        material={materials.server_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_4.geometry}
        material={materials.vhsPlayer_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_5.geometry}
        material={materials.stand_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_6.geometry}
        material={materials.mat_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_7.geometry}
        material={materials.arm_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_8.geometry}
        material={materials.tv_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_9.geometry}
        material={materials.cables_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_10.geometry}
        material={materials.props_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_11.geometry}
        material={materials.ground_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_12.geometry}
        material={materials.key_mat}
      />
    </group>
  );
};

useGLTF.preload("/models/hacker-room.glb");

export default HackerRoom;
