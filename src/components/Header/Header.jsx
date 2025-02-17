


// import React from "react";
// import { Container, Row, Navbar, Nav, NavDropdown } from "react-bootstrap";
// import { IoHome } from "react-icons/io5";
// import { FaRegFileAlt } from "react-icons/fa";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { FaShoppingBag } from "react-icons/fa";
// import { BiLogoBlogger } from "react-icons/bi";
// import { GrGallery } from "react-icons/gr";
// import { FaPhoneAlt } from "react-icons/fa";
// import 'animate.css';
// import './header.css';
// import logo from '../../assets/images/navbar/logo2.png';
// // import { Link } from "react-router-dom";
// // import SplashCursor from './SplashCursor' 

// const Header = () => {
//     return (
//         <section className="headerSection animate__animated animate__fadeInDownBig ">
//             <Container>
//                 {/* <ClickSpark
//                     sparkColor='#fff'
//                     sparkSize={10}
//                     sparkRadius={15}
//                     sparkCount={8}
//                     duration={400}
//                 /> */}
//                 {/* <SplashCursor /> */}
//                 <Row>
//                     {/* <Navbar expand="lg">
//                         <Navbar.Brand href="#home" className="logo logo33 px-2 d-lg-none align-items-start">
//                             <img
//                                 src={logo}
//                                 height="30"
//                                 className="d-inline-block align-top "
//                                 alt="Logo"
//                             />
//                         </Navbar.Brand>
//                         <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
//                         <Navbar.Collapse id="basic-navbar-nav">
//                             <Nav className="me-auto next-navbar">
//                                 <Nav.Link href="/" className="hoverr "><IoHome className="nav-text" /><span >Home</span></Nav.Link>
//                                 <Nav.Link href="#services" className="hoverr "><RxHamburgerMenu className="nav-text" /><span>Services</span>
//                                     <ul className="hoverr2">
//                                         <li>
//                                             <a href="/astrology-consultation" className="text-decoration-none">Astrology Consultation</a>
//                                         </li>
//                                         <li>
//                                             <a href="/vastu-consultation" className="text-decoration-none">Vastu Consultation</a>
//                                         </li>
//                                     </ul>
//                                 </Nav.Link>
//                                 <Nav.Link href="/appointmentForm" className="hoverr"><FaRegFileAlt className="nav-text" /> <span>Appoiments</span></Nav.Link>

//                                 <Nav.Link href="/aboutus" className="hoverr"><FaShoppingBag className="nav-text" /> <span>About us</span></Nav.Link>
//                                 <Navbar.Brand href="/" className="mx-auto logo logo33 px-2 d-none d-lg-block ">
//                                     <img
//                                         src={logo}
//                                         height="40"
//                                         className="d-inline-block align-top"
//                                         alt="Logo"
//                                     />
//                                 </Navbar.Brand>
//                                 <Nav className="ms-auto next-navbar">
//                                     <Nav.Link href="/blogPage" className="hoverr"><BiLogoBlogger className="nav-text" /><span>Blog</span></Nav.Link>
//                                     <Nav.Link href="Adminpanel/" className="hoverr"><FaPhoneAlt className="nav-text" /> <span>Help</span></Nav.Link>
//                                     <Nav.Link href="#Gallerys" className="hoverr"><GrGallery className="nav-text" /><span>Gallerys</span>
//                                         <ul className="hoverr2">
//                                             <li>
//                                                 <a href="/imagegallerypage" className="text-decoration-none">Images Gallery</a>
//                                             </li>
//                                             <li>
//                                                 <a href="/videogallerypage" className="text-decoration-none">Video Gallery</a>
//                                             </li>
//                                         </ul>
//                                     </Nav.Link>

//                                     <div className='hoverrbtn'>
//                                         <a href="/sing-up" >
//                                             <button className="c-button c-button2 c-button--gooey">
//                                                 Sing/Login
//                                                 <div className="c-button__blobs">
//                                                     <div />
//                                                     <div />
//                                                     <div />
//                                                 </div>
//                                             </button>
//                                             <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'block', height: 0, width: 0 }}>
//                                                 <defs>
//                                                     <filter id="goo">
//                                                         <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
//                                                         <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
//                                                         <feBlend in="SourceGraphic" in2="goo" />
//                                                     </filter>
//                                                 </defs>
//                                             </svg>
//                                         </a>
//                                     </div>
//                                 </Nav>



//                             </Nav>




//                         </Navbar.Collapse>
//                     </Navbar> */}

//                     <Navbar  expand="lg" className="next-navbar">
//                         <Navbar.Brand href="/" className="me-auto logo  px-2  d-lg-none  align-items-start">
//                             <img src={logo} height="30" alt="Logo" className="d-inline-block align-top "/>
//                         </Navbar.Brand>

//                         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                         <Navbar.Collapse id="responsive-navbar-nav">
//                             <Nav className="me-auto">
//                                 <Nav.Link href="/" className="hoverr">
//                                     <IoHome className="nav-text" />
//                                     <span>Home</span>
//                                 </Nav.Link>
//                                 <NavDropdown  title={<span><RxHamburgerMenu className="nav-text  " /> Services</span>} id="services-dropdown" className="hoverr d-lg-none">
//                                     <NavDropdown.Item href="/astrology-consultation">Astrology Consultation</NavDropdown.Item>
//                                     <NavDropdown.Item href="/vastu-consultation">Vastu Consultation</NavDropdown.Item>
//                                 </NavDropdown>
//                                 <Nav.Link href="#services" className="hoverr d-none d-lg-block "><RxHamburgerMenu className="nav-text" /><span>Services</span>
//                                     <ul className="hoverr2">
//                                         <li>
//                                             <a href="/astrology-consultation" className="text-decoration-none">Astrology Consultation</a>
//                                         </li>
//                                         <li>
//                                             <a href="/vastu-consultation" className="text-decoration-none">Vastu Consultation</a>
//                                         </li>
//                                     </ul>
//                                 </Nav.Link>
//                                 <Nav.Link href="/appointmentForm" className="hoverr">
//                                     <FaRegFileAlt className="nav-text" />
//                                     <span>Appointments</span>
//                                 </Nav.Link>
//                                 <Nav.Link href="/aboutus" className="hoverr">
//                                     <FaShoppingBag className="nav-text" />
//                                     <span>About Us</span>
//                                 </Nav.Link>
//                             </Nav>

//                             <Navbar.Brand href="/" className="me-auto  logo logo33  d-none d-lg-block">
//                                 <img src={logo} height="40" alt="Logo" />
//                             </Navbar.Brand>

//                             <Nav className="ms-auto">
//                                 <Nav.Link href="/blogPage" className="hoverr">
//                                     <BiLogoBlogger className="nav-text" />
//                                     <span>Blog</span>
//                                 </Nav.Link>
//                                 <Nav.Link href="Adminpanel/" className="hoverr">
//                                     <FaPhoneAlt className="nav-text" />
//                                     <span>Help</span>
//                                 </Nav.Link>
//                                 <NavDropdown title={<span><GrGallery className="nav-text  " /> Gallerys</span>} id="gallery-dropdown" className="hoverr d-lg-none">
//                                     <NavDropdown.Item href="/imagegallerypage">Images Gallery</NavDropdown.Item>
//                                     <NavDropdown.Item href="/videogallerypage">Video Gallery</NavDropdown.Item>
//                                 </NavDropdown>
//                                 <Nav.Link href="#Gallerys" className="hoverr d-none d-lg-block"><GrGallery className="nav-text" /><span>Gallerys</span>
//                                         <ul className="hoverr2">
//                                             <li>
//                                                 <a href="/imagegallerypage" className="text-decoration-none">Images Gallery</a>
//                                             </li>
//                                             <li>
//                                                 <a href="/videogallerypage" className="text-decoration-none">Video Gallery</a>
//                                             </li>
//                                         </ul>
//                                     </Nav.Link>

//                                 <div className="hoverrbtn">
//                                     <a href="/sing-up">
//                                         <button className="c-button c-button2 c-button--gooey">
//                                             Sign/Login
//                                             <div className="c-button__blobs">
//                                                 <div />
//                                                 <div />
//                                                 <div />
//                                             </div>
//                                         </button>
//                                     </a>
//                                 </div>
//                             </Nav>
//                         </Navbar.Collapse>
//                     </Navbar>
//                 </Row>
//             </Container>

//             {/* Add ClickSpark component here */}

//         </section>
//     )
// }

// export default Header;
// import React from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Nav, Container, Button } from 'react-bootstrap';
// // import { HouseDoor, List, JournalCheck, Bag, ChatDots, Telephone, Images } from 'react-bootstrap-icons';

// const NavigationBar = () => {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
//       <Container>
//         <Navbar.Brand href="#home" className="text-primary fw-bold">
//           Cosmic Energies
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link href="#home"> Home</Nav.Link>
//             <Nav.Link href="#services">Services</Nav.Link>
//             <Nav.Link href="#appointments"> Appointments</Nav.Link>
//             <Nav.Link href="#about"> About Us</Nav.Link>
//             <Nav.Link href="#blog"> Blog</Nav.Link>
//             <Nav.Link href="#help"> Help</Nav.Link>
//             <Nav.Link href="#galleries"> Galleries</Nav.Link>
//           </Nav>
//           <Button variant="outline-light" className="ms-3">Sign/Login</Button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavigationBar;

// import { useState } from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import './header.css'

// const NavigationBar = () => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <Navbar 
//       bg="light" 
//       expand="md" 
//       expanded={expanded}
//       fixed="top"
//       className="shadow-sm"
//     >
//       <Container>
//         <Navbar.Brand href="#home">Your Logo</Navbar.Brand>
        
//         <Navbar.Toggle 
//           aria-controls="basic-navbar-nav" 
//           onClick={() => setExpanded(expanded ? false : "expanded")}
//         />
        
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link 
//               href="#home" 
//               onClick={() => setExpanded(false)}
//               className="mx-2 text-dark"
//             >
//               Home
//             </Nav.Link>
//             <Nav.Link 
//               href="#about" 
//               onClick={() => setExpanded(false)}
//               className="mx-2 text-dark"
//             >
//               About
//             </Nav.Link>
//             <Nav.Link 
//               href="#services" 
//               onClick={() => setExpanded(false)}
//               className="mx-2 text-dark"
//             >
//               Services
//             </Nav.Link>
//             <Nav.Link 
//               href="#contact" 
//               onClick={() => setExpanded(false)}
//               className="mx-2 text-dark"
//             >
//               Contact
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavigationBar;

import React, { useState } from "react";
import { Container, Row, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { IoHome } from "react-icons/io5";
import { FaRegFileAlt, FaShoppingBag, FaPhoneAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiLogoBlogger } from "react-icons/bi";
import { GrGallery } from "react-icons/gr";
import 'animate.css';
import './header.css';
import logo from '../../assets/images/navbar/logo2.png';

const Header = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <section className="headerSection animate__animated animate__fadeInDownBig">
            <Container>
                <Row>
                    <Navbar expand="lg" className="next-navbar" expanded={expanded}>
                        <Navbar.Brand href="/" className="me-auto logo px-2 d-lg-none align-items-start">
                            <img src={logo} height="30" alt="Logo" className="d-inline-block align-top "/>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Button className="close-menu  pl-16 d-lg-none" onClick={() => setExpanded(false)}>X</Button>
                            <Nav className="me-auto">
                                <Nav.Link href="/" className="hoverr" onClick={() => setExpanded(false)}>
                                    <IoHome className="nav-text" />
                                    <span>Home</span>
                                </Nav.Link>
                                <NavDropdown title={<span><RxHamburgerMenu className="nav-text" /> Services</span>} id="services-dropdown" className="hoverr d-lg-none">
                                    <NavDropdown.Item href="/astrology-consultation" onClick={() => setExpanded(false)}>Astrology Consultation</NavDropdown.Item>
                                    <NavDropdown.Item href="/vastu-consultation" onClick={() => setExpanded(false)}>Vastu Consultation</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#services" className="hoverr d-none d-lg-block" onClick={() => setExpanded(false)}>
                                    <RxHamburgerMenu className="nav-text" /><span>Services</span>
                                    <ul className="hoverr2">
                                        <li><a href="/astrology-consultation" className="text-decoration-none">Astrology Consultation</a></li>
                                        <li><a href="/vastu-consultation" className="text-decoration-none">Vastu Consultation</a></li>
                                    </ul>
                                </Nav.Link>
                                <Nav.Link href="/appointmentForm" className="hoverr" onClick={() => setExpanded(false)}>
                                    <FaRegFileAlt className="nav-text" />
                                    <span>Appointments</span>
                                </Nav.Link>
                                <Nav.Link href="/aboutus" className="hoverr" onClick={() => setExpanded(false)}>
                                    <FaShoppingBag className="nav-text" />
                                    <span>About Us</span>
                                </Nav.Link>
                            </Nav>

                            <Navbar.Brand href="/" className="me-auto logo logo33 d-none d-lg-block">
                                <img src={logo} height="40" alt="Logo" />
                            </Navbar.Brand>

                            <Nav className="ms-auto">
                                <Nav.Link href="/blogPage" className="hoverr" onClick={() => setExpanded(false)}>
                                    <BiLogoBlogger className="nav-text" />
                                    <span>Blog</span>
                                </Nav.Link>
                                <Nav.Link href="Adminpanel/" className="hoverr" onClick={() => setExpanded(false)}>
                                    <FaPhoneAlt className="nav-text" />
                                    <span>Help</span>
                                </Nav.Link>
                                <NavDropdown title={<span><GrGallery className="nav-text" /> Gallerys</span>} id="gallery-dropdown" className="hoverr d-lg-none">
                                    <NavDropdown.Item href="/imagegallerypage" onClick={() => setExpanded(false)}>Images Gallery</NavDropdown.Item>
                                    <NavDropdown.Item href="/videogallerypage" onClick={() => setExpanded(false)}>Video Gallery</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#Gallerys" className="hoverr d-none d-lg-block" onClick={() => setExpanded(false)}>
                                    <GrGallery className="nav-text" /><span>Gallerys</span>
                                    <ul className="hoverr2">
                                        <li><a href="/imagegallerypage" className="text-decoration-none">Images Gallery</a></li>
                                        <li><a href="/videogallerypage" className="text-decoration-none">Video Gallery</a></li>
                                    </ul>
                                </Nav.Link>
                                <div className="hoverrbtn">
                                    <a href="/sing-up">
                                        <button className="c-button c-button2 c-button--gooey">
                                            Sign/Login
                                            <div className="c-button__blobs">
                                                <div />
                                                <div />
                                                <div />
                                            </div>
                                        </button>
                                    </a>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Row>
            </Container>
        </section>
    );
};

export default Header;

