// import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import './blogPage.css';
// import { blogPosts } from './blogPosts.js'; 

// // Sample blog data
// const blogPosts = [
//   { id: 1, title: 'First Blog Post', excerpt: 'Learn about the basics of Vastu...', date: '2024-03-01', category: 'Vastu Basics', content: 'Full content...' },
//   { id: 2, title: 'Home Direction Tips', excerpt: 'Best directions for main entrance...', date: '2024-03-05', category: 'Home Vastu', content: 'Full content...' },
//   { id: 3, title: 'Home Direction Tips', excerpt: 'Best directions for main entrance...', date: '2024-03-05', category: 'Home Vastu', content: 'Full content...' },
//   { id: 4, title: 'Home Direction Tips', excerpt: 'Best directions for main entrance...', date: '2024-03-05', category: 'Home Vastu', content: 'Full content...' },
//   { id: 5, title: 'Home Direction Tips', excerpt: 'Best directions for main entrance...', date: '2024-03-05', category: 'Home Vastu', content: 'Full content...' },
// ];


// export default function BlogPage() {
//   const navigate = useNavigate();

//   const handleReadMore = (postId) => {
//     navigate(`/posts/${postId}`);
//   };

//   return (
//     <Container className="blog-top">
//       <Row>
//         {/* Main Content Column */}
//         <Col md={8}>
//           {/* <h2 className="mb-4">Latest Posts</h2> */}

//           {blogPosts.map((post) => (
//             <Card key={post.id} className="mb-4 shadow-sm">
//               <Card.Body>
//                 <Card.Title>{post.title}</Card.Title>
//                 <Card.Subtitle className="mb-2 text-muted">
//                   {post.date} | {post.category}
//                 </Card.Subtitle>
//                 <Card.Text>{post.excerpt}</Card.Text>
//                 <Button 
//                   variant="primary" 
//                   onClick={() => handleReadMore(post.id)}
//                 >
//                   More Details
//                 </Button>
//               </Card.Body>
//             </Card>
//           ))}
//         </Col>

//         {/* Sidebar Column */}
//         <Col md={4}>
//           <Card className="mb-4 shadow-sm">
//             <Card.Body>
//               <h5>Recent Posts</h5>
//               <ListGroup variant="flush">
//                 {blogPosts.map((post) => (
//                   <ListGroup.Item key={post.id} action onClick={() => handleReadMore(post.id)}>
//                     {post.title}
//                   </ListGroup.Item>
//                 ))}
//               </ListGroup>
//             </Card.Body>
//           </Card>

//           <Card className="mb-4 shadow-sm">
//             <Card.Body>
//               <h5>Categories</h5>
//               <ListGroup variant="flush">
//                 <ListGroup.Item action>Vastu Basics</ListGroup.Item>
//                 <ListGroup.Item action>Home Vastu</ListGroup.Item>
//                 <ListGroup.Item action>Office Vastu</ListGroup.Item>
//               </ListGroup>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// // Create PostDetails.jsx for individual post view
// // export function PostDetails() {
// //   // You would typically fetch the post data based on URL parameter
// //   const { postId } = useParams();
// //   const post = blogPosts.find(p => p.id === Number(postId));

// //   return (
// //     <Container className="my-5">
// //       <Button variant="secondary" onClick={() => navigate(-1)} className="mb-4">
// //         &larr; Back to Blog
// //       </Button>
// //       <Card className="shadow">
// //         <Card.Body>
// //           <Card.Title>{post.title}</Card.Title>
// //           <Card.Subtitle className="mb-2 text-muted">
// //             {post.date} | {post.category}
// //           </Card.Subtitle>
// //           <Card.Text>{post.content}</Card.Text>
// //         </Card.Body>
// //       </Card>
// //     </Container>
// //   );
// // }

// import { Container, Row, Col, Card, Button, ListGroup, Breadcrumb } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import './blogPage.css';
// import { blogPosts } from './blogPosts';

// export default function BlogPage() {
//     const navigate = useNavigate();

//     const handleReadMore = (postId) => {
//         navigate(`/posts/${postId}`);
//     };

//     return (

//         <div className='py-5'> <Breadcrumb className='Breadcrumb '>
//             <Breadcrumb.Item href="/" >Home</  Breadcrumb.Item>
//             <Breadcrumb.Item active>BlogPage</Breadcrumb.Item>
//         </Breadcrumb>
//             <Container className="blog-top">
//                 <Row>
//                     <Col md={8}>
//                         {blogPosts.map((post) => (
//                             <Card key={post.id} className="mb-4 shadow-sm">
//                                 <Card.Body>
//                                     <Card.Title>{post.title}</Card.Title>
//                                     <Card.Subtitle className="mb-2 text-muted">
//                                         {post.date} | {post.category}
//                                     </Card.Subtitle>
//                                     <Card.Text>{post.excerpt}</Card.Text>
//                                     <Button
//                                         variant="primary"
//                                         onClick={() => handleReadMore(post.id)}
//                                     >
//                                         More Details
//                                     </Button>
//                                 </Card.Body>
//                             </Card>
//                         ))}
//                     </Col>

//                     <Col md={4}>
//                         <Card className="mb-4 shadow-sm">
//                             <Card.Body>
//                                 <h5>Recent Posts</h5>
//                                 <ListGroup variant="flush">
//                                     {blogPosts.map((post) => (
//                                         <ListGroup.Item className='color-change' key={post.id} action onClick={() => handleReadMore(post.id)}>
//                                             {post.title}
//                                         </ListGroup.Item>
//                                     ))}
//                                 </ListGroup>
//                             </Card.Body>
//                         </Card>

//                         <Card className="mb-4 shadow-sm">
//                             <Card.Body>
//                                 <h5>Categories</h5>
//                                 <ListGroup variant="flush">
//                                     <ListGroup.Item className='color-change' action>Vastu Basics</ListGroup.Item>
//                                     <ListGroup.Item className='color-change' action>Home Vastu</ListGroup.Item>
//                                     <ListGroup.Item className='color-change' action>Office Vastu</ListGroup.Item>
//                                 </ListGroup>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     );
// }



// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import './blogpage.css';

// export default function BlogSection() {
//   const blogPosts = [
//     {
//       id: 1,
//       author: 'Merkel James',
//       date: '27 Sep 2025',
//       category: 'Booking',
//       content: 'It empowers designers to swiftly created informative landing...',
//       image: '/images/blog1.jpg' // Add your image path
//     },
//     {
//       id: 2,
//       author: 'Harriet Collins',
//       date: '27 Sep 2025',
//       category: 'News',
//       content: 'Want to be notified about new posts and news from our Portal?',
//       image: '/images/blog2.jpg' // Add your image path
//     },
//     {
//       id: 3,
//       author: 'Rachel Mariscal',
//       date: '27 Sep 2025',
//       category: 'Tips',
//       content: 'It empowers designers to swiftly created informative landing...',
//       image: '/images/blog3.jpg' // Add your image path
//     }
//   ];

//   return (
//     <section className="blog-section">
//       <Container>
//         <Row className="mb-5">
//           <Col>
//             <h2 className="section-title">
//               Read Our Latest Stories & Tips Here
//             </h2>
//             <p className="section-subtitle">
//               Stay Updated on the Stories & Stay Updated
//             </p>
//           </Col>
//         </Row>

//         <Row>
//           {blogPosts.map((post) => (
//             <Col md={4} key={post.id} className="mb-4">
//               <Card className="h-100">
//                 <Card.Img variant="top" src={post.image} />
//                 <Card.Body>
//                   <div className="post-meta mb-3">
//                     <span className="post-category">{post.category}</span>
//                     <span className="post-date">{post.date}</span>
//                   </div>
//                   <Card.Title>{post.author}</Card.Title>
//                   <Card.Text>{post.content}</Card.Text>
//                   <Button variant="primary">Read More</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// }

// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import './blogPage.css';

// export default function BlogSection() {
//   const blogPosts = [
//     {
//       id: 1,
//       author: 'Merkel James',
//       date: '27 Sep 2025',
//       category: 'Booking',
//       content: 'It empowers designers to swiftly created informative landing...',
//       image: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-011-768x768.jpg' // Add your image path
//     },
//     {
//       id: 2,
//       author: 'Harriet Collins',
//       date: '27 Sep 2025',
//       category: 'News',
//       content: 'Want to be notified about new posts and news from our Portal?',
//       image: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-13-768x768.jpg' // Add your image path
//     },
//     {
//       id: 3,
//       author: 'Rachel Mariscal',
//       date: '27 Sep 2025',
//       category: 'Tips',
//       content: 'It empowers designers to swiftly created informative landing...',
//       image: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-9-768x768.jpg' // Add your image path
//     }
//   ];

//   return (
//     <section className="blog-section">
//       <Container className='blog-section2'>
//         <Row className="mb-5">
//           <Col>
//             <h2 className="section-title">
//               Read Our Latest Stories & Tips Here
//             </h2>
//             <p className="section-subtitle">
//               Stay Updated on the Stories & Stay Updated
//             </p>
//           </Col>
//         </Row>

//         <Row>
//           {blogPosts.map((post) => (
//             <Col md={4} key={post.id} className="mb-4">
//               <Card className="h-100 card5">
//                 <Card.Img variant="top" src={post.image} className="card5-img" />
//                 <Card.Body className="card5-body">
//                   <div className="post-meta mb-3">
//                     <span className="post-category card5-category">{post.category}</span>
//                     <span className="post-date card5-date">{post.date}</span>
//                   </div>
//                   <Card.Title className="card5-title">{post.author}</Card.Title>
//                   <Card.Text className="card5-text">{post.content}</Card.Text>
//                   <Button variant="primary" className="card5-button">Read More</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// }


// import { Container, Row, Col } from 'react-bootstrap';
// // import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './blogPage.css';
// import { Link } from "react-router-dom";

// export default function BlogSlider() {
//     const blogPosts = [
//         {
//             id: 1,
//             title: 'Astrology is one of the earliest attempts made  .',
//             image: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-13-768x768.jpg', // Add your image path
//             category: 'Travel Tips',
//             date: '10 Oct 2025',
//         },
//         {
//             id: 2,
//             title: 'Astrology is one of the earliest attempts made  .',
//             image: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-13-768x768.jpg', // Add your image path
//             category: 'Tech',
//             date: '12 Oct 2025',
//         },
//         {
//             id: 3,
//             title: 'Astrology is one of the earliest attempts made .',
//             image: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-9-768x768.jpg', // Add your image path
//             category: 'Travel',
//             date: '15 Oct 2025',
//         },
//         {
//             id: 4,
//             title: 'Astrology is one of the earliest attempts made .',
//             image: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-9-768x768.jpg', // Add your image path
//             category: 'Travel',
//             date: '15 Oct 2025',
//         },
//         {
//             id: 5,
//             title: 'Astrology is one of the earliest attempts made .',
//             image: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-9-768x768.jpg', // Add your image path
//             category: 'Travel',
//             date: '15 Oct 2025',
//         },
//         {
//             id: 6,
//             title: 'Astrology is one of the earliest attempts made .',
//             image: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-9-768x768.jpg', // Add your image path
//             category: 'Travel',
//             date: '15 Oct 2025',
//         },

//     ];

//     // Slick Slider settings
//     // const sliderSettings = {
//     //     dots: true,
//     //     infinite: true,
//     //     speed: 500,
//     //     slidesToShow: 3,
//     //     slidesToScroll: 1,
//     //     responsive: [
//     //         {
//     //             breakpoint: 992,
//     //             settings: {
//     //                 slidesToShow: 2,
//     //             },
//     //         },
//     //         {
//     //             breakpoint: 768,
//     //             settings: {
//     //                 slidesToShow: 1,
//     //             },
//     //         },
//     //     ],
//     // };

//     return (
//         <section className="blog-slider-section">
//             <div className='bggg'>
//             </div>
//             <div >
//                 <h1 className='Aboutus1text'>Blog page</h1>
//             </div>
//             <Container className='py-5'>
//                 <Row className="mb-5">
//                     <Col>
//                         <h2 className="section-title">Latest News & Article</h2>
//                         <p className="section-subtitle">
//                             Connecting Needs with Offers for the Professional Flight Services
//                         </p>
//                     </Col>
//                 </Row>

//                 {/* <Slider {...sliderSettings}> */}
//                 {/* <div >
//                     <Col md={12} className='flexx' >{blogPosts.map((post) => (
//                         <div key={post.id} className="blog-slide">
//                             <div className="blog-card">
//                                 <div className="blog-image-wrapper">
//                                     <Link to={`/posts/${post.id}`}> <img
//                                         src={post.image}
//                                         alt={post.title}
//                                         className="blog-image"
//                                     /></Link>
//                                 </div>
//                                 <div className="blog-content">
//                                     <span className="blog-category">{post.category}</span>
//                                     <h3 className="blog-title">{post.title}</h3>
//                                     <span className="blog-date">{post.date}</span>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}</Col>
//                 </div> */}
//                 <div className='blog-posts'>
//                     {blogPosts.map((post) => (
//                         <div key={post.id} className="blog-slide">
//                             <div className="blog-card">
//                                 <div className="blog-image-wrapper">
//                                     <Link to={`/posts/${post.id}`}> <img
//                                         src={post.image}
//                                         alt={post.title}
//                                         className="blog-image"
//                                     /></Link>
//                                 </div>
//                                 <div className="blog-content">
//                                     <span className="blog-category">{post.category}</span>
//                                     <h3 className="blog-title">{post.title}</h3>
//                                     <span className="blog-date">{post.date}</span>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 {/* </Slider> */}
//             </Container>
//         </section>
//     );
// }

import { Container, Breadcrumb, Row, Col } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './blogPage.css';
import { Link } from "react-router-dom";

export default function BlogSlider() {
    const blogPosts = [
        {
            id: 1,
            title: 'Astrology is one of the earliest attempts made.',
            image: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-13-768x768.jpg',
            // category: 'Travel Tips',
            date: '10 Oct 2025',
        },
        {
            id: 2,
            title: 'Astrology is one of the earliest attempts made.',
            image: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-13-768x768.jpg',
            // category: 'Tech',
            date: '12 Oct 2025',
        },
        {
            id: 3,
            title: 'Astrology is one of the earliest attempts made.',
            image: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-9-768x768.jpg',
            // category: 'Travel',
            date: '15 Oct 2025',
        },
        {
            id: 4,
            title: 'Astrology is one of the earliest attempts made.',
            image: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-9-768x768.jpg',
            // category: 'Travel',
            date: '15 Oct 2025',
        },
        {
            id: 5,
            title: 'Astrology is one of the earliest attempts made.',
            image: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-9-768x768.jpg',
            // category: 'Travel',
            date: '15 Oct 2025',
        },
        {
            id: 6,
            title: 'Astrology is one of the earliest attempts made.',
            image: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-9-768x768.jpg',
            // category: 'Travel',
            date: '15 Oct 2025',
        },
    ];

    return (
        <section className="blog-slider-section">
            {/* <div className='bggg'><div><h1 className='Aboutus3text text-center'>Blog Page</h1></div></div> */}
            {/* <div className='bggg'></div>
            <Breadcrumb className='Breadcrumb  '>

                <Breadcrumb.Item href="/" >Home</  Breadcrumb.Item>
                <Breadcrumb.Item active>Blog Page</Breadcrumb.Item>
            </Breadcrumb> */}

            <div className="breadcrumb-container">
                {/* Overlay */}
                <div className="breadcrumb-overlay"></div>

                <nav aria-label="breadcrumb" className="breadcrumb-content">
                    <ol className="breadcrumb bg-transparent text-light text-center">
                        <li className="breadcrumb-item">
                            <a href="/" className="text-light">Home</a>
                        </li>
                        <li className="breadcrumb-item active text-light" aria-current="page">
                            Blog Page
                        </li>
                    </ol>
                </nav>
            </div>
            <Container className='py-5'>
                <Row className="mb-5 text-center">
                    <Col>
                        <h2 className="section-title">Latest News & Article</h2>
                        <p className="section-subtitle">
                            Connecting Needs with Offers for the Professional Flight Services
                        </p>
                    </Col>
                </Row>
                <Row className="g-4">
                    {blogPosts.map((post) => (
                        <Col key={post.id} xs={12} sm={6} md={4}>
                            <div className="blog-card">
                                <div className="blog-image-wrapper">
                                    <Link to={`/posts/${post.id}`}>
                                        <img src={post.image} alt={post.title} className="blog-image img-fluid" />
                                    </Link>
                                </div>
                                <div className="blog-content text-center">
                                    {/* <span className="blog-category d-block">{post.category}</span> */}
                                    <h3 className="blog-title">{post.title}</h3>
                                    <span className="blog-date d-block">{post.date}</span>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
