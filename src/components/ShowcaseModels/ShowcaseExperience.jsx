import React from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";

import ArtistCard from "../Three/Showcase/ArtistCard.jsx";
import {artists} from "../../constants/index.js";
import ScrollManager from "../Three/ScrollManager.jsx";

const ShowcaseExperience = ({scrollProgress, currentArtist}) => {

    return (
        <Canvas className="w-full h-full">
            <ambientLight intensity={1}/>
            <ScrollManager scrollProgress={scrollProgress}/>
            {/*<PerspectiveCamera makeDefault position={[0, 0, 5]}/>*/}
            {artists.map((_, index) => (
                <ArtistCard key={index} index={index}/>
            ))}


        </Canvas>
    )
}
export default ShowcaseExperience
