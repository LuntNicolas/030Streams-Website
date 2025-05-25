import React, {useEffect} from "react"
import {Canvas} from "@react-three/fiber"
import {Html} from "@react-three/drei"
import * as THREE from "three"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import ShowcaseImage from "../Three/Showcase/ShowcaseImage.jsx";
import ShowcaseLights from "./ShowcaseLights.jsx";
import ShowcaseText from "../Three/Showcase/ShowcaseText.jsx";
import Camera from "../Three/Showcase/Camera.jsx";
import ShowcaseVideo from "../Three/Showcase/ShowcaseVideo.jsx";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseExperience = ({items}) => {
    const loader = new THREE.TextureLoader()
    const processedItem = items.map(item => ({
        ...item,
        texture: loader.load(item.src)
    }))
    return (
        <div className="scroll-wrapper ">
            <Canvas camera={{position: [0, 0, 5], fov: 75}}>
                <ShowcaseLights/>
                <Camera sections={processedItem}/>
                {processedItem.map((item, i) => {
                    const x = i % 2 === 0 ? -2 : 2
                    const y = Math.random() * 2 - 1
                    const z = -i * 6

                    const commonProps = {
                        ref: item.ref,
                        position: [x, y, z],
                        transparent: true,
                        opacity: 0,
                    }

                    if (item.type === "image") {
                        return <ShowcaseImage key={i} {...commonProps} texture={item.texture}/>
                    }
                    if (item.type === "text") {
                        return (
                            <ShowcaseText key={i} {...commonProps} text={item.content}/>
                        )
                    }
                    if (item.type === "video") {
                        return (
                            <ShowcaseVideo key={i} {...commonProps} item={item.src}/>
                        )
                    }
                    return null
                })}
            </Canvas>
        </div>
    )
}
export default ShowcaseExperience
