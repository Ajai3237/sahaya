import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Contact() {
    return (
        <>
            <div
                style={{
                    backgroundImage: "url('/Asset/91f35d064486b0a6f75471c2e09903d7.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "790px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                    fontFamily: "'Roboto', sans-serif",
                    marginTop: "-80px",
                    borderTopLeftRadius: "50px",
                    borderTopRightRadius: "50px",
                    borderBottomLeftRadius: "0",
                    borderBottomRightRadius: "0",


                }}
            >
                {/* Contact Form Box */}
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        background: "rgba(255, 255, 255, 0.5)",
                        borderRadius: "12px",
                        padding: "40px",
                        maxWidth: "1000px",
                        width: "100%",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                    }}
                >
                    {/* Left Section */}
                    <div
                        style={{
                            flex: "1 1 300px",
                            paddingRight: "30px",
                            marginBottom: "20px",
                        }}
                    >
                        <h2 style={{ color: "#105F6D", marginBottom: "10px", fontSize: "clamp(18px, 2vw, 25px)" }}>
                            Get in Touch
                        </h2>
                        <p style={{ fontSize: "clamp(12px, 1.5vw, 14px)", color: "#555", marginBottom: "20px" }}>
                            Lorem Ipsum is placeholder text used in design and development before the
                            final content is ready. It helps you see how text will look on a webpage,
                            poster, or layout.
                        </p>

                        <p style={{ color: "#105F6D" }}>
                            <strong>📍</strong> Location
                        </p>
                        <p style={{ color: "#105F6D" }}>
                            <strong>📞</strong> +91 9995 27 5823
                        </p>
                        <p>
                            <strong>📧</strong>{" "}
                            <a
                                style={{ textDecoration: "none", color: "#105F6D" }}
                                href="mailto:sahayahomemedicalcare@gmail.com"
                            >
                                sahayahomemedicalcare@gmail.com
                            </a>
                        </p>

                        <p style={{ marginTop: "20px" }}>Follow Our Social Media</p>
                        <div style={{ display: "flex", gap: "15px" }}>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#f7931e" }}
                            >
                                <FontAwesomeIcon icon={faFacebookF} size="lg" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#f7931e" }}
                            >
                                <FontAwesomeIcon icon={faInstagram} size="lg" />
                            </a>
                        </div>
                    </div>

                    {/* Right Section (Form) */}
                    <div style={{ flex: "1 1 300px" }}>
                        <h2 style={{ color: "#105F6D", marginBottom: "20px", fontSize: "clamp(18px, 2vw, 25px)" }}>
                            Send us a Message
                        </h2>
                        <form>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "15px" }}>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    style={{
                                        flex: "1 1 45%",
                                        padding: "10px",
                                        borderRadius: "6px",
                                        border: "1px solid rgba(255, 255, 255, 0.5)",
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    style={{
                                        flex: "1 1 45%",
                                        padding: "10px",
                                        borderRadius: "6px",
                                        border: "1px solid rgba(255, 255, 255, 0.5)",
                                    }}
                                />
                            </div>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "15px" }}>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    style={{
                                        flex: "1 1 45%",
                                        padding: "10px",
                                        borderRadius: "6px",
                                        border: "1px solid rgba(255, 255, 255, 0.5)",
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    style={{
                                        flex: "1 1 45%",
                                        padding: "10px",
                                        borderRadius: "6px",
                                        border: "1px solid rgba(255, 255, 255, 0.5)",
                                    }}
                                />
                            </div>
                            <textarea
                                placeholder="Message..."
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    borderRadius: "6px",
                                    border: "1px solid rgba(255, 255, 255, 0.5)",
                                    minHeight: "100px",
                                    marginBottom: "15px",
                                }}
                            ></textarea>
                            <button
                                type="submit"
                                style={{
                                    background: "#105F6D",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "6px",
                                    padding: "10px 20px",
                                    cursor: "pointer",
                                }}
                            >
                                CONTACT US
                            </button>
                        </form>
                    </div>
                </div>
            </div>


            <div>
                <div
                    style={{
                        backgroundColor: "#105F6D",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap", 
                        fontFamily: "'Roboto', sans-serif",
                        padding: "40px 60px",
                        gap: "20px",
                    }}
                >
                    {/* Left side */}
                    <div style={{ flex: 1, minWidth: "250px" }}>
                        <h3 style={{ marginBottom: "10px", fontSize: "clamp(18px, 2vw, 24px)" }}>
                            For updates
                        </h3>
                        <p style={{ color: "#d9d9d9", fontSize: "clamp(12px, 1.5vw, 16px)" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>

                    {/* Right side */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            flex: 1,
                            minWidth: "250px",
                            flexWrap: "wrap", 
                        }}
                    >
                        <input
                            type="email"
                            placeholder="Email"
                            style={{
                                flex: 1,
                                padding: "10px",
                                border: "none",
                                borderBottom: "2px solid #ccc",
                                background: "transparent",
                                color: "white",
                                outline: "none",
                                minWidth: "200px",
                            }}
                        />
                        <button
                            style={{
                                background: "white",
                                color: "#105F6D",
                                border: "none",
                                padding: "10px 20px",
                                cursor: "pointer",
                                fontWeight: "bold",
                                borderRadius: "4px",
                                whiteSpace: "nowrap",
                            }}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>


            </div>



        </>
    )
}

export default Contact