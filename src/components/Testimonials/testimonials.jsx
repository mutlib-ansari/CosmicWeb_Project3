// import React from 'react';
// import Slider from 'react-slick';
// import './testimonials.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { Row, Col, Container } from 'react-bootstrap';
// import 'aos/dist/aos.css';


// function Testimonials() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         arrows: false
//     };

//     return (
//         <Container className="testimonial" >
//             <Row data-aos="zoom-out-up">
//                 <Col className='col-md-6 testimonial2'>
//                     <div className='bookingtext'>
//                         <h1>What Customers Say About Our Booking Systems</h1>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum omnis natus cumque possimus dicta suscipit enim, aperiam, voluptatum quis deleniti.</p>
//                     </div>
//                     <div className='testimonial-width'>
//                         {/* <div className='testimonial-top'>
//                             <span>testimonials</span>
//                             <h2>What Our Clients Say</h2>

//                         </div> */}
//                         <Slider {...settings}>
//                             <div className="testimonial-slide">
//                                 <div className="testimonial-content">
//                                     <img src="https://template-kit.evonicmedia.com/layout50/wp-content/uploads/2023/10/young-caucasian-businessman-looking-camera-serious-2022-03-16-00-23-07-utc-1.png" alt="Testimonial 1" className="testimonial-image" />
//                                     <p className="testimonial-text">I came to consultation, because I was puzzled with current life situation and Astral gave me clear ways to develop, and a plan of how to move ahead to avoid further problems. Some things she said became a much-needed insight for me.</p>
//                                     <div className="testimonial-footer">
//                                         <h1 className="testimonial-author">David parker - Astrologer</h1>
//                                         {/* <span className="testimonial-date">Date 1</span> */}
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="testimonial-slide">
//                                 <div className="testimonial-content">
//                                     <img src="https://template-kit.evonicmedia.com/layout50/wp-content/uploads/2023/10/portrait-of-young-new-workers-facing-serious-at-ca-2022-05-08-22-15-18-utc-1.png" alt="Testimonial 2" className="testimonial-image" />
//                                     <p className="testimonial-text">I came to consultation, because I was puzzled with current life situation and Astral gave me clear ways to develop, and a plan of how to move ahead to avoid further problems. Some things she said became a much-needed insight for me.</p>
//                                     <div className="testimonial-footer">
//                                         <h1 className="testimonial-author">David parker - Astrologer</h1>
//                                         <span className="testimonial-date"></span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="testimonial-slide">
//                                 <div className="testimonial-content">
//                                     <img src="https://template-kit.evonicmedia.com/layout50/wp-content/uploads/2023/10/attractive-female-in-garden-2022-03-04-06-07-32-utc-1.png" alt="Testimonial 2" className="testimonial-image" />
//                                     <p className="testimonial-text ">I came to consultation, because I was puzzled with current life situation and Astral gave me clear ways to develop, and a plan of how to move ahead to avoid further problems. Some things she said became a much-needed insight for me.</p>
//                                     <div className="testimonial-footer">
//                                         <h1 className="testimonial-author">David parker - Astrologer</h1>
//                                         <span className="testimonial-date"></span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="testimonial-slide">
//                                 <div className="testimonial-content">
//                                     <img src="https://template-kit.evonicmedia.com/layout50/wp-content/uploads/2023/10/confidently-posed-female-model-with-wavy-hair-red-2023-07-04-18-20-05-utc-1.png" alt="Testimonial 2" className="testimonial-image" />
//                                     <p className="testimonial-text">I came to consultation, because I was puzzled with current life situation and Astral gave me clear ways to develop, and a plan of how to move ahead to avoid further problems. Some things she said became a much-needed insight for me.</p>
//                                     <div className="testimonial-footer">
//                                         <h1 className="testimonial-author">David parker - Astrologer</h1>

//                                         <span className="testimonial-date"></span>
//                                     </div>
//                                 </div>
//                             </div>

//                         </Slider>
//                     </div>
//                 </Col>

//                 <Col className='col-md-6 bottom-img d-lg-block d-none'>
//                     <img src='https://themeforest.kreativdev.com/bookapp/demo/assets/images/testimonial-img-1.png' className='imgee' />
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default Testimonials;

// import { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import './testimonials.css';


// function ControlledCarousel() {
//     const [index, setIndex] = useState(0);

//     const handleSelect = (selectedIndex) => {
//         setIndex(selectedIndex);
//     };

//     return (
//         <div className='container'>
//         <Carousel activeIndex={index} onSelect={handleSelect}>
//             <Carousel.Item>
//                 <img src='https://template-kit.evonicmedia.com/layout50/wp-content/uploads/2023/10/attractive-female-in-garden-2022-03-04-06-07-32-utc-1.png' text="Second slide" className=' images' />
//                 <Carousel.Caption>
//                     <h3>First slide label</h3>
//                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img src='https://template-kit.evonicmedia.com/layout50/wp-content/uploads/2023/10/attractive-female-in-garden-2022-03-04-06-07-32-utc-1.png' text="Second slide" />
//                 <Carousel.Caption>
//                     <h3>Second slide label</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img src='https://template-kit.evonicmedia.com/layout50/wp-content/uploads/2023/10/attractive-female-in-garden-2022-03-04-06-07-32-utc-1.png' text="Second slide" />
//                 <Carousel.Caption>
//                     <h3>Third slide label</h3>
//                     <p>
//                         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//                     </p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//         </Carousel>
//         </div>
//     );
// }


// import React, { useEffect } from 'react';
// import './testimonials.css';
// import $ from 'jquery';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import 'owl.carousel';

// function Testimonials() {
//     useEffect(() => {
//         $('.testi10').owlCarousel({
//             loop: true,
//             margin: 30,
//             nav: false,
//             dots: false,
//             autoplay: true,
//             responsiveClass: true,
//             responsive: {
//                 0: {
//                     items: 1
//                 },
//                 1650: {
//                     items: 1
//                 }
//             }
//         });
//     }, []);

//     return (
//         <div>
//             <div className="testimonial10 py-5 bg-success-gradiant">
//                 <div className="container">
//                     <div className="owl-carousel owl-theme text-center testi10">
//                         <div className="item">
//                             <div className="quote-bg"></div>
//                             <h3 className="font-weight-light text-white">WrapKit has given our websites huge national presence. We are #1 on page one in Google search results for every website we’ve built, and rank for more keywords than I ever expected in a very competitive, high-value customer industry. In addition</h3>
//                         </div>
//                         <div className="customer-thumb my-3"></div>
//                         <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/testimonial/1.jpg" alt="wrapkit" className="rounded-circle" />
//                     </div>
//                     <h6 className="text-white mb-0 font-weight-medium">Michael Anderson</h6>
//                     <span className="text-white">Project client</span>
//                 </div>
//                 <div className="item">
//                     <div className="quote-bg"></div>
//                     <h3 className="font-weight-light text-white">WrapKit has given our websites huge national presence. We are #1 on page one in Google search results for every website we’ve built, and rank for more keywords than I ever expected in a very competitive, high-value customer industry. In addition</h3>
//                 </div>
//                 <div className="customer-thumb my-3">
//                     <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/testimonial/2.jpg" alt="wrapkit" className="rounded-circle" />
//                 </div>
//                 <h6 className="text-white mb-0 font-weight-medium">Michael Anderson</h6>
//                 <span className="text-white">Project client</span>
//             </div>
//             <div className="item">
//                 <div className="quote-bg">
//                     <h3 className="font-weight-light text-white">WrapKit has given our websites huge national presence. We are #1 on page one in Google search results for every website we’ve built, and rank for more keywords than I ever expected in a very competitive, high-value customer industry. In addition</h3>
//                 </div>
//                 <div className="customer-thumb my-3">
//                     <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/testimonial/3.jpg" alt="wrapkit" className="rounded-circle" />
//                 </div>
//                 <h6 className="text-white mb-0 font-weight-medium">Michael Anderson</h6>
//                 <span className="text-white">Project client</span>
//             </div>
//         </div>




//     );
// }

// export default Testimonials;


// import React from 'react';
// import Slider from 'react-slick';
// import './testimonials.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { Row, Col, Container } from 'react-bootstrap';
// import 'aos/dist/aos.css';


// function Testimonials() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         arrows: false,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true,
//                     arrows: false,
//                 },
//             },
//         ],
//     };

//     return (
//         <Container className="testimonial" >
//             <Row data-aos="zoom-out-up">
//                 <Col className='col-6 col-md-12 testimonial2'>
//                     {/* <div className='bookingtext'>
//                         <h1>What Customers Say About Our Booking Systems</h1>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum omnis natus cumque possimus dicta suscipit enim, aperiam, voluptatum quis deleniti.</p>
//                     </div> */}
//                     <div className='testimonial-width'>
//                         {/* <div className='testimonial-top'>
//                             <span>testimonials</span>
//                             <h2>What Our Clients Say</h2>

//                         </div> */}
//                         <Slider {...settings}>

//                             <div className="testimonial-slide">
//                                 <div className="testimonial-content">

//                                     <p className="testimonial-text">I came to consultation, because I was puzzled with current life situation and Astral gave me clear ways to develop, and a plan of how to move ahead to avoid further problems. Some things she said became a much-needed insight for me.</p>
//                                     <div className="testimonial-footer">
//                                         <img src="https://template-kit.evonicmedia.com/layout50/wp-content/uploads/2023/10/portrait-of-young-new-workers-facing-serious-at-ca-2022-05-08-22-15-18-utc-1.png" alt="Testimonial 2" className="testimonial-image" />
//                                         <h1 className="testimonial-author">David parker - Astrologer</h1>
//                                         <span className="testimonial-date"></span>
//                                     </div>
//                                 </div>
//                             </div>



//                         </Slider>
//                     </div>
//                 </Col>


//             </Row>
//         </Container>
//     );
// }

// export default Testimonials;

// import React from 'react';
// import Slider from 'react-slick';
// import './testimonials.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { Row, Col, Container } from 'react-bootstrap';
// import 'aos/dist/aos.css';

// const testimonialsData = [
//     {
//         text: "I came to consultation, because I was puzzled with my current life situation and received clear ways to develop, along with a plan to move ahead.",
//         image: "https://template-kit.evonicmedia.com/layout50/wp-content/uploads/2023/10/portrait-of-young-new-workers-facing-serious-at-ca-2022-05-08-22-15-18-utc-1.png",
//         author: "David Parker",
//         profession: "Astrologer",
//     },
//     {
//         text: "This service completely changed my perspective. The advice was insightful and helped me navigate my challenges more effectively.",
//         image: "https://randomuser.me/api/portraits/men/45.jpg",
//         author: "Michael Thompson",
//         profession: "Entrepreneur",
//     },
//     {
//         text: "Amazing experience! I got clarity on my goals and learned how to achieve them strategically.",
//         image: "https://randomuser.me/api/portraits/women/44.jpg",
//         author: "Sarah Williams",
//         profession: "Life Coach",
//     }
// ];

// function Testimonials() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         arrows: false,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true,
//                     arrows: false,
//                 },
//             },
//         ],
//     };

//     return (
//         <Container className="testimonial">
//             <Row data-aos="zoom-out-up">
//                 <Col className='col-md-12 testimonial2'>
//                     <div className='testimonial-width'>
//                         <Slider {...settings}>
//                             {testimonialsData.map((testimonial, index) => (
//                                 <div className="testimonial-slide" key={index}>
//                                     <div className="testimonial-content">
//                                         <p className="testimonial-text">{testimonial.text}</p>
//                                         <div className="testimonial-footer">
//                                             <img src={testimonial.image} alt={testimonial.author} className="testimonial-image" />
//                                             <h1 className="testimonial-author">{testimonial.author} - {testimonial.profession}</h1>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </Slider>
//                     </div>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default Testimonials;


// import React from 'react';
// import Slider from 'react-slick';
// import './testimonials.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { Row, Col, Container } from 'react-bootstrap';
// import 'aos/dist/aos.css';

// const testimonialsData = [
//     {
//         text: "I came to consultation, because I was puzzled with my current life situation and received clear ways to develop, along with a plan to move ahead.",
//         image: "https://template-kit.evonicmedia.com/layout50/wp-content/uploads/2023/10/portrait-of-young-new-workers-facing-serious-at-ca-2022-05-08-22-15-18-utc-1.png",
//         author: "David Parker",
//         profession: "Astrologer",
//     },
//     {
//         text: "This service completely changed my perspective. The advice was insightful and helped me navigate my challenges more effectively.",
//         image: "https://randomuser.me/api/portraits/men/45.jpg",
//         author: "Michael Thompson",
//         profession: "Entrepreneur",
//     },
//     {
//         text: "Amazing experience! I got clarity on my goals and learned how to achieve them strategically.",
//         image: "https://randomuser.me/api/portraits/women/44.jpg",
//         author: "Sarah Williams",
//         profession: "Life Coach",
//     }
// ];

// function Testimonials() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         arrows: false,


//     };

//     return (
//         <Container className="testimonial">
//             <Row data-aos="zoom-out-up">
//                 <Col className=' col-md-12 testimonial2'>
//                     <div className='testimonial-width'>
//                         <Slider {...settings}>
//                             {testimonialsData.map((testimonial, index) => (
//                                 <div className="testimonial-slide" key={index}>
//                                     <div className="testimonial-content">
//                                         <p className="testimonial-text">{testimonial.text}</p>
//                                         <div className="testimonial-footer">
//                                             <img src={testimonial.image} alt={testimonial.author} className="testimonial-image" />
//                                             <h1 className="testimonial-author">{testimonial.author} - {testimonial.profession}</h1>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </Slider>
//                     </div>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default Testimonials;


import React from 'react';
import Slider from 'react-slick';
import './testimonials.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Row, Col, Container } from 'react-bootstrap';
import 'aos/dist/aos.css';

const testimonialsData = [
    {
        text: "I came to consultation, because I was puzzled with my current life situation and received clear ways to develop, along with a plan to move ahead.",
        image: "https://template-kit.evonicmedia.com/layout50/wp-content/uploads/2023/10/portrait-of-young-new-workers-facing-serious-at-ca-2022-05-08-22-15-18-utc-1.png",
        author: "David Parker",
        profession: "Astrologer",
    },
    {
        text: "I came to consultation, because I was puzzled with my current life situation and received clear ways to develop, along with a plan to move ahead.",
        image: "https://template-kit.evonicmedia.com/layout50/wp-content/uploads/2023/10/portrait-of-young-new-workers-facing-serious-at-ca-2022-05-08-22-15-18-utc-1.png",
        author: "David Parker",
        profession: "Astrologer",
    },
    {
        text: "I came to consultation, because I was puzzled with my current life situation and received clear ways to develop, along with a plan to move ahead.",
        image: "https://template-kit.evonicmedia.com/layout50/wp-content/uploads/2023/10/portrait-of-young-new-workers-facing-serious-at-ca-2022-05-08-22-15-18-utc-1.png",
        author: "David Parker",
        profession: "Astrologer",
    },
    {
        text: "I came to consultation, because I was puzzled with my current life situation and received clear ways to develop, along with a plan to move ahead.",
        image: "https://template-kit.evonicmedia.com/layout50/wp-content/uploads/2023/10/portrait-of-young-new-workers-facing-serious-at-ca-2022-05-08-22-15-18-utc-1.png",
        author: "David Parker",
        profession: "Astrologer",
    }
];

function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Default: Show 3 slides
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024, // Tablets and below
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 768, // Mobile screens
                settings: {
                    slidesToShow: 1, // Show 1 slide on small screens
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <section className='testimonial2 ' style={{
            backgroundImage: "linear-gradient(rgb(15 11 62 / 85%), rgb(16 6 38)),  url('https://kitnew.moxcreative.com/astrologia/wp-content/uploads/sites/12/2022/11/img_2.png')",
            backgroundSize: 'contain',
            backgroundPosition: "bottom center",
            backgroundRepeat: "no-repeat",


        }} >
            <Container className="testimonial py-5">
                <Row data-aos="zoom-out-up ">
                    <Col className=' col-md-12 '>
                        <div className='testimonial-top'>
                            <span>testimonials</span>
                            <h2>What they say about us</h2>

                        </div>
                        <div className='testimonial-width'>
                            <Slider {...settings}>
                                {testimonialsData.map((testimonial, index) => (
                                    <div className="testimonial-slide" key={index}>
                                        <div className="testimonial-content">
                                            <p className="testimonial-text">{testimonial.text}</p>
                                            <div className="testimonial-footer">
                                                <img src={testimonial.image} alt={testimonial.author} className="testimonial-image" />
                                                <h1 className="testimonial-author">{testimonial.author} - {testimonial.profession}</h1>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Testimonials;
