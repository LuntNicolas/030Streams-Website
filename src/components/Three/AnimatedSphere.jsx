import React, {useRef} from 'react'
import {useFrame} from "@react-three/fiber";
import {EffectComposer, Bloom} from "@react-three/postprocessing";
import {BlendFunction} from "postprocessing";

import vertexShader from "../../shader/vertex.glsl";
import fragmentShader from "../../shader/fragment.glsl";

import vertexPars from "../../shader/vertex_pars.glsl";
import vertexMain from "../../shader/vertex_main.glsl";
import fragmentPars from "../../shader/fragment_pars.glsl";
import fragmentMain from "../../shader/fragment_main.glsl";

const AnimatedSphere = () => {
    const ref = useRef();

    useFrame(({clock}) => {
        const shader = ref.current?.userData?.shader;
        if (shader) {
            shader.uniforms.uTime.value = clock.getElapsedTime() * 0.1;
        }

    })
    return (
        <>
            <EffectComposer>
                <Bloom
                    blendFunction={BlendFunction.ADD}
                    intensity={0.7}
                    kernelSize={1}
                    luminanceThreshold={0.4}
                    luminanceSmoothing={0.2}
                />
            </EffectComposer>
            <mesh>
                <icosahedronGeometry args={[2, 100]}/>
                {/* <meshStandardMaterial color="teal"/>*/}
                <meshPhysicalMaterial
                    ref={ref}
                    metalness={1}
                    roughness={0.5}
                    onBeforeCompile={(shader) => {
                        //storing a reference to the shader object
                        ref.current.userData.shader = shader;
                        //uniforms
                        shader.uniforms.uTime = {value: 0};

                        const parsVertexString = /* glsl */ `#include <displacementmap_pars_vertex>`;
                        shader.vertexShader = shader.vertexShader.replace(parsVertexString, parsVertexString + "\n" + vertexPars);

                        const mainVertexString = /* glsl */ `#include <displacementmap_vertex>`;
                        shader.vertexShader = shader.vertexShader.replace(mainVertexString, mainVertexString + "\n" + vertexMain);

                        const parsFragmentString = /* glsl */ `#include <bumpmap_pars_fragment>`;
                        shader.fragmentShader = shader.fragmentShader.replace(parsFragmentString, parsFragmentString + "\n" + fragmentPars);

                        const mainFragmentString = /* glsl */ `#include <normal_fragment_maps>`;
                        shader.fragmentShader = shader.fragmentShader.replace(mainFragmentString, mainFragmentString + "\n" + fragmentMain);
                    }}
                />
            </mesh>
        </>
    )

}
export default AnimatedSphere
