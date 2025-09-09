"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 10,
            }}
        >
            {/* Top bar */}
            <div
                style={{
                    width: "100%",
                    backgroundColor: "#105F6D",
                    color: "#fff",
                    padding: "10px 20px",
                    boxSizing: "border-box",
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "10px",
                        textAlign: "center",
                    }}
                >
                    {/* Phone */}
                    <a
                        href="tel:+919995275823"
                        style={{
                            color: "#fff",
                            textDecoration: "none",
                            fontSize: "14px",
                            flex: "1 1 auto",
                            textAlign: "left",
                        }}
                    >
                        +91 9995 27 5823
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:sahayahomemedicalcare@gmail.com"
                        style={{
                            color: "#fff",
                            textDecoration: "none",
                            fontFamily: "Roboto, sans-serif",
                            fontSize: "14px",
                            flex: "2 1 auto",
                            textAlign: "center",
                            wordBreak: "break-word",
                        }}
                    >
                        sahayahomemedicalcare@gmail.com
                    </a>

                    {/* Social Icons */}
                    <div className="social-media-icone"
                        style={{
                            display: "flex",
                            gap: "15px",
                            justifyContent: "flex-end",
                            flex: "1 1 auto",
                        }}
                    >
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#fff" }}
                        >
                            <FontAwesomeIcon icon={faFacebookF} size="lg" />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#fff" }}
                        >
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Logo + Navbar */}
            <div
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    padding: "10px 20px",
                    gap: "20px",
                }}
            >
                {/* Logo */}
                <div style={{ flex: "1 1 auto", textAlign: "left" }}>
                    <img
                        src="/Asset/SAHAYA_LOGO_page-copy2-removebg-preview.png"
                        alt="Logo"
                        className="logo-effect"
                        style={{
                            height: "120px",
                            maxWidth: "100%",
                            objectFit: "contain",
                        }}
                    />
                </div>


                {/* Hamburger Icon for Mobile */}
                <button
                    onClick={toggleMenu}
                    className="hamburger"
                    style={{
                        display: "none",
                        background: "none",
                        border: "none",
                        fontSize: "28px",
                        cursor: "pointer",
                        color: "#105F6D",
                        marginBottom: "140px"
                    }}
                >
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                </button>

                {/* Navbar */}
                <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
                    <ul>
                        {["Home", "About", "Services", "Contact"].map((item, index) => (
                            <li
                                key={item}
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                }}
                            >
                                <a href={`/${item.toLowerCase()}`} className="nav-link">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
