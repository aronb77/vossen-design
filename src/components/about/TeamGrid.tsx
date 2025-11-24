"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reasons = [
    {
        title: "Alles Onder Één Dak",
        description: "Van webdesign tot grafisch ontwerp: Vossen Design verzorgt jouw complete merkbeleving. Eén stijl, één aanspreekpunt."
    },
    {
        title: "Zorgeloos Online",
        description: "Je website blijft veilig, snel en up-to-date zonder dat jij eromkijken naar hebt. Wij regelen updates, beveiliging en back-ups."
    },
    {
        title: "Gemaakt Voor Ondernemers",
        description: "Onze websites zijn speciaal ontwikkeld voor zzp’ers en kleine bedrijven: betaalbaar, gebruiksvriendelijk en professioneel."
    },
    {
        title: "Duidelijke Pakketten",
        description: "Heldere prijzen, complete pakketten en transparante communicatie. Je weet precies wat je krijgt en wat het kost."
    },
    {
        title: "Persoonlijk Contact",
        description: "Bij Vossen Design heb je direct contact met de ontwerper. Zo werken we snel en luisteren we echt naar je wensen."
    },
    {
        title: "Professioneel & Betrouwbaar",
        description: "Wij staan voor kwaliteit, transparantie en eerlijke afspraken. Geen verborgen kosten of vage beloftes."
    }
];

export default function TeamGrid() {
    return (
        <section className="py-24 bg-obsidian border-t border-white/5">
            <div className="container-padding">
                <h2 className="text-[6vw] leading-[0.9] font-bold uppercase tracking-tighter text-stark mb-16">
                    Waarom <span className="text-electric">Vossen Design?</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col gap-4"
                        >
                            <h3 className="text-2xl font-bold text-stark uppercase tracking-wide border-l-2 border-electric pl-4">
                                {reason.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed pl-4.5">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-32 pt-20 border-t border-white/10">
                    <h2 className="text-[6vw] leading-[0.9] font-bold uppercase tracking-tighter text-stark mb-12">
                        Het Team
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="group relative aspect-[3/4] overflow-hidden bg-white/5">
                            <Image
                                src="/images/aron.jpg"
                                alt="Aron Bargeman"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-obsidian to-transparent">
                                <h3 className="text-3xl font-bold text-stark">Aron Bargeman</h3>
                                <p className="text-electric uppercase tracking-widest text-sm mt-1">Ondernemende Brein & Design</p>
                            </div>
                        </div>
                        <div className="group relative aspect-[3/4] overflow-hidden bg-white/5">
                            <Image
                                src="/images/klaas.jpg"
                                alt="Klaas Mondria"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-obsidian to-transparent">
                                <h3 className="text-3xl font-bold text-stark">Klaas Mondria</h3>
                                <p className="text-electric uppercase tracking-widest text-sm mt-1">Technisch Beheer & Development</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
