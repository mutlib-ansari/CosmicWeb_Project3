
// import React, { useEffect } from 'react';
// import LightGallery from 'lightgallery/react';
// import lgZoom from 'lightgallery/plugins/zoom';
// import lgShare from 'lightgallery/plugins/share';
// import lgHash from 'lightgallery/plugins/hash';
// import Masonry from 'masonry-layout';
// import imagesLoaded from 'imagesloaded';
// import './Imagegallery.css';

// const Imagegallery = () => {
//     useEffect(() => {
//         const container = document.querySelector('.masonry-gallery-demo');
//         if (container) {
//             const msnry = new Masonry(container, {
//                 itemSelector: '.gallery-item',
//                 columnWidth: '.grid-sizer',
//                 percentPosition: true,
//             });

//             imagesLoaded(container).on('progress', function () {
//                 msnry.layout();
//             });
//         }
//     }, []);

//     return (
//         // <div className="App container">
//         //     <LightGallery
//         //         elementClassNames={'masonry-gallery-demo'}
//         //         plugins={[lgZoom, lgShare, lgHash]}
//         //         speed={500}
//         //     >
//         //         <div className="grid-sizer">
//         //         <a
//         //             data-lg-size="1600-1067"
//         //             className="gallery-item"
//         //             data-src="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
//         //             data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@tobbes_rd' >Tobias Rademacher </a></h4><p> Location - <a href='https://unsplash.com/s/photos/puezgruppe%2C-wolkenstein-in-gr%C3%B6den%2C-s%C3%BCdtirol%2C-italien'>Puezgruppe, Wolkenstein in Gröden, Südtirol, Italien</a>layers of blue.</p>"
//         //         >
//         //             <img
//         //                 alt="layers of blue."
//         //                 className="img-responsive"
//         //                 src="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
//         //             />
//         //         </a>
//         //         <a
//         //             data-lg-size="1600-1067"
//         //             className="gallery-item"
//         //             data-src="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
//         //             data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@tobbes_rd' >Tobias Rademacher </a></h4><p> Location - <a href='https://unsplash.com/s/photos/puezgruppe%2C-wolkenstein-in-gr%C3%B6den%2C-s%C3%BCdtirol%2C-italien'>Puezgruppe, Wolkenstein in Gröden, Südtirol, Italien</a>layers of blue.</p>"
//         //         >
//         //             <img
//         //                 alt="layers of blue."
//         //                 className="img-responsive"
//         //                 src="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
//         //             />
//         //         </a>
//         //         <a
//         //             data-lg-size="1600-1067"
//         //             className="gallery-item"
//         //             data-src="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
//         //             data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@tobbes_rd' >Tobias Rademacher </a></h4><p> Location - <a href='https://unsplash.com/s/photos/puezgruppe%2C-wolkenstein-in-gr%C3%B6den%2C-s%C3%BCdtirol%2C-italien'>Puezgruppe, Wolkenstein in Gröden, Südtirol, Italien</a>layers of blue.</p>"
//         //         >
//         //             <img
//         //                 alt="layers of blue."
//         //                 className="img-responsive"
//         //                 src="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
//         //             />
//         //         </a>
//         //         <a
//         //             data-lg-size="1600-1067"
//         //             className="gallery-item"
//         //             data-src="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
//         //             data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@tobbes_rd' >Tobias Rademacher </a></h4><p> Location - <a href='https://unsplash.com/s/photos/puezgruppe%2C-wolkenstein-in-gr%C3%B6den%2C-s%C3%BCdtirol%2C-italien'>Puezgruppe, Wolkenstein in Gröden, Südtirol, Italien</a>layers of blue.</p>"
//         //         >
//         //             <img
//         //                 alt="layers of blue."
//         //                 className="img-responsive"
//         //                 src="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
//         //             />
//         //         </a>
//         //         <a
//         //             data-lg-size="1600-1067"
//         //             className="gallery-item"
//         //             data-src="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
//         //             data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@tobbes_rd' >Tobias Rademacher </a></h4><p> Location - <a href='https://unsplash.com/s/photos/puezgruppe%2C-wolkenstein-in-gr%C3%B6den%2C-s%C3%BCdtirol%2C-italien'>Puezgruppe, Wolkenstein in Gröden, Südtirol, Italien</a>layers of blue.</p>"
//         //         >
//         //             <img
//         //                 alt="layers of blue."
//         //                 className="img-responsive"
//         //                 src="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
//         //             />
//         //         </a>
//         //         <a
//         //             data-lg-size="1600-1067"
//         //             className="gallery-item"
//         //             data-src="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
//         //             data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@tobbes_rd' >Tobias Rademacher </a></h4><p> Location - <a href='https://unsplash.com/s/photos/puezgruppe%2C-wolkenstein-in-gr%C3%B6den%2C-s%C3%BCdtirol%2C-italien'>Puezgruppe, Wolkenstein in Gröden, Südtirol, Italien</a>layers of blue.</p>"
//         //         >
//         //             <img
//         //                 alt="layers of blue."
//         //                 className="img-responsive"
//         //                 src="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
//         //             />
//         //         </a>
//         //         </div>
//         //         {/* Add more <a> elements for other images here */}
//         //     </LightGallery>
//         // </div>
//         <div className="App container">
//             <h1 className='IMAGE-GALLERY'>IMAGE GALLERY</h1>

//             <LightGallery
//                 elementClassNames={'masonry-gallery-demo'}
//                 plugins={[lgZoom, lgShare, lgHash]}
//                 speed={500}
//             >
//                 <div className="grid-sizer"></div>
//                 <a
//                     data-lg-size="1600-1067"
//                     className="gallery-item"
//                     data-src="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
//                     data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@tobbes_rd' >Tobias Rademacher </a></h4><p> Location - <a href='https://unsplash.com/s/photos/puezgruppe%2C-wolkenstein-in-gr%C3%B6den%2C-s%C3%BCdtirol%2C-italien'>Puezgruppe, Wolkenstein in Gröden, Südtirol, Italien</a>layers of blue.</p>"
//                 >
//                     <img
//                         alt="layers of blue."
//                         className="img-responsive"
//                         src="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
//                     />
//                 </a>
//                 <a
//                     data-lg-size="1600-2400"
//                     data-pinterest-text="Pin it2"
//                     data-tweet-text="lightGallery slide  2"
//                     className="gallery-item"
//                     data-src="https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
//                     data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>"
//                 >
//                     <img
//                         className="img-responsive"
//                         src="https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
//                     />
//                 </a>
//                 <a
//                     data-lg-size="1600-2400"
//                     data-pinterest-text="Pin it3"
//                     data-tweet-text="lightGallery slide  4"
//                     className="gallery-item"
//                     data-src="https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
//                     data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@thesaboo' >Sascha Bosshard </a></h4><p> Location - <a href='https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz'>Pizol, Mels, Schweiz</a></p>"
//                 >
//                     <img
//                         className="img-responsive"
//                         src="https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
//                     />
//                 </a>
//                 <a
//                     data-lg-size="1600-2398"
//                     data-pinterest-text="Pin it3"
//                     data-tweet-text="lightGallery slide  4"
//                     className="gallery-item"
//                     data-src="https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
//                     data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@yusufevli' >Yusuf Evli </a></h4><p> Foggy Road</p>"
//                 >
//                     <img
//                         className="img-responsive"
//                         src="https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
//                     />
//                 </a>
//                 <a
//                     data-lg-size="1600-1067"
//                     data-pinterest-text="Pin it3"
//                     data-tweet-text="lightGallery slide  4"
//                     className="gallery-item"
//                     data-src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
//                     data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Jay Mantri</a></h4><p>  Misty shroud over a forest</p>"
//                 >
//                     <img
//                         className="img-responsive"
//                         src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
//                     />
//                 </a>
//                 <a
//                     data-lg-size="1600-1067"
//                     data-pinterest-text="Pin it3"
//                     data-tweet-text="lightGallery slide  4"
//                     className="gallery-item"
//                     data-src="https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
//                     data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Florian van Duyn</a></h4><p>Location - <a href='Bled, Slovenia'>Bled, Slovenia</a> </p>"
//                 >
//                     <img
//                         className="img-responsive"
//                         src="https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
//                     />
//                 </a>
//                 <a
//                     data-lg-size="1600-1126"
//                     data-pinterest-text="Pin it3"
//                     data-tweet-text="lightGallery slide  4"
//                     className="gallery-item"
//                     data-src="https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
//                     data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@juanster' >Juan Davila</a></h4><p>Location - <a href='Bled, Slovenia'>Bled, Slovenia</a> Wooded lake island </p>"
//                 >
//                     <img
//                         className="img-responsive"
//                         src="https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
//                     />
//                 </a>
//                 <a
//                     data-lg-size="1600-1063"
//                     data-pinterest-text="Pin it3"
//                     data-tweet-text="lightGallery slide  4"
//                     className="gallery-item"
//                     data-src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
//                     data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@davidmarcu' >David Marcu</a></h4><p>Location - <a href='https://unsplash.com/s/photos/ciuca%C8%99-peak%2C-romania'>Ciucaș Peak, Romania</a> Alone in the unspoilt wilderness </p>"
//                 >
//                     <img
//                         className="img-responsive"
//                         src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
//                     />
//                 </a>
//                 <a
//                     data-lg-size="1600-2400"
//                     data-pinterest-text="Pin it3"
//                     data-tweet-text="lightGallery slide  4"
//                     className="gallery-item"
//                     data-src="https://images.unsplash.com/photo-1585338447937-7082f8fc763d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
//                     data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@whoisbenjamin' >whoisbenjamin</a></h4>
//                 <p>Location - <a href='https://unsplash.com/s/photos/ciuca%C8%99-peak%2C-romania'>Snowdonia National Park, Blaenau Ffestiniog, UK</a> 
//                 A swan on a calm misty lake in the mountains of Snowdonia, North Wales. <a href='https://unsplash.com/photos/9V6EkAoTWJM'>Link</a> </p>"
//                 >
//                     <img
//                         className="img-responsive"
//                         src="https://images.unsplash.com/photo-1585338447937-7082f8fc763d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
//                     />
//                 </a>
//                 <a
//                     data-lg-size="1600-1144"
//                     data-pinterest-text="Pin it3"
//                     data-tweet-text="lightGallery slide  4"
//                     className="gallery-item"
//                     data-src="https://images.unsplash.com/photo-1476842384041-a57a4f124e2e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
//                     data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@aaronburden' >Aaron Burden</a></h4><p>Location - <a href='https://unsplash.com/s/photos/grayling%2C-michigan%2C-united-states'>Grayling, Michigan, United States</a> Colorful trees near a lake. <a href='https://unsplash.com/photos/00QWN1J0g48'>Link</a> </p>"
//                 >
//                     <img
//                         className="img-responsive"
//                         src="https://images.unsplash.com/photo-1476842384041-a57a4f124e2e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
//                     />
//                 </a>
//                 <a
//                     data-lg-size="1600-1067"
//                     data-pinterest-text="Pin it3"
//                     data-tweet-text="lightGallery slide  4"
//                     className="gallery-item"
//                     data-src="https://images.unsplash.com/photo-1465311530779-5241f5a29892?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
//                     data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@kalenemsley' >Kalen Emsley</a></h4><p>Location - <a href='https://unsplash.com/s/photos/yukon-territory%2C-canada'>Yukon Territory, Canada</a> No captions. <a href='https://unsplash.com/photos/eHpYD4U5830'>Link</a> </p>"
//                 >
//                     <img
//                         className="img-responsive"
//                         src="https://images.unsplash.com/photo-1465311530779-5241f5a29892?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
//                     />
//                 </a>
//                 <a
//                     data-lg-size="1600-1067"
//                     data-pinterest-text="Pin it3"
//                     data-tweet-text="lightGallery slide  4"
//                     className="gallery-item"
//                     data-src="https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
//                     data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@kace' >Kace Rodriguez</a></h4><p>Location - <a href='https://unsplash.com/s/photos/pfeiffer-beach%2C-united-states'>Pfeiffer Beach, United States</a> Pfeiffer Beach at Dusk. <a href='https://unsplash.com/photos/eHpYD4U5830'>Link</a> </p>"
//                 >
//                     <img
//                         className="img-responsive"
//                         src="https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
//                     />
//                 </a>
//                 <a
//                     data-lg-size="1600-2400"
//                     data-pinterest-text="Pin it3"
//                     data-tweet-text="lightGallery slide  4"
//                     className="gallery-item"
//                     data-src="https://images.unsplash.com/photo-1610448721566-47369c768e70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
//                     data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@patwhelen' >Pat Whelen</a></h4><p>Location - <a href='https://unsplash.com/s/photos/portsea-vic%2C-australia'>Portsea VIC, Australia</a> No caption <a href='https://unsplash.com/photos/EKLXDQ-dDRg'>Link</a> </p>"
//                 >
//                     <img
//                         className="img-responsive"
//                         src="https://images.unsplash.com/photo-1610448721566-47369c768e70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
//                     />
//                 </a>
//                 <a
//                     data-lg-size="1600-1067"
//                     data-pinterest-text="Pin it3"
//                     data-tweet-text="lightGallery slide  4"
//                     className="gallery-item"
//                     data-src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
//                     data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@derekthomson' >Derek Thomson</a></h4><p>Location - <a href='https://unsplash.com/s/photos/mcway-falls%2C-united-states'>McWay Falls, United States</a> No caption <a href='https://unsplash.com/photos/TWoL-QCZubY'>Link</a> </p>"
//                 >
//                     <img
//                         className="img-responsive"
//                         src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
//                     />
//                 </a>
//                 <a
//                     data-lg-size="1600-2400"
//                     data-pinterest-text="Pin it3"
//                     data-tweet-text="lightGallery slide  4"
//                     className="gallery-item"
//                     data-src="https://images.unsplash.com/photo-1539678050869-2b97c7c359fd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
//                     data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@michaljaneck' >Michal Janek</a></h4><p>Location - <a href='https://unsplash.com/s/photos/big-sur%2C-united-states'>Big Sur, United States</a> Coast  </p>"
//                 >
//                     <img
//                         className="img-responsive"
//                         src="https://images.unsplash.com/photo-1539678050869-2b97c7c359fd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
//                     />
//                 </a>
//                 <a
//                     data-lg-size="1600-2400"
//                     data-pinterest-text="Pin it3"
//                     data-tweet-text="lightGallery slide  4"
//                     className="gallery-item"
//                     data-src="https://images.unsplash.com/photo-1446630073557-fca43d580fbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
//                     data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@papillon' >Iris Papillon</a></h4><p>Location - <a href='https://unsplash.com/s/photos/big-sur%2C-united-states'>Big Sur, United States</a> Big Sur drive  </p>"
//                 >
//                     <img
//                         className="img-responsive"
//                         src="https://images.unsplash.com/photo-1446630073557-fca43d580fbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
//                     />
//                 </a>
//                 <a
//                     data-lg-size="1600-1065"
//                     data-pinterest-text="Pin it3"
//                     data-tweet-text="lightGallery slide  4"
//                     className="gallery-item"
//                     data-src="https://images.unsplash.com/photo-1596370743446-6a7ef43a36f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
//                     data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@piyushh_dubeyy' >piyush dubey</a></h4><p>Published on August 2, 2020</p>"
//                 >
//                     <img
//                         className="img-responsive"
//                         src="https://images.unsplash.com/photo-1596370743446-6a7ef43a36f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
//                     />
//                 </a>
//                 <a
//                     data-lg-size="1600-2134"
//                     data-pinterest-text="Pin it3"
//                     data-tweet-text="lightGallery slide  4"
//                     className="gallery-item"
//                     data-src="https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
//                     data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@fynn_it' >fynn</a></h4><p>Location - <a href='https://unsplash.com/s/photos/big-sur%2C-united-states'>Big Sur, United States</a> Wasserauen, Appenzell Innerrhoden, Schweiz  </p>"
//                 >
//                     <img
//                         className="img-responsive"
//                         src="https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
//                     />
//                 </a>
//                 <a
//                     data-lg-size="1600-1060"
//                     data-pinterest-text="Pin it3"
//                     data-tweet-text="lightGallery slide  4"
//                     className="gallery-item"
//                     data-src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
//                     data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@danielleone' >Daniel Leone</a></h4><p>Location - <a href='https://unsplash.com/s/photos/poon-hill%2C-ghode-pani%2C-nepal'>Poon Hill, Ghode Pani, Nepal</a> Taken from the top of Poon Hill before sun rise </p>"
//                 >
//                     <img
//                         className="img-responsive"
//                         src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
//                     />
//                 </a>
//                 <a
//                     data-lg-size="1600-1037"
//                     data-pinterest-text="Pin it3"
//                     data-tweet-text="lightGallery slide  4"
//                     className="gallery-item"
//                     data-src="https://images.unsplash.com/photo-1510011560141-62c7e8fc7908?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
//                     data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@bboba' >Boba Jovanovic</a></h4><p>Location - <a href='https://unsplash.com/s/photos/bay-of-kotor'>Bay of Kotor</a> Boka kotorska bay </p>"
//                 >
//                     <img
//                         className="img-responsive"
//                         src="https://images.unsplash.com/photo-1510011560141-62c7e8fc7908?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
//                     />
//                 </a>
//                 <a
//                     data-lg-size="1600-899"
//                     data-pinterest-text="Pin it3"
//                     data-tweet-text="lightGallery slide  4"
//                     className="gallery-item"
//                     data-src="https://images.unsplash.com/photo-1586276393635-5ecd8a851acc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
//                     data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@svsdesigns' >Surendra Vikram Singh</a></h4><p>Location - <a href='https://unsplash.com/s/photos/lachung%2C-sikkim%2C-india'>Lachung, Sikkim, India</a> Cloud covered mountain </p>"
//                 >
//                     <img
//                         className="img-responsive"
//                         src="https://images.unsplash.com/photo-1586276393635-5ecd8a851acc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
//                     />
//                 </a>
//                 <a
//                     data-lg-size="1600-1067"
//                     data-pinterest-text="Pin it3"
//                     data-tweet-text="lightGallery slide  4"
//                     className="gallery-item"
//                     data-src="https://images.unsplash.com/photo-1471931452361-f5ff1faa15ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2252&q=80"
//                     data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@camadams' >Cam Adams</a></h4><p>Location - <a href='https://unsplash.com/s/photos/banff%2C-canada'>Banff, Canada</a> Lake along jagged mountains</p>"
//                 >
//                     <img
//                         className="img-responsive"
//                         src="https://images.unsplash.com/photo-1471931452361-f5ff1faa15ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
//                     />
//                 </a>

//             </LightGallery>
//         </div>
//     );
// };

// export default Imagegallery;    

// import { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import img1 from "../../assets/images/slider/1.jpg";
// import img2 from "../../assets/images/slider/1.jpg";
// import img3 from "../../assets/images/slider/1.jpg";
// import img4 from "../../assets/images/slider/1.jpg";

// function ControlledCarousel() {
//     const [index, setIndex] = useState(0);

//     const handleSelect = (selectedIndex) => {
//         setIndex(selectedIndex);
//     };

//     return (
//         <Carousel activeIndex={index} onSelect={handleSelect}>
//             <Carousel.Item>
//                 <img src={img1} alt="First slide"/>
//                 <Carousel.Caption>
//                     <h3>First slide label</h3>
//                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img src={img2} alt="Second slide"/>
//                 <Carousel.Caption>
//                     <h3>Second slide label</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img src={img3} alt="Third slide"/>
//                 <Carousel.Caption>
//                     <h3>Third slide label</h3>
//                     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img src={img4} alt="Fourth slide"/>
//                 <Carousel.Caption>
//                     <h3>Fourth slide label</h3>
//                     <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//         </Carousel>
//     );
// }

// export default ControlledCarousel;

// import React, { useEffect } from "react";
// import Swiper, { Navigation, Pagination } from "swiper";
// import "../Imagegallery/Imagegallery.css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// const ProductCarousel = () => {
//     useEffect(() => {
//         new Swiper("#swiper1", {
//             modules: [Navigation, Pagination],
//             loop: true,
//             slidesPerView: "auto",
//             centeredSlides: true,
//             pagination: {
//               el: ".swiper-pagination",
//               clickable: true,
//             },
//             navigation: {
//               nextEl: "#js-next1",
//               prevEl: "#js-prev1",
//             },
//         });
//     }, []);

//     const products = [
//         { id: 1, imgSrc: 'https://unsplash.it/g/430/431?image=502', name: 'Lorem ipsum 1', description: 'lorem ipsum dol' },
//         { id: 2, imgSrc: 'https://unsplash.it/g/430/431?image=401', name: 'Lorem ipsum 2', description: 'lorem ipsum dol' },
//         { id: 3, imgSrc: 'https://unsplash.it/g/430/431?image=201', name: 'Lorem ipsum 3', description: 'lorem ipsum dol' },
//         { id: 4, imgSrc: 'https://unsplash.it/g/430/431?image=504', name: 'Lorem ipsum 4', description: 'lorem ipsum dol' },
//         { id: 5, imgSrc: 'https://unsplash.it/g/430/431?image=404', name: 'Lorem ipsum 5', description: 'lorem ipsum dol' },
//         { id: 6, imgSrc: 'https://unsplash.it/g/430/431?image=406', name: 'Lorem ipsum 6', description: 'lorem ipsum dol' },
//         { id: 7, imgSrc: 'https://unsplash.it/g/430/431?image=407', name: 'Lorem ipsum 7', description: 'lorem ipsum dol' },
//     ];

//     return (
//         <div className="container my-4">
//             <div className="swiper" id="swiper1">
//                 <div className="swiper-wrapper">
//                     {products.map((product) => (
//                         <div className="swiper-slide" key={product.id}>
//                             <div className="product text-center">
//                                 <img className="img-fluid" src={product.imgSrc} alt={product.name} />
//                                 <h2 className="product__name mt-2">{product.name}</h2>
//                                 <p className="product__description">{product.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="swiper-pagination"></div>
//             </div>
//             <div id="js-prev1" className="swiper-button-prev"></div>
//             <div id="js-next1" className="swiper-button-next"></div>
//         </div>
//     );
// };

// export default ProductCarousel;









// import React, { useState } from "react";
// import Slider from "react-slick";
// import Modal from "react-modal";
// import "./imagegallery.css";

// Modal.setAppElement('#root');

// function AutoPlay() {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [modalImage, setModalImage] = useState("");

//     const settings = {
//         dots: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         speed: 2000,
//         autoplaySpeed: 2000,
//         cssEase: "linear",
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true
//                 }
//             }
//         ]
//     };

//     const handleImageClick = (src) => {
//         setModalImage(src);
//         setIsModalOpen(true);
//     };

//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//         setModalImage("");
//     };

//     return (
//         <div className="slider-container container">
//             <div className="imagetext"><h1>IMAGE GALLERY</h1></div>
//             <Slider {...settings} className="setting">
//                 <div className="imges gallery-item" onClick={() => handleImageClick("https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-011-768x768.jpg")}>
//                     <img src="https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-011-768x768.jpg" className="imgs" onError={(e) => { e.target.onerror = null; e.target.src = "fallback-image-url.jpg"; }} />
//                 </div>
//                 <div className="imges gallery-item" onClick={() => handleImageClick("https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-13-768x768.jpg")}>
//                     <img src="https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-13-768x768.jpg" className="imgs" onError={(e) => { e.target.onerror = null; e.target.src = "fallback-image-url.jpg"; }} />
//                 </div>
//                 <div className="imges gallery-item" onClick={() => handleImageClick("https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-9-768x768.jpg")}>
//                     <img src="https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-9-768x768.jpg" className="imgs" onError={(e) => { e.target.onerror = null; e.target.src = "fallback-image-url.jpg"; }} />
//                 </div>
//                 <div className="imges gallery-item" onClick={() => handleImageClick("https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-07-768x768.jpg")}>
//                     <img src="https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-07-768x768.jpg" className="imgs" onError={(e) => { e.target.onerror = null; e.target.src = "fallback-image-url.jpg"; }} />
//                 </div>
//                 <div className="imges gallery-item" onClick={() => handleImageClick("https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-7-768x768.jpg")}>
//                     <img src="https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-7-768x768.jpg" className="imgs" onError={(e) => { e.target.onerror = null; e.target.src = "fallback-image-url.jpg"; }} />
//                 </div>
//                 <div className="imges gallery-item" onClick={() => handleImageClick("https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-06-768x768.jpg")}>
//                     <img src="https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-06-768x768.jpg" className="imgs" onError={(e) => { e.target.onerror = null; e.target.src = "fallback-image-url.jpg"; }} />
//                 </div>
//             </Slider>

//             <Modal
//                 isOpen={isModalOpen}
//                 onRequestClose={handleCloseModal}
//                 contentLabel="Image Modal"
//                 className="modal"
//                 overlayClassName="overlay"
//             >
//                 <button onClick={handleCloseModal} className="close-button">Close</button>
//                 <img src={modalImage} alt="Fullscreen" className="modal-image" onError={(e) => { e.target.onerror = null; e.target.src = "fallback-image-url.jpg"; }} />
//             </Modal>
//         </div>
//     );
// }

// export default AutoPlay;


// import React, { useState } from 'react';
// import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

// const PhotoGallery = () => {
//   const [photos, setPhotos] = useState([
//     { id: 1, src: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-0001-768x768.jpg', alt: 'Image 1' },
//     { id: 2, src: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-0001-768x768.jpg', alt: 'Image 2' },
//     { id: 3, src: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-0001-768x768.jpg', alt: 'Image 3' },
//     { id: 4, src: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-0001-768x768.jpg', alt: 'Image 4' },
//   ]);
//   const [newImageUrl, setNewImageUrl] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [selectedPhoto, setSelectedPhoto] = useState(null);

//   const handleAddImage = () => {
//     if (newImageUrl) {
//       const newPhoto = {
//         id: photos.length + 1,
//         src: newImageUrl,
//         alt: `Image ${photos.length + 1}`,
//       };
//       setPhotos([...photos, newPhoto]);
//       setNewImageUrl(''); // Clear the input field
//     }
//   };

//   const handleClick = (photo) => {
//     setSelectedPhoto(photo);
//     setShowModal(true);
//   };

//   const handleClose = () => {
//     setShowModal(false);
//     setSelectedPhoto(null);
//   };

//   return (
//     <div className="container">
//       <h1 className="text-center my-4">Photo Gallery</h1>

//       {/* Input form for adding image links */}
//       {/* <Form className="mb-4">
//         <Form.Group>
//           <Form.Label>Add Image URL:</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter image URL"
//             value={newImageUrl}
//             onChange={(e) => setNewImageUrl(e.target.value)}
//           />
//         </Form.Group>
//         <Button variant="primary" onClick={handleAddImage}>
//           Add Image
//         </Button>
//       </Form> */}

//       <Row className="justify-content-center">
//         {photos.map((photo) => (
//           <Col key={photo.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
//             <div
//               className="photo-thumbnail"
//               style={{
//                 position: 'relative',
//                 overflow: 'hidden',
//                 borderRadius: '8px',
//                 cursor: 'pointer',
//               }}
//               onClick={() => handleClick(photo)}
//             >
//               <img
//                 src={photo.src}
//                 alt={photo.alt}
//                 className="img-fluid"
//                 style={{
//                   width: '100%',
//                   height: 'auto',
//                   transition: 'transform 0.3s ease',
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.transform = 'scale(1.1)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.transform = 'scale(1)';
//                 }}
//               />
//             </div>
//           </Col>
//         ))}
//       </Row>

//       {/* Modal to show the larger image */}
//       <Modal show={showModal} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>{selectedPhoto?.alt}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <img
//             src={selectedPhoto?.src}
//             alt={selectedPhoto?.alt}
//             className="img-fluid"
//           />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default PhotoGallery;

// import React, { useState } from 'react';
// import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
// import Slider from 'react-slick'; // Import Slider component
// import './imagegallery.css'

// const PhotoGallery = () => {
//     const [photos, setPhotos] = useState([
//         { id: 1, src: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-011-768x768.jpg', alt: 'Image 1' },
//         { id: 2, src: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-13-768x768.jpg', alt: 'Image 2' },
//         { id: 3, src: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-9-768x768.jpg', alt: 'Image 3' },
//         { id: 4, src: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-07-768x768.jpg"', alt: 'Image 4' },
//     ]);
//     const [newImageUrl, setNewImageUrl] = useState('');
//     const [showModal, setShowModal] = useState(false);
//     const [selectedPhoto, setSelectedPhoto] = useState(null);

//     const handleAddImage = () => {
//         if (newImageUrl) {
//             const newPhoto = {
//                 id: photos.length + 1,
//                 src: newImageUrl,
//                 alt: `Image ${photos.length + 1}`,
//             };
//             setPhotos([...photos, newPhoto]);
//             setNewImageUrl(''); // Clear the input field
//         }
//     };

//     const handleClick = (photo) => {
//         setSelectedPhoto(photo);
//         setShowModal(true);
//     };

//     const handleClose = () => {
//         setShowModal(false);
//         setSelectedPhoto(null);
//     };

//     // Slider settings
//     const settings = {
//         dots: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         speed: 2000, autoplaySpeed: 2000, cssEase: "linear", responsive: [{
//             breakpoint: 768, settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true
//             }
//         }
//         ]
//     };

//     return (
//         <div className="container">
//             {/* <h1 className="text-center my-4">Photo Gallery</h1> */}
//             <div className="imagetext"><h1>IMAGE GALLERY</h1></div>

//             {/* Input form for adding image links */}
//             {/* <Form className="mb-4">
//                 <Form.Group>
//                     <Form.Label>Add Image URL:</Form.Label>
//                     +-<Form.Control
//                         type="text"
//                         placeholder="Enter image URL"
//                         value={newImageUrl}
//                         onChange={(e) => setNewImageUrl(e.target.value)}
//                     />
//                 </Form.Group>
//                 <Button variant="primary" onClick={handleAddImage}>
//                     Add Image
//                 </Button>
//             </Form> */}

//             {/* Slider */}
//             <Slider {...settings}>
//                 {photos.map((photo) => (
//                     <div key={photo.id} onClick={() => handleClick(photo)} className="photo-thumbnail">
//                         <img
//                             src={photo.src}
//                             alt={photo.alt}
//                             className="img-fluid"
//                             style={{
//                                 width: '100%',
//                                 height: 'auto',
//                                 cursor: 'pointer',
//                                 borderRadius: '8px',
//                                 padding:'5px'
//                             }}
//                         />
//                     </div>
//                 ))}
//             </Slider>

//             {/* Modal to show the larger image */}
//             <Modal show={showModal} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{selectedPhoto?.alt}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <img
//                         src={selectedPhoto?.src}
//                         alt={selectedPhoto?.alt}
//                         className="img-fluid"
//                     />
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     );
// };

// export default PhotoGallery;


// import React, { useState } from 'react';
// import { Modal, Button } from 'react-bootstrap';
// import Slider from 'react-slick'; // Import Slider component
// import './imagegallery.css';

// const PhotoGallery = () => {
//     const [photos, setPhotos] = useState([
//         { id: 1, src: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-011-768x768.jpg', alt: 'Image 1' },
//         { id: 2, src: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-13-768x768.jpg', alt: 'Image 2' },
//         { id: 3, src: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-9-768x768.jpg', alt: 'Image 3' },
//         { id: 4, src: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-07-768x768.jpg', alt: 'Image 4' },
//     ]);
//     const [newImageUrl, setNewImageUrl] = useState('');
//     const [showModal, setShowModal] = useState(false);
//     const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

//     const handleAddImage = () => {
//         if (newImageUrl) {
//             const newPhoto = {
//                 id: photos.length + 1,
//                 src: newImageUrl,
//                 alt: `Image ${photos.length + 1}`,
//             };
//             setPhotos([...photos, newPhoto]);
//             setNewImageUrl(''); // Clear the input field
//         }
//     };

//     const handleClick = (index) => {
//         setSelectedPhotoIndex(index);
//         setShowModal(true);
//     };

//     const handleClose = () => {
//         setShowModal(false);
//         setSelectedPhotoIndex(null);
//     };

//     // Function to show the next photo in the modal
//     const handleNext = () => {
//         if (selectedPhotoIndex < photos.length - 1) {
//             setSelectedPhotoIndex(selectedPhotoIndex + 1);
//         } else {
//             setSelectedPhotoIndex(0); // Loop back to the first photo
//         }
//     };

//     // Function to show the previous photo in the modal
//     const handlePrev = () => {
//         if (selectedPhotoIndex > 0) {
//             setSelectedPhotoIndex(selectedPhotoIndex - 1);
//         } else {
//             setSelectedPhotoIndex(photos.length - 1); // Loop to the last photo
//         }
//     };

//     // Slider settings
//     const settings = {
//         dots: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         speed: 2000,
//         autoplaySpeed: 2000,
//         cssEase: 'linear',
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true,
//                 },
//             },
//         ],
//     };

//     return (
//         <div className="container">
//             <div className="imagetext">
//                 <h1>IMAGE GALLERY</h1>
//             </div>

//             {/* Slider */}
//             <Slider {...settings}>
//                 {photos.map((photo, index) => (
//                     <div key={photo.id} onClick={() => handleClick(index)} className="photo-thumbnail">
//                         <img
//                             src={photo.src}
//                             alt={photo.alt}
//                             className="img-fluid"
//                             style={{
//                                 width: '100%',
//                                 height: 'auto',
//                                 cursor: 'pointer',
//                                 borderRadius: '8px',
//                                 padding: '5px',
//                             }}
//                         />
//                     </div>
//                 ))}
//             </Slider>

//             {/* Modal to show the larger image */}
//             <Modal show={showModal} onHide={handleClose} className='Modal-Body'>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{photos[selectedPhotoIndex]?.alt}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body >
//                     <img
//                         src={photos[selectedPhotoIndex]?.src}
//                         alt={photos[selectedPhotoIndex]?.alt}
//                         className="img-fluid"
//                     />
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handlePrev}>
//                         Previous
//                     </Button>
//                     <Button variant="secondary" onClick={handleNext}>
//                         Next
//                     </Button>
//                     {/* <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button> */}
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     );
// };

// export default PhotoGallery;

import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Slider from 'react-slick'; // Import Slider component
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa'; // Importing the icons from react-icons
import './imagegallery.css'; // Your CSS file for additional styling
import 'aos/dist/aos.css'; 

const PhotoGallery = () => {
    const [photos, setPhotos] = useState([
        { id: 1, src: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-011-768x768.jpg', alt: '' },
        { id: 2, src: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-13-768x768.jpg', alt: '' },
        { id: 3, src: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-9-768x768.jpg', alt: '' },
        { id: 4, src: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-07-768x768.jpg', alt: '' },
    ]);
    const [newImageUrl, setNewImageUrl] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

    const handleAddImage = () => {
        if (newImageUrl) {
            const newPhoto = {
                id: photos.length + 1,
                src: newImageUrl,
                alt: `Image ${photos.length + 1}`,
            };
            setPhotos([...photos, newPhoto]);
            setNewImageUrl(''); // Clear the input field
        }
    };

    const handleClick = (index) => {
        setSelectedPhotoIndex(index);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedPhotoIndex(null);
    };

    // Function to show the next photo in the modal
    const handleNext = () => {
        if (selectedPhotoIndex < photos.length - 1) {
            setSelectedPhotoIndex(selectedPhotoIndex + 1);
        } else {
            setSelectedPhotoIndex(0); // Loop back to the first photo
        }
    };

    // Function to show the previous photo in the modal
    const handlePrev = () => {
        if (selectedPhotoIndex > 0) {
            setSelectedPhotoIndex(selectedPhotoIndex - 1);
        } else {
            setSelectedPhotoIndex(photos.length - 1); // Loop to the last photo
        }
    };

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <div className="container p-5" data-aos="fade-up"
        data-aos-anchor-placement="center-center">
            <div className="imagetext">
                <h1>IMAGE GALLERY</h1>
            </div>

            {/* Slider */}
            <Slider {...settings}>
                {photos.map((photo, index) => (
                    <div key={photo.id} onClick={() => handleClick(index)} className="photo-thumbnail">
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            className="img-fluid"
                            style={{
                                width: '100%',
                                height: 'auto',
                                cursor: 'pointer',
                                borderRadius: '8px',
                                padding: '5px',
                            }}
                        />
                    </div>
                ))}
            </Slider>

            {/* Modal to show the larger image */}
            <Modal show={showModal} onHide={handleClose} className="Modal-Body">
                <Modal.Header closeButton>
                    <Button
                        variant="link"
                        className="close-icon"
                        onClick={handleClose}
                    >
                        <FaTimes />
                    </Button>
                    <Modal.Title>{photos[selectedPhotoIndex]?.alt}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <img
                        src={photos[selectedPhotoIndex]?.src}
                        alt={photos[selectedPhotoIndex]?.alt}
                        className="img-fluid"
                    />
                </Modal.Body>
                <Modal.Footer >
                    <Button variant="secondary" onClick={handlePrev}>
                        <FaArrowLeft /> Previous
                    </Button>
                    <Button variant="secondary" onClick={handleNext}>
                        Next <FaArrowRight />
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default PhotoGallery;
