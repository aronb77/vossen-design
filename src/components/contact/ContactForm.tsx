"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Magnetic from "@/components/ui/Magnetic";

export default function ContactForm() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Construct mailto link
        const subject = formState.subject === "other" ? `Contact: ${formState.customSubject || "Overig"}` : `Contact: ${formState.subject}`;
        const body = `Naam: ${formState.name}%0D%0AEmail: ${formState.email}%0D%0A%0D%0ABericht:%0D%0A${formState.message}`;

        window.location.href = `mailto:info@vossendesign.nl?subject=${encodeURIComponent(subject)}&body=${body}`;

        // Simulate success state for UI feedback
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section className="pb-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Contact Info */}
                <div className="space-y-12">
                    <div>
                        <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Email</h3>
                        <a href="mailto:Info@vossendesign.nl" className="text-2xl md:text-3xl text-stark hover:text-electric transition-colors duration-300">
                            Info@vossendesign.nl
                        </a>
                    </div>
                    <div>
                        <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Telefoon</h3>
                        <div className="flex flex-col gap-2">
                            <a href="tel:0031630043109" className="text-xl md:text-2xl text-stark hover:text-electric transition-colors duration-300">
                                Klaas: +31 6 30 04 31 09
                            </a>
                            <a href="tel:0031618399491" className="text-xl md:text-2xl text-stark hover:text-electric transition-colors duration-300">
                                Aron: +31 6 18 39 94 91
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Locatie</h3>
                        <a href="https://maps.app.goo.gl/rc83qeVWUndNX5jq8" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl text-stark hover:text-electric transition-colors duration-300 block">
                            Vossenkamp 24A,<br />
                            8326 DA Sint Jansklooster
                        </a>
                    </div>
                    <div>
                        <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Socials</h3>
                        <div className="flex flex-col gap-2">
                            <a href="https://www.linkedin.com/company/vossendesign" target="_blank" rel="noopener noreferrer" className="text-xl text-stark hover:text-electric transition-colors duration-300 w-fit">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-stark/5 border border-stark/10 p-8 md:p-12 backdrop-blur-sm">
                    {isSuccess ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="h-full flex flex-col items-center justify-center text-center py-20"
                        >
                            <div className="w-20 h-20 bg-electric rounded-full flex items-center justify-center mb-6">
                                <svg className="w-10 h-10 text-stark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold text-stark mb-2">Bedankt!</h3>
                            <p className="text-gray-400">We hebben je bericht ontvangen en nemen zo snel mogelijk contact op.</p>
                            <button
                                onClick={() => setIsSuccess(false)}
                                className="mt-8 text-electric hover:text-white transition-colors uppercase tracking-widest text-sm font-bold"
                            >
                                Nieuw bericht versturen
                            </button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="space-y-6">
                                <div className="group">
                                    <label htmlFor="name" className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-electric transition-colors">Naam</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-stark/20 py-4 text-stark focus:outline-none focus:border-electric transition-colors text-lg"
                                        placeholder="Jouw naam"
                                    />
                                </div>
                                <div className="group">
                                    <label htmlFor="email" className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-electric transition-colors">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-stark/20 py-4 text-stark focus:outline-none focus:border-electric transition-colors text-lg"
                                        placeholder="jouw@email.com"
                                    />
                                </div>
                                <div className="group">
                                    <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-electric transition-colors">Onderwerp</label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formState.subject}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-stark/20 py-4 text-stark focus:outline-none focus:border-electric transition-colors text-lg appearance-none"
                                    >
                                        <option value="" disabled className="bg-obsidian text-gray-500">Kies een onderwerp</option>
                                        <option value="new_project" className="bg-obsidian">Nieuw Project</option>
                                        <option value="collaboration" className="bg-obsidian">Samenwerking</option>
                                        <option value="other" className="bg-obsidian">Anders</option>
                                    </select>
                                    {formState.subject === "other" && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            className="mt-4"
                                        >
                                            <label htmlFor="customSubject" className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-electric transition-colors">Specificeer Onderwerp</label>
                                            <input
                                                type="text"
                                                id="customSubject"
                                                name="customSubject"
                                                required
                                                className="w-full bg-transparent border-b border-stark/20 py-4 text-stark focus:outline-none focus:border-electric transition-colors text-lg"
                                                placeholder="Waar gaat het over?"
                                            />
                                        </motion.div>
                                    )}
                                </div>
                                <div className="group">
                                    <label htmlFor="message" className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-electric transition-colors">Bericht</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        value={formState.message}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-stark/20 py-4 text-stark focus:outline-none focus:border-electric transition-colors text-lg resize-none"
                                        placeholder="Vertel ons over je project..."
                                    />
                                </div>
                            </div>

                            <div className="flex items-start gap-3 group">
                                <div className="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        id="consent"
                                        required
                                        className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-stark/20 bg-transparent transition-all checked:border-electric checked:bg-electric hover:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20"
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
                                <label htmlFor="consent" className="text-sm text-gray-400 cursor-pointer select-none">
                                    Ik ga akkoord met de <a href="/algemene-voorwaarden" target="_blank" className="text-stark hover:text-electric transition-colors underline decoration-stark/20 underline-offset-4 hover:decoration-electric">algemene voorwaarden</a> en het <a href="/privacy-beleid" target="_blank" className="text-stark hover:text-electric transition-colors underline decoration-stark/20 underline-offset-4 hover:decoration-electric">privacybeleid</a>.
                                </label>
                            </div>

                            <Magnetic>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-electric text-stark py-6 font-bold uppercase tracking-widest hover:bg-white hover:text-obsidian transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Versturen..." : "Verstuur Bericht"}
                                </button>
                            </Magnetic>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
