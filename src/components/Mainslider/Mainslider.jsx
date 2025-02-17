import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import sliderImg from "../../assets/images/slider/img1.jpg";
import sliderImg2 from "../../assets/images/slider/img2.jpg";
import sliderImg3 from "../../assets/images/slider/img3.jpg";
// import Button from 'react-bootstrap/Button';
// import { IoIosStar } from "react-icons/io";
import './mainslider.css';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
            <Carousel.Item className="slider-item ">
                <img src={sliderImg} className="d-block w-100 slider-image "  data-aos="fade-up" alt="First slide" style={{ height: '100vh', objectFit: 'cover' }} />
                <Carousel.Caption className="slider-caption center-caption">
                    <h3>Start The Journey of Self-Discovery</h3>
                    {/* <Button className='Button'><IoIosStar /> Start now</Button> */}

                    <div className='py-5'>
                        <button className="c-button c-button--gooey"> Start now
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
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={sliderImg2} className="d-block w-100" alt="Second slide" style={{ height: '100vh', objectFit: 'cover' }} />
                <Carousel.Caption className="slider-caption center-caption">
                    <h3>Start The Journey of Self-Discovery</h3>
                    {/* <Button className='Button'><IoIosStar /> Start now</Button> */}

                    <div className='py-5'>
                        <button className="c-button c-button--gooey"> Start now
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
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={sliderImg3} className="d-block w-100" alt="Third slide" style={{ height: '100vh', objectFit: 'cover' }} />
                <Carousel.Caption className="slider-caption center-caption">
                    <h3>Start The Journey of Self-Discovery</h3>
                    {/* <Button className='Button'><IoIosStar /> Start now</Button> */}

                    <div className='py-5'>
                        <button className="c-button c-button--gooey"> Start now
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
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;

