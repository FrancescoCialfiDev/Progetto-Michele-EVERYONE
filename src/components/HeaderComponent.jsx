export default function HeaderComponent() {
    return (
        <>
            <header className="d-flex justify-content-between align-items-center px-3">
                <div className="d-flex align-items-center gap-2">
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                    >
                        <rect x="4" y="6" width="16" height="2" fill="white" />
                        <rect x="4" y="11" width="16" height="2" fill="white" />
                        <rect x="4" y="16" width="10" height="2" fill="white" />
                    </svg>
                    <img src="/logo.png" alt="Logo Everyone" decoding="async" />
                </div>
                <img
                    src="/italianFlag.png"
                    alt="Bandiera Italia"
                    style={{ color: "white", width: "25px" }}
                    loading="lazy"
                    decoding="async"
                />
            </header>
            <div className="scorrimento">
                <span>
                    VIENI A TROVARCI IN STORE DAL LUN / SAB DALLE ORE 9:30 ALLE 13:00 E DALLE 16:30 ALLE 20:00. DOMENICA
                    DALLE 17:00 ALLE 20:00
                </span>
            </div>
        </>
    );
}
