"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [isOrange, setIsOrange] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Detect touch device
        const checkTouchDevice = () => {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };
        checkTouchDevice();

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Check for hoverable elements
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.dataset.cursor === "hover"
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }

            // Check for orange elements to disable contrast
            const isElectric =
                target.classList.contains("text-electric") ||
                target.classList.contains("bg-electric") ||
                target.closest(".text-electric") ||
                target.closest(".bg-electric") ||
                target.closest(".group:hover .group-hover\\:text-electric");

            setIsOrange(!!isElectric);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    // Don't render cursor on touch devices
    if (isTouchDevice) {
        return null;
    }

    return (
        <motion.div
            className={`fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9999] ${isOrange ? "" : "mix-blend-difference"}`}
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
            animate={{
                scale: isHovered ? 2.5 : 1,
                backgroundColor: isHovered ? "#ffffff" : "transparent",
            }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        >
            {isHovered && (
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-obsidian rounded-full" />
                </div>
            )}
        </motion.div>
    );
}
