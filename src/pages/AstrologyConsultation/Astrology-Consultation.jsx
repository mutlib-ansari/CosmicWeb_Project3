import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./astrology-consultation.css"

const App = () => {
    return (
        <Container className='py-5'>
            <Row className='py-5'>
                {/* Left Section */}
                <Col md={4} className=" d-flex flex-column align-items-center text-center ">
                    <img src="https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-158.jpg.webp" alt="Series of Mantras" className="img-fluid mb-3" />
                    {/* <button className="astrologybtn btn-warning">Book Appointment</button> */}
                    <div className=''>
                        <button className="c-button c-button--gooey "> Book Appointment
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
                    </div>
                </Col>

                {/* Right Section */}
                <Col md={8} className='py-3 astrologyRight'>
                    <h2>What is Astrology? (Book Appointment)</h2>
                    <p>
                        Shradha Sharma is one of the Best Professional, Famous, Astro-Vastu Consultant & Astrology Experts
                        in India with more than 8 years experience.
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
    );
};

export default App;
