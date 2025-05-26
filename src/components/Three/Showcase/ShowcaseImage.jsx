import React, {useEffect, useMemo, useRef, useState} from 'react'
import waterFragment from "../../../shader/waterFragment.glsl?raw";
import waterVertex from "../../../shader/waterVertex.glsl?raw";


const ShowcaseImage = ({texture, position}) => {
    const [size, setSize] = useState([1, 1])
    const s = 1.6

    useEffect(() => {
        if (!texture?.image) return
        const {width, height} = texture.image
        const aspectRatio = width / height
        const planeHeight = 2
        const planeWidth = planeHeight * aspectRatio
        setSize([planeWidth, planeHeight])

    }, [texture])
    return (
        <group>
            {/* Bild als Plane */}
            <mesh position={position}>
                <planeGeometry args={[size[0] * s, size[1] * s]}/>
                <meshBasicMaterial map={texture} transparent={true} opacity={1} dephtWrite={false}/>
            </mesh>
        </group>
    )
}
export default ShowcaseImage
