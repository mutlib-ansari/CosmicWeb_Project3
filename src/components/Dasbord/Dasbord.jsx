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
            <div className="container Dasbord-c max-w-[1280px] mx-auto py-3">
                <div className='row'>
                    <div className="col-md-6 d-lg-block d-none " data-aos="fade-right">
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
                    <div className="col-md-6 py-5 Dasbord2 " data-aos="fade-left">
                        <div className="content">
                            <span>Know About</span>
                            <h1>Discover everything yourself with astralVue</h1>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt.</p>
                            {/* <Button className='Button'><IoIosStar /> Read more</Button> */}
                            {/* <div class="item">
                            <a href="login.html" class="btn btn-md btn-primary btn-gradient icon-start" title="Login" target="_self"> Login</a>
                        </div> */}
                            
                            <div className='iner-box' >
                                {/* <span className='icon'><LuPhoneCall className='iner-icon border' style={{ fontSize: '70px' }} /></span> */}
                                <div className='iner-icon2 mx-auto'><svg xmlns="http://www.w3.org/2000/svg" width={70} height={70} viewBox="0 0 1200 1200"><path fill="rgb(16, 7, 36)" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0M384.375 238.33c12.362-.729 23.536 6.66 32.007 19.775l82.031 155.566c8.637 18.434 3.729 38.172-9.155 51.343l-37.573 37.573c-2.319 3.178-3.845 6.757-3.882 10.693c14.409 55.775 58.117 107.223 96.681 142.603c38.562 35.38 80.009 83.281 133.812 94.629c6.65 1.855 14.797 2.52 19.556-1.903l43.652-44.458c15.068-11.421 36.866-16.956 52.954-7.617h.732l148.021 87.378c21.728 13.619 23.979 39.944 8.423 55.957L849.683 941.016c-15.056 15.44-35.058 20.631-54.491 20.654c-85.948-2.575-167.158-44.759-233.862-88.11c-109.49-79.653-209.923-178.446-272.975-297.803c-24.182-50.05-52.589-113.91-49.878-169.774c.242-21.016 5.928-41.605 20.728-55.151l101.953-101.953c7.942-6.758 15.799-10.111 23.217-10.549"></path></svg></div>
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
