import { Link } from "react-router-dom";
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

    const experienceHighlights = [
        {
            title: "Consulenza su misura",
            description:
                "Analizziamo il tuo stile e ti guidiamo tra outfit, combinazioni e accessori per un look che rispecchi davvero chi sei.",
        },
        {
            title: "Qualità selezionata",
            description:
                "Capi e accessori scelti personalmente dal nostro team: materiali premium e finiture curate che durano nel tempo.",
        },
        {
            title: "Trend sempre aggiornati",
            description:
                "Seguiamo le mode del momento e le reinterpretazioni dei grandi brand per proporti look attuali senza rinunciare al tuo stile.",
        },
    ];

    const testimonials = [
        {
            quote:
                "Finalmente un negozio che capisce cosa significa personalità. Ho trovato capi particolari e un team sempre pronto a consigliarmi.",
            name: "Marco R.",
            role: "Cliente EVERYONE",
        },
        {
            quote:
                "Ogni volta che passo da EVERYONE scopro qualcosa di nuovo. Hanno gusto, attenzione ai dettagli e un servizio impeccabile.",
            name: "Luca B.",
            role: "Imprenditore",
        },
        {
            quote: "Ho scelto il completo per il mio evento grazie a loro: perfetto fitting e tanta disponibilità.",
            name: "Giovanni S.",
            role: "Cliente soddisfatto",
        },
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
                        <a
                            className="btn btn-light px-4 py-2"
                            href="#contatti"
                            role="button"
                        >
                            CONTATTACI
                        </a>
                        <a
                            className="btn btn-outline-light px-4 py-2"
                            href="https://www.instagram.com/everyone.eu/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            SEGUICI
                        </a>
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

            {/* ESPERIENZA IN STORE */}
            <section className="esperienza-store text-white">
                <div className="container">
                    <div className="row justify-content-center mb-4 text-center">
                        <div className="col-lg-8">
                            <h2 className="text-uppercase mb-3">Pi&ugrave; di un negozio</h2>
                            <p className="mb-0">
                                EVERYONE &egrave; uno spazio dedicato alla cura del tuo stile. Ci piace raccontarti le storie dei brand che scegli, proporti abbinamenti inediti e costruire look che ti facciano sentire bene dal mattino alla sera.
                            </p>
                        </div>
                    </div>
                    <div className="row g-4">
                        {experienceHighlights.map((highlight) => (
                            <div className="col-md-4" key={highlight.title}>
                                <div className="esperienza-box h-100 p-4">
                                    <h3 className="h5 text-uppercase mb-3">{highlight.title}</h3>
                                    <p className="mb-0">{highlight.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* COLLEZIONE */}
            <div className="text-center case">
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
                    <h2 id="chiSiamo" className="pb-4 text-uppercase section-title">Chi siamo</h2>
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

                <div className="section-divider mx-auto"></div>

                {/* TESTIMONIANZE */}
                <section className="testimonianze container py-5">
                    <div className="text-center mb-4">
                        <h2 className="text-uppercase section-title">Dicono di noi</h2>
                        <p className="text-white-50 mb-0">
                            Chi entra da EVERYONE trova attenzione, consigli sinceri e capi che fanno la differenza.
                        </p>
                    </div>
                    <div className="row g-4">
                        {testimonials.map((testimonial) => (
                            <div className="col-md-4" key={testimonial.name}>
                                <figure className="testimonial-card h-100 p-4 m-0">
                                    <blockquote className="mb-3">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                                    <figcaption className="text-uppercase small fw-semibold">
                                        {testimonial.name}
                                        <span className="d-block text-white-50 text-capitalize">{testimonial.role}</span>
                                    </figcaption>
                                </figure>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PARTNER */}
                <div id="separatore2" className="h-100 text-center mt-2">
                    <div className="section-divider mx-auto"></div>
                    <h2 className="pb-3">I NOSTRI PARTNER</h2>
                    <div className="d-flex partnerIcon justify-content-center align-items-center flex-wrap w-100">
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
            <section id="contatti" className="contatti-section py-5">
                <div className="container">
                    <div className="row g-4 align-items-stretch">
                        <div className="col-lg-5">
                            <div className="contatti-intro h-100 p-4">
                                <h2 className="text-uppercase mb-3">Contatti</h2>
                                <p className="text-white-50">
                                    Siamo qui per consigliarti il look giusto, contattaci per info o aggiornarti sugli ultimi arrivi.
                                </p>
                                <ul className="list-unstyled text-white-50 orari">
                                    <li>
                                        <span className="d-block text-uppercase text-white fw-semibold">Luned&igrave; - Sabato</span>
                                        09:30 - 13:00 / 16:30 - 20:00
                                    </li>
                                    <li>
                                        <span className="d-block text-uppercase text-white fw-semibold">Domenica</span>
                                        17:00 - 20:00
                                    </li>
                                </ul>
                                <div className="d-flex flex-column flex-sm-row gap-3">
                                    <a className="btn btn-light flex-fill text-uppercase" href="tel:+393400879822">
                                        Chiamaci ora
                                    </a>
                                    <a
                                        className="btn btn-outline-light flex-fill text-uppercase"
                                        href="https://wa.me/393400879822"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="contatti-card h-100 p-4">
                                <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                                    {contatti.map((c) => {
                                        const { href, target } = getContactLink(c.type);
                                        return (
                                            <li key={c.type + c.content}>
                                                <a
                                                    href={href}
                                                    target={target}
                                                    rel="noopener noreferrer"
                                                    className="d-flex align-items-center gap-3 contatto-item"
                                                    aria-label={`Apri ${c.type}`}
                                                >
                                                    <img
                                                        src={c.icon}
                                                        alt=""
                                                        style={{ width: "32px", height: "32px" }}
                                                        loading="lazy"
                                                        decoding="async"
                                                        width="32"
                                                        height="32"
                                                    />
                                                    <span className="fs-5">{c.content}</span>
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAPPA */}
            <section id="dove-ci-troviamo" className="map-section py-5 mt-4">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-5">
                            <div className="map-card h-100 p-4 p-lg-5">
                                <span className="map-chip text-uppercase">Visita lo store</span>
                                <h2 className="section-title text-uppercase mb-3">Noi siamo qui</h2>
                                <p className="map-text mb-4">
                                    Siamo in Via Fardella 248, nel cuore di Trapani. Vieni a scoprire il nostro spazio dedicato allo stile
                                    maschile: street, classic e casual selezionati dal team EVERYONE.
                                </p>
                                <div className="map-details d-flex align-items-start gap-3">
                                    <PinIcon size={36} color="#ffffff" style={{ flexShrink: 0 }} />
                                    <div className="map-address text-start">
                                        <strong className="d-block text-uppercase">EVERYONE STORE</strong>
                                        <span>Via Fardella, 248 &middot; Trapani</span>
                                        <span className="d-block">T: +39 340 0879822</span>
                                    </div>
                                </div>
                                <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                                    <a
                                        className="btn btn-light text-uppercase px-4 py-2"
                                        href="https://maps.google.com/?q=Via+Fardella+248,+Trapani"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Apri su Google Maps
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="map-frame shadow-lg">
                                <div className="ratio ratio-16x9">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!3m2!1sit!2sit!4v1757600534916!5m2!1sit!2sit!6m8!1m7!1sCiPoy9cJqX59P_SJwlD2xA!2m2!1d38.01977844657521!2d12.52710129325853!3f133.62622124968428!4f3.687149967144208!5f0.7820865974627469"
                                        style={{ border: 0 }}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Mappa Everyone - Via Fardella 248 Trapani"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="site-footer mt-5 pt-5">
                <div className="container pb-4">
                    <div className="row g-4 justify-content-between">
                        <div className="col-lg-4">
                            <img src="/logo.png" alt="Logo Everyone" className="img-fluid footer-logo" loading="lazy" decoding="async" />
                            <p className="text-white-50 mt-3 mb-0">
                                EVERYONE &egrave; stile, ricerca e cultura street & classic nel cuore di Trapani. Passa a trovarci e costruisci il tuo prossimo outfit con noi.
                            </p>
                        </div>
                        <div className="col-6 col-lg-2">
                            <h3 className="h6 text-uppercase text-white">Menu</h3>
                            <ul className="list-unstyled text-white-50 footer-links">
                                <li><a href="#home">Home</a></li>
                                <li><Link to="/abbigliamento">Abbigliamento</Link></li>
                                <li><a href="#contatti">Contatti</a></li>
                                <li><a href="#dove-ci-troviamo">Dove siamo</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3">
                            <h3 className="h6 text-uppercase text-white">Contatti rapidi</h3>
                            <ul className="list-unstyled text-white-50 footer-links">
                                <li><a href="tel:+393400879822">+39 340 0879822</a></li>
                                <li><a href="https://www.instagram.com/everyone.eu/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                                <li><a href="https://facebook.com/Everyone.eu" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-top border-secondary-subtle text-center py-3">
                    <small className="text-white-50">&copy; {new Date().getFullYear()} EVERYONE - Tutti i diritti riservati.</small>
                </div>
            </footer>
            </div>
        </main>
    );
}
