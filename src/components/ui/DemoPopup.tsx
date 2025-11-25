"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLenis } from "lenis/react";
import Magnetic from "@/components/ui/Magnetic";

export default function DemoPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const lenis = useLenis();

    // Prevent body scroll when popup is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            lenis?.stop();
        } else {
            document.body.style.overflow = 'unset';
            lenis?.start();
        }
        return () => {
            document.body.style.overflow = 'unset';
            lenis?.start();
        };
    }, [isOpen, lenis]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.target as HTMLFormElement;
        const name = (form.elements.namedItem('demo-name') as HTMLInputElement).value;
        const email = (form.elements.namedItem('demo-email') as HTMLInputElement).value;
        const projectName = (form.elements.namedItem('demo-project-name') as HTMLInputElement).value;
        const goal = (form.elements.namedItem('demo-goal') as HTMLSelectElement).value;
        const style = (form.elements.namedItem('demo-style') as HTMLSelectElement).value;
        const website = (form.elements.namedItem('demo-website') as HTMLInputElement).value;

        const subject = `Demo Aanvraag: ${projectName}`;
        const html = `
            <h3>Nieuwe Demo Aanvraag</h3>
            <p><strong>Naam:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Project Naam:</strong> ${projectName}</p>
            <p><strong>Doel:</strong> ${goal}</p>
            <p><strong>Stijl:</strong> ${style}</p>
            <p><strong>Huidige Website:</strong> ${website || "N.v.t."}</p>
        `;
        const text = `Naam: ${name}\nEmail: ${email}\nProject: ${projectName}\nDoel: ${goal}\nStijl: ${style}\nWebsite: ${website || "N.v.t."}`;

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ subject, html, text }),
            });

            if (!response.ok) throw new Error('Failed to send email');

            setIsSuccess(true);
            setTimeout(() => {
                setIsOpen(false);
                setIsSuccess(false);
            }, 3000);
        } catch (error) {
            console.error(error);
            alert('Er ging iets mis bij het versturen. Probeer het later opnieuw of mail ons direct op info@vossendesign.nl');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Floating Trigger Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 right-8 z-40 bg-electric text-stark px-6 py-3 rounded-full font-bold uppercase tracking-widest shadow-lg hover:bg-white hover:text-obsidian transition-colors duration-300 hidden md:block"
            >
                Demo Aanvragen
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            data-lenis-prevent
                            className="relative w-full max-w-lg bg-obsidian border border-stark/10 p-8 md:p-12 rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto overscroll-contain"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-stark transition-colors z-10"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {isSuccess ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-electric rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-8 h-8 text-stark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-stark mb-2">Aanvraag Verstuurd!</h3>
                                    <p className="text-gray-400">We nemen snel contact met je op voor een demo.</p>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-3xl font-bold text-stark uppercase tracking-tighter mb-2">
                                        Vraag een Demo
                                    </h2>
                                    <p className="text-gray-400 mb-8">
                                        Benieuwd hoe wij jouw bedrijf digitaal kunnen laten vliegen? Vul je gegevens in.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="demo-name" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Naam</label>
                                            <input
                                                type="text"
                                                id="demo-name"
                                                required
                                                className="w-full bg-stark/5 border border-stark/10 rounded-lg px-4 py-3 text-stark focus:outline-none focus:border-electric transition-colors"
                                                placeholder="Jouw naam"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="demo-email" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
                                            <input
                                                type="email"
                                                id="demo-email"
                                                required
                                                className="w-full bg-stark/5 border border-stark/10 rounded-lg px-4 py-3 text-stark focus:outline-none focus:border-electric transition-colors"
                                                placeholder="jouw@email.com"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="demo-project-name" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Naam Nieuwe Website</label>
                                            <input
                                                type="text"
                                                id="demo-project-name"
                                                required
                                                className="w-full bg-stark/5 border border-stark/10 rounded-lg px-4 py-3 text-stark focus:outline-none focus:border-electric transition-colors"
                                                placeholder="Hoe gaat het heten?"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="demo-goal" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Doel van de Website</label>
                                            <select
                                                id="demo-goal"
                                                required
                                                defaultValue=""
                                                className="w-full bg-stark/5 border border-stark/10 rounded-lg px-4 py-3 text-stark focus:outline-none focus:border-electric transition-colors appearance-none"
                                            >
                                                <option value="" disabled className="bg-obsidian text-gray-500">Kies een doel...</option>
                                                <option value="leads" className="bg-obsidian">Meer omzet / leads genereren</option>
                                                <option value="brand" className="bg-obsidian">Merkbekendheid vergroten</option>
                                                <option value="portfolio" className="bg-obsidian">Portfolio tonen</option>
                                                <option value="ecommerce" className="bg-obsidian">Producten verkopen (E-commerce)</option>
                                                <option value="info" className="bg-obsidian">Informatie delen / Blog</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="demo-style" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Gewenste Stijl / Vibe</label>
                                            <select
                                                id="demo-style"
                                                defaultValue=""
                                                className="w-full bg-stark/5 border border-stark/10 rounded-lg px-4 py-3 text-stark focus:outline-none focus:border-electric transition-colors appearance-none"
                                            >
                                                <option value="" disabled className="bg-obsidian text-gray-500">Kies een stijl...</option>
                                                <option value="minimal" className="bg-obsidian">Minimalistisch & Strak</option>
                                                <option value="bold" className="bg-obsidian">Gewaagd & Kleurrijk</option>
                                                <option value="luxury" className="bg-obsidian">Luxe & Premium</option>
                                                <option value="corporate" className="bg-obsidian">Corporate & Zakelijk</option>
                                                <option value="playful" className="bg-obsidian">Speels & Creatief</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="demo-website" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Huidige Website (Optioneel)</label>
                                            <input
                                                type="url"
                                                id="demo-website"
                                                className="w-full bg-stark/5 border border-stark/10 rounded-lg px-4 py-3 text-stark focus:outline-none focus:border-electric transition-colors"
                                                placeholder="https://"
                                            />
                                        </div>

                                        <div className="flex items-start gap-3 group">
                                            <div className="relative flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="demo-consent"
                                                    required
                                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-stark/20 bg-stark/5 transition-all checked:border-electric checked:bg-electric hover:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20"
                                                />
                                                <svg
                                                    className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-stark opacity-0 transition-opacity peer-checked:opacity-100"
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 12 12"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M10 3L4.5 8.5L2 6"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                            <label htmlFor="demo-consent" className="text-sm text-gray-400 cursor-pointer select-none">
                                                Ik ga akkoord met de <a href="/algemene-voorwaarden" target="_blank" className="text-stark hover:text-electric transition-colors underline decoration-stark/20 underline-offset-4 hover:decoration-electric">algemene voorwaarden</a> en het <a href="/privacy-beleid" target="_blank" className="text-stark hover:text-electric transition-colors underline decoration-stark/20 underline-offset-4 hover:decoration-electric">privacybeleid</a>.
                                            </label>
                                        </div>

                                        <Magnetic>
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full bg-electric text-stark py-4 font-bold uppercase tracking-widest rounded-lg hover:bg-white hover:text-obsidian transition-colors duration-300"
                                            >
                                                {isSubmitting ? "Versturen..." : "Vraag Demo Aan"}
                                            </button>
                                        </Magnetic>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
