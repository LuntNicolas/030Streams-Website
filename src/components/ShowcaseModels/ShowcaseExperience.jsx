import React from "react"
import {Canvas} from "@react-three/fiber"
import * as THREE from "three"
import ShowcaseImage from "../Three/Showcase/ShowcaseImage.jsx";
import ShowcaseLights from "./ShowcaseLights.jsx";
import ShowcaseText from "../Three/Showcase/ShowcaseText.jsx";
import Camera from "../Three/Showcase/Camera.jsx";
import ShowcaseVideo from "../Three/Showcase/ShowcaseVideo.jsx";

const ShowcaseExperience = ({items}) => {
    const loader = new THREE.TextureLoader()
    const processedItem = items.map(item => {
        return {...item, texture: loader.load(item.src)}
    })

    return (
        <Canvas camera={{position: [0, 0, 5], fov: 75}}>
            <ShowcaseLights/>
            <Camera sections={processedItem}/>
            {processedItem.map((item, i) => {
                const x = i % 2 === 0 ? -2 : 2
                const y = Math.random() * 2 - 1
                const z = -i * 2
                if (item.type === "image") {
                    return <ShowcaseImage key={i} texture={item.texture} position={[x, y, z]}/>
                }
                if (item.type === "text") {
                    return (
                        <ShowcaseText key={i} position={[x + 2, y, z]} text={item.content}/>
                    )
                }
                if (item.type === "video") {
                    return (
                        <ShowcaseVideo key={i} position={[x, y, z]} item={item.src}/>
                    )
                }
                return null
            })}
        </Canvas>
    )
}
export default ShowcaseExperience
