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
            // gsap.set('#scroll-wrapper', {
            //     opacity: 0,
            //     filter: "blur(20px)",
            // })
            // gsap.to('#scroll-wrapper', {
            //     scrollTrigger: {
            //         trigger: "#scroll-wrapper",
            //         start: "top top",
            //         end: `+=${sections.length * 100}%`,
            //         scrub: true,
            //     },
            //     opacity: 1,
            //     filter: "blur(0px)",
            //     stagger: 0.3,
            //     ease: "power2.Out",
            // })
            gsap.to(camera.position, {
                z: -sections.length * 8 + 5,
                scrollTrigger: {
                    markers: true,
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
