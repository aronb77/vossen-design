"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-obsidian overflow-hidden">
            <div className="container-padding">
                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    className="text-[12vw] leading-[0.8] font-bold uppercase tracking-tighter text-stark mb-12"
                >
                    Over Ons
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-stark mb-6">Wie Zijn Wij</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Bij Vossen Design maken we professioneel webdesign betaalbaar en persoonlijk. Aron verzorgt het ontwerp, Klaas de techniek en samen bouwen we snelle, veilige en gebruiksvriendelijke websites voor elke ondernemer.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-stark mb-6">Onze Missie</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Onze missie is om professioneel webdesign voor iedereen bereikbaar te maken. Met oog voor detail en groei creëren we moderne, gebruiksvriendelijke websites die ondernemers helpen online succes te behalen.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
