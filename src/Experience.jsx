import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Experience(props) {
    const m = useRef()
    var num = 0
    useFrame((state, delta) => {
        m.current.position.y += Math.sin((Math.PI/180) * num)
        num += 2
        //console.log(delta)
    })
    
    return(
        <>
            <OrbitControls makeDefault />
            <ambientLight intensity={0.9} />
            <directionalLight position={[4,2,2]} intensity={10} />
            <mesh ref={m}>
                <boxGeometry args={[3,5,2]} />
                <meshStandardMaterial color={0x900C3F} />
            </mesh>
        </>
    )
}
