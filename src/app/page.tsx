import Hero from "@/components/hero/Hero";
import Portfolio from "@/components/portfolio/Portfolio";
import StylePreview from "@/components/interactive/StylePreview";
import Services from "@/components/services/Services";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative w-full">
      <Hero />
      <Portfolio />
      <StylePreview />
      <Services />
      <Footer />
    </main>
  );
}
