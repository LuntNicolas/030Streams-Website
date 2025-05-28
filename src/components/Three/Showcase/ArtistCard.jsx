import React, {useMemo} from 'react'
import {artists} from "../../../constants/index.js"
import ArtistMesh from "./ArtistMesh.jsx"

const ArtistCard = ({index, scrollProgress}) => {
    const DIST = 10
    const targetZ = useMemo(() => -index * (DIST), [index])
    console.log(index)

    const artist = artists[index]

    return (
        <group>
            {artist.items.map((item, index) => {
                const x = index % 2 === 0 ? -4 : 4
                return <ArtistMesh key={index} item={item} position={[x, 0, targetZ]}/>
            })}
        </group>

    )
}
export default ArtistCard
