import React from 'react'
import './ourservices.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img1 from '../../assets/images/ourservices/img1.png';
import img2 from '../../assets/images/ourservices/img2.png';
import img3 from '../../assets/images/ourservices/img3.png';
import img4 from '../../assets/images/ourservices/img4.png';
import img5 from '../../assets/images/ourservices/img5.png';
import img6 from '../../assets/images/ourservices/img6.png';
import bg from '../../assets/images/navbar/bg-moon.png';
import { IoIosStar } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import team from '../../assets/images/ourservices/team1.jpg';
import team2 from '../../assets/images/ourservices/team2.jpg';
import team3 from '../../assets/images/ourservices/team3.jpg';
import 'aos/dist/aos.css';


function Ourservices() {
    const services = [
        {
            img: img1,
            title: "General consultation",
            text: "Astrology is one of the earliest attempts made by man to find the order hidden behind or within the confusing and apparent in the world.",
            className: "img1"
        },
        {
            img: img2,
            title: "General consultation",
            text: "Astrology is one of the earliest attempts made by man to find the order hidden behind or within the confusing and apparent in the world.",
            className: "img2 img-width"

        },
        {
            img: img3,
            title: "General consultation",
            text: "Astrology is one of the earliest attempts made by man to find the order hidden behind or within the confusing and apparent in the world.",
            className: "img3"
        },
        {
            img: img4,
            title: "General consultation",
            text: "Astrology is one of the earliest attempts made by man to find the order hidden behind or within the confusing and apparent in the world.",
            className: "img4"
        },
        {
            img: img5,
            title: "General consultation",
            text: "Astrology is one of the earliest attempts made by man to find the order hidden behind or within the confusing and apparent in the world.",
            className: "img5"
        },
        {
            img: img6,
            title: "General consultation",
            text: "Astrology is one of the earliest attempts made by man to find the order hidden behind or within the confusing and apparent in the world.",
            className: "img6"
        }
    ];

    return (
        <div className='background-color-service ' style={{ backgroundImage: `url(${bg})`, backgroundSize: '50%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            <div className='container max-w-[1280px] mx-auto' data-aos="zoom-in">
                <div className='text-center our-ser'>
                    <span> Our Services</span>
                    <h3>Astrology is just a finger pointing at reality</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Auctor tristique malesuada arcu.</p>
                    <Row xs={1} md={3} className="g-4">
                        {services.map((service, idx) => (
                            // <Col key={idx}>
                            //     <Card className='card3'>
                            //         <Card.Img variant="top" src={service.img} className='img bouncing' />
                            //         <Card.Body>
                            //             <Card.Title>{service.title}</Card.Title>
                            //             <Card.Text>
                            //                 {service.text}
                            //             </Card.Text>
                            //         </Card.Body>
                            //     </Card>
                            // </Col>
                            <Col key={idx}>
                                <Card className='card3 hover-effect'>
                                    <Card.Img variant="top" src={service.img} className='img bouncing img-hover' />
                                    <Card.Body>
                                        <Card.Title>{service.title}</Card.Title>
                                        <Card.Text>
                                            {service.text}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                        ))}
                    </Row>
                </div>






            </div>

        </div>


    )
}

export default Ourservices