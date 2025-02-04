

import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./footer2.css"
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faPinterest
} from '@fortawesome/free-brands-svg-icons';
import {
    faHeadphones,
    faMessage,
    faComment
} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer className="footer-three">
            <div className="footer-top">
                <Container>
                    <Row>
                        <Col xl={5}>
                            <div className="footer-widget">
                                <div className="footer-about">
                                    <div className="mb-4">
                                        <Link to="/" className="d-inline-block mb-1">
                                            <img src="/assets/img/logo.svg" alt="logo" />
                                        </Link>
                                        <p>Our mission is to offer you a seamless and enjoyable car rental experience. Whether you’re planning a road trip</p>
                                    </div>
                                    <h5 className="mb-1">Subscribe to Our Newsletter</h5>
                                    <p className="mb-3">Just sign up and we'll send you a notification by email.</p>
                                    <div className="footer-input">
                                        <InputGroup className="align-items-center">
                                            <InputGroup.Text className="px-1">
                                                <FontAwesomeIcon icon={faMessage} />
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter Email Address"
                                            />
                                            <Button variant="primary" size="md">
                                                Subscribe
                                            </Button>
                                        </InputGroup>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xl={7}>
                            <Row className="row-cols-md-3 row-cols-sm-2 row-cols-1">
                                <Col>
                                    <div className="footer-widget">
                                        <h5>Pages</h5>
                                        <ul className="footer-menu list-unstyled">
                                            <li><Link to="/team">Our Team</Link></li>
                                            <li><Link to="/pricing-plan">Pricing Plans</Link></li>
                                            <li><Link to="/gallery">Gallery</Link></li>
                                            <li><Link to="/profile-settings">Settings</Link></li>
                                            <li><Link to="/my-profile">Profile</Link></li>
                                            <li><Link to="/agent-listings">Listings</Link></li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col>
                                    <div className="footer-widget">
                                        <h5>Company</h5>
                                        <ul className="footer-menu list-unstyled">
                                            <li><Link to="/about-us">About Us</Link></li>
                                            <li><Link to="#">Careers</Link></li>
                                            <li><Link to="/blog-grid">Blog</Link></li>
                                            <li><Link to="#">Affiliate Program</Link></li>
                                            <li><Link to="/add-flight">Add Your Listing</Link></li>
                                            <li><Link to="#">Our Partners</Link></li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col>
                                    <div className="footer-widget">
                                        <h5>Destinations</h5>
                                        <ul className="footer-menu list-unstyled">
                                            <li><Link to="#">Hawaii</Link></li>
                                            <li><Link to="#">Istanbul</Link></li>
                                            <li><Link to="#">San Diego</Link></li>
                                            <li><Link to="#">Belgium</Link></li>
                                            <li><Link to="#">New York</Link></li>
                                            <li><Link to="#">Los Angeles</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <div className="footer-contact mt-5">
                        <Row className="align-items-center">
                            <Col xl={5}>
                                <ul className="social-icon list-inline">
                                    <li className="list-inline-item">
                                        <Link to="#"><FontAwesomeIcon icon={faFacebook} /></Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#"><FontAwesomeIcon icon={faInstagram} /></Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#"><FontAwesomeIcon icon={faLinkedin} /></Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#"><FontAwesomeIcon icon={faPinterest} /></Link>
                                    </li>
                                </ul>
                            </Col>

                            <Col xl={7}>
                                <Row className="row-cols-md-3 row-cols-sm-2 row-cols-1 g-4">
                                    <Col>
                                        <div className="d-flex align-items-center">
                                            <span className="avatar avatar-lg bg-primary rounded-circle flex-shrink-0">
                                                <FontAwesomeIcon icon={faHeadphones} />
                                            </span>
                                            <div className="ms-2">
                                                <p className="fs-14 mb-1">Customer Support</p>
                                                <h6 className="fw-medium text-light">+1 56589 54598</h6>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col>
                                        <div className="d-flex align-items-center">
                                            <span className="avatar avatar-lg bg-secondary rounded-circle flex-shrink-0">
                                                <FontAwesomeIcon icon={faMessage} />
                                            </span>
                                            <div className="ms-2">
                                                <p className="fs-14 mb-1">Drop Us an Email</p>
                                                <h6 className="fw-medium text-light">[email&#160;protected]</h6>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col>
                                        <div className="d-flex align-items-center">
                                            <span className="avatar avatar-lg bg-teal rounded-circle flex-shrink-0">
                                                <FontAwesomeIcon icon={faComment} />
                                            </span>
                                            <div className="ms-2">
                                                <p className="fs-14 mb-1">Toll Free</p>
                                                <h6 className="fw-medium text-light">+1 56569 54698</h6>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={5}>
                            <p className="mb-0">
                                Copyright &copy; 2025. All Rights Reserved, {' '}
                                <Link to="#" className="text-primary fw-medium">DreamsTour</Link>
                            </p>
                        </Col>

                        <Col lg={7}>
                            <ul className="policy-links list-inline d-flex justify-content-lg-end mb-0">
                                <li className="list-inline-item me-4"><Link to="#">Legal Notice</Link></li>
                                <li className="list-inline-item me-4"><Link to="/privacy-policy">Privacy Policy</Link></li>
                                <li className="list-inline-item me-4"><Link to="/terms-conditions">Terms and Conditions</Link></li>
                                <li className="list-inline-item me-4"><Link to="#">Refund Policy</Link></li>
                                <li className="list-inline-item"><Link to="/chat">Chat Support</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
}