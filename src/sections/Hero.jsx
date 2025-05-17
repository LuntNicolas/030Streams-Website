//Hero section is first pitch
import {words} from "../constants/index.js";
import Button from "../components/Button.jsx";
import {HeroExperience} from "../components/HeroModels/HeroExperience.jsx";

const Hero = () => {
    return (
        <section id="hero" className="relative overflow-hidden text-3xl">
            <div className="hero-layout">
                { /* RIGHT */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>030 Sessions</h1>
                            <h1>
                                Unleash
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
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="button"
                            text="View our work"
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
