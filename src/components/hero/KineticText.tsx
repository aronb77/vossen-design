"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function KineticText() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1], [0, 150]);

    return (
        <div ref={container} className="relative z-10 flex flex-col items-center justify-center h-screen overflow-hidden px-6">
            <motion.div style={{ x }} className="relative">
                <h1 className="text-[12vw] leading-[0.8] font-bold uppercase tracking-tighter text-transparent stroke-text select-none relative">
                    {/* DIGITALE: Light theme = darker (gray-800), Dark theme = lighter (white) */}
                    <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-t from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 opacity-20 dark:opacity-30" aria-hidden="true">
                        Digitale
                    </span>
                    <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-gray-800 to-gray-600 dark:from-white dark:to-gray-300">
                        Digitale
                    </span>

                    {/* Video Mask Effect Overlay */}
                    <div className="absolute inset-0 z-[-1] overflow-hidden mix-blend-screen opacity-50">
                        {/* Placeholder for video mask if needed, currently using gradient text for performance and style */}
                    </div>
                </h1>
            </motion.div>
            <motion.div style={{ x: useTransform(scrollYProgress, [0, 1], [0, -150]) }} className="relative">
                {/* PERFECTIE: Light theme = much lighter (almost white), Dark theme = darker (gray-600) */}
                <h1 className="text-[12vw] leading-[0.8] font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-50 dark:from-gray-600 dark:to-gray-500 select-none mix-blend-overlay opacity-90 dark:opacity-80">
                    Perfectie
                </h1>
            </motion.div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-gray-400">Scroll om te ontdekken</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-electric to-transparent" />
            </div>
        </div>
    );
}
