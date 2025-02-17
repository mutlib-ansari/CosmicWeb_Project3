import React, { useState } from 'react';
import { Container, Row, Modal, Button, Col } from 'react-bootstrap';
import "./astrology-consultation.css"


const horoscopes = [
    { sign: "Aries", date: "March 21 - April 19", icon: "https://sencogoldanddiamonds.com/_next/image?url=https%3A%2F%2Fsencowebfiles.s3.ap-south-1.amazonaws.com%2Fastro-zodiacs%2Faries_thumbnail.png&w=256&q=75" },
    { sign: "Taurus", date: "April 20 - May 20", icon: "https://sencowebfiles.s3.ap-south-1.amazonaws.com/astro-zodiacs/taurus_thumbnail.png" },
    { sign: "Gemini", date: "May 21 - June 20", icon: "https://sencowebfiles.s3.ap-south-1.amazonaws.com/astro-zodiacs/gemini_thumbnail.png" },
    { sign: "Cancer", date: "June 21 - July 22", icon: "https://sencowebfiles.s3.ap-south-1.amazonaws.com/astro-zodiacs/cancer_thumbnail.png" },
    { sign: "Leo", date: "July 23 - August 22", icon: "https://sencowebfiles.s3.ap-south-1.amazonaws.com/astro-zodiacs/leo_thumbnail.png" },
    { sign: "Virgo", date: "August 23 - September 22", icon: "https://sencowebfiles.s3.ap-south-1.amazonaws.com/astro-zodiacs/virgo_thumbnail.png" },
    { sign: "Libra", date: "September 23 - October 22", icon: "https://sencowebfiles.s3.ap-south-1.amazonaws.com/astro-zodiacs/libra_thumbnail.png" },
    { sign: "Scorpio", date: "October 23 - November 21", icon: "https://sencowebfiles.s3.ap-south-1.amazonaws.com/astro-zodiacs/scorpio_thumbnail.png" },
    { sign: "Sagittarius", date: "November 22 - December 21", icon: "https://sencowebfiles.s3.ap-south-1.amazonaws.com/astro-zodiacs/sagittarius_thumbnail.png" },
    { sign: "Capricorn", date: "December 22 - January 19", icon: "https://sencowebfiles.s3.ap-south-1.amazonaws.com/astro-zodiacs/capricorn_thumbnail.png" },
    { sign: "Aquarius", date: "January 20 - February 18", icon: "https://sencowebfiles.s3.ap-south-1.amazonaws.com/astro-zodiacs/aquarius_thumbnail.png" },
    { sign: "Pisces", date: "February 19 - March 20", icon: "https://sencowebfiles.s3.ap-south-1.amazonaws.com/astro-zodiacs/pisces_thumbnail.png" },
];


const App = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedHoroscope, setSelectedHoroscope] = useState(null);

    const handleShowModal = (horoscope) => {
        setSelectedHoroscope(horoscope);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedHoroscope(null);
    };
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
                            Astrology Consultation
                        </li>
                    </ol>
                </nav>
            </div>
            <Container className=''>

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
                    <div className="text-center my-5">
                        <h2 className="mb-4 text-muted2">
                            CHECK YOUR <strong>HOROSCOPE</strong>
                        </h2>
                        <p className="text-muted">Life is full of possibilities.</p>
                        <Row>
                            {horoscopes.map((horoscope, index) => (
                                <Col key={index} md={3} sm={6} className="mb-4">
                                    <div className="horoscope-card p-4 text-center" onClick={() => handleShowModal(horoscope)}>
                                        <img src={horoscope.icon} alt={horoscope.sign} className="horoscope-icon" />
                                        <h5 className="mt-3">{horoscope.sign}</h5>
                                        <p className="text-muted">{horoscope.date}</p>
                                    </div>
                                </Col>
                            ))}
                        </Row>

                    </div>
                    <Modal show={showModal} onHide={handleCloseModal} centered>
                        {selectedHoroscope && (
                            <div className="modal-content-custom">
                                {/* Close Button */}
                                <Button variant="light" onClick={handleCloseModal} className="close-btn">
                                    &times;
                                </Button>

                                <Row className="p-3">
                                    {/* Left Side: Image */}
                                    <Col md={5} className="d-flex align-items-center justify-content-center">
                                        <img src={selectedHoroscope.icon} alt={selectedHoroscope.sign} className="modal-image" />
                                    </Col>

                                    {/* Right Side: Text */}
                                    <Col md={7} className="p-3">
                                        <h4>{selectedHoroscope.sign}</h4>
                                        <p>{selectedHoroscope.description || "Shradha Sharma is the best astrologer in Vastu, Numerology, Palmistry"}</p>
                                        <ul>
                                            {(selectedHoroscope.points || []).map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                        )}
                    </Modal>
                </Row>
            </Container>

        </section>
    );
};

export default App;
