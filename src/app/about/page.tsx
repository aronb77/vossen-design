import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import AboutHero from "@/components/about/AboutHero";
import ProcessSteps from "@/components/about/ProcessSteps";
import TeamGrid from "@/components/about/TeamGrid";

export default function AboutPage() {
    return (
        <main className="relative w-full bg-obsidian min-h-screen">
            <Navbar />
            <AboutHero />
            <ProcessSteps />
            <TeamGrid />
            <Footer />
        </main>
    );
}
