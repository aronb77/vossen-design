"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

const packages = [
    {
        name: "Start",
        oneTimePrice: "435,-",
        oldPrice: "615,-",
        monthlyPrice: "12,95",
        description: "Een professionele start met Website Ontwerp & Ontwikkeling. Inclusief supersnelle hosting en basis onderhoud.",
        features: [
            "WordPress template",
            "Tot 5 pagina's",
            "Template op maat",
            "1 week levertijd",
            "SSL-certificaat",
            "Automatische back-ups",
            "1 maand gratis onderhoud",
            "Google Analytics"
        ],
        highlight: false
    },
    {
        name: "Groei",
        oneTimePrice: "765,-",
        oldPrice: "1185,-",
        monthlyPrice: "15,-",
        description: "Groei je business met een uniek design en branding. Wij zorgen voor een supersnelle website die converteert.",
        features: [
            "WordPress maatwerk",
            "Tot 8 pagina's",
            "Uniek ontwerp",
            "2 weken levertijd",
            "SSL-certificaat",
            "Automatische back-ups",
            "1 maand gratis onderhoud",
            "Google Analytics"
        ],
        highlight: true
    },
    {
        name: "Premium",
        oneTimePrice: "1485,-",
        oldPrice: "2225,-",
        monthlyPrice: "34,95",
        description: "Complete ontzorging met high-end design, branding en vormgeving. Inclusief uitgebreid onderhoud en support.",
        features: [
            "Next.js maatwerk",
            "Tot 10 pagina's",
            "Volledig custom design",
            "3-4 weken levertijd",
            "SSL-certificaat",
            "Automatische back-ups",
            "6 maanden gratis onderhoud",
            "Google Analytics",
            "Webshop inbegrepen"
        ],
        highlight: false
    },
    {
        name: "Enterprise",
        oneTimePrice: "2895,-",
        oldPrice: "4335,-",
        monthlyPrice: "48,95",
        description: "De ultieme digitale ervaring. Volledig maatwerk, geavanceerde integraties en premium support voor maximale impact.",
        features: [
            "Volledig custom Next.js",
            "Tot 15 pagina's",
            "UX-design op maat",
            "Levertijd in overleg",
            "SSL-certificaat",
            "Automatische back-ups",
            "12 maanden gratis onderhoud",
            "Google Analytics",
            "Webshop inbegrepen",
            "Meertalige website",
            "API-koppelingen"
        ],
        highlight: false
    }
];

export default function PricingTable() {
    return (
        <section className="py-24 bg-obsidian">
            <div className="container-padding">
                <div className="mb-20 text-center">
                    <h1 className="text-[10vw] leading-[0.8] font-bold uppercase tracking-tighter text-stark mb-8">
                        Prijzen
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Transparante prijzen, geen verrassingen. Een eenmalige investering voor het design en de bouw, en een laag maandelijks bedrag voor hosting en onderhoud.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-8 border ${pkg.highlight ? 'border-electric bg-stark/5' : 'border-stark/10 bg-obsidian'} flex flex-col h-full hover:border-electric/50 transition-colors duration-300`}
                        >
                            {pkg.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-electric text-stark px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full whitespace-nowrap">
                                    Meest Gekozen
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-stark uppercase tracking-wide mb-4">{pkg.name}</h3>

                            <div className="mb-6 space-y-2">
                                <div>
                                    <span className="text-xs uppercase tracking-widest text-gray-500 block mb-1">Eenmalig</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-gray-500 line-through text-sm">{pkg.oldPrice}</span>
                                        <span className="text-3xl font-bold text-stark">{pkg.oneTimePrice}</span>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-xs uppercase tracking-widest text-gray-500 block mb-1">Maandelijks</span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-2xl font-bold text-electric">{pkg.monthlyPrice}</span>
                                        <span className="text-sm text-gray-400">/ mnd</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-sm text-gray-400 mb-8 min-h-[40px]">{pkg.description}</p>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-stark/80">
                                        <Check className="w-4 h-4 text-electric flex-shrink-0 mt-0.5" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Magnetic>
                                <Link
                                    href="mailto:hello@vossendesign.com"
                                    className={`block w-full py-4 text-center text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${pkg.highlight
                                        ? 'bg-electric text-stark hover:bg-stark hover:text-obsidian'
                                        : 'bg-stark/10 text-stark hover:bg-electric hover:text-stark'
                                        }`}
                                >
                                    Offerte Aanvragen
                                </Link>
                            </Magnetic>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
