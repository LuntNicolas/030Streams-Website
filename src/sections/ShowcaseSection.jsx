import React, {useEffect, useState, useRef} from 'react'
import gsap from "gsap";
import ShowcaseExperience from "../components/ShowcaseModels/ShowcaseExperience.jsx";
import {artists} from "../constants/index.js";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const [currentArtist, setCurrentArtist] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef(null)
    console.log(currentArtist)

    useEffect(() => {
        const totalArtists = artists.length;

        // Trigger
        artists.forEach((_, index) => (
            ScrollTrigger.create({
                trigger: sectionRef.current[index],
                start: "top center",
                end: "bottom center",
                scrub: true,
                pin: true,
                onUpdate: self => {
                    const progress = self.progress;

                    const sectionSize = 1 / (2 * totalArtists)
                    const index = Math.floor(progress / sectionSize);
                    const clampedIndex = Math.max(0, Math.min(totalArtists - 1, index));

                    if (clampedIndex !== currentArtist) {
                        setCurrentArtist(clampedIndex);
                    }
                    setScrollProgress(progress);
                }
            })
        ))

    return (
        <section id="work" ref={sectionRef} style={{height: `${artists.length * 100}vh`}} className="showcase-layout">
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
                <div className="showcase-3d-layout">
                    <ShowcaseExperience scrollProgress={scrollProgress} currentArtist={currentArtist}/>
                </div>
            </figure>
        </section>
    )
}

export default ShowcaseSection
