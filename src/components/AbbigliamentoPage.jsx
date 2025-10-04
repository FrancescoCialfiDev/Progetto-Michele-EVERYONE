import { useCallback, useEffect, useMemo, useState } from "react";

const instagramImages = import.meta.glob("../assets/instagram/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
});

const toCaption = (path) => {
    const fileName = path.split("/").pop() ?? "";
    const dotIndex = fileName.lastIndexOf(".");
    const baseName = dotIndex > -1 ? fileName.slice(0, dotIndex) : fileName;
    const withSpaces = baseName.replaceAll("-", " ").replaceAll("_", " ");
    const normalised = withSpaces.replace(/\s+/g, " ").trim();

    if (!normalised) {
        return "Look EVERYONE";
    }

    return normalised.charAt(0).toUpperCase() + normalised.slice(1);
};

const CloseIcon = ({ size = 22 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
    >
        <path
            d="M18 6 6 18M6 6l12 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

const ArrowIcon = ({ direction = "right", size = 28 }) => {
    const isLeft = direction === "left";
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
        >
            <path
                d={isLeft ? "M15 6 9 12l6 6" : "M9 6l6 6-6 6"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default function AbbigliamentoPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const posts = useMemo(() => {
        return Object.entries(instagramImages)
            .map(([path, url]) => {
                if (typeof url !== "string") {
                    return null;
                }

                const caption = toCaption(path);

                return {
                    id: path,
                    mediaUrl: url,
                    caption,
                };
            })
            .filter(Boolean)
            .sort((a, b) => b.id.localeCompare(a.id));
    }, []);

    const [activeIndex, setActiveIndex] = useState(null);
    const hasPosts = posts.length > 0;

    const closeLightbox = useCallback(() => {
        setActiveIndex(null);
    }, []);

    const showNext = useCallback(() => {
        if (posts.length < 2) {
            return;
        }
        setActiveIndex((prev) => {
            if (prev === null) {
                return prev;
            }
            return (prev + 1) % posts.length;
        });
    }, [posts.length]);

    const showPrev = useCallback(() => {
        if (posts.length < 2) {
            return;
        }
        setActiveIndex((prev) => {
            if (prev === null) {
                return prev;
            }
            return (prev - 1 + posts.length) % posts.length;
        });
    }, [posts.length]);

    useEffect(() => {
        if (activeIndex === null) {
            return undefined;
        }

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closeLightbox();
            } else if (event.key === "ArrowRight") {
                showNext();
            } else if (event.key === "ArrowLeft") {
                showPrev();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        const { style } = document.body;
        const originalOverflow = style.overflow;
        style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            style.overflow = originalOverflow;
        };
    }, [activeIndex, closeLightbox, showNext, showPrev]);

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

                {hasPosts ? (
                    <div className="abbigliamento-grid">
                        {posts.map((post, index) => (
                            <figure className="abbigliamento-card" key={post.id}>
                                <button
                                    type="button"
                                    className="abbigliamento-card-btn"
                                    onClick={() => setActiveIndex(index)}
                                    aria-label={`Apri ${post.caption}`}
                                >
                                    <img src={post.mediaUrl} alt={post.caption} loading="lazy" decoding="async" />
                                </button>
                                <figcaption className="visually-hidden">{post.caption}</figcaption>
                            </figure>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-white-50 py-5">
                        <p className="mb-2">Nessun contenuto disponibile al momento.</p>
                        <p className="mb-0">Aggiungi le immagini nella cartella dedicata per popolare la galleria.</p>
                    </div>
                )}
            </section>

            {activeIndex !== null && posts[activeIndex] ? (
                <div
                    className="lightbox-overlay"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Anteprima immagine abbigliamento"
                    onClick={closeLightbox}
                >
                    <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
                        <button
                            type="button"
                            className="lightbox-close"
                            onClick={closeLightbox}
                            aria-label="Chiudi anteprima"
                        >
                            <CloseIcon />
                        </button>
                        {posts.length > 1 ? (
                            <>
                                <button
                                    type="button"
                                    className="lightbox-nav lightbox-prev"
                                    onClick={showPrev}
                                    aria-label="Immagine precedente"
                                >
                                    <ArrowIcon direction="left" />
                                </button>
                                <button
                                    type="button"
                                    className="lightbox-nav lightbox-next"
                                    onClick={showNext}
                                    aria-label="Immagine successiva"
                                >
                                    <ArrowIcon direction="right" />
                                </button>
                            </>
                        ) : null}
                        <img
                            src={posts[activeIndex].mediaUrl}
                            alt={posts[activeIndex].caption}
                            className="lightbox-media"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            ) : null}
        </main>
    );
}