"use client";

import Link from "next/link";
import Marquee from "./Marquee";
import Magnetic from "@/components/ui/Magnetic";

export default function Footer() {
    return (
        <footer id="contact" className="relative z-10 bg-obsidian pt-24 pb-0 overflow-hidden">
            <Marquee />

            <div className="container-padding mt-24 md:mt-32 flex flex-col items-center text-center">
                <h2 className="text-[8vw] leading-[0.8] font-bold uppercase tracking-tighter text-stark mb-12">
                    Klaar voor die volgende stap?
                </h2>

                <Magnetic>
                    <Link
                        href="/contact"
                        className="inline-block px-12 py-6 md:px-16 md:py-8 bg-electric text-stark text-xl md:text-2xl font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-obsidian transition-colors duration-300"
                        data-cursor="hover"
                    >
                        Start een Project
                    </Link>
                </Magnetic>
            </div>

            {/* Massive Creative Footer Text */}
            <div className="relative w-full overflow-hidden select-none pointer-events-none opacity-10 mb-12">
                <h1 className="text-[25vw] font-bold uppercase tracking-tighter text-center leading-none text-stark whitespace-nowrap">
                    VOSSEN
                </h1>
            </div>

            <div className="container-padding mb-12 flex flex-col md:flex-row justify-between items-end gap-8 relative z-20">
                <div className="flex flex-col gap-2">
                    <span className="text-sm uppercase tracking-widest text-gray-500">Vossen Design © 2025</span>
                    <div className="flex gap-4 text-xs uppercase tracking-widest text-gray-600">
                        <Link href="/algemene-voorwaarden" className="hover:text-electric transition-colors">Algemene Voorwaarden</Link>
                        <span>•</span>
                        <Link href="/privacy-beleid" className="hover:text-electric transition-colors">Privacybeleid</Link>
                    </div>
                </div>

                <div className="flex gap-8">
                    <Magnetic>
                        <Link href="https://www.linkedin.com/company/vossendesign" target="_blank" className="text-sm uppercase tracking-widest text-stark hover:text-electric transition-colors duration-300" data-cursor="hover">
                            LinkedIn
                        </Link>
                    </Magnetic>
                </div>
            </div>
        </footer>
    );
}
