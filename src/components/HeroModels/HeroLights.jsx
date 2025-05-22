import * as THREE from "three";

const HeroLights = () => {
    return (
        <>
            <ambientLight color="#4255ff" intensity={0.3}/>
            <hemisphereLight
                skyColor="#ffffff"
                groundColor="#444444"
                intensity={0.6}
            />
            <directionalLight color="#e87a2c" position={[2, 2, 2]} intensity={2}/>
            <spotLight
                position={[-3, 5, 5]}
                angle={0.4}
                penumbra={1}
                intensity={60}
                color="#9d4edd"
            />
            <spotLight
                position={[4, 5, -4]}
                angle={10}
                penumbra={0.5}
                intensity={40}
                color="#ede432"
            />
            <primitive
                object={new THREE.RectAreaLight("#a259ff", 1, 3, 2)}
                position={[1, 3, 4]}
                rotation={[-Math.PI / 4, Math.PI / 4, 0]}
                intensity={15}
            />
        </>
    )
}
export default HeroLights
