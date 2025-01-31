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

import { Container, Row, Col, Card, Button, ListGroup, Breadcrumb } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './blogPage.css';
import { blogPosts } from './blogPosts';

export default function BlogPage() {
    const navigate = useNavigate();

    const handleReadMore = (postId) => {
        navigate(`/posts/${postId}`);
    };

    return (

        <div className='py-5'> <Breadcrumb className='Breadcrumb '>
            <Breadcrumb.Item href="/" >Home</  Breadcrumb.Item>
            <Breadcrumb.Item active>BlogPage</Breadcrumb.Item>
        </Breadcrumb>
            <Container className="blog-top">
                <Row>
                    <Col md={8}>
                        {blogPosts.map((post) => (
                            <Card key={post.id} className="mb-4 shadow-sm">
                                <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        {post.date} | {post.category}
                                    </Card.Subtitle>
                                    <Card.Text>{post.excerpt}</Card.Text>
                                    <Button
                                        variant="primary"
                                        onClick={() => handleReadMore(post.id)}
                                    >
                                        More Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>

                    <Col md={4}>
                        <Card className="mb-4 shadow-sm">
                            <Card.Body>
                                <h5>Recent Posts</h5>
                                <ListGroup variant="flush">
                                    {blogPosts.map((post) => (
                                        <ListGroup.Item className='color-change' key={post.id} action onClick={() => handleReadMore(post.id)}>
                                            {post.title}
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card.Body>
                        </Card>

                        <Card className="mb-4 shadow-sm">
                            <Card.Body>
                                <h5>Categories</h5>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className='color-change' action>Vastu Basics</ListGroup.Item>
                                    <ListGroup.Item className='color-change' action>Home Vastu</ListGroup.Item>
                                    <ListGroup.Item className='color-change' action>Office Vastu</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}