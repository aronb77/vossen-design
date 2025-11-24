"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Magnetic from "@/components/ui/Magnetic";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 backdrop-blur-md bg-obsidian/50 border-b border-white/5"
        >
            <div className="flex items-center gap-2">
                <Magnetic>
                    <Link href="/" className="relative w-16 h-16 md:w-24 md:h-24 block">
                        <Image
                            src="/icon.png"
                            alt="Vossen Design Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </Link>
                </Magnetic>
            </div>

            <div className="hidden md:flex items-center gap-6">
                <NavLinks />
                <ThemeToggle />
            </div>

            <div className="md:hidden">
                {/* Mobile Menu Trigger - Simplified for now */}
                <button className="text-stark uppercase text-xs tracking-widest">Menu</button>
            </div>
        </motion.nav>
    );
}
