"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Globe, Zap, Mail, Database } from "lucide-react";

const addons = [
    {
        title: "Webshop Integratie",
        description: "Voeg eenvoudig een webshop toe aan je site, compleet met productbeheer, betaalmethodes en voorraadbeheer.",
        price: "Vanaf 185,-",
        icon: ShoppingCart
    },
    {
        title: "Meertalige Website",
        description: "Bereik een groter publiek met een meertalige website. We integreren een duidelijke taalkeuze en vertaalstructuur.",
        price: "Vanaf 15,- per pagina",
        icon: Globe
    },
    {
        title: "Prioriteitssupport",
        description: "Snelle en persoonlijke hulp wanneer je die nodig hebt. Altijd binnen 24 uur reactie, ook in het weekend.",
        price: "18,95 per maand",
        icon: Zap
    },
    {
        title: "Email Marketing",
        description: "Voeg een inschrijfformulier toe aan je website en verstuur nieuwsbrieven in je eigen huisstijl.",
        price: "Vanaf 75,- eenmalig + 12,95 p/m",
        icon: Mail
    },
    {
        title: "API-koppelingen",
        description: "Automatiseer bedrijfsprocessen met op maat gemaakte koppelingen naar boekhouding of voorraadbeheer.",
        price: "Vanaf 485,- eenmalig + 23,95 p/m",
        icon: Database
    }
];

export default function AddonsList() {
    return (
        <section className="py-24 bg-obsidian border-t border-white/5">
            <div className="container-padding">
                <h2 className="text-[5vw] leading-[0.9] font-bold uppercase tracking-tighter text-stark mb-16">
                    Premium <span className="text-electric">Uitbreidingen</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-8">
                    {addons.map((addon, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.34rem)] p-8 bg-stark/5 border border-stark/10 hover:border-electric/50 transition-all duration-300 group flex flex-col"
                        >
                            <div className="w-12 h-12 bg-electric/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-electric transition-colors duration-300">
                                <addon.icon className="w-6 h-6 text-electric group-hover:text-stark transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-stark mb-4 uppercase tracking-wide">
                                {addon.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                {addon.description}
                            </p>
                            <div className="pt-6 border-t border-white/5">
                                <p className="text-electric font-bold text-lg">
                                    {addon.price}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
