// import React from 'react';
// import "./footer.css";
// import Button from 'react-bootstrap/Button';
// import { IoCallOutline } from "react-icons/io5";
// import { MdOutlineMail } from "react-icons/md";
// import { CiLocationOn } from "react-icons/ci";
// import { FaStar } from "react-icons/fa";
// import logo from '../../assets/images/navbar/logo2.png'
// import { FaTwitter } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa6";
// import 'aos/dist/aos.css';





// const Footer = () => {
//     return (
//         <footer className="footer" style={{
//             backgroundImage: " url('https://cosmicenergiies.com/wp-content/themes/dt-the7/images/backgrounds/patterns/full/congruent_outline.png')",
//             backgroundPosition: 'center center',
//             backgroundAttachment: 'fixed',
//             width: '100%',
//         }}>
//             <div className="container">
//                 <div className="row text-white" data-aos="fade-up">
//                     <div className="col-md-3 footer-contact-info ">
//                         <h3> Contact Info</h3>
//                         <p> <IoCallOutline className='icons' /> Call: + (97) 1234-567-891</p>
//                         <p> <MdOutlineMail className='icons' />Email: youremail@gmail.com</p>
//                         <p> <CiLocationOn className='icons' />Address: Plaza XYZ Street, XYZ City, XYZ</p>
//                     </div>
//                     <div className="col-md-3 footer-quick-links">
//                         <h3>Quick Links</h3>
//                         <ul className='links'>
//                             <li> <FaStar className='stars' />About Us</li>
//                             <li> <FaStar className='stars' />Services</li>
//                             <li> <FaStar className='stars' />Blogs</li>
//                             <li> <FaStar className='stars' />Contact Us</li>
//                         </ul>
//                     </div>
//                     <div className="col-md-3 footer-recent-posts">
//                         <h3>Recent Posts</h3>
//                         <ul className='posts'>
//                             <li>Crystal for Each Zodiac Sign</li>
//                             <li>When Virgo Season Arrives?</li>
//                         </ul>
//                     </div>
//                     <div className="col-md-3 footer-newsletter">
//                         <h3>SING-UP FOR OUR NEWLETTERS</h3>
//                         <form className='form'>
//                             <input type="email" placeholder="Enter email address" />
//                             {/* <Button type="submit" className='Button2'> Subscribe</Button> */}
//                             <button className="c-button c-button--gooey Button3"> Subscribe
//                                 <div className="c-button__blobs">
//                                     <div />
//                                     <div />
//                                     <div />
//                                 </div>
//                             </button>
//                             <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'block', height: 0, width: 0 }}>
//                                 <defs>
//                                     <filter id="goo">
//                                         <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
//                                         <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
//                                         <feBlend in="SourceGraphic" in2="goo" />
//                                     </filter>
//                                 </defs>
//                             </svg>


//                         </form>
//                         <p>We promise not to spam you :)</p>
//                     </div>
//                     <div className="col-md-12 footer-copyright">
//                         <ul className='copy'>
//                             <li><img src={logo} /></li>
//                             <li>
//                                 Copyright © 2023 AstralVue By Evonicmedia. All Rights Reserved ...................................................... follow us</li>
//                             <li className=''><a><FaFacebookF /> </a><a><FaTwitter /></a> <a ><FaInstagram /></a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;


import { Container, Row, Col, Form } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';
import { MdHeadset, MdEmail, MdChat } from 'react-icons/md';
import logo from '../../assets/images/navbar/logo2.png'
import './footer.css';

export default function Footer() {
    return (
        <footer className="dreams-tour-footer"
            style={{
                backgroundImage: " url('https://cosmicenergiies.com/wp-content/themes/dt-the7/images/backgrounds/patterns/full/congruent_outline.png')",
                backgroundPosition: 'center center',
                backgroundAttachment: 'fixed',
                width: '100%',
            }}>
            <Container>
                {/* Top Section */}
                <Row className="mb-5">
                    <Col md={6}>
                        {/* <h2 className='Dreams-text'>Dreams Tour</h2> */}

                        <img src={logo} className='footerimg py-3'/>
                        <p className="lead">
                            Our mission is to offer you a seamless and enjoyable car rental experience.
                            Whether you're planning a road trip
                        </p>

                        <div className="newsletter-section">
                            <h3 className='Dreams-text'>Subscribe to Our Newsletter</h3>
                            <p>Just sign up and we'll send you a notification by email.</p>
                            <Form className="d-flex">
                                <Form.Control
                                    type="email"
                                    placeholder="Enter Email Address"
                                    className="me-2"
                                />
                                {/* <Button variant="primary">Subscribe</Button> */}
                                <button className="c-button c-button--gooey Button3"> Subscribe
                                    <div className="c-button__blobs">
                                        <div />
                                        <div />
                                        <div />
                                    </div>                             </button>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'block', height: 0, width: 0 }}>
                                    <defs>
                                        <filter id="goo">
                                            <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
                                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                                            <feBlend in="SourceGraphic" in2="goo" />
                                        </filter>
                                    </defs>
                                </svg>
                            </Form>
                        </div>
                    </Col>

                    <Col md={6}>
                        <Row>
                            <Col md={4}>
                                <h4 className='Dreams-text'>Pages</h4>
                                <ul className="list-unstyled">
                                    <li>Our Team</li>
                                    <li>Pricing Plans</li>
                                    <li>Gallery</li>
                                    <li>Settings</li>
                                    <li>Profile</li>
                                    <li>Listings</li>
                                </ul>
                            </Col>

                            <Col md={4}>
                                <h4 className='Dreams-text'>Company</h4>
                                <ul className="list-unstyled">
                                    <li>About Us</li>
                                    <li>Careers</li>
                                    <li>Blog</li>
                                    <li>Affiliate Program</li>
                                    <li>Add Your Listing</li>
                                    <li>Our Partners</li>
                                </ul>
                            </Col>

                            <Col md={4}>
                                <h4 className='Dreams-text'>Destinations</h4>
                                <ul className="list-unstyled">
                                    <li>Hawaii</li>
                                    <li>Istanbul</li>
                                    <li>San Diego</li>
                                    <li>Belgium</li>
                                    <li>New York</li>
                                    <li>Los Angeles</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                {/* Contact Section */}
                <Row className="contact-section mb-4">
                    <Col md={3}>
                        <div className="contact-item">
                            <MdHeadset className="contact-icon" />
                            <div>
                                <p>Customer Support</p>
                                <h5>+1 56589 54598</h5>
                            </div>
                        </div>
                    </Col>

                    <Col md={3}>
                        <div className="contact-item">
                            <MdEmail className="contact-icon" />
                            <div>
                                <p>Drop Us an Email</p>
                                <h5>info@example.com</h5>
                            </div>
                        </div>
                    </Col>

                    <Col md={3}>
                        <div className="contact-item">
                            <MdChat className="contact-icon" />
                            <div>
                                <p>Toll Free</p>
                                <h5>+1 56569 54698</h5>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} className="social-icons mb-4">
                        <FaFacebook className="social-icon" />
                        <FaTwitter className="social-icon" />
                        <FaInstagram className="social-icon" />
                        <FaLinkedin className="social-icon" />
                        <FaPinterest className="social-icon" />
                    </Col>
                </Row>

                {/* Social Icons */}
                {/* <Row className="social-icons mb-4">
                    <Col>
                        <FaFacebook className="social-icon" />
                        <FaTwitter className="social-icon" />
                        <FaInstagram className="social-icon" />
                        <FaLinkedin className="social-icon" />
                        <FaPinterest className="social-icon" />
                    </Col>
                </Row> */}

                {/* Footer Bottom */}
                <Row className="footer-bottom">
                    <Col>
                        <p className="text-center">
                            Copyright &copy; 2025. All Rights Reserved, DreamsTour
                        </p>
                        <div className="legal-links">
                            <a href="#">Legal Notice</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms and Conditions</a>
                            <a href="#">Refund Policy</a>
                            <a href="#">Chat Support</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
