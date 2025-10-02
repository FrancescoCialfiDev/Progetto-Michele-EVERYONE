import { RxDropdownMenu } from "react-icons/rx";

export default function HeaderComponent() {
    return (
        <>
            <header className="d-flex justify-content-between align-items-center px-3">
                <div className="d-flex align-items-center">
                    <RxDropdownMenu style={{ color: "white", fontSize: "30px" }} />
                    <img
                        src="/logo.png"
                        alt="Logo Everyone"
                        width="800"
                        height="91"
                        decoding="async"
                    />
                </div>
                <img
                    src="/italianFlag.png"
                    alt="Bandiera Italia"
                    style={{ color: "white", width: "25px" }}
                    width="25"
                    height="17"
                    loading="lazy"
                    decoding="async"
                />
            </header>
            <div className="scorrimento">
                <span>
                    VIENI A TROVARCI IN STORE DAL LUN / SAB DALLE ORE 9:30 ALLE 13:00 E DALLE 16:30 ALLE 20:00.
                    DOMENICA DALLE 17:00 ALLE 20:00
                </span>
            </div>
        </>
    );
}
