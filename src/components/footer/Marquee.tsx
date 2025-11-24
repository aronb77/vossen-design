"use client";

import { motion } from "framer-motion";

export default function Marquee() {
    return (
        <div className="relative w-full overflow-hidden py-10 border-t border-b border-white/10 bg-obsidian">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="flex gap-12 items-center"
                >
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex items-center gap-12">
                            <span className="text-8xl md:text-[10rem] font-bold uppercase tracking-tighter text-transparent stroke-text opacity-20">
                                Digital Antigravity
                            </span>
                            <div className="w-4 h-4 md:w-8 md:h-8 bg-electric rounded-full" />
                        </div>
                    ))}
                </motion.div>
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="flex gap-12 items-center"
                >
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex items-center gap-12">
                            <span className="text-8xl md:text-[10rem] font-bold uppercase tracking-tighter text-transparent stroke-text opacity-20">
                                Digital Antigravity
                            </span>
                            <div className="w-4 h-4 md:w-8 md:h-8 bg-electric rounded-full" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
