import {useFrame, useThree} from '@react-three/fiber';
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollManager = ({scrollProgress}) => {
    const {camera} = useThree();

    useFrame(() => {
        const targetZ = -scrollProgress * 160 + 10;
        // camera.position.z = -scrollProgress * 160 + 10;
        // camera.lookAt(0, 0, camera.position.z - 1);

        gsap.to(camera.position, {
            z: targetZ,
            duration: 0.6,
            ease: 'power2.Out'
        })
        camera.lookAt(0, 0, camera.position.z - 1);
    })

    return null;
}
export default ScrollManager
