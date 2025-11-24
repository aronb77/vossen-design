"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import Magnetic from "@/components/ui/Magnetic";

export default function ThemeToggle() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        // Check for saved theme preference or system preference
        const savedTheme = localStorage.getItem("theme");
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        const initialTheme = savedTheme || systemTheme;

        setTheme(initialTheme);
        document.documentElement.setAttribute("data-theme", initialTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <Magnetic>
            <button
                onClick={toggleTheme}
                className={`relative w-16 h-8 rounded-full border transition-colors duration-300 flex items-center px-1 ${theme === "light"
                    ? "bg-stark/10 border-stark/20"
                    : "bg-stark/10 border-stark/20"
                    }`}
                aria-label="Toggle Theme"
            >
                <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 700, damping: 30 }}
                    className={`w-6 h-6 rounded-full bg-electric text-stark flex items-center justify-center shadow-sm ${theme === "dark" ? "ml-auto" : ""
                        }`}
                >
                    {theme === "light" ? (
                        <Sun className="w-3.5 h-3.5" />
                    ) : (
                        <Moon className="w-3.5 h-3.5" />
                    )}
                </motion.div>
            </button>
        </Magnetic>
    );
}
