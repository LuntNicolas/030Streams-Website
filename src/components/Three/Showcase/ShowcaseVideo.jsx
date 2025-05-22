import React from 'react'
import * as THREE from "three";

const ShowcaseVideo = ({item, position}) => {

// create video
    const video = document.createElement("video")
    video.src = item
    video.crossOrigin = "anonymous"
    video.loop = true
    video.muted = true
    video.play()
    // create texture
    const videoTexture = new THREE.VideoTexture(video)
    videoTexture.minFilter = THREE.LinearFilter
    videoTexture.magFilter = THREE.LinearFilter
    videoTexture.format = THREE.RGBFormat

    return (

        <mesh position={position}>
            <planeGeometry args={[2, 2]}/>
            <meshBasicMaterial map={videoTexture} toneMapped={false}/>
        </mesh>
    )
}
export default ShowcaseVideo
