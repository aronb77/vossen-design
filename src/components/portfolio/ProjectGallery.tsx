"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Neon Nexus",
        category: "WebGL Ervaring",
        image: "/images/project1.png",
    },
    {
        title: "Brutalist Arch",
        category: "Architectuur Portfolio",
        image: "/images/project2.png",
    },
    {
        title: "Fluid Dynamics",
        category: "Interactieve Kunst",
        image: "/images/project3.png",
    },
    {
        title: "Cyber Punk",
        category: "E-Commerce",
        image: "/images/project1.png", // Reusing for demo
    },
];

export default function ProjectGallery() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const transforms = [y1, y2, y3, y4];

    return (
        <div ref={container} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 px-6 md:px-12 py-20">
            {projects.map((project, i) => (
                <motion.div
                    key={i}
                    style={{ y: transforms[i % 4] }}
                    className={`w-full ${i % 2 === 0 ? "md:mt-0" : "md:mt-32"}`}
                >
                    <ProjectCard {...project} />
                </motion.div>
            ))}
        </div>
    );
}
