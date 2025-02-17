import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './advantagesSection.css'; 

const AdvantagesSection = () => {
    return (
        <section className="advantages-section py-5" style={{
            backgroundImage: "linear-gradient(rgb(15 11 62 / 50%), rgb(16 6 38)),  url('https://template-kit.evonicmedia.com/layout50/wp-content/uploads/2023/11/advantages-bg.jpg')",
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed',
            width: '100%' }}>

            <Container>
                <Row className="text-center mb-5">
                    <Col>
                        <h6 className="text-uppercase text-primary text-white mb-3">ADVANTAGES</h6>
                        <h2 className="mb-3  section-title">Benefits Of Learning Magic</h2>
                        <p className="text-muted">
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit; Sed Do Eiusmod Tempor
                            Incididunt Ut Labore Et Dolore Magna Aliqua Ut Enim.
                        </p>
                    </Col>
                </Row>

                <Row className="g-4 ">
                    <Col md={6}>
                        <div className="feature-item p-4">
                            <h4 className="mb-3 text-white">ACTS AS A FINANCIAL PLANNER</h4>
                            <p className="text-muted text-white">
                                Ac Vero Eco: Et Accusamus Et Lusto Odio Digrissimos Ductimus Qui
                                Blandiitis Praesentium
                            </p>
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className="feature-item p-4">
                            <h4 className="mb-3">MAKES YOU CONFIDENT AND OPTIMISTIC</h4>
                            <p className="text-muted">
                                Ac Vero Eco: Et Accusamus Et Lusto Odio Digrissimos Ductimus Qui
                                Blandiitis Praesentium
                            </p>
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className="feature-item p-4">
                            <h4 className="mb-3">HELPS IN DECISION MAKING</h4>
                            <p className="text-muted">
                                Ac Vero Eco: Et Accusamus Et Lusto Odio Digrissimos Ductimus Qui
                                Blandiitis Praesentium
                            </p>
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className="feature-item p-4">
                            <h4 className="mb-3">TELLS IF YOUR PARTNER IS RICH AND ATTRACTIVE</h4>
                            <p className="text-muted">
                                Ac Vero Eco: Et Accusamus Et Lusto Odio Digrissimos Ductimus Qui
                                Blandiitis Praesentium
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    );
};

export default AdvantagesSection;