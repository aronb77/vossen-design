"use client";

import { motion } from "framer-motion";

const steps = [
    {
        id: "01",
        title: "Begrijpen",
        description: "We beginnen met een goed gesprek. We leren jouw bedrijf kennen en ontdekken wat jouw website moet bereiken."
    },
    {
        id: "02",
        title: "Bedenken",
        description: "We vertalen jouw wensen naar een helder plan: stijl, structuur en strategie in één."
    },
    {
        id: "03",
        title: "Bouwen",
        description: "We ontwikkelen de website met een strak ontwerp en gebruiksvriendelijke opzet."
    },
    {
        id: "04",
        title: "Bijwerken",
        description: "We verwerken feedback, testen alles grondig en zorgen dat elke pagina perfect werkt."
    },
    {
        id: "05",
        title: "Bekendmaken",
        description: "Jouw website gaat live! We regelen de complete lancering en zorgen dat je online zichtbaar bent."
    },
    {
        id: "06",
        title: "Beheren",
        description: "Na de lancering blijven we betrokken. We bieden onderhoud, updates en support zodat jouw website altijd veilig en snel blijft."
    }
];

export default function ProcessSteps() {
    return (
        <section className="py-24 bg-obsidian border-t border-white/5">
            <div className="container-padding">
                <h2 className="text-[8vw] leading-[0.8] font-bold uppercase tracking-tighter text-stark mb-20 opacity-20">
                    Ons 6-B Proces
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 border border-white/10 hover:border-electric/50 transition-colors duration-500 bg-white/5 hover:bg-white/10"
                        >
                            <span className="block text-6xl font-bold text-electric/20 mb-6 group-hover:text-electric transition-colors duration-500">
                                {step.id}.
                            </span>
                            <h3 className="text-2xl font-bold text-stark mb-4 uppercase tracking-wide">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
