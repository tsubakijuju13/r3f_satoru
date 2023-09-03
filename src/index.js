import { createRoot } from "react-dom/client"
import App from "./App"
import "./styles.css"

import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const root = createRoot(document.getElementById("root"))
root.render(<Canvas camera={{ position: [10, 10, 10] }}>
    <Experience />
</Canvas>)