"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
    title: string;
    category: string;
    image: string;
    index: number;
}

export default function ProjectCard({ title, category, image, index }: ProjectProps) {
    return (
        <Link href="#" className="block group relative w-full aspect-[4/5] overflow-hidden" data-cursor="hover">
            <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            >
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
            </motion.div>
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-obsidian/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-2xl font-bold uppercase tracking-tighter text-stark">{title}</h3>
                <p className="text-sm text-gray-400 uppercase tracking-widest mt-1">{category}</p>
            </div>
        </Link>
    );
}
