import React from 'react'
import {Text} from "@react-three/drei";

const ShowcaseText = ({text, position}) => {

    return (
        <group position={position}>
            <Text
                font="/fonts/Sora/static/Sora-Regular.ttf"
                color="white"
                maxWidth={5}
                fontSize={0.16}
                lineHeight={2}
            >
                {text}
            </Text>
        </group>
    )
}
export default ShowcaseText
