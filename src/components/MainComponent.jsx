const PinIcon = ({ size = 40, color = "white", style, className }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        style={style}
        className={className}
    >
        <path
            d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6Zm0 8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
            fill={color}
        />
    </svg>
);


const heroSrcSet = "/jumboMain-480.jpg 480w, /jumboMain-768.jpg 768w, /jumboMain.jpg 1046w";

export default function MainComponent() {
    const prodotti = [
        { url: "/logoAbbigliamento.jpg", title: "MODA", width: 1024, height: 1582 },
        { url: "/logoProfumi.jpg", title: "PROFUMI", width: 1024, height: 1420 },
        { url: "/logoAccessori.jpg", title: "ACCESSORI", width: 1024, height: 1374 },
        { url: "/more.jpg", title: "ALTRO", width: 1024, height: 1378 },
    ];

    const cards = [
        { url: "/card1.jpg", title: "FASHION", width: 985, height: 1284 },
        { url: "/card2.jpg", title: "STREET", width: 992, height: 1284 },
        { url: "/card3.jpg", title: "CLASSIC", width: 984, height: 1344 },
        { url: "/replace.jpg", title: "AND & MORE", width: 992, height: 1356 },
    ];

    const partners = [
        { url: "/caloma.png" },
        { url: "/hermanos.png" },
        { url: "/trapaniCup.png" },
        { url: "/barberHouse.png" },
        { url: "/equivalenza.png" },
    ];

    const contatti = [
        { type: "phone", icon: "/phone.png", content: "+39 340 0879822" },
        { type: "instagram", icon: "/instagram.png", content: "everyone.eu" },
        { type: "facebook", icon: "/facebook.png", content: "Everyone.eu" },
        { type: "threads", icon: "/threads.png", content: "everyone.eu" },
    ];

    const getContactLink = (type) => {
        switch (type) {
            case "phone":
                return { href: "tel:+393400879822", target: "_self" };
            case "instagram":
                return {
                    href: "https://www.instagram.com/everyone.eu/",
                    target: "_blank",
                };
            case "facebook":
                return { href: "https://facebook.com/Everyone.eu", target: "_blank" };
            case "threads":
                return {
                    href: "https://www.threads.net/@everyone.eu",
                    target: "_blank",
                };
            default:
                return { href: "#", target: "_self" };
        }
    };

    return (
        <main id="home">
            {/* HERO / JUMBO */}
            <div id="jumbo" className="position-relative top-0 start-0">
                <img
                    src="/jumboMain.jpg"
                    srcSet={heroSrcSet}
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 100vw, 1046px"
                    alt="Immagine di copertina Everyone"
                    className="w-100 h-100 object-fit-cover"
                    width="1046"
                    height="1382"
                    decoding="async"
                    fetchpriority="high"
                />

                {/* OVERLAY */}
                <div className="position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center gap-3">
                    <img
                        src="/logo.png"
                        alt="Logo Everyone"
                        className="img-fluid"
                        style={{ minWidth: "380px" }}
                        width="800"
                        height="91"
                    />
                    <h3
                        className="fs-6 fw-normal text-white mb-5"
                        style={{ letterSpacing: "2px" }}
                    >
                        MEN&apos;S CLOTHING
                    </h3>
                    <div className="d-flex gap-3">
                        <button className="btn btn-outline-light px-4 py-2">CONTATTACI</button>
                        <button className="btn btn-outline-light px-4 py-2">SEGUICI</button>
                    </div>
                </div>
            </div>

            {/* PRODOTTI */}
            <section className="bg-white">
                <div className="text-center case">
                    <h2 className="p-2 m-0">I NOSTRI PRODOTTI</h2>
                </div>

                <div id="prodotti" className="overflow-x-auto d-flex flex-nowrap">
                    {prodotti.map((element) => (
                        <div
                            id="cardProdotti"
                            className="position-relative top-0 start-0 m-2"
                            key={element.title}
                        >
                            <img
                                src={element.url}
                                alt={`Categoria ${element.title} - Everyone`}
                                className="d-block w-100 prodotti-img h-100"
                                loading="lazy"
                                decoding="async"
                                width={element.width}
                                height={element.height}
                            />
                            <div className="w-100 h-100 position-absolute top-0 start-0 bg-black opacity-0"></div>
                            <h3 className="position-absolute top-50 start-50 translate-middle">
                                {element.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* COLLEZIONE */}
            <div className="text-center">
                <h2 className="p-3 m-0">
                    SCOPRI LA NOSTRA <br /> COLLEZIONE
                </h2>
            </div>

            <div className="containerCard d-flex flex-lg-nowrap flex-wrap bg-white">
                {cards.map((card) => (
                    <div className="position-relative top-0 start-0" key={card.title}>
                        <img
                            src={card.url}
                            alt={`Collezione ${card.title} - Everyone`}
                            loading="lazy"
                            decoding="async"
                            width={card.width}
                            height={card.height}
                        />
                        <div className="overlay w-100 h-100 position-absolute top-0 start-0 bg-black opacity-50 d-none"></div>
                        <h4 className="position-absolute top-50 start-50 translate-middle">
                            {card.title}
                        </h4>
                    </div>
                ))}
            </div>

            <div className="chiSiamo p-4" style={{ paddingBottom: 0 }}>
                <div className="py-5 text-center">
                    <h2 id="chiSiamo" className="pb-4 text-uppercase">Chi siamo</h2>
                    <p className="text-white">
                        EVERYONE &egrave; il punto di riferimento per l&apos;abbigliamento maschile a Trapani. Uno spazio
                        dedicato agli uomini che amano distinguersi con stile, qualit&agrave; e personalit&agrave;. Streetwear,
                        classico e casual convivono in una selezione curata di marchi, outfit e accessori pensati per
                        chi vuole sentirsi sempre al top in ogni occasione.
                    </p>
                    <p className="text-white">
                        Offriamo un assortimento ricercato di capi che spaziano dai look urban ai completi eleganti,
                        passando per casual chic e capi iconici senza tempo. Ogni proposta &egrave; studiata per valorizzare
                        il tuo stile e rendere speciale anche il quotidiano.
                    </p>
                    <p className="text-white">
                        Nel nostro store trovi anche una selezione esclusiva di profumi, accessori e prodotti lifestyle
                        che fanno la differenza.
                    </p>
                    <br />
                    <p className="text-white fw-bold">
                        Con EVERYONE non segui le mode: <span className="size"><br />LE CREI</span>
                    </p>
                </div>

                {/* PARTNER */}
                <div id="separatore2" className="h-100 text-center pt-5 mt-4">
                    <h2 className="pb-3">I NOSTRI PARTNER</h2>
                    <div className="d-flex partnerIcon justify-content-center flex-wrap w-100">
                        {partners.map((partner, i) => (
                            <img
                                id="partners"
                                src={partner.url}
                                alt="Logo partner"
                                key={partner.url || i}
                                loading="lazy"
                                decoding="async"
                            />
                        ))}
                    </div>
                </div>

            {/* CONTATTI */}
            <section id="contatti">
                <div id="separatore3" className="h-100 text-center pt-5 mt-4">
                    <h2 className="pb-3">CONTATTI</h2>

                    {contatti.map((c) => {
                        const { href, target } = getContactLink(c.type);
                        return (
                            <div
                                className="d-flex flex-column align-items-start justify-content-center"
                                key={c.type + c.content}
                            >
                                <hr
                                    style={{
                                        width: "100%",
                                        backgroundColor: "white",
                                        height: "2px",
                                        border: "none",
                                        margin: "0.2rem 0",
                                    }}
                                />
                                <div
                                    className="d-flex align-items-center justify-content-center gap-3"
                                    style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}
                                >
                                    <img
                                        src={c.icon}
                                        alt={`Icona ${c.type}`}
                                        style={{ width: "32px", height: "32px" }}
                                        loading="lazy"
                                        decoding="async"
                                        width="32"
                                        height="32"
                                    />
                                    <a
                                        href={href}
                                        target={target}
                                        rel="noopener noreferrer"
                                        className="text-white fs-5"
                                        style={{ letterSpacing: "2px" }}
                                        aria-label={`Apri ${c.type}`}
                                    >
                                        {c.content}
                                    </a>
                                </div>
                            </div>
                        );
                    })}

                    <hr
                        style={{
                            width: "100%",
                            backgroundColor: "white",
                            height: "2px",
                            border: "none",
                            margin: "0.2rem 0",
                        }}
                    />
                </div>
            </section>

            {/* MAPPA */}
            <section id="dove-ci-troviamo" className="noiSiamoQui py-5 text-center mt-4">
                <h2>NOI SIAMO QUI</h2>

                <div
                    className="d-flex align-items-center justify-content-start mx-auto mb-3"
                    style={{ maxWidth: "800px" }}
                >
                    <PinIcon size={40} color="white" style={{ marginRight: "8px" }} />
                    <p className="text-white m-0 fw-semibold" style={{ letterSpacing: "1px" }}>VIA FARDELLA, 248 TRAPANI</p>
                </div>

                <div className="ratio ratio-16x9 mx-auto" style={{ maxWidth: "800px" }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!3m2!1sit!2sit!4v1757600534916!5m2!1sit!2sit!6m8!1m7!1sCiPoy9cJqX59P_SJwlD2xA!2m2!1d38.01977844657521!2d12.52710129325853!3f133.62622124968428!4f3.687149967144208!5f0.7820865974627469"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mappa Everyone - Via Fardella 248 Trapani"
                    ></iframe>
                </div>
            </section>
                <div className="w-100 text-center pt-3">
                    <small>&copy; {new Date().getFullYear()} EVERYONE - Tutti i diritti riservati.</small>
                </div>
            </div>
        </main>
    );
}


