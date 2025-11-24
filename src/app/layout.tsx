import type { Metadata } from "next";
import { Outfit, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/nav/Navbar";
import DemoPopup from "@/components/ui/DemoPopup";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vossen Design | Digital Antigravity",
  description: "Award-winning web design agency specializing in high-end digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body
        className={cn(
          "min-h-screen bg-obsidian text-stark font-sans overflow-x-hidden selection:bg-electric selection:text-white",
          outfit.variable,
          playfair.variable,
          jetbrains.variable
        )}
      >
        <SmoothScroll>
          <div className="bg-grain" />
          <CustomCursor />
          <Navbar />
          <DemoPopup />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
