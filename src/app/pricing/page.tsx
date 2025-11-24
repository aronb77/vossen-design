import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import PricingTable from "@/components/pricing/PricingTable";
import ProjectConfigurator from "@/components/pricing/ProjectConfigurator";
import AddonsList from "@/components/pricing/AddonsList";

export default function PricingPage() {
    return (
        <main className="relative w-full bg-obsidian min-h-screen pt-24">
            <Navbar />
            <PricingTable />
            <ProjectConfigurator />
            <AddonsList />
            <Footer />
        </main>
    );
}
