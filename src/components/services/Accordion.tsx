"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const services = [
    {
        title: "Website Ontwerp & Ontwikkeling",
        description: "Van een uniek design tot een perfect werkende website. Wij bouwen websites die niet alleen mooi zijn, maar ook converteren. Of het nu gaat om een eenvoudige portfolio of een complexe webapplicatie.",
        skills: ["Custom Design", "Next.js / React", "WordPress", "Responsief"],
    },
    {
        title: "Webhosting",
        description: "Veilige en betrouwbare hosting voor jouw website. Wij zorgen dat je altijd online bent, met dagelijkse back-ups en SSL-certificaten inbegrepen.",
        skills: ["99.9% Uptime", "Dagelijkse Back-ups", "SSL-certificaat", "Domeinbeheer"],
    },
    {
        title: "Supersnelle Websites",
        description: "Snelheid is cruciaal voor vindbaarheid en gebruiksvriendelijkheid. Onze websites zijn geoptimaliseerd voor maximale prestaties en scoren hoog in Google Core Web Vitals.",
        skills: ["Performance Optimalisatie", "SEO-vriendelijk", "Snelle Laadtijden", "Google Core Web Vitals"],
    },
    {
        title: "Branding & Vormgeving",
        description: "Een sterk merk begint met een goed ontwerp. Wij helpen je met het ontwikkelen van een complete huisstijl, van logo tot visitekaartjes en social media templates.",
        skills: ["Logo Design", "Huisstijl", "Visitekaartjes", "Social Media Assets"],
    },
    {
        title: "Onderhoud & Support",
        description: "Wij laten je niet in de steek na de lancering. Met onze onderhoudspakketten zorgen we dat je website veilig, up-to-date en snel blijft.",
        skills: ["Updates", "Beveiliging", "Content Beheer", "Persoonlijke Support"],
    },
];

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <div className="w-full max-w-4xl mx-auto">
            {services.map((service, index) => (
                <div key={index} className="border-b border-white/10">
                    <button
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        className="w-full py-12 flex items-center justify-between text-left group"
                        data-cursor="hover"
                    >
                        <span className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-stark transition-colors duration-300 group-hover:text-electric">
                            {service.title}
                        </span>
                        <span className="relative flex items-center justify-center w-12 h-12 rounded-full border border-white/20 transition-colors duration-300 group-hover:border-electric group-hover:bg-electric/10">
                            <Plus
                                className={`absolute w-6 h-6 transition-transform duration-300 ${activeIndex === index ? "rotate-45 opacity-0" : "rotate-0 opacity-100"
                                    }`}
                            />
                            <Minus
                                className={`absolute w-6 h-6 transition-transform duration-300 ${activeIndex === index ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"
                                    }`}
                            />
                        </span>
                    </button>
                    <AnimatePresence>
                        {activeIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                className="overflow-hidden"
                            >
                                <div className="pb-12 pt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <p className="text-lg text-gray-400 leading-relaxed">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.skills.map((skill, i) => (
                                            <li key={i} className="flex items-center gap-3 text-stark/80">
                                                <div className="w-1.5 h-1.5 bg-electric rounded-full" />
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
