import React from 'react'
import {artists} from "../../../constants/index.js"
import ArtistMesh from "./ArtistMesh.jsx"
import {TextGeometry} from 'three-stdlib'

const ArtistCard = ({index}) => {
    const artist = artists[index]
    const zBase = -index * 10

    return (
        <group>
            {artist.items.map((item, index) => {
                const x = index % 2 === 0 ? -2 : 2
                const z = zBase - index * 5
                return <ArtistMesh key={index} item={item} position={[x, 0, z]}/>
            })}
        </group>

    )
}
export default ArtistCard
