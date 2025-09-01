
"use client";

import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faKitMedical } from "@fortawesome/free-solid-svg-icons";


function Home() {

  const boxRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        } else {
          setShow(false);
        }
      },
      { threshold: 0.2 }
    );

    if (boxRef.current) observer.observe(boxRef.current);

    return () => {
      if (boxRef.current) observer.unobserve(boxRef.current);
    };
  }, []);


  //  4 card animation
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, index])]);
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const titles = [
    "Pain & symptom management",
    "Emotional support",
    "Dignity & respect",
    "Quality of life care",
  ];


  return (
    <>
      {/* div 1 */}
      <div style={{minHeight: "830px", width: "100%", backgroundImage: "url(/Asset/d2731d380468aed0130a3a39b8de58dc.jpg)", backgroundSize: "cover", backgroundPosition: "center",
          position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 60px", boxSizing: "border-box", overflow: "hidden",
          flexWrap: "wrap",
        }}
      >
        {/* Left Side - Text */}
        <div className='hero-text-container'
          style={{ flex: "1",color: "#105F6D",paddingLeft: "70px",minWidth: "300px",}}
        >
          <h1 style={{   fontSize: "60px",fontWeight: "bold",marginBottom: "20px",fontFamily: "'Roboto', sans-serif", }}
          >
            Home Health & <br /> Hospice
          </h1>
          <p style={{   fontSize: "20px",  marginBottom: "30px", maxWidth: "500px", fontFamily: "'Roboto', sans-serif", fontWeight: "bold",}}
          >
            Founded by Nurses, Driven by Compassion, Providing Quality Care
          </p>
          <button style={{ backgroundColor: "#ffb703",  border: "none", padding: "12px 24px", fontSize: "16px", fontWeight: "600",borderRadius: "20px",
              cursor: "pointer", color: "#105F6D",}}
          >
            CONTACT US
          </button>
        </div>

        {/* Right Side - Image */}
        <div className='hero-image-container'
          style={{ flex: "1", display: "flex",justifyContent: "flex-end",paddingTop: "100px", marginRight: "-60px", minWidth: "300px", }}
        >
          <img src="/Asset/Dashboard_952_hospice_11_18.jpg"alt="Care"
            style={{ width: "100%",maxWidth: "900px",height: "auto",borderTopLeftRadius: "20px",  borderBottomLeftRadius: "20px",borderTopRightRadius: "0",
              borderBottomRightRadius: "0", boxShadow: "0 8px 20px rgba(0,0,0,0.15)", objectFit: "cover", }}
          />
        </div>


      </div>



      <div ref={boxRef}className={`orange-box ${show ? "show" : ""}`}
        style={{position: "absolute", top: "670px", right: "120px", backgroundColor: "#FBA018", padding: "30px", borderRadius: "16px", width: "90%", maxWidth: "520px",
           boxShadow: "0 6px 20px rgba(0,0,0,0.2)", zIndex: 10, fontFamily: "'Roboto', sans-serif", textAlign: "center", wordWrap: "break-word",
          overflowWrap: "break-word",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon
              key={i}
              icon={faStar}
              style={{color: "white",fontSize: "clamp(16px, 2vw, 24px)",marginRight: i < 4 ? "5px" : "0",}}
            />
          ))}
        </div>

        <h3 style={{ color: "#105F6D", fontSize: "clamp(18px, 3vw, 40px)", fontWeight: "bold", marginBottom: "10px",  }}
        >
          Everyone Deserves 5 - Star Care at Home
        </h3>

        <p style={{ color: "#105F6D", fontSize: "clamp(12px, 2vw, 18px)", lineHeight: "1.5",}}
        >
          Lorem Ipsum is placeholder text used in design and development before
          the final content is ready. It helps you see how text will look on a
          webpage, poster, or layout.
        </p>
      </div>




      {/* div 2 */}


      <div style={{width: "100%",backgroundColor: "#D4ECEC",display: "flex",alignItems: "center",justifyContent: "center", padding: "40px 20px",
          boxSizing: "border-box",}}
      >
        <div style={{width: "100%",maxWidth: "1200px",backgroundColor: "#D4ECEC",display: "flex",flexDirection: "column",alignItems: "center",
            justifyContent: "flex-start", gap: "40px",
          }}
          className="mission-section"
        >
          {/* Top Section */}
          <div style={{display: "flex",justifyContent: "space-between",gap: "40px",flexWrap: "wrap", 
            }}
            className="mission-top"
          >
            {/* Left Side - Mission Points */}
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h2 style={{ fontSize: "clamp(28px, 5vw, 60px)",  fontWeight: "bold",marginBottom: "30px",fontFamily: "'Roboto', sans-serif",color: "#105F6D",}}
              >
                Mission & Vision
              </h2>
              <ul style={{listStyle: "none",padding: 0, margin: 0,fontSize: "clamp(14px, 2vw, 20px)",fontFamily: "'Roboto', sans-serif", lineHeight: "1.6",
                  color: "#105F6D",}}
              >
                <li style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
                  <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: "10px", color: "#FBA018" }} />
                  Provide compassionate care that relieves pain and suffering.
                </li>
                <li style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
                  <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: "10px", color: "#FBA018" }} />
                  Support patients and families emotionally, physically, and spiritually.
                </li>
                <li style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
                  <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: "10px", color: "#FBA018" }} />
                  Preserve dignity and respect at every stage of illness.
                </li>
                <li style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
                  <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: "10px", color: "#FBA018" }} />
                  Focus on quality of life, not just treatment.
                </li>
                <li style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
                  <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: "10px", color: "#FBA018" }} />
                  Walk alongside families with empathy and understanding.
                </li>
              </ul>
            </div>

            {/* Right Side - Paragraph */}
            <div style={{ flex: "1", minWidth: "300px", fontSize: "clamp(14px, 1.5vw, 17px)", lineHeight: "1.6",fontFamily: "'Roboto', sans-serif",color: "#105F6D", }}
              className="right-paragraph"
            >
              <p>
                Lorem Ipsum is placeholder text used in design and development before the final content is ready.
                It helps you see how text will look on a webpage, poster, or layout. Lorem Ipsum is placeholder
                text used in design and development before the final content is ready. It helps you see how text
                will look on a webpage, poster, or layout.
              </p>
            </div>

          </div>

          {/* Bottom Section - 4 Cards */}
          <div style={{display: "grid",  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px",width: "100%",
            }}
          >
            {titles.map((title, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                className={`card ${visibleCards.includes(index) ? "show" : ""}`}
                style={{ backgroundColor: "#fff",padding: "30px 20px",borderRadius: "12px", boxShadow: "0 5px 15px rgba(0,0,0,0.15)",textAlign: "center",
                }}
              >
                <div style={{fontSize: "40px", marginBottom: "15px",color: "#105F6D",
                  }}
                >
                  <FontAwesomeIcon icon={faKitMedical} />
                </div>
                <h3
                  style={{fontSize: "clamp(16px, 2vw, 18px)", fontWeight: "600",marginBottom: "10px",fontFamily: "'Roboto', sans-serif",color: "#105F6D",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{ fontSize: "clamp(12px, 1.5vw, 14px)", color: "#555",fontFamily: "'Roboto', sans-serif",
                  }}
                >
                  Lorem Ipsum is placeholder text used in design and development before
                  the final content is ready.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
