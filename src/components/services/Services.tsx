"use client";

import Accordion from "./Accordion";

export default function Services() {
    return (
        <section id="services" className="relative z-10 bg-obsidian py-24">
            <div className="container-padding">
                <div className="mb-20">
                    <h2 className="text-[10vw] leading-[0.8] font-bold uppercase tracking-tighter text-stark opacity-10">
                        Onze
                    </h2>
                    <h2 className="text-[10vw] leading-[0.8] font-bold uppercase tracking-tighter text-stark ml-12 md:ml-24">
                        Diensten
                    </h2>
                </div>
                <Accordion />
            </div>
        </section>
    );
}
