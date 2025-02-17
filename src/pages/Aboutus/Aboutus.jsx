import React from 'react'
import "./Aboutus.css"
// import { Container, Breadcrumb, } from 'react-bootstrap'
import Dasbord from "../../components/Dasbord/Dasbord";
import Form from "../../components/Form/Form"
import Testimonials from "../../components/Testimonials/testimonials";
import AdvantagesSection from "../AdvantagesSection/AdvantagesSection";


function Aboutus() {
    return (
        <div className='Aboutus1' >
            {/* <div className='bggg'>

                

            </div>
            <div >

                <h1 className='Aboutus1text'>Abou Us</h1>
            </div> */}
            {/* <Breadcrumb className='Breadcrumb bggg '>
                <Breadcrumb.Item href="/" >Home</  Breadcrumb.Item>
                <Breadcrumb.Item active>About us</Breadcrumb.Item>
            </Breadcrumb> */}
            {/* <div
                className="breadcrumb-container"
                style={{
                    position: "relative",
                    backgroundImage:
                        "url('https://template-kit.evonicmedia.com/layout50/wp-content/uploads/2023/11/about-header-1.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    padding: "10%",
                    textAlign: "center",
                    color: "white",
                    
                }}
            >
                
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)", 
                        zIndex: 1,
                    }}
                ></div>

                
                <nav aria-label="breadcrumb" style={{ position: "relative", zIndex: 2 }}>
                    <ol className="breadcrumb bg-transparent text-light text-center ">
                        <li className="breadcrumb-item">
                            <a href="/" className="text-light">
                                Home
                            </a>
                        </li>
                        {/* <li className="breadcrumb-item">
                            <a href="/category" className="text-light">
                                Category
                            </a>
                        </li> */}
            {/* <li className="breadcrumb-item active text-light" aria-current="page">
                            About Us
                        </li>
                    </ol>
                </nav>
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
                            About Us
                        </li>
                    </ol>
                </nav>
            </div>

            <div>
                <Dasbord />
                <AdvantagesSection />
                <Form />
                <Testimonials />


            </div>










        </div>
    )
}

export default Aboutus