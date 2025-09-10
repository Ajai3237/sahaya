"use client";

import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";



function About() {

    const sectionRef = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShow(true);  // 👈 appear
                } else {
                    setShow(false); // 👈 reset when scrolled out
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const services = [
        "Home-Based Palliative Care",
        "Psychological & Emotional Care",
        "Nutrition & Diet Support",
        "Spiritual & Holistic Care",
        "Day Care / In-Patient Palliative Unit",
        "24/7 Telemedicine / Helpline Support",
        "Rehabilitation & Therapy Support",
    ];


    //  why choose 
    const chooseRef = useRef(null);
    const [chooseShow, setChooseShow] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setChooseShow(true);   // 👈 show once
                    observer.unobserve(entry.target); // 👈 stop observing after first trigger
                }
            },
            { threshold: 0.2 }
        );

        if (chooseRef.current) observer.observe(chooseRef.current);

        return () => {
            if (chooseRef.current) observer.unobserve(chooseRef.current);
        };
    }, []);

    const items = [
        "Home-Based Palliative Care",
        "Holistic Approach",
        "Family Support",
        "Dignity & Comfort",
        "Always Here for You",
        "Community & Volunteer Programs",
    ];

    // image moveing
    const imgRef = useRef(null);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width - 0.5) * 20; // tilt range (±20deg)
        const y = ((e.clientY - top) / height - 0.5) * 20;

        imgRef.current.style.transform = `rotateX(${-y}deg) rotateY(${x}deg) scale(1.05)`;
    };

    const handleMouseLeave = () => {
        imgRef.current.style.transform = "rotateX(0) rotateY(0) scale(1)";
    };



    //  animation hero content 

    const heroRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    observer.unobserve(entry.target); // animate once
                }
            },
            { threshold: 0.3 }
        );

        if (heroRef.current) observer.observe(heroRef.current);
    }, []);



    return (
        <>
             <div
    ref={sectionRef}
    className={`advance-services ${show ? "show" : ""}`}
  >
    <h2>Advance Services</h2>
    <div className="advance-services-grid">
      {services.map((service, i) => (
        <div
          key={i}
          className={show ? "show" : ""}
          style={{ transitionDelay: `${i * 0.2}s` }}
        >
          <FontAwesomeIcon
            icon={faCircleCheck}
            style={{ color: "#f7931e", marginRight: "8px" }}
          />
          {service}
        </div>
      ))}
    </div>
  </div>


            {/* wrapper for div 2 + center div */}
            <div style={{ position: "relative" }}>
                {/* div 2 */}
                <div className="hero-section">
                    <div ref={heroRef} className="hero-content">
                        <h1>
                            Sahaya <br />
                            Goes Above <br />
                            and Beyond Every Day
                        </h1>
                        <p>
                            Lorem Ipsum is placeholder text used in design and development before the final content is ready...
                        </p>
                        <button>CONTACT US</button>
                    </div>
                </div>




                {/* center box */}
                <div className="center-box">
                    <h3>Why Choose Us</h3>
                    <p>
                        At SAHAYA, we believe palliative care is not just about treating illness — it’s about caring for the whole person with compassion, dignity, and respect.
                        Our team of experienced doctors, nurses, and caregivers are dedicated to making every moment comfortable, meaningful, and peaceful for both patients and their families.
                    </p>
                </div>
            </div>




            <div className="why-choose" ref={chooseRef}>
                <div style={{ flex: 1, paddingLeft: "90px" }}>
                    <h2>Why Choose Us?</h2>
                    <ul>
                        {items.map((item, i) => (
                            <li
                                key={i}
                                className={chooseShow ? "slide-in" : ""}
                                style={{ transitionDelay: `${i * 0.2}s` }}
                            >
                                <span></span> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right side - Image */}
                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        perspective: "1000px", // gives depth
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        ref={imgRef}
                        src="/Asset/wheel.jpg"
                        alt="Descriptive Alt Text"
                        style={{
                            width: "400px",
                            height: "auto",
                            borderRadius: "12px",
                            transition: "transform 0.2s ease",
                        }}
                    />
                </div>
            </div>

















        </>
    )
}

export default About