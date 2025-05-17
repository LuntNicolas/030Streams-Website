import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import vertex from "../../shader/vertex.glsl";
import fragment from "../../shader/fragment.glsl";
import * as THREE from "three";


export const HeroExperience = () => {
    const isTablet = false;
    return (
        <Canvas camera={{position: [0, 0, 10], fov: 45}}>
            <ambientLight intensity={0.5}/>
            <pointLight position={[5, 5, 5]} intensity={100}/>

            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            <mesh>
                <icosahedronGeometry args={[1, 100]}/>
                {/* <meshStandardMaterial color="teal"/>*/}
                <shaderMaterial
                    vertexShader={vertex}
                    fragmentShader={fragment}
                    uniforms={{
                        uTime: {value: 0.3},
                    }}
                />
            </mesh>
        </Canvas>
    )
}
