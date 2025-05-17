import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import AnimatedSphere from "../Three/AnimatedSphere.jsx";

export const HeroExperience = () => {
    const isTablet = false;
    return (
        <Canvas camera={{position: [0, 0, 10], fov: 45}}>
            <ambientLight color="#4255ff" intensity={0.6}/>
            <pointLight position={[5, 5, 5]} intensity={20}/>

            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />
            <group
                position={[0, -1, 0]}
            >
                <AnimatedSphere/>
            </group>
        </Canvas>
    )
}
