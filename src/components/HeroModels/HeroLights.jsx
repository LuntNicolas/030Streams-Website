import * as THREE from "three";

const HeroLights = () => {
    return (
        <>
            <ambientLight intensity={20}/>
            <directionalLight color="#F9C46B" intensity={1.5} position={[4, 4, -4]}/>
            <spotLight
                color="#A0D8F1"
                position={[-3, 4, 5]}
                angle={0.4}
                intensity={4}
                penumbra={1}
            />
            <spotLight
                color="#FFB22C"
                position={[-3, -2, 5]}
                angle={0.4}
                intensity={9}
                penumbra={1}
            />
            <pointLight color="#FA812F" position={[1, 2, 3]} intensity={2}/>
            <directionalLight color="#e87a2c"/>
            <spotLight color="#A0D8F1"/>
        </>
    )
}
export default HeroLights
