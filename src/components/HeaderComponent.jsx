import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
    { label: "Home", to: "/" },
    { label: "Abbigliamento", to: "/abbigliamento" },
    { label: "Contatti", to: { pathname: "/", hash: "#contatti" } },
    { label: "Dove ci troviamo", to: { pathname: "/", hash: "#dove-ci-troviamo" } },
];

export default function HeaderComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname, location.hash]);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <>
            <header className="site-header d-flex justify-content-between align-items-center px-3">
                <div className="d-flex align-items-center gap-1">
                    <button
                        className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
                        type="button"
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="header-overlay"
                        aria-haspopup="true"
                    >
                        <span className="menu-line" aria-hidden="true"></span>
                        <span className="menu-line" aria-hidden="true"></span>
                        <span className="menu-line" aria-hidden="true"></span>
                    </button>
                    <Link to="/" className="brand" aria-label="Homepage EVERYONE">
                        <img src="/logo.png" alt="Logo Everyone" decoding="async" />
                    </Link>
                </div>
                <img
                    src="/italianFlag.png"
                    alt="Bandiera Italia"
                    style={{ color: "white", width: "25px" }}
                    loading="lazy"
                    decoding="async"
                />
            </header>

            <nav
                id="header-overlay"
                className={`header-overlay ${isMenuOpen ? "show" : ""}`}
                aria-hidden={!isMenuOpen}
                role="dialog"
                aria-modal={isMenuOpen}
                aria-label="Menu principale"
            >
                <ul className="overlay-nav list-unstyled m-0">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <Link
                                to={item.to}
                                onClick={() => setIsMenuOpen(false)}
                                className="overlay-link"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {isMenuOpen && <div className="overlay-backdrop" onClick={toggleMenu} aria-hidden="true"></div>}

            <div className="scorrimento">
                <span>
                    VIENI A TROVARCI IN STORE DAL LUN / SAB DALLE ORE 9:30 ALLE 13:00 E DALLE 16:30 ALLE 20:00. DOMENICA
                    DALLE 17:00 ALLE 20:00
                </span>
            </div>
        </>
    );
}
