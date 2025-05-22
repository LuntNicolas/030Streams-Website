import React, {useEffect, useRef, useState} from 'react'
import waterFragment from "../../../shader/waterFragment.glsl";
import waterVertex from "../../../shader/waterVertex.glsl";
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";


const ShowcaseImage = ({texture, position}) => {
    const [size, setSize] = useState([1, 1])
    const ref = useRef()

    useFrame(({clock}) => {
        const shader = ref.current?.material?.uniforms?.uTime;
        if (shader) {
            ref.current.material.uniforms.uTime.value = clock.getElapsedTime();
        }
    })

    useEffect(() => {
        const {width, height} = texture.image
        const aspectRatio = width / height
        const planeHeight = 2
        const planeWidth = planeHeight * aspectRatio
        setSize([planeWidth, planeHeight])

    }, [texture])
    return (
        <mesh position={position} ref={ref}>
            <planeGeometry args={size}/>
            <shaderMaterial
                fragmentShader={waterFragment}
                vertexShader={waterVertex}
                uniforms={{
                    uTime: {value: 0},
                    uTexture: {value: texture},
                    uOpacity: {value: 1.0},
                    uTroughColor: {value: new THREE.Color('#1a1a40')},
                    uSurfaceColor: {value: new THREE.Color('#3399ff')},
                    uPeakColor: {value: new THREE.Color('#ffffff')},
                    uPeakThreshold: {value: 0.3},
                    uPeakTransition: {value: 0.2},
                    uTroughThreshold: {value: -0.3},
                    uTroughTransition: {value: 0.2},
                    uFresnelScale: {value: 1.0},
                    uFresnelPower: {value: 2.0},
                    uWavesAmplitude: {value: 0.5},
                    uWavesSpeed: {value: 0.2},
                    uWavesFrequency: {value: 1.5},
                    uWavesPersistence: {value: 0.5},
                    uWavesLacunarity: {value: 2.0},
                    uWavesIterations: {value: 4.0},
                    uEnvironmentMap: {value: null} // Falls du eine Cube-Map verwendest
                }}
            />
        </mesh>
    )
}
export default ShowcaseImage
