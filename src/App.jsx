import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

export default function App() {
  return (
    <Canvas camera={{ position: [2, 0, 100] }}>
        <Experience />
    </Canvas>
  )
}
