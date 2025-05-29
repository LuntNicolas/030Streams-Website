// components/ArtistItem.jsx
import {useLoader} from "@react-three/fiber";
import * as THREE from "three";
import React, {useEffect, useState} from "react";
import {TextureLoader} from "three";
import {Text} from "@react-three/drei";

const ArtistMesh = ({item, position}) => {
    const [videoTexture, setVideoTexture] = useState(null);


    if (item.type === "image") {
        const texture = useLoader(TextureLoader, item.src);
        return (
            <mesh position={position}>
                <planeGeometry args={[4, 4]}/>
                <meshBasicMaterial transparent={true} map={texture}/>
            </mesh>
        );
    }

    if (item.type === "video") {
        useEffect(() => {
            const video = document.createElement("video");
            video.src = item.src;
            video.crossOrigin = "anonymous";
            video.loop = true;
            video.muted = true;
            video.play();
            const texture = new THREE.VideoTexture(video);
            setVideoTexture(texture);
        }, [item.src]);

        return videoTexture ? (
            <mesh position={position}>
                <planeGeometry args={[4, 4]}/>
                <meshBasicMaterial transparent={true} map={videoTexture}/>
            </mesh>
        ) : null;
    }

    if (item.type === "text") {
        // Beispiel mit einfachem Text in Plane (TextGeometry braucht FontLoader!)
        return (
            <group transparent={true} position={position}>
                <Text
                    font="./fonts/Sora/static/Sora-Regular.ttf"
                    color="white"
                    maxWidth={5}
                    fontSize={0.16}
                    lineHeight={2}
                >
                    {item.content}
                </Text>
            </group>

        );
    }

    return null;
}
export default ArtistMesh
