// import React from "react";
// import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
// import "./sing-up.css"

// function App() {
//   return (
//     <Container fluid className="d-flex justify-content-center align-items-center  singtop">
//       <Card className="text-white  p-5" style={{ borderRadius: "25px", width: "50rem" }}>
//         <Row className="g-4">
//           {/* Form Column */}
//           <Col md={6} className="d-flex flex-column align-items-center">
//             <h1 className="fw-bold mb-4">Sign Up</h1>

//             <Form className="w-100 text-white">
//               <Form.Group className="mb-3" controlId="formName">
//                 <Form.Label>Your Name</Form.Label>
//                 <Form.Control type="text" placeholder="Enter your name" />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formEmail">
//                 <Form.Label>Your Email</Form.Label>
//                 <Form.Control type="email" placeholder="Enter your email" />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password" placeholder="Enter password" />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formRepeatPassword">
//                 <Form.Label>Repeat Your Password</Form.Label>
//                 <Form.Control type="password" placeholder="Repeat password" />
//               </Form.Group>

//               <Form.Check type="checkbox" label="Subscribe to our newsletter" className="mb-3" />

//               <Button variant="primary" size="lg" className="w-100">
//                 Register
//               </Button>
//             </Form>
//           </Col>

//           {/* Image Column */}
//           <Col md={6} className="d-flex align-items-center">
//             <Card.Img
//               src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
//               className="img-fluid"
//             />
//           </Col>
//         </Row>
//       </Card>
//     </Container>
//   );
// }

// export default App;

// import React from 'react'
// import { Col, Container } from 'react-bootstrap'
// import bg from "../../assets/images/singupbg/singupbg.png";


// function Singup() {
//   return (

//     <Container>
//       <Row>
//         <Col md={8} style={{
//           backgroundImage: `url(${bg})`,
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'cover',  // Use 'cover' to make it responsive
//           backgroundPosition: 'center center',
//           height: '100vh',          // Adjust height as needed
//           width: '100%'
//         }}></Col>

//         <Col md={4}>
//         <div><h1>sdughsduihgudhguirdlh</h1></div>

//         </Col>
//       </Row>
//     </Container>


//   )
// }

// export default Singup


import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaGoogle, FaFacebook, FaEnvelope } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./sing-up.css"
import bg from "../../assets/images/singupbg/singupbg.png"; // Ensure the correct path
import logo from '../../assets/images/navbar/logo2.png';

const SignIn = () => {
  return (
    <div className="signin-page py-5  justify-content-center align-items-center"

    >
      {/* <Container className=" py-5 justify-content-center align-items-center"
      > */}
        <Row className="signin-box  rounded shadow-lg py-0 py-md-5">
          {/* Left Side - Image Section */}
          <Col md={6} className=" d-md-block text-light text-center p-5" style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
             minHeight: "100vh",
          }}>
            <h2 className="fw-bold">SIGN IN TO YOUR <span className="text-primary">ADVENTURE!</span></h2>
          </Col>

          {/* Right Side - Form Section */}
          <Col md={6} className=" text-light p-4 rounded Right-Side">
           
            <div className="Right-Side2 ">
              <div className="Right-Side2img"> <img
              src={logo}
              height="60"
              className="d-inline-block  "
              alt="Logo"
            /></div>
            {/* <img
              src={logo}
              height="40"
              className="d-inline-block Right-Side2img "
              alt="Logo"
            /> */}
              <h3 className="fw-bold2 py-5">SIGN IN</h3>
              <p>Sign in with your email address</p>

              <Form>
                <Form.Group controlId="email" className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text bg-transparent text-light border-light">
                      <FaEnvelope />
                    </span>
                    <Form.Control type="email" placeholder="Yourname@gmail.com" className="bg-transparent text-light border-light" />
                  </div>
                </Form.Group>

                {/* <Button variant="primary" className="w-100 py-2">Sign Up</Button> */}
                <div className=''>
                  <a href="/sing-up" >
                    <button className=" w-100 py-2  h5 c-button c-button2 c-button--gooey">
                      Sign Up
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
                  </a>
                </div>
              </Form>

              <p className="text-center mt-3">Or continue with</p>
              <div className="d-flex justify-content-center gap-3">
                <Button variant="outline-light" className="d-flex align-items-center gap-2">
                  <FaGoogle /> Google
                </Button>
                <Button variant="outline-light" className="d-flex align-items-center gap-2">
                  <FaFacebook /> Facebook
                </Button>
              </div>

              <p className="text-center mt-3 small">By registering, you agree to our <a href="#" className="text-primary">Terms and Conditions</a></p>
            </div></Col>
        </Row>
      {/* </Container> */}
    </div>
  );
};

export default SignIn;

