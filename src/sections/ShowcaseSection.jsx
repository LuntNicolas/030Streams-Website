import React from 'react'
import ShowcaseExperience from "../components/ShowcaseModels/ShowcaseExperience.jsx";
import * as THREE from "three";
import {textures} from "../constants/index.js";

const ShowcaseSection = () => {

    return (
        <section id="work">
            <div id="scroll-wrapper" className="relative h-[100vh] bg-black">
                <div className="sticky top-0 h-screen w-full">
                    <ShowcaseExperience items={textures}/>
                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection
