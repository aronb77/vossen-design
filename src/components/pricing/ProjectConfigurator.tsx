"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ShoppingCart, Globe, Zap, Mail, Database, ArrowRight } from "lucide-react";

type Package = "start" | "growth" | "premium" | "enterprise";

const packages = {
    start: {
        name: "Start",
        price: 12.95,
        oneTimePrice: 435,
        desc: "Perfect voor starters",
        features: ["WordPress template", "Tot 5 pagina's", "1 maand onderhoud"]
    },
    growth: {
        name: "Groei",
        price: 15.00,
        oneTimePrice: 765,
        desc: "Voor groeiende bedrijven",
        features: ["WordPress maatwerk", "Tot 8 pagina's", "1 maand onderhoud"]
    },
    premium: {
        name: "Premium",
        price: 34.95,
        oneTimePrice: 1485,
        desc: "De standaard voor kwaliteit",
        features: ["Next.js maatwerk", "Tot 10 pagina's", "6 maanden onderhoud"]
    },
    enterprise: {
        name: "Enterprise",
        price: 48.95,
        oneTimePrice: 2895,
        desc: "Maximale impact",
        features: ["Volledig custom Next.js", "Tot 15 pagina's", "12 maanden onderhoud"]
    }
};

const addonsData = [
    { id: "webshop", name: "Webshop Integratie", monthly: 0, oneTime: 185, icon: ShoppingCart },
    { id: "multilingual", name: "Meertalige Website", monthly: 0, oneTime: 150, icon: Globe },
    { id: "support", name: "Prioriteitssupport", monthly: 18.95, oneTime: 0, icon: Zap },
    { id: "email", name: "Email Marketing", monthly: 12.95, oneTime: 75, icon: Mail },
    { id: "api", name: "API Koppelingen", monthly: 23.95, oneTime: 485, icon: Database },
];

export default function ProjectConfigurator() {
    const [selectedPackage, setSelectedPackage] = useState<Package>("premium");
    const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

    const { monthlyTotal, oneTimeTotal } = useMemo(() => {
        let mTotal = packages[selectedPackage].price;
        let oTotal = packages[selectedPackage].oneTimePrice;

        selectedAddons.forEach(id => {
            const addon = addonsData.find(a => a.id === id);
            if (addon) {
                mTotal += addon.monthly;
                oTotal += addon.oneTime;
            }
        });

        return { monthlyTotal: mTotal, oneTimeTotal: oTotal };
    }, [selectedPackage, selectedAddons]);

    const toggleAddon = (id: string) => {
        setSelectedAddons(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    return (
        <section className="py-32 bg-obsidian relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-stark/5 rounded-full blur-[120px]" />
            </div>

            <div className="container-padding relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-[5vw] md:text-6xl leading-[0.9] font-bold uppercase tracking-tighter text-stark mb-6">
                        Configureer <span className="text-electric">Jouw Project</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Stel je ideale pakket samen en krijg direct een indicatie van de investering.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Package Selection */}
                    <div className="lg:col-span-8 space-y-8">
                        {/* Packages */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {(Object.entries(packages) as [Package, typeof packages.start][]).map(([key, pkg]) => (
                                <button
                                    key={key}
                                    onClick={() => setSelectedPackage(key)}
                                    className={`relative p-6 rounded-xl border text-left transition-all duration-300 group overflow-hidden ${selectedPackage === key
                                        ? "bg-white/10 border-electric shadow-[0_0_30px_-10px_rgba(79,70,229,0.3)]"
                                        : "bg-white/5 border-white/10 hover:border-white/20"
                                        }`}
                                >
                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-stark uppercase tracking-wide">{pkg.name}</h3>
                                                <p className="text-gray-400 text-xs">{pkg.desc}</p>
                                            </div>
                                            {selectedPackage === key && (
                                                <motion.div
                                                    layoutId="pkg-check"
                                                    className="w-6 h-6 bg-electric rounded-full flex items-center justify-center"
                                                >
                                                    <Check className="w-4 h-4 text-stark" />
                                                </motion.div>
                                            )}
                                        </div>
                                        <div className="mb-4">
                                            <div className="text-2xl font-bold text-stark">
                                                €{pkg.price.toFixed(2)}<span className="text-sm text-gray-500 font-normal">/mnd</span>
                                            </div>
                                            <div className="text-sm text-gray-400">
                                                + €{pkg.oneTimePrice},- eenmalig
                                            </div>
                                        </div>
                                        <ul className="space-y-2">
                                            {pkg.features.map((feature, i) => (
                                                <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                                                    <div className="w-1 h-1 bg-electric rounded-full" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Add-ons */}
                        <div>
                            <h3 className="text-xl font-bold text-stark uppercase tracking-widest mb-6">Kies je uitbreidingen</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {addonsData.map((addon) => (
                                    <button
                                        key={addon.id}
                                        onClick={() => toggleAddon(addon.id)}
                                        className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 ${selectedAddons.includes(addon.id)
                                            ? "bg-white/10 border-electric"
                                            : "bg-white/5 border-white/10 hover:bg-white/8"
                                            }`}
                                    >
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${selectedAddons.includes(addon.id) ? "bg-electric text-stark" : "bg-white/10 text-gray-400"
                                            }`}>
                                            <addon.icon className="w-5 h-5" />
                                        </div>
                                        <div className="text-left flex-1">
                                            <div className="text-stark font-bold text-sm">{addon.name}</div>
                                            <div className="text-xs text-gray-400">
                                                {addon.oneTime > 0 && `+€${addon.oneTime} eenmalig`}
                                                {addon.oneTime > 0 && addon.monthly > 0 && " & "}
                                                {addon.monthly > 0 && `+€${addon.monthly} p/m`}
                                            </div>
                                        </div>
                                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedAddons.includes(addon.id) ? "bg-electric border-electric" : "border-white/20"
                                            }`}>
                                            {selectedAddons.includes(addon.id) && <Check className="w-3 h-3 text-stark" />}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Summary Panel */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
                            <h3 className="text-xl font-bold text-stark uppercase tracking-widest mb-8">Jouw Configuratie</h3>

                            <div className="space-y-6 mb-8">
                                <div className="flex justify-between items-start pb-4 border-b border-white/10">
                                    <span className="text-gray-400">Pakket ({packages[selectedPackage].name})</span>
                                    <div className="text-right">
                                        <div className="text-stark font-mono">€{packages[selectedPackage].price.toFixed(2)} p/m</div>
                                        <div className="text-gray-500 font-mono text-xs">+€{packages[selectedPackage].oneTimePrice} eenmalig</div>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {selectedAddons.map(id => {
                                        const addon = addonsData.find(a => a.id === id)!;
                                        return (
                                            <motion.div
                                                key={id}
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="flex justify-between items-start text-sm pb-2">
                                                    <span className="text-gray-400">{addon.name}</span>
                                                    <div className="text-right">
                                                        {addon.monthly > 0 && <div className="text-stark font-mono">+€{addon.monthly} p/m</div>}
                                                        {addon.oneTime > 0 && <div className="text-gray-500 font-mono text-xs">+€{addon.oneTime} eenmalig</div>}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </AnimatePresence>
                            </div>

                            <div className="space-y-2 mb-8">
                                <div className="flex justify-between items-end">
                                    <span className="text-sm uppercase tracking-widest text-gray-500">Maandelijks</span>
                                    <span className="text-3xl font-bold text-stark font-mono">
                                        €{monthlyTotal.toFixed(2)}
                                    </span>
                                </div>
                                {oneTimeTotal > 0 && (
                                    <div className="flex justify-between items-end">
                                        <span className="text-sm uppercase tracking-widest text-gray-500">Eenmalig</span>
                                        <span className="text-xl font-bold text-gray-400 font-mono">
                                            €{oneTimeTotal.toFixed(2)}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <button className="w-full bg-electric text-stark py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-white hover:text-obsidian transition-colors duration-300 flex items-center justify-center gap-2 group">
                                <span>Start Project</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <p className="text-center text-xs text-gray-500 mt-4">
                                *Prijzen zijn exclusief BTW. Dit is een indicatie.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
