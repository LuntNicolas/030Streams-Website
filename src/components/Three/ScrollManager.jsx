import {useFrame, useThree} from '@react-three/fiber';
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const ScrollManager = ({scrollProgress}) => {
    const {camera} = useThree();

    useFrame(() => {
        camera.position.z = -scrollProgress * 80 + 10;
        camera.lookAt(0, 0, camera.position.z - 1);
    })

    return null;
}
export default ScrollManager
