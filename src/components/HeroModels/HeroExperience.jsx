import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import AnimatedSphere from "../Three/AnimatedSphere.jsx";
import HeroLights from "./HeroLights.jsx";

export const HeroExperience = () => {
    const isMobile = useMediaQuery({query: "(max-width: 768px)"});
    const isTablet = useMediaQuery({query: "(max-width: 1024px)"});

    return (
        <Canvas camera={{position: [0, 0, 10], fov: 45}}>
            <HeroLights/>

            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={20} //maximum Distance of zooming out
                minDistance={7} //minimum Distance of zooming in
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />
            <group
                scale={isMobile ? 0.7 : 1}
                position={[0, 0, 0]}
                rotation={[-5, -10, 0]}
            >
                <AnimatedSphere/>
            </group>
        </Canvas>
    )
}
