import React from "react";

function Footer() {
    return (
        <>
            <footer
                style={{
                    backgroundColor: "#1c1c1c",
                    color: "#fff",
                    padding: "50px 60px 20px", // ✅
                    fontFamily: "Arial, sans-serif",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap", 
                        marginBottom: "40px",
                        gap: "30px",
                    }}
                >
                    {/* About Section */}
                    <div style={{ flex: "1", minWidth: "250px" }}>
                        <h3 style={{ marginBottom: "15px" }}>About</h3>
                        <p style={{ color: "#ccc", lineHeight: "1.6" }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Provident rerum unde possimus molestias dolorem fuga, illo quis
                            fugiat!
                        </p>
                    </div>

                    {/* Navigation Section */}
                    <div style={{ flex: "1", minWidth: "200px", textAlign: "center" }}>
                        <h3 style={{ marginBottom: "15px" }}>Navigations</h3>
                        <ul
                            style={{
                                listStyle: "none",
                                padding: 0,
                                lineHeight: "2",
                                margin: 0,
                            }}
                        >
                            <li>
                                <a href="/" style={{ color: "#ccc", textDecoration: "none" }}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/services"
                                    style={{ color: "#ccc", textDecoration: "none" }}
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    style={{ color: "#ccc", textDecoration: "none" }}
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    style={{ color: "#ccc", textDecoration: "none" }}
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section (Logo) */}
                    <div
                        style={{
                            flex: "1",
                            minWidth: "250px",
                            textAlign: "center",
                        }}
                    >
                        <img
                            src="/Asset/SAHAYA_V_CARD_page-0002-removebg-preview.png"
                            alt="Logo"
                            style={{ width: "100px", marginBottom: "15px" }}
                        />
                    </div>
                </div>

                {/* Bottom Copyright Bar */}
                <div
                    style={{
                        borderTop: "1px solid #333",
                        paddingTop: "15px",
                        textAlign: "center",
                        color: "#aaa",
                        fontSize: "14px",
                    }}
                >
                    Copyright ©2025 All rights reserved | This template is made with{" "}
                    <span style={{ color: "#fff", fontWeight: "bold" }}>TGS</span>
                </div>
            </footer>


        </>
    );
}

export default Footer;
