import React, {useMemo} from 'react'
import {artists} from "../../../constants/index.js"
import ArtistMesh from "./ArtistMesh.jsx"
import * as THREE from "three"

const ArtistCard = ({index, scrollProgress}) => {
    //every 20 units next artist. NOT DYNAMIC !!!
    const DIST = 20
    const targetZ = useMemo(() => -index * (DIST), [index])
    const artist = artists[index]

    //opacity cards
    const distance = Math.abs((scrollProgress * 80) - (index * DIST)) //distance camera
    const opacity = THREE.MathUtils.clamp(THREE.MathUtils.smoothstep(5, -1, distance), 0, 1)

    return (
        <group>
            {artist.items.map((item, index) => {
                const x = index % 2 === 0 ? -4 : 4
                const y = -(index - 1) * 2
                const zOffset = -index * 5
                return <ArtistMesh opacity={opacity} key={index} item={item} position={[x, y, targetZ + zOffset]}/>
            })}
        </group>

    )
}
export default ArtistCard
