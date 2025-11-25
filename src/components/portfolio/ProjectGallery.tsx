"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Innovatieve Studio",
        category: "Web Development",
        image: "/images/project1.png",
    },
    {
        title: "Stratenbouwbedrijf",
        category: "Corporate Website",
        image: "/images/project2.png",
    },
    {
        title: "Vakmanschap in Verf",
        category: "Portfolio Website",
        image: "/images/project3.png",
    },
    {
        title: "Bouwbedrijf Toren",
        category: "Business Website",
        image: "/images/project4.png",
    },
];

export default function ProjectGallery() {
    const container = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

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
                    style={{ y: isMobile ? 0 : transforms[i % 4] }}
                    className="w-full"
                >
                    <ProjectCard {...project} />
                </motion.div>
            ))}
        </div>
    );
}
