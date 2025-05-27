import {useThree, useFrame} from '@react-three/fiber';
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollManager = ({scrollProgress}) => {
    const {camera} = useThree();

    // useEffect(() => {
    //     camera.position.z = 5 - scrollProgress;
    // }, [scrollProgress]);

    useFrame(() => {
        const targetZ = 10 - scrollProgress * 100;
        camera.position.z = (targetZ - camera.position.z) * 0.05;
    })

    return null;
}
export default ScrollManager
