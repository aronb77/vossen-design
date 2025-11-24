"use client";

import ProjectGallery from "./ProjectGallery";

export default function Portfolio() {
    return (
        <section id="work" className="relative z-10 bg-obsidian py-24">
            <div className="container-padding mb-16">
                <h2 className="text-[10vw] leading-[0.8] font-bold uppercase tracking-tighter text-stark opacity-10">
                    Geselecteerd
                </h2>
                <h2 className="text-[10vw] leading-[0.8] font-bold uppercase tracking-tighter text-stark ml-12 md:ml-24">
                    Werk
                </h2>
            </div>
            <ProjectGallery />
        </section>
    );
}
