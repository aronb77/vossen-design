import React from 'react';
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/footer/Footer';

export default function PrivacyBeleid() {
    return (
        <main className="bg-obsidian min-h-screen text-stark selection:bg-electric selection:text-stark">
            <Navbar />

            <section className="pt-40 pb-24 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-12 text-electric">
                        Privacybeleid
                    </h1>

                    <div className="space-y-8 text-gray-300 leading-relaxed">
                        <p className="text-sm text-gray-500 uppercase tracking-widest mb-8">Laatst bijgewerkt: 24 november 2025</p>

                        <section>
                            <h2 className="text-2xl font-bold text-stark mb-4">1. Inleiding</h2>
                            <p>Vossen Design respecteert de privacy van bezoekers van de website en draagt er zorg voor dat de persoonlijke informatie die u ons verschaft vertrouwelijk wordt behandeld. Verwerking van de persoonsgegevens gebeurt op een wijze, die in overeenstemming is met de eisen die de Algemene Verordening Gegevensbescherming (AVG) stelt.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-stark mb-4">2. Doeleinden van de gegevensverwerking</h2>
                            <p>Uw persoonsgegevens worden door ons verwerkt voor het aangaan en uitvoeren van overeenkomsten ter zake van juridische diensten en het beheren van de daaruit voortvloeiende relaties, met inbegrip het uitvoeren van activiteiten gericht op de vergroting van het klantenbestand.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-stark mb-4">3. Invullen van formulieren</h2>
                            <p>Als u een contact- of aanmeldformulier op de website invult, of ons een e-mail stuurt, dan worden de gegevens die u ons toestuurt bewaard zolang als naar de aard van het formulier of de inhoud van uw e-mail nodig is voor de volledige beantwoording en afhandeling daarvan.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-stark mb-4">4. Klikgedrag en bezoekgegevens</h2>
                            <p>Op de website worden algemene bezoekgegevens bijgehouden. In dit kader kan met name het IP-adres van uw computer, de eventuele gebruikersnaam, het tijdstip van opvraging en gegevens die de browser van een bezoeker meestuurt, worden geregistreerd en worden gebruikt voor statistische analyses van bezoek- en klikgedrag op de website. Wij proberen deze gegevens zo veel mogelijk te anonimiseren. Deze gegevens worden niet aan derden verstrekt.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-stark mb-4">5. Google Analytics</h2>
                            <p>Wij maken gebruik van Google Analytics om bij te houden hoe gebruikers de website gebruiken. De aldus verkregen informatie wordt, met inbegrip van het adres van uw computer (IP-adres), overgebracht naar en door Google opgeslagen op servers in de Verenigde Staten.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-stark mb-4">6. Inzage, correctie en recht van verzet</h2>
                            <p>Indien u een relatie met ons bedrijf heeft, heeft u na schriftelijk verzoek de mogelijkheid uw persoonlijke gegevens in te zien. Indien het door ons verstrekte overzicht onjuistheden bevat, kunt u ons schriftelijk verzoeken de gegevens te wijzigen of te laten verwijderen.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-stark mb-4">7. Aanpassen privacy statement</h2>
                            <p>Wij behouden ons het recht voor dit privacy statement aan te passen. Wijzigingen zullen op deze website worden gepubliceerd.</p>
                        </section>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
