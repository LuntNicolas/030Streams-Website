//Hero section is first pitch
import {words} from "../constants/index.js";
import Button from "../components/Button.jsx";
import {HeroExperience} from "../components/HeroModels/HeroExperience.jsx";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                ease: "power2.inOut",
                duration: 1.5,
                stagger: 0.1,
            },)
    })
    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="hero-layout">
                { /* RIGHT */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>030 Sessions</h1>
                            <h1>
                                Unleash the
                                <span className="slide">
                                    <span className="wrapper">
                                     {words.map((word, index) => (
                                         <span key={index}
                                               className="flex items-center md:gap-3 gap-1 pb-2">
                                             <span>{word.text}</span>
                                         </span>
                                     ))}
                                     </span>
                                </span>
                            </h1>
                        </div>
                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                            Welcome to the world of 030 sessions.
                        </p>
                        <Button
                            text="View our work"
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="button"
                        />
                    </div>
                </header>
                { /* LEFT */}
                <figure>
                    <div className="hero-3d-layout">
                        <HeroExperience/>
                    </div>
                </figure>
            </div>
        </section>
    )
}
export default Hero
