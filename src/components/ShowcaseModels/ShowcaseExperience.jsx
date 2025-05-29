import React from 'react'
import {Canvas} from "@react-three/fiber";

import ArtistCard from "../Three/Showcase/ArtistCard.jsx";
import {artists} from "../../constants/index.js";
import ScrollManager from "../Three/ScrollManager.jsx";

const ShowcaseExperience = ({scrollProgress}) => {
    return (
        <Canvas className="w-full h-full">
            <ambientLight intensity={1}/>
            <ScrollManager scrollProgress={scrollProgress}/>
            <group>
                {artists.map((_, i) => (
                    <ArtistCard key={i} index={i}/>
                ))}
            </group>
        </Canvas>
    )
}
export default ShowcaseExperience
