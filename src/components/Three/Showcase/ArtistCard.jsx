import React, {useMemo} from 'react'
import {artists} from "../../../constants/index.js"
import ArtistMesh from "./ArtistMesh.jsx"

const ArtistCard = ({index}) => {
    const DIST = 20
    const targetZ = useMemo(() => -index * (DIST), [index])

    const artist = artists[index]
    return (
        <group>
            {artist.items.map((item, index) => {
                const x = index % 2 === 0 ? -4 : 4
                const y = -(index - 1) * 2
                const zOffset = -index * 4
                return <ArtistMesh key={index} item={item} position={[x, y, targetZ + zOffset]}/>
            })}
        </group>

    )
}
export default ArtistCard
