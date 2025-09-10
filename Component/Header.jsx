"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    // Check screen size on mount and resize
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Initial check
        checkScreenSize();

        // Add event listener
        window.addEventListener('resize', checkScreenSize);

        // Clean up
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <header
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 10,
                fontFamily: '"Roboto", sans-serif',
            }}
        >
            {/* Top bar - hidden on mobile */}
            {!isMobile && (
                <div
                    style={{
                        width: "100%",
                        backgroundColor: "#105F6D",
                        color: "#fff",
                        padding: "10px 50px",
                        boxSizing: "border-box",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    {/* Left: Social Icons */}
                    <div style={{ display: "flex", gap: "15px" }}>
                        <a href="https://facebook.com" target="_blank" style={{ color: "#fff" }}>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="https://instagram.com" target="_blank" style={{ color: "#fff" }}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>

                    {/* Right: Contact Info */}
                    <div style={{ display: "flex", gap: "20px" }}>
                        <span>+91 9995 27 5823</span>
                        <span>sahayahomemedicalcare@gmail.com</span>
                    </div>
                </div>
            )}

            {/* Logo + Navbar */}
            <div
                style={{
                    width: "100%",
                    backgroundColor: isMobile ? "#105F6D" : "transparent",
                    maxWidth: "1400px",
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: isMobile ? "10px 20px" : "10px 20px",
                    boxSizing: "border-box",
                }}
            >
                {/* Logo */}
                <div style={{ flex: "1 1 auto" }}>
                    <img
                        src="/Asset/SAHAYA_LOGO_page-copy2-removebg-preview.png"
                        alt="Logo"
                        className="logo-effect"
                        style={{
                            height: isMobile ? "60px" : "120px",
                            maxWidth: "100%",
                            objectFit: "contain",
                        }}
                    />
                </div>

                {/* Hamburger Icon for Mobile */}
                {isMobile && (
                    <button
                        onClick={toggleMenu}
                        className="hamburger"
                        style={{
                            background: "none",
                            border: "none",
                            fontSize: "28px",
                            cursor: "pointer",
                            color: "#fff",
                            zIndex: 20,
                        }}
                    >
                        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                    </button>
                )}

                {/* Navbar - desktop version */}
                {!isMobile && (
                    <nav className="nav-menu">
                        <ul>
                            <li style={{ animationDelay: "0s" }}>
                                <a href="/home" className="nav-link">Home</a>
                            </li>
                            <li style={{ animationDelay: "0.1s" }}>
                                <a href="/about" className="nav-link">About</a>
                            </li>
                            <li style={{ animationDelay: "0.2s" }}>
                                <a href="/services" className="nav-link">Services</a>
                            </li>
                            <li style={{ animationDelay: "0.3s" }}>
                                <a href="/contact" className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </nav>

                )}
            </div>

            {/* Mobile menu overlay */}
            {isMobile && (
                <div
                    className={`mobile-menu-overlay ${menuOpen ? "open" : ""}`}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        opacity: menuOpen ? 1 : 0,
                        visibility: menuOpen ? "visible" : "hidden",
                        transition: "opacity 0.3s ease, visibility 0.3s ease",
                        zIndex: 15,
                    }}
                    onClick={() => setMenuOpen(false)}
                >
                    <nav
                        className={`mobile-nav ${menuOpen ? "open" : ""}`}
                        style={{
                            position: "absolute",
                            top: 70,
                            right: 0,
                            width: "30%",
                            height: "35%",
                            borderRadius: "20px",
                            backgroundColor: "#fff",
                            padding: "80px 20px 20px 20px",
                            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
                            transition: "transform 0.3s ease",
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ul
                            style={{
                                listStyle: "none",
                                padding: 0,
                                margin: 0,
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                            }}
                        >
                            <li>
                                <a
                                    href="/home"
                                    className="nav-link"
                                    style={{
                                        display: "block",
                                        padding: "10px 0",
                                        fontSize: "18px",
                                        color: "#105F6D",
                                        textDecoration: "none",
                                        fontWeight: "500",
                                    }}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="nav-link"
                                    style={{
                                        display: "block",
                                        padding: "10px 0",
                                        fontSize: "18px",
                                        color: "#105F6D",
                                        textDecoration: "none",
                                        fontWeight: "500",
                                    }}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/services"
                                    className="nav-link"
                                    style={{
                                        display: "block",
                                        padding: "10px 0",
                                        fontSize: "18px",
                                        color: "#105F6D",
                                        textDecoration: "none",
                                        fontWeight: "500",
                                    }}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="nav-link"
                                    style={{
                                        display: "block",
                                        padding: "10px 0",
                                        fontSize: "18px",
                                        color: "#105F6D",
                                        textDecoration: "none",
                                        fontWeight: "500",
                                    }}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>

                </div>
            )}
        </header>
    );
}