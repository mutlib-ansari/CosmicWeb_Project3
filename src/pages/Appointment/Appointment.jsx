import { Container, Breadcrumb, Form, Row, Col } from 'react-bootstrap';
import "./appointment.css"

function AppointmentForm() {
    return (

        <div className=''>


            {/* <Breadcrumb className='Breadcrumb bggg '>
                <Breadcrumb.Item href="/" >Home</  Breadcrumb.Item>
                <Breadcrumb.Item active>Appointment</Breadcrumb.Item>
            </Breadcrumb> */}

<div
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
                {/* Overlay */}
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
                        <li className="breadcrumb-item active text-light" aria-current="page">
                        Appointment
                        </li>
                    </ol>
                </nav>
            </div>




            <Container className="Appointmenttop py-5">
                <Row>

                    <Col className='col-md-6'>
                        {/* Form Heading */}
                        <h2 className="mb-4 text-white Appointmentheading ">Book Your Appointment Paid Service</h2>

                        {/* Appointment Form */}
                        <Form>
                            {/* Name Field */}
                            <Form.Group className="mb-3 Appointmentform " controlId="formName">
                                <Form.Label>Your Name Please (required)</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" required />
                            </Form.Group>

                            {/* Mobile Field */}
                            <Form.Group className="mb-3 Appointmentform" controlId="formMobile">
                                <Form.Label>Your Mobile (required)</Form.Label>
                                <Form.Control type="tel" placeholder="Enter your mobile number" required />
                            </Form.Group>

                            {/* Email Field */}
                            <Form.Group className="mb-3 Appointmentform" controlId="formEmail">
                                <Form.Label>Your Email Id (required)</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" required />
                            </Form.Group>

                            <div className="row">
                                {/* Date of Birth */}
                                <div className="col-md-6">
                                    <Form.Group className="mb-3 Appointmentform" controlId="formDOB">
                                        <Form.Label>Date Of Birth</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </div>

                                {/* Birth Time */}
                                <div className="col-md-6">
                                    <Form.Group className="mb-3 Appointmentform" controlId="formBirthTime">
                                        <Form.Label>Birth Time (required)</Form.Label>
                                        <Form.Control type="time" required />
                                    </Form.Group>
                                </div>
                            </div>

                            {/* Birth Place */}
                            <Form.Group className="mb-3 Appointmentform" controlId="formBirthPlace">
                                <Form.Label>Birth Place (required)</Form.Label>
                                <Form.Control type="text" placeholder="Enter birth place" required />
                            </Form.Group>

                            {/* Message Field */}
                            <Form.Group className="mb-3 Appointmentform" controlId="formMessage">
                                <Form.Label>Message (required)</Form.Label>
                                <Form.Control as="textarea" rows={3} required />
                            </Form.Group>

                            {/* Submit Button */}
                            <div className=''>
                                <button className="c-button c-button--gooey"> Submit
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
                        </Form>
                    </Col>
                    <Col className='col-md-6'></Col>
                </Row>
            </Container>
        </div>
    );
}

export default AppointmentForm;