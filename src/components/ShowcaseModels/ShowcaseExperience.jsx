import React, {useEffect, useState} from "react"
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

const ShowcaseExperience = ({items: artists}) => {
    const loader = new THREE.TextureLoader()
    const processedItem = artists.flatMap((artist, artistIndex) => {
        return artist.items.map((item, i) => {
            const x = i % 2 === 0 ? -2 : 2
            const y = Math.random() * 2 - 1
            const z = -artistIndex * 10 - i * 2

            return {
                ...item,
                texture: loader.load(item.src),
                position: [x, y, z],
                ref: item.ref,
            }

        })
    })
    const [currentArtist, setCurrentArtist] = useState(artists[0].name)

    useEffect(() => {
        artists.forEach((artist, i) => {
            ScrollTrigger.create({
                trigger: '#scroll-wrapper',
                start: `${i * 100}vh top`,
                end: `${(i + 1) * 100}vh top`,
                onEnter: () => setCurrentArtist(artist.name),
                onEnterBack: () => setCurrentArtist(artist.name),
            })
        })
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])
    return (
        <div className="scroll-wrapper relative">
            <div
                className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold z-50">
                {currentArtist}
            </div>
            <Canvas camera={{position: [0, 0, 5], fov: 75}} gl={{preserveDrawingBuffer: true}}>
                <ShowcaseLights/>
                <Camera sections={processedItem}/>
                {processedItem.map((item, i) => {


                    if (item.type === "image") {
                        return <ShowcaseImage key={i} {...item}/>
                    }
                    if (item.type === "text") {
                        return (
                            <ShowcaseText key={i} {...item} text={item.content}/>
                        )
                    }
                    if (item.type === "video") {
                        return (
                            <ShowcaseVideo key={i} {...item} item={item.src}/>
                        )
                    }
                    return null
                })}
            </Canvas>
        </div>
    )
}
export default ShowcaseExperience
