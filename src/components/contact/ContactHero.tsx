"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
    return (
        <section className="pt-40 pb-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[12vw] leading-[0.8] font-bold uppercase tracking-tighter text-stark mb-8"
                >
                    Contact
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl md:text-2xl text-gray-400 max-w-2xl"
                >
                    Klaar om jouw digitale visie tot leven te brengen? <br />
                    Laten we praten over jouw volgende project.
                </motion.p>
            </div>
        </section>
    );
}
