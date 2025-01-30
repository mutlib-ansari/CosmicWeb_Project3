// import React from "react";
// import { Container, Row, Navbar, Nav, NavDropdown } from "react-bootstrap";
// import { IoHome } from "react-icons/io5";
// import { FaRegFileAlt } from "react-icons/fa";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { FaShoppingBag } from "react-icons/fa";
// import { BiLogoBlogger } from "react-icons/bi";
// import { GrGallery } from "react-icons/gr";

// import { FaPhoneAlt } from "react-icons/fa";
// // import { Link } from "react-router-dom";
// import 'animate.css';


// import './header.css';

// import logo from '../../assets/images/navbar/logo2.png';
// import { Link } from "react-router-dom";

// const Header = () => {
//     return (
//         <section className="headerSection animate__animated animate__fadeInDownBig">
//             <Container>
//                 <Row>
//                     <Navbar expand="lg">
//                         <Navbar.Brand href="#home" className=" logo d-lg-none align-items-start">
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
//                                 <Nav.Link href="#services" className="hoverr"><RxHamburgerMenu className="" /><span>Services</span>
//                                     <ul className="hoverr2">
//                                         <li className="">Astrology Consultation</li>
//                                         <li>Vastu Consultation</li>
//                                     </ul>
//                                 </Nav.Link>
//                                 <Nav.Link href="#services" className="hoverr"><FaRegFileAlt className="nav-text" /> <span>Appoiments</span></Nav.Link>
//                                 <Nav.Link href="/aboutus" className="hoverr"><FaShoppingBag className="nav-text" /> <span>About us</span></Nav.Link>
//                             </Nav>

//                             <Navbar.Brand href="/" className="mx-auto logo d-none d-lg-block ">
//                                <img
//                                     src={logo}
//                                     height="50"
//                                     className="d-inline-block align-top"
//                                     alt="Logo"
//                                 />
//                             </Navbar.Brand>

//                             <Nav className="ms-auto next-navbar">
//                                 <Nav.Link href="#blog" className="hoverr"><BiLogoBlogger className="nav-text" /><span>Blog</span></Nav.Link>

//                                 {/* <Nav.Link href="#shop" className="hoverr"><FaVideo className="nav-text" /> <span>Video</span></Nav.Link> */}
//                                 <Nav.Link href="Adminpanel/" className="hoverr"><FaPhoneAlt className="nav-text" /> <span>Help</span></Nav.Link>
//                                 {/* <NavDropdown title={<span className="hoverr"><GrGallery className="nav-text" /> <span>Gallerys</span><i className="fa fa-caret-down"></i></span>} id="basic-nav-dropdown">
//                                     <NavDropdown.Item href="#action/3.1 " className="imv"><span>Images Gallery</span></NavDropdown.Item>
//                                     <NavDropdown.Item href="#action/3.2" className="imv"><span>Video Gallery</span></NavDropdown.Item>

//                                 </NavDropdown> */}
//                                 <Nav.Link href="#Gallerys" className="hoverr"><GrGallery className="nav-text" /><span>Gallerys</span>
//                                     <ul className="hoverr2">
//                                         <li className="imv">Images Gallery</li>
//                                         <li className="imv">Video Gallery</li>
//                                     </ul>
//                                 </Nav.Link>

//                                 <div className=''>
//                                     <button className="c-button c-button2 c-button--gooey"> Sing/Login
//                                         <div className="c-button__blobs">
//                                             <div />
//                                             <div />
//                                             <div />
//                                         </div>
//                                     </button>
//                                     <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'block', height: 0, width: 0 }}>
//                                         <defs>
//                                             <filter id="goo">
//                                                 <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
//                                                 <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
//                                                 <feBlend in="SourceGraphic" in2="goo" />
//                                             </filter>
//                                         </defs>
//                                     </svg>
//                                 </div>
//                             </Nav>
//                         </Navbar.Collapse>
//                     </Navbar>
//                 </Row>
//             </Container>
//         </section>
//     )
// }

// export default Header


import React from "react";
import { Container, Row, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { IoHome } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaShoppingBag } from "react-icons/fa";
import { BiLogoBlogger } from "react-icons/bi";
import { GrGallery } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import 'animate.css';
import './header.css';
import logo from '../../assets/images/navbar/logo2.png';
import { Link } from "react-router-dom";
// import SplashCursor from './SplashCursor' 

const Header = () => {
    return (
        <section className="headerSection animate__animated animate__fadeInDownBig">
            <Container>
                {/* <ClickSpark
                    sparkColor='#fff'
                    sparkSize={10}
                    sparkRadius={15}
                    sparkCount={8}
                    duration={400}
                /> */}
                {/* <SplashCursor /> */}
                <Row>
                    <Navbar expand="lg">
                        <Navbar.Brand href="#home" className=" logo d-lg-none align-items-start">
                            <img
                                src={logo}
                                height="30"
                                className="d-inline-block align-top "
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto next-navbar">
                                <Nav.Link href="/" className="hoverr "><IoHome className="nav-text" /><span >Home</span></Nav.Link>
                                <Nav.Link href="#services" className="hoverr"><RxHamburgerMenu className="" /><span>Services</span>
                                    <ul className="hoverr2">
                                        <li className="">Astrology Consultation</li>
                                        <li>Vastu Consultation</li>
                                    </ul>
                                </Nav.Link>
                                <Nav.Link href="#services" className="hoverr"><FaRegFileAlt className="nav-text" /> <span>Appoiments</span></Nav.Link>
                                <Nav.Link href="/aboutus" className="hoverr"><FaShoppingBag className="nav-text" /> <span>About us</span></Nav.Link>
                            </Nav>

                            <Navbar.Brand href="/" className="mx-auto logo d-none d-lg-block ">
                                <img
                                    src={logo}
                                    height="40"
                                    className="d-inline-block align-top"
                                    alt="Logo"
                                />
                            </Navbar.Brand>

                            <Nav className="ms-auto next-navbar">
                                <Nav.Link href="#blog" className="hoverr"><BiLogoBlogger className="nav-text" /><span>Blog</span></Nav.Link>
                                <Nav.Link href="Adminpanel/" className="hoverr"><FaPhoneAlt className="nav-text" /> <span>Help</span></Nav.Link>
                                <Nav.Link href="#Gallerys" className="hoverr"><GrGallery className="nav-text" /><span>Gallerys</span>
                                    <ul className="hoverr2">
                                        <li className="">Images Gallery</li>
                                        <li className="">Video Gallery</li>
                                    </ul>
                                </Nav.Link>

                                <div className=''>
                                    <button className="c-button c-button2 c-button--gooey">
                                        Sing/Login
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
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Row>
            </Container>

            {/* Add ClickSpark component here */}

        </section>
    )
}

export default Header;