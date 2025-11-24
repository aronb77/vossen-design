"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Particles from "./Particles";

export default function Scene() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-obsidian">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <Particles />
                </Suspense>
            </Canvas>
        </div>
    );
}
