import { GiPositionMarker } from "react-icons/gi";

export default function MainComponent() {

    const prodotti = [
        { url: "logoAbbigliamento.png", title: "MODA" },
        { url: "logoProfumi.png", title: "PROFUMI" },
        { url: "logoAccessori.png", title: "ACCESSORI" },
        { url: "more.png", title: "ALTRO" },
    ]
    const cards = [
        { url: "card1.png", title: "FASHION" },
        { url: "card2.png", title: "STREET" },
        { url: "card3.png", title: "CLASSIC" },
        { url: "replace.png", title: "AND & MORE" },
    ]
    const partners = [
        { url: "caloma.png" },
        { url: "hermanos.png" },
        { url: "trapaniCup.png" },
        { url: "barberHouse.png" },
        { url: "equivalenza.png" },
    ]
    const contatti = [
        { url: "phone.png", content: "+39 340 0879822" },
        { url: "instagram.png", content: "everyone.eu" },
        { url: "facebook.png", content: "Everyone.eu" },
        { url: "threads.png", content: "everyone.eu" }
    ]

    return (

        <main>
            <div id="jumbo" className="position-relative top-0 start-0">

                <img src="jumboMain.png" alt="backGround jumbo" />

                {/* OVERLAY */}
                <div className="position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center gap-3">
                    <img src="logo.png" alt="Logo Everyone" className="img-fluid" style={{ minWidth: "380px" }} />
                    <h3 className="fs-6 fw-normal text-white mb-5" style={{ letterSpacing: "2px" }}>
                        MEN’S CLOTHING
                    </h3>
                    <div className="d-flex gap-3">
                        <button className="btn btn-outline-light px-4 py-2">CONTATTACI</button>
                        <button className="btn btn-outline-light px-4 py-2">SEGUICI</button>
                    </div>
                </div>
            </div>


            {/* PRODOTTI */}
            <section>
                <div className="text-center case">
                    <h2 className="p-2 m-0">I NOSTRI PRODOTTI</h2>
                </div>
                <div id="prodotti" className="overflow-x-auto d-flex flex-nowrap">
                    {prodotti.map((element) => {
                        return (
                            <div id="cardProdotti" className="position-relative top-0 start-0 m-2">
                                <img src={element.url} alt="prodotti" className="img-fluid h-100" />
                                <div className="w-100 h-100 position-absolute top-0 start-0 bg-black opacity-0"></div>
                                <h3 className="position-absolute top-50 start-50 translate-middle">{element.title}</h3>
                            </div>
                        )
                    })}
                </div>
            </section>


            {/* COLLEZIONE */}
            <div className="text-center">
                <h2 className="p-3 m-0">SCOPRI LA NOSTRA <br /> COLLEZIONE</h2>
            </div>
            <div className="containerCard d-flex flex-lg-nowrap flex-wrap">
                {cards.map((card) => {
                    return (
                        <div className="position-relative top-0 start-0">
                            <img src={card.url} alt="" />
                            <div className="overlay w-100 h-100 position-absolute top-0 start-0 bg-black opacity-50 d-none"></div>
                            <h4 className="position-absolute top-50 start-50 translate-middle">{card.title}</h4>
                        </div>
                    )
                })}
            </div>

            {/* CHI SIAMO */}
            <div className="chiSiamo p-4" style={{ paddingBottom: 0 }}>
                <div id="separatore" className="h-100 text-center d-flex justify-content-center align-items-center flex-column py-5">
                    <h2 id="chiSiamo" className="py-3">CHI SIAMO</h2>
                    <p className="text-white mb-2">EVERYONE</p>
                    <p className="text-white mb-2">
                        Nasce dall’idea che lo stile non è solo quello che indossi, ma come lo vivi.<br /><br />
                        Il nostro brand unisce l’anima street con la cura del classico e la comodità del casual,
                        creando un mix unico che ti accompagna ogni giorno dalla strada all’università, dalla serata con gli amici al momento speciale.
                    </p><br />
                    <p className="text-white mb-2">
                        Le nostre collezioni sono pensate per chi vuole distinguersi con personalità e libertà,
                        senza mai rinunciare a qualità e dettagli che fanno la differenza.
                    </p><br />
                    <p className="text-white fw-bold">
                        Con EVERYONE non segui le mode: <span className="size"><br />LE CREI</span>
                    </p>
                </div>

                {/* PARTNER */}
                <div id="separatore2" className="h-100 text-center pt-5">
                    <h2 className="pb-3">I NOSTRI PARTNER</h2>
                    <div className="d-flex partnerIcon justify-content-center flex-wrap w-100">
                        {partners.map((partner) => (
                            <img id="partners" src={partner.url} alt="partners" />
                        ))}
                    </div>
                </div>

                {/* CONTATTI */}
                <div id="separatore3" className="h-100 text-center pt-5">
                    <h2 className="pb-3">CONTATTI</h2>
                    {contatti.map((contatto) => {
                        let href = "#";
                        let target = "_self";
                        if (contatto.url === "phone.png") {
                            href = "tel:+393400879822";
                        } else if (contatto.url === "instagram.png") {
                            href = "https://www.instagram.com/everyone.eu/";
                            target = "_blank";
                        } else if (contatto.url === "facebook.png") {
                            href = "https://facebook.com/Everyone.eu";
                            target = "_blank";
                        } else if (contatto.url === "threads.png") {
                            href = "https://www.threads.net/@everyone.eu";
                            target = "_blank";
                        }
                        return (
                            <div className="d-flex flex-column align-items-start justify-content-center" key={contatto.content + contatto.url}>
                                <hr style={{ width: "100%", backgroundColor: "white", height: "2px", border: "none", margin: "0.2rem 0" }} />
                                <div className="d-flex align-items-center justify-content-center gap-3" style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>
                                    <img src={contatto.url} alt="icon" style={{ width: "32px", height: "32px" }} />
                                    <a href={href} target={target} rel="noopener noreferrer" className="text-white fs-5" style={{ letterSpacing: "2px" }}>
                                        {contatto.content}
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                    <hr style={{ width: "100%", backgroundColor: "white", height: "2px", border: "none", margin: "0.2rem 0" }} />
                </div>

                <div className="noiSiamoQui py-5 text-center">
                    <h2>NOI SIAMO QUI</h2>

                    <div className="d-flex align-items-center justify-content-start mx-auto mb-3" style={{ maxWidth: "800px" }}>
                        <GiPositionMarker
                            style={{ height: "40px", width: "40px", color: "white", marginRight: "8px" }}
                        />
                        <h5 className="text-white m-0">VIA FARDELLA, 248 TRAPANI</h5>
                    </div>

                    {/* Mappa responsive */}
                    <div className="ratio ratio-16x9 mx-auto" style={{ maxWidth: "800px" }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!3m2!1sit!2sit!4v1757600534916!5m2!1sit!2sit!6m8!1m7!1sCiPoy9cJqX59P_SJwlD2xA!2m2!1d38.01977844657521!2d12.52710129325853!3f133.62622124968428!4f3.687149967144208!5f0.7820865974627469"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>


            </div>

        </main >
    )
}