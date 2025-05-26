import React from 'react'
import ShowcaseExperience from "../components/ShowcaseModels/ShowcaseExperience.jsx";
import * as THREE from "three";
import {artists} from "../constants/index.js";

const ShowcaseSection = () => {
    console.log(artists.name)
    return (
        <section id="work">
            <div id="scroll-wrapper" className="relative h-[100vh] bg-black">
                <div className="sticky top-0 h-screen w-full">
                    <ShowcaseExperience items={artists}/>
                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection
