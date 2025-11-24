import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-obsidian pt-20">
            <ContactHero />
            <ContactForm />
        </main>
    );
}
