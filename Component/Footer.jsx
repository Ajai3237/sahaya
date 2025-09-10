import React from "react";


function Footer() {
    return (
        <footer className="footer">
            {/* Main Container */}
            <div className="footer-container">
                {/* About Section */}
                <div className="footer-item about">
                    <h3>SAHAYA</h3>
                    <p>Home Medical Care Services</p>
                    <img 
                        src="/Asset/white_org_log.png"
                        alt="Logo"
                        className="footer-logo"
                    />
                </div>

                {/* Navigation Section */}
                <div className="footer-item Navigations">
                    <h3>Navigations</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="footer-item contact-info">
                    <h3>For more</h3>
                    <div className="contact-row">
                        <p><strong>📍</strong> Location</p>
                        <p><strong>📞</strong> +91 9995 27 5823</p>
                    </div>
                    <p>
                        <strong>📧</strong>{" "}
                        <a href="mailto:sahayahomemedicalcare@gmail.com">
                            sahayahomemedicalcare@gmail.com
                        </a>
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bar">
                Copyright ©2025 All rights reserved | This template is made
                with <span>TGS</span>
            </div>
        </footer>
    );
}

export default Footer;
