import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import img from "../../assets/images/elementorbox/handimg.jpg"
import 'animate.css';
import './elementorbox.css'
import { CiLocationOn } from "react-icons/ci";
import { SiClockify } from "react-icons/si";
import Button from 'react-bootstrap/Button';
import { IoIosStar } from "react-icons/io";
import 'aos/dist/aos.css';


function Elemantorbox() {
    return (
        <div style={{
            backgroundImage: "linear-gradient(rgba(46, 27, 31, 0.5), rgb(59, 36, 109)), url('https://template-kit.evonicmedia.com/layout50/wp-content/uploads/2023/10/fantasy-planet-in-space-abstract-background-2023-03-15-17-12-12-utc-2-1.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed',
            width: '100%',
        }} className='bg'>
            <Container>
                <Row className='elementor'>
                    <Col className='col-md-7 elementor1 ' data-aos="fade-up-right">
                        <div className=" text-center my-4">
                            <img
                                loading="lazy"
                                decoding="async"
                                width="700"
                                height="570"
                                src="https://template-kit.evonicmedia.com/layout50/wp-content/uploads/2023/10/a-woman-fortuneteller-tells-a-man-on-tarot-cards-2023-01-25-13-02-09-utc-1-2.jpg"
                                // src="https://cosmicenergiies.com/wp-content/uploads/2023/10/shradha-sharma-Best-Vastu-Consultant-in-gurgaon.png"
                                className="img-fluid animate__animated animate__bounce" // img-fluid for responsiveness, and animation class if needed
                                alt="A woman fortune teller with tarot cards"
                            />
                        </div>
                    </Col>
                    <Col className='col-md-5 elementor2 py-3' data-aos="fade-up-left">
                        <div className='elementor-text'>
                            <span>Just Make an Appointment & You’re Done!</span>
                            <h2>opening hours</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.</p>
                            <ul className="list-unstyled py-3  ">
                                <li className="d-flex align-items-center mb-3 text-white">
                                    <CiLocationOn className="me-5  " style={{ fontSize: '3rem' }} />
                                    <div>
                                        <h5 className="mb-0 sizee">
                                            Monday to Thursday</h5>
                                        <p className="mb-0 sizee">9:30 am - 6:30 pm</p>
                                    </div>
                                </li>
                                {/* <li className="d-flex align-items-center mb-3 text-white">
                                    <SiClockify className="me-5 " style={{ fontSize: '3rem' }} />
                                    <div>
                                        <h5 className="mb-0 sizee">Opening Hours</h5>
                                        <p className="mb-0 sizee">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                    </div>
                                </li> */}
                            </ul>
                            {/* <Button className='Button  mt-0'><IoIosStar /> Book Now</Button> */}
                            <div className=''>
                                <button className="c-button c-button--gooey"> <IoIosStar  />Book now
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
                           
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Elemantorbox