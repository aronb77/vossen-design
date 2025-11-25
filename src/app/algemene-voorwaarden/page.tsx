import React from 'react';
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/footer/Footer';

export default function AlgemeneVoorwaarden() {
    return (
        <main className="bg-obsidian min-h-screen text-stark selection:bg-electric selection:text-stark">
            <Navbar />

            <section className="pt-40 pb-24 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-12 text-electric">
                        Algemene Voorwaarden
                    </h1>

                    <div className="space-y-8 text-gray-300 leading-relaxed">
                        <p className="text-sm text-gray-500 uppercase tracking-widest mb-8">Laatst bijgewerkt: 24 november 2025</p>

                        <section>
                            <h2 className="text-2xl font-bold text-stark mb-4">1. Definities</h2>
                            <p>In deze algemene voorwaarden wordt verstaan onder:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li><strong>Opdrachtnemer:</strong> Vossen Design, gevestigd te Sint Jansklooster.</li>
                                <li><strong>Opdrachtgever:</strong> De natuurlijke of rechtspersoon die aan Vossen Design opdracht heeft gegeven tot het verrichten van werkzaamheden.</li>
                                <li><strong>Diensten:</strong> Alle werkzaamheden waartoe opdracht is gegeven, of die voortvloeien uit, dan wel direct verband houden met de opdracht, waaronder webdesign, ontwikkeling, branding en onderhoud.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-stark mb-4">2. Toepasselijkheid</h2>
                            <p>Deze voorwaarden zijn van toepassing op alle offertes, aanbiedingen, werkzaamheden, overeenkomsten en leveringen van diensten of goederen door of namens Vossen Design.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-stark mb-4">3. Offertes en Aanbiedingen</h2>
                            <p>Alle offertes en aanbiedingen van Vossen Design zijn vrijblijvend, tenzij in de offerte een termijn voor aanvaarding is gesteld. Een offerte vervalt indien het product waarop de offerte of de aanbieding betrekking heeft in de tussentijd niet meer beschikbaar is. Alle genoemde prijzen zijn exclusief BTW, tenzij anders vermeld.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-stark mb-4">4. Uitvoering van de Overeenkomst</h2>
                            <p>Vossen Design zal de overeenkomst naar beste inzicht en vermogen en overeenkomstig de eisen van goed vakmanschap uitvoeren. Een en ander op grond van de op dat moment bekende stand der wetenschap.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-stark mb-4">5. Wijziging van de Overeenkomst</h2>
                            <p>Indien tijdens de uitvoering van de overeenkomst blijkt dat het voor een behoorlijke uitvoering noodzakelijk is om de te verrichten werkzaamheden te wijzigen of aan te vullen, zullen partijen tijdig en in onderling overleg de overeenkomst aanpassen.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-stark mb-4">6. Betaling</h2>
                            <p>Betaling dient steeds te geschieden binnen 14 dagen na factuurdatum, op een door Vossen Design aan te geven wijze in de valuta waarin is gefactureerd, tenzij schriftelijk anders door Vossen Design aangegeven.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-stark mb-4">7. Eigendomsvoorbehoud</h2>
                            <p>Alle door Vossen Design in het kader van de overeenkomst geleverde zaken blijven eigendom van Vossen Design totdat de opdrachtgever alle verplichtingen uit de met Vossen Design gesloten overeenkomst(en) deugdelijk is nagekomen.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-stark mb-4">8. Aansprakelijkheid</h2>
                            <p>Vossen Design is niet aansprakelijk voor schade, van welke aard ook, ontstaan doordat Vossen Design is uitgegaan van door of namens de opdrachtgever verstrekte onjuiste en/of onvolledige gegevens.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-stark mb-4">9. Intellectuele Eigendom</h2>
                            <p>Vossen Design behoudt zich de rechten en bevoegdheden voor die hem toekomen op grond van de Auteurswet en andere intellectuele wet- en regelgeving.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-stark mb-4">10. Toepasselijk Recht</h2>
                            <p>Op alle rechtsbetrekkingen waarbij Vossen Design partij is, is uitsluitend het Nederlands recht van toepassing.</p>
                        </section>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
