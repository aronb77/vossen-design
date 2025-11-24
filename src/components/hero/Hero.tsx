"use client";

import Scene from "./Scene";
import KineticText from "./KineticText";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <Scene />
            <KineticText />
        </section>
    );
}
