"use client";

import Link from "next/link";
import Magnetic from "@/components/ui/Magnetic";

const links = [
    { title: "Werk", href: "/#work" },
    { title: "Diensten", href: "/#services" },
    { title: "Over Ons", href: "/about" },
    { title: "Prijzen", href: "/pricing" },
    { title: "Contact", href: "/contact" },
];

export default function NavLinks() {
    return (
        <div className="flex items-center gap-8">
            {links.map((link, index) => (
                <Magnetic key={index}>
                    <Link
                        href={link.href}
                        className="relative z-10 block text-sm uppercase tracking-widest text-stark/80 hover:text-stark transition-colors duration-300 group"
                        data-cursor="hover"
                    >
                        {link.title}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-electric transition-all duration-300 group-hover:w-full" />
                    </Link>
                </Magnetic>
            ))}
        </div>
    );
}
