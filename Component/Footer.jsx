import React from "react";


function Footer() {
    return (
        <>
            <footer
                style={{
                    backgroundColor: "#1c1c1c",
                    color: "#fff",
                    padding: "30px 40px 15px",
                    fontFamily: "Arial, sans-serif",
                }}
            >
                {/* Main Container */}
                <div className="footer-container">
                    {/* About Section */}
                    <div className="footer-item">
                        <h3>About</h3>
                        <p style={{ color: "#ccc", lineHeight: "1.6" }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Provident rerum unde possimus molestias dolorem fuga, illo quis
                            fugiat!
                        </p>
                    </div>

                    {/* Navigation Section */}
                    <div className="footer-item center-text Navigations ">
                        <h3>Navigations</h3>
                        <ul
                            style={{
                                listStyle: "none",
                                padding: 0,
                                lineHeight: "2",
                                margin: 0,
                            }}
                        >
                            <li><a href="/" style={{ color: "#ccc", textDecoration: "none" }}>Home</a></li>
                            <li><a href="/services" style={{ color: "#ccc", textDecoration: "none" }}>Services</a></li>
                            <li><a href="/about" style={{ color: "#ccc", textDecoration: "none" }}>About Us</a></li>
                            <li><a href="/contact" style={{ color: "#ccc", textDecoration: "none" }}>Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Logo + Social Section */}
                    <div className="footer-item center-text">
                        <img className="footer-img"
                            src="/Asset/SAHAYA_V_CARD_page-0002-removebg-preview.png"
                            alt="Logo"
                            style={{ width: "100px",}}
                        />
                        
                      
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bar"
                    style={{
                        borderTop: "1px solid #333",
                        paddingTop: "10px",
                       
                        textAlign: "center",
                        color: "#aaa",
                        fontSize: "14px",
                    }}
                >
                    Copyright ©2025 All rights reserved | This template is made
                    with <span style={{ color: "#fff", fontWeight: "bold" }}>TGS</span>
                </div>
            </footer>
        </>
    );
}

export default Footer;
