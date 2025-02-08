import React from 'react';
import './inerbanner.css';
import { Row, Col } from 'react-bootstrap';
import 'aos/dist/aos.css'; 

const Inerbanner = () => {
    return (
        <div className="inerbanner container mb-5"  style={{
                backgroundImage: 'url(https://themeforest.kreativdev.com/bookapp/demo/assets/images/banner/action-banner-bg-1.png)',
                backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'center center'
            }}>
            <Row className='inerbanner-row' data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
                <Col className="inerbanner-content col-md-6 ">
                    <h1>Welcome to Cosmic Energies</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur nam eos debitis, sequi cupiditate repudiandae accusamus provident expedita omnis rem facere.</p>
                    <div className='inerbanner-batton'>
                        <button className="c-button c-button--gooey"> Submit
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
                <Col className="inerbanner-image col-md-6">
                    <img src="https://themeforest.kreativdev.com/bookapp/demo/assets/images/banner/action-banner-1.png" alt="Cosmic" className='img2' />

                </Col>
            </Row>
        </div>
    );
};

export default Inerbanner;