// // Create PostDetails.jsx for individual post view
// export function PostDetails() {
//     // You would typically fetch the post data based on URL parameter
//     const { postId } = useParams();
//     const post = blogPosts.find(p => p.id === Number(postId));

//     return (
//       <Container className="my-5">
//         <Button variant="secondary" onClick={() => navigate(-1)} className="mb-4">
//           &larr; Back to Blog
//         </Button>
//         <Card className="shadow">
//           <Card.Body>
//             <Card.Title>{post.title}</Card.Title>
//             <Card.Subtitle className="mb-2 text-muted">
//               {post.date} | {post.category}
//             </Card.Subtitle>
//             <Card.Text>{post.content}</Card.Text>
//           </Card.Body>
//         </Card>
//       </Container>
//     );
//   }


// import { useParams, useNavigate } from 'react-router-dom';
// import { Container, Button, Card } from 'react-bootstrap';
// import { blogPosts } from './blogPosts.js'; 

// export default function PostDetails() {
//   const { postId } = useParams();
//   const navigate = useNavigate();
//   const post = blogPosts.find(p => p.id === Number(postId));

//   return (
//     <Container className="my-5">
//       <Button 
//         variant="secondary" 
//         onClick={() => navigate(-1)} 
//         className="mb-4"
//       >
//         &larr; Back to Blog
//       </Button>
//       <Card className="shadow">
//         <Card.Body>
//           <Card.Title>{post.title}</Card.Title>
//           <Card.Subtitle className="mb-2 text-muted">
//             {post.date} | {post.category}
//           </Card.Subtitle>
//           <Card.Text>{post.content}</Card.Text>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// }

// import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import './blogPage.css';
// import { blogPosts } from './blogPosts';

// export default function BlogPage() {
//   const navigate = useNavigate();

//   const handleReadMore = (postId) => {
//     navigate(`/posts/${postId}`);
//   };

//   return (
//     <Container className="blog-top">
//       <Row>
//         <Col md={8}>
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
//               <ListGroup variant="flush" >
//                 <ListGroup.Item color='' action>Vastu Basics</ListGroup.Item>
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

// import { useParams, useNavigate } from 'react-router-dom';
// import { Container, Button, Card } from 'react-bootstrap';
// import { blogPosts } from './blogPosts';

// export default function PostDetails() {
//   const { postId } = useParams();
//   const navigate = useNavigate();
//   const post = blogPosts.find(p => p.id === Number(postId));

//   return (
//     <Container className="blog-top">
//       <Button 
//         variant="secondary" 
//         onClick={() => navigate(-1)} 
//         className="mb-4"
//       >
//         &larr; Back to Blog
//       </Button>
//       <Card className="shadow">
//         <Card.Body>
//           <Card.Title>{post?.title}</Card.Title>
//           <Card.Subtitle className="mb-2 text-muted">
//             {post?.date} | {post?.category}
//           </Card.Subtitle>
//           <Card.Text>{post?.content}</Card.Text>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// }

import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { FaCalendar, FaUser, FaTags, FaShareAlt } from 'react-icons/fa';
import './blogPage.css';

// Sample blog data (replace with your actual data source)
const blogPosts = [
  {
    id: 1,
    title: 'Understanding Airline Baggage Policies: What You Need to Know',
    image: 'https://cosmicenergiies.com/wp-content/uploads/2022/02/cosmic-wellness-shradha-sharma-vastu-Course_jaipur-768x768.jpg',
    category: 'Travel Tips',
    image2: "https://cosmicenergiies.com/wp-content/uploads/2022/02/cosmic-wellness-shradha-sharma-vastu-Course_jaipur-768x768.jpg",
    image3: "https://cosmicenergiies.com/wp-content/uploads/2022/02/cosmic-wellness-shradha-sharma-vastu-Course_jaipur-768x768.jpg",
    date: '10 Oct 2025',
    author: 'John Doe',
    content: `
      <p>Traveling can be an exciting experience, but understanding airline baggage policies is crucial to avoid unnecessary stress and fees. In this article, we'll break down everything you need to know about baggage policies, including weight limits, size restrictions, and prohibited items.</p>
      <p>Most airlines have specific rules for both carry-on and checked baggage. For example, carry-on luggage typically has a weight limit of 7-10 kg and must fit in the overhead bin. Checked baggage, on the other hand, usually allows for more weight but may incur additional fees if you exceed the limit.</p>
      <p>It's also important to check the airline's policy on prohibited items. Some items, such as liquids over 100ml, sharp objects, and flammable materials, are not allowed in either carry-on or checked baggage. Always review the airline's guidelines before packing to ensure a smooth travel experience.</p>
    `,
    content2: "<p>Traveling can be an exciting experience, but understanding airline baggage policies is crucial to avoid unnecessary stress and fees. In this article, we'll break down everything you need to know about baggage policies, including weight limits, size restrictions, and prohibited items.</p>",
    tags: ['Travel', 'Baggage', 'Airlines'],
  },

  // Add more blog posts as needed
];

export default function BlogDetails() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return <div>Blog post not found.</div>;
  }

  return (
    <section className="blog-details">
      {/* <div className='bggg'>
      </div>
      <div >
        <h1 className='Aboutus1text'>Post details</h1>
      </div> */}
       <div className="breadcrumb-container">
                {/* Overlay */}
                <div className="breadcrumb-overlay"></div>

                <nav aria-label="breadcrumb" className="breadcrumb-content">
                    <ol className="breadcrumb bg-transparent text-light text-center" style={{ fontSize: "30px" }}>
                        <li className="breadcrumb-item">
                            <a href="/" className="text-light">Home</a>
                        </li>
                        <li className="breadcrumb-item active text-light" aria-current="page">
                            Post Details
                        </li>
                    </ol>
                </nav>
            </div>
      <Container className='py-5'>
        <Row>
          {/* Main Content */}
          <Col lg={8}>
            <div className="blog-content6">
              <img
                src={post.image}
                alt={post.title}
                className="blog-image6"
              />
              <h1 className="blog-title6">{post.title}</h1>
              <div className="blog-meta">
                <span>
                  <FaCalendar /> {post.date}
                </span>
                <span>
                  <FaUser /> {post.author}
                </span>
                <span>
                  <FaTags /> {post.tags.join(', ')}
                </span>
              </div>

              <div
                className="blog-text"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              <img
                src={post.image2}
                className='image6'
              />
              <img
                src={post.image3}
                className='image6'
              />
              <div
                className="blog-text"
                dangerouslySetInnerHTML={{ __html: post.content2 }}
              />

              {/* <div className="blog-share">
                <h4>Share this post:</h4>
                <div className="share-icons">
                  <Button variant="light">
                    <FaShareAlt /> Share
                  </Button>
                </div>
              </div> */}
            </div>
          </Col>

          {/* Sidebar */}
          <Col lg={4}>
            <Card className="sidebar-card6">
              <Card.Body>
                <h4>About the Author</h4>
                <p>
                  {post.author} is a seasoned travel expert with over 10 years of
                  experience in the airline industry. He specializes in helping
                  travelers navigate complex baggage policies and loyalty
                  programs.
                </p>
              </Card.Body>
            </Card>

            {/* <Card className="sidebar-card6 mt-4">
              <Card.Body>
                <h4>Categories</h4>
                <ul className="category-list6">
                  <li>Travel Tips</li>
                  <li>Flight Booking</li>
                  <li>Loyalty Programs</li>
                  <li>Tech</li>
                </ul>
              </Card.Body>
            </Card> */}

            {/* <Card className="sidebar-card6 mt-4">
              <Card.Body>
                <h4>Popular Tags</h4>
                <div className="tags">
                  {post.tags.map((tag, index) => (
                    <Button key={index} variant="outline-secondary" size="sm">
                      {tag}
                    </Button>
                  ))}
                </div>
              </Card.Body>
            </Card> */}

            <div className="card p-3 shadow-sm border-0" style={{ maxWidth: "400px" }}>
              <h5 className="mb-3 fw-bold text-primary">Related Posts</h5>

              <div className="d-flex align-items-center mb-3 p-2 rounded bg6">
                <img
                  src="https://cosmicenergiies.com/wp-content/uploads/2022/02/cosmic-wellness-shradha-sharma-vastu-Course_jaipur-768x768.jpg"
                  alt=""
                  className="rounded me-3"
                  style={{ width: "60px", height: "60px", objectFit: "cover" }}
                />
                <div>
                  <h6 className="mb-1 fw-semibold text-white" style={{ fontSize: "14px" }}>
                    How to Travel on a Budget: Affordable Destinations &...
                  </h6>
                  <small className="text-muted text-black">
                    auther . 14 May 2025

                  </small>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3 p-2 rounded bg6">
                <img
                  src="https://cosmicenergiies.com/wp-content/uploads/2022/02/cosmic-wellness-shradha-sharma-vastu-Course_jaipur-768x768.jpg"
                  alt=""
                  className="rounded me-3"
                  style={{ width: "60px", height: "60px", objectFit: "cover" }}
                />
                <div>
                  <h6 className="mb-1 fw-semibold text-white" style={{ fontSize: "14px" }}>
                    How to Travel on a Budget: Affordable Destinations &...
                  </h6>
                  <small className="text-muted text-black">
                    auther . 14 May 2025

                  </small>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3 p-2 rounded bg6">
                <img
                  src="https://cosmicenergiies.com/wp-content/uploads/2022/02/cosmic-wellness-shradha-sharma-vastu-Course_jaipur-768x768.jpg"
                  alt=""
                  className="rounded me-3"
                  style={{ width: "60px", height: "60px", objectFit: "cover" }}
                />
                <div>
                  <h6 className="mb-1 fw-semibold text-white" style={{ fontSize: "14px" }}>
                    How to Travel on a Budget: Affordable Destinations &...
                  </h6>
                  <small className="text-muted text-black">
                    auther . 14 May 2025

                  </small>
                </div>
              </div>

            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
}