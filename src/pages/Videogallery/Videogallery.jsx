// import React from 'react';
// import LightGallery from 'lightgallery/react';
// import lgZoom from 'lightgallery/plugins/zoom';
// import lgShare from 'lightgallery/plugins/share';
// import lgHash from 'lightgallery/plugins/hash';
// import lgVideo from 'lightgallery/plugins/video';
// import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
// import 'lightgallery/css/lg-share.css';
// import 'lightgallery/css/lg-video.css';
// import './videogallery.css';

// const Videogallery = () => {
//     return (
//         <div className="App container">
//             <h1 className='VIDEO-GALLERY'>VIDEO GALLERY</h1>

//             <LightGallery

//                 plugins={[lgZoom, lgShare, lgHash, lgVideo]}
//                 speed={500}
//                 elementClassNames="gallery"
//             >

//                 <div className='row'>
//                     <a
//                         className="gallery__item"
//                         data-lg-size="1600-1067"
//                         data-pinterest-text="Pin it"
//                         data-tweet-text="lightGallery slide"
//                         data-lg-video-src="https://www.youtube.com/watch?v=sK7riqg2mr4&list=RDT94PHkuydcw&index=3"
//                         data-poster="https://img.youtube.com/vi/IUN664s7N-c/maxresdefault.jpg"
//                         data-sub-html="<h4>Visual Soundscapes - Mountains | Planet Earth II | BBC America</h4><p>On the heels of Planet Earth II’s record-breaking Emmy nominations, BBC America presents stunning visual soundscapes from the series' amazing habitats.</p>"
//                     >
//                         <img
//                             className="img-responsive"
//                             src="https://img.youtube.com/vi/IUN664s7N-c/maxresdefault.jpg"
//                             alt="Visual Soundscapes - Mountains"
//                         />
//                     </a>

//                     <a
//                         className="gallery__item"
//                         data-lg-size="1600-2400"
//                         data-pinterest-text="Pin it"
//                         data-tweet-text="lightGallery slide"
//                         data-src="https://youtu.be/IUN664s7N-c"
//                         data-poster="https://img.youtube.com/vi/IUN664s7N-c/maxresdefault.jpg"
//                         data-sub-html="<h4>Visual Soundscapes - Mountains | Planet Earth II | BBC America</h4><p>On the heels of Planet Earth II’s record-breaking Emmy nominations, BBC America presents stunning visual soundscapes from the series' amazing habitats.</p>"
//                     >
//                         <img
//                             className="img-responsive"
//                             src="https://img.youtube.com/vi/IUN664s7N-c/maxresdefault.jpg"
//                             alt="Visual Soundscapes - Mountains"
//                         />
//                     </a>
//                 </div>

//                 <div className='row'>
//                     <a
//                         className="gallery__item"
//                         data-lg-size="1600-2398"
//                         data-pinterest-text="Pin it"
//                         data-tweet-text="lightGallery slide"
//                         data-src="https://youtu.be/IUN664s7N-c"
//                         data-poster="https://img.youtube.com/vi/IUN664s7N-c/maxresdefault.jpg"
//                         data-sub-html="<h4>Visual Soundscapes - Mountains | Planet Earth II | BBC America</h4><p>On the heels of Planet Earth II’s record-breaking Emmy nominations, BBC America presents stunning visual soundscapes from the series' amazing habitats.</p>"
//                     >
//                         <img
//                             className="img-responsive"
//                             src="https://img.youtube.com/vi/IUN664s7N-c/maxresdefault.jpg"
//                             alt="Visual Soundscapes - Mountains"
//                         />
//                     </a>


//                     <a
//                         className="gallery__item"
//                         data-lg-size="1280-720"
//                         data-pinterest-text="Pin it"
//                         data-tweet-text="lightGallery slide"
//                         data-src="https://youtu.be/IUN664s7N-c"
//                         data-poster="https://img.youtube.com/vi/IUN664s7N-c/maxresdefault.jpg"
//                         data-sub-html="<h4>Visual Soundscapes - Mountains | Planet Earth II | BBC America</h4><p>On the heels of Planet Earth II’s record-breaking Emmy nominations, BBC America presents stunning visual soundscapes from the series' amazing habitats.</p>"
//                     >
//                         <img
//                             className="img-responsive"
//                             src="https://img.youtube.com/vi/IUN664s7N-c/maxresdefault.jpg"
//                             alt="Visual Soundscapes - Mountains"
//                         />
//                     </a>
//                 </div>



//             </LightGallery>
//         </div>
//     );
// };

// export default Videogallery;



import React, { useEffect } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import "./videogallery.css"
import Card from 'react-bootstrap/Card';
import 'aos/dist/aos.css';

const VideoSlider = () => {
    // useEffect(() => {
    //     $('#main-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    //         $('video').each(function () {
    //             $(this).get(0).pause();
    //         });
    //     });

    //     $('#main-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    //         if ($('.project-slide.slick-current').find('video').length !== 0) {
    //             $("#main-slider .slick-current video")[0].play();
    //         }
    //     });
    // }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                    
                }
            }
        ]
    };

    return (
        <div id="main-slider " className='container'>
            <div data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <div className='videotext'><h1>VIDEO GALLERY</h1></div>
                <Slider {...settings}>
                    <div className="project-slide">
                        <Card style={{ width: '30rem', height: '35rem' }} className=''>

                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/g9qL4KHgFGQ"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>

                            <Card.Body className=''>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Text>
                                    Some quick example text to
                                    bulk of the card's content.
                                </Card.Text>
                                <div className='cardimg'>
                                    <img src='https://themeforest.kreativdev.com/bookapp/demo/assets/images/avatar-5.jpg' />
                                    <span>jhon don</span>
                                </div>

                            </Card.Body>
                        </Card>
                    </div>
                    <div className="project-slide">
                        <Card style={{ width: '30rem', height: '35rem' }} className=''>

                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/g9qL4KHgFGQ"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>

                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Text>
                                    Some quick example text to
                                    bulk of the card's content.
                                </Card.Text>
                                <div className='cardimg'>
                                    <img src='https://themeforest.kreativdev.com/bookapp/demo/assets/images/avatar-5.jpg' />
                                    <span>jhon don</span>
                                </div>


                            </Card.Body>
                        </Card>
                    </div>







                    <div className="project-slide">
                        <Card style={{ width: '30rem', height: '35rem' }} className='card'>

                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/g9qL4KHgFGQ"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>

                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Text>
                                    Some quick example text to
                                    bulk of the card's content.
                                </Card.Text>
                                <div className='cardimg'>
                                    <img src='https://themeforest.kreativdev.com/bookapp/demo/assets/images/avatar-5.jpg' />
                                    <span className=''>jhon don</span>
                                </div>

                            </Card.Body>
                        </Card>
                    </div>
                    {/* Add more slides as needed */}
                </Slider>
            </div>
        </div>
    );
};

export default VideoSlider;