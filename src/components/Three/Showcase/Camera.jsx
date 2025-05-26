import React, {useEffect} from 'react'
import * as THREE from "three";
import {useThree} from "@react-three/fiber";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Camera = ({sections}) => {
    const {camera} = useThree()

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(camera.position, {
                z: -sections.length * 8 + 5,
                scrollTrigger: {
                    trigger: "#scroll-wrapper",
                    start: "top top",
                    end: `+=${sections.length * 300}%`,
                    scrub: true,
                    pin: "#scroll-wrapper",
                },
            })
        })
        return () => ctx.revert()
    }, [camera, sections])
    return null
}
export default Camera
