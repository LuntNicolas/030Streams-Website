import React, {useEffect, useMemo, useRef, useState} from 'react'
import waterFragment from "../../../shader/waterFragment.glsl?raw";
import waterVertex from "../../../shader/waterVertex.glsl?raw";
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";


const ShowcaseImage = ({texture, position}) => {
    const [size, setSize] = useState([1, 1])
    const refB = useRef(null)
    const s = 1.6

    //shader
    const shaderMaterial = useMemo(() => new THREE.ShaderMaterial({
        vertexShader: waterVertex,
        fragmentShader: waterFragment,
        uniforms: {
            uTimeB: {value: 0},
            uTexture: {value: texture},
        }
    }), [texture])
    //animate
    useFrame(({clock}) => {
        if (refB.current?.uniforms?.uTimeB) {
            refB.current.uniforms.uTimeB.value = clock.getElapsedTime();
        }
    })
    console.log(refB.current?.uniforms); //debug

//size of plane is the size of image
    useEffect(() => {
        const {width, height} = texture.image
        const aspectRatio = width / height
        const planeHeight = 2
        const planeWidth = planeHeight * aspectRatio
        setSize([planeWidth, planeHeight])

    }, [texture])
    return (

        <mesh position={position}>
            <planeGeometry args={[size[0] * s, size[1] * s, 120, 120]}/>
            <primitive ref={refB} object={shaderMaterial}/>
        </mesh>
    )
}
export default ShowcaseImage
