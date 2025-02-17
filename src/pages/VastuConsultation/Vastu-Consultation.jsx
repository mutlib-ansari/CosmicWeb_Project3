import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./vastu-consultation.css"

const App = () => {
    return (
        <section>
            <div className="breadcrumb-container">
                {/* Overlay */}
                <div className="breadcrumb-overlay"></div>

                <nav aria-label="breadcrumb" className="breadcrumb-content">
                    <ol className="breadcrumb bg-transparent text-light text-center" style={{ fontSize: "27px" }}>
                        <li className="breadcrumb-item">
                            <a href="/" className="text-light">Home</a>
                        </li>
                        <li className="breadcrumb-item active text-light" aria-current="page">
                            Vastu Consultation
                        </li>
                    </ol>
                </nav>
            </div>
            <Container className=''>

                <Row className='py-5'>
                    {/* Left Section */}
                    <Col md={6} className=" d-flex flex-column align-items-center text-center ">
                        <img src="https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-71-768x914.jpg.webp" alt="Series of Mantras" className="img-fluid mb-3" />
                        {/* <button className="astrologybtn btn-warning">Book Appointment</button> */}

                        <button className="c-button c-button--gooey vastubtn "> Book Appointment
                            <div className="c-button__blobs">
                                <div />
                                <div />
                                <div />
                            </div>
                        </button>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'block', height: 0, width: 0 }}>
                            <defs>
                                <filter id="goo">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
                                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                                    <feBlend in="SourceGraphic" in2="goo" />
                                </filter>
                            </defs>
                        </svg>

                    </Col>

                    {/* Right Section */}
                    <Col md={6} className='py-3 astrologyRight'>
                        <h2>What is Vastu Shastra? (Book Appointment)</h2>
                        <p>
                            Shradha Sharma is one of the Best Professional, Famous, Astro Vastu Consultant & Vastu Expert in India with more than 8 years experience.

                            Vastu is a science of balanced energies at home provides an ideal environment for growth, confidence, happiness and prosperity.

                            Vastu is also the scientific study of directions, which aims at utilizin
                        </p>
                        <p>
                            Astrology is a science of balanced angles at home, grahas in our kundali and movement of growth,
                            decline in kundali of a person. It is not about predicting the future but knowing the possibilities
                            and taking control of life with the right direction and timing.
                        </p>
                        <h4 className="mt-4">Shradha Sharma Astro Vastu Consultant</h4>
                        <p>
                            Shradha Sharma is the best astrologer in Vastu, Numerology, Palmistry, and more, with experience
                            in various aspects of astrology.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default App;
