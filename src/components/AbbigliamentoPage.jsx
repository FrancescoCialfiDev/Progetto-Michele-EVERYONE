import { useEffect } from "react";

const galleryItems = [
    { src: "/card1.jpg", alt: "Outfit fashion con giacca" },
    { src: "/card2.jpg", alt: "Look streetwear con felpa" },
    { src: "/card3.jpg", alt: "Completo classic uomo" },
    { src: "/more.jpg", alt: "Accessori e dettagli" },
    { src: "/logoAbbigliamento.jpg", alt: "Esposizione abbigliamento Everyone" },
    { src: "/logoAccessori.jpg", alt: "Sezione accessori in negozio" },
    { src: "/logoProfumi.jpg", alt: "Profumi selezionati" },
    { src: "/replace.jpg", alt: "Dettaglio outfit completo" },
];

export default function AbbigliamentoPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <main className="abbigliamento-page">
            <section className="container py-5 text-white">
                <div className="text-center mb-4">
                    <h1 className="display-5 fw-bold mb-3">Abbigliamento</h1>
                    <p className="lead mb-0">
                        Scopri una selezione di outfit street, classic e casual curati dal team EVERYONE.
                        Ogni capo racconta il nostro stile, pronto per essere indossato.
                    </p>
                </div>

                <div className="abbigliamento-grid">
                    {galleryItems.map((item) => (
                        <figure className="abbigliamento-card" key={item.src}>
                            <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                        </figure>
                    ))}
                </div>
            </section>
        </main>
    );
}

