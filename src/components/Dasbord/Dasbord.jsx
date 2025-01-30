import React from 'react';
import './dasbord.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../assets/images/slider/person1.jpg";
import img2 from "../../assets/images/slider/person2.jpg";
import img3 from "../../assets/images/slider/person3.jpg";
// import Button from 'react-bootstrap/Button';
// import { IoIosStar } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";
// import styled from 'styled-components';
import 'aos/dist/aos.css'; 





function Dasbord() {


    return (
        <div className='background-color '>
            <div className="container Dasbord-c max-w-[1280px] mx-auto">
                <div className='row'>
                    <div className="col-md-6 hig  " data-aos="fade-right">
                        <div className="bg">
                            <div className="slide2 py-5">
                                <Carousel fade controls={false}>
                                    <Carousel.Item className='carousel-item '>
                                        <img src={img1} className='img-size' />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={img2} className='img-size ' />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={img3} className='img-size' />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 " data-aos="fade-left">
                        <div className="content">
                            <span>Know About</span>
                            <h1>Discover everything yourself with astralVue</h1>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt.</p>
                            {/* <Button className='Button'><IoIosStar /> Read more</Button> */}
                            {/* <div class="item">
                            <a href="login.html" class="btn btn-md btn-primary btn-gradient icon-start" title="Login" target="_self"> Login</a>
                        </div> */}
                            
                            <div className='iner-box' >
                                <span className='icon'><LuPhoneCall className='iner-icon border' style={{ fontSize: '70px' }} /></span>
                                <div className='iner-box-text'>
                                    <h6>Contact Our Expert Astrologers</h6>
                                    <p>+ (97) 2800-214-968</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dasbord;
