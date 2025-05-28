import React, {useEffect, useState, useRef} from 'react'
import gsap from "gsap";
import ShowcaseExperience from "../components/ShowcaseModels/ShowcaseExperience.jsx";
import {artists} from "../constants/index.js";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null)
    const [currentArtist, setCurrentArtist] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);


    // Trigger
    useEffect(() => {

        const trigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${artists.length * 100}vh`,
            scrub: true,
            pin: true,
            onUpdate: (self) => {
                const progress = self.progress;
                const index = Math.floor(progress * artists.length);
                const clampedIndex = Math.min(Math.max(0, index), artists.length - 1);
                setCurrentArtist(clampedIndex);
                setScrollProgress(progress);
            }
        })
        return () => {
            trigger.kill()
        };
    }, [])

    return (
        <section ref={sectionRef} id="work" className="showcase-layout overflow-hidden">
            <div className="group artist-wrapper ">
                {/* Show Artist Name in middle of display */}
                <div className="artist-name transition duration-300 group-hover:blur-sm">
                    {artists[currentArtist]?.name}
                </div>
                {/* Links */}
                <div className="link-reveal opacity-0 group-hover:opacity-100">
                    {artists[currentArtist]?.links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:underline text-white"
                        >
                            <img src={link.imgPath} alt={link.label} className="h-5 w-5"/>
                            <span>{link.label}</span>
                        </a>
                    ))}
                </div>
            </div>
            {/* Canvas, 3d Renderer */}
            <figure>
                <div className="showcase-3d-layout z-0">
                    <ShowcaseExperience scrollProgress={scrollProgress} currentArtist={currentArtist}/>
                </div>
            </figure>
        </section>
    )
}

export default ShowcaseSection
