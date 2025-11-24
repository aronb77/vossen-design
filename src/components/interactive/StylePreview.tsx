"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

type StyleType = "minimal" | "bold" | "luxury";

const styles = {
    minimal: {
        label: "Minimal",
        desc: "Clean & Modern",
        color: "bg-white",
        textColor: "text-obsidian",
        accent: "bg-gray-100",
        glow: "bg-white/20"
    },
    bold: {
        label: "Bold",
        desc: "Loud & Proud",
        color: "bg-electric",
        textColor: "text-stark",
        accent: "bg-obsidian",
        glow: "bg-electric/40"
    },
    luxury: {
        label: "Luxury",
        desc: "High-End & Classy",
        color: "bg-[#0a0a0a]",
        textColor: "text-[#d4af37]",
        accent: "bg-[#1a1a1a]",
        glow: "bg-[#d4af37]/20"
    }
};

export default function StylePreview() {
    const [activeStyle, setActiveStyle] = useState<StyleType>("bold");
    const containerRef = useRef<HTMLDivElement>(null);

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;
        x.set(mouseXFromCenter / width);
        y.set(mouseYFromCenter / height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section className="py-32 bg-obsidian relative overflow-hidden">
            {/* Ambient Background Glow */}
            <motion.div
                animate={{
                    backgroundColor: activeStyle === 'bold' ? '#4F46E5' : activeStyle === 'luxury' ? '#d4af37' : '#ffffff',
                    opacity: activeStyle === 'minimal' ? 0.05 : 0.15
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none transition-colors duration-1000"
            />

            <div className="container-padding relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* Controls */}
                    <div className="w-full lg:w-1/3 space-y-10">
                        <div>
                            <h2 className="text-[4vw] md:text-5xl leading-[0.9] font-bold uppercase tracking-tighter text-stark mb-6">
                                Vibe <span className="text-electric">Check</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Jouw merk is uniek. Wij passen onze design stijl aan op jouw identiteit. Beweeg je muis over de preview voor het 3D effect.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            {(Object.keys(styles) as StyleType[]).map((style) => (
                                <button
                                    key={style}
                                    onClick={() => setActiveStyle(style)}
                                    className={`group relative p-6 text-left border transition-all duration-300 overflow-hidden ${activeStyle === style
                                            ? "border-electric bg-white/5"
                                            : "border-white/10 hover:border-white/30 hover:bg-white/5"
                                        }`}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-r from-electric/10 to-transparent transition-transform duration-500 ${activeStyle === style ? 'translate-x-0' : '-translate-x-full'}`} />

                                    <div className="relative flex items-center justify-between z-10">
                                        <div>
                                            <span className={`block text-xl font-bold uppercase tracking-widest mb-1 transition-colors ${activeStyle === style ? 'text-stark' : 'text-gray-400 group-hover:text-stark'}`}>
                                                {styles[style].label}
                                            </span>
                                            <span className="text-sm text-gray-500">
                                                {styles[style].desc}
                                            </span>
                                        </div>
                                        {activeStyle === style && (
                                            <motion.div
                                                layoutId="check"
                                                className="text-electric"
                                            >
                                                <Check className="w-6 h-6" />
                                            </motion.div>
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 3D Preview Area */}
                    <div className="w-full lg:w-2/3 perspective-[1000px]">
                        <motion.div
                            ref={containerRef}
                            style={{
                                rotateX,
                                rotateY,
                                transformStyle: "preserve-3d"
                            }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            className="relative w-full aspect-[16/10] md:aspect-[16/9] max-w-3xl mx-auto"
                        >
                            {/* Browser Frame */}
                            <div className="absolute inset-0 bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-white/10 flex flex-col transform-gpu transition-all duration-500">
                                {/* Browser Header */}
                                <div className="h-10 bg-[#2a2a2a] border-b border-white/5 flex items-center px-4 gap-4 shrink-0">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                    </div>
                                    <div className="flex-1 flex justify-center">
                                        <div className="bg-[#1e1e1e] px-4 py-1 rounded text-xs text-gray-500 font-mono w-64 text-center truncate">
                                            vossendesign.com/preview/{activeStyle}
                                        </div>
                                    </div>
                                </div>

                                {/* Browser Content */}
                                <div className="flex-1 relative overflow-hidden bg-obsidian">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeStyle}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 1.05 }}
                                            transition={{ duration: 0.4 }}
                                            className="absolute inset-0 w-full h-full"
                                        >
                                            {/* Minimal Layout */}
                                            {activeStyle === 'minimal' && (
                                                <div className="w-full h-full bg-white text-black p-8 md:p-12 flex flex-col font-sans">
                                                    <nav className="flex justify-between items-center mb-16">
                                                        <div className="font-bold tracking-tight text-xl">MINIMAL.</div>
                                                        <div className="hidden md:flex gap-6 text-sm text-gray-500">
                                                            <span>Work</span>
                                                            <span>Studio</span>
                                                            <span>Contact</span>
                                                        </div>
                                                    </nav>
                                                    <div className="flex-1 flex flex-col justify-center max-w-lg">
                                                        <h3 className="text-5xl md:text-6xl font-medium tracking-tighter mb-6 leading-[0.9]">
                                                            Less is only more.
                                                        </h3>
                                                        <p className="text-gray-500 mb-8 leading-relaxed">
                                                            Essential design for modern brands. We strip away the noise to reveal the signal.
                                                        </p>
                                                        <button className="w-fit px-8 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                                                            Explore
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Bold Layout */}
                                            {activeStyle === 'bold' && (
                                                <div className="w-full h-full bg-electric text-stark p-6 md:p-10 flex flex-col font-sans overflow-hidden relative">
                                                    <div className="absolute top-0 left-0 w-full whitespace-nowrap bg-obsidian text-stark py-2 -rotate-2 scale-105 z-10 border-y border-stark">
                                                        <div className="animate-marquee font-black uppercase tracking-widest text-sm">
                                                            Make Some Noise • Stand Out • Be Bold • Make Some Noise • Stand Out • Be Bold •
                                                        </div>
                                                    </div>

                                                    <div className="flex-1 flex items-center justify-center relative z-0 mt-8">
                                                        <div className="text-center relative">
                                                            <div className="absolute -top-12 -left-12 w-24 h-24 bg-obsidian rounded-full mix-blend-multiply opacity-50 animate-pulse" />
                                                            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-stark rounded-full mix-blend-overlay opacity-50" />

                                                            <h3 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none relative z-10 mix-blend-normal">
                                                                LOUD
                                                                <br />
                                                                <span className="text-obsidian [-webkit-text-stroke:2px_white]">PROUD</span>
                                                            </h3>
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-between items-end relative z-10">
                                                        <div className="w-16 h-16 bg-obsidian flex items-center justify-center border-2 border-stark shadow-[4px_4px_0px_0px_#ffffff]">
                                                            <ArrowRight className="w-8 h-8" />
                                                        </div>
                                                        <div className="text-right font-mono text-xs md:text-sm bg-obsidian px-4 py-2 border border-stark">
                                                            EST. 2025 // VOSSEN DESIGN
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Luxury Layout */}
                                            {activeStyle === 'luxury' && (
                                                <div className="w-full h-full bg-[#0a0a0a] text-[#d4af37] p-8 md:p-12 flex flex-col font-[family-name:var(--font-playfair)] relative">
                                                    <div className="absolute inset-0 border-[1px] border-[#d4af37]/20 m-4" />

                                                    <div className="flex justify-center mb-12">
                                                        <span className="text-xs tracking-[0.3em] uppercase border-b border-[#d4af37]/40 pb-2 font-sans">Elegance</span>
                                                    </div>

                                                    <div className="flex-1 flex flex-col items-center justify-center text-center">
                                                        <h3 className="text-5xl md:text-7xl italic mb-6">
                                                            Timeless
                                                        </h3>
                                                        <p className="font-sans text-[#d4af37]/60 max-w-md text-sm md:text-base leading-loose tracking-wide mb-10">
                                                            Crafting digital heirlooms for the discerning few.
                                                            Where sophistication meets innovation.
                                                        </p>
                                                        <button className="px-10 py-4 border border-[#d4af37] text-[#d4af37] text-xs tracking-[0.2em] uppercase hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-all duration-500 font-sans">
                                                            Discover
                                                        </button>
                                                    </div>

                                                    <div className="flex justify-between text-[#d4af37]/40 text-[10px] uppercase tracking-widest font-sans">
                                                        <span>Fig. 01</span>
                                                        <span>Collection 2025</span>
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
