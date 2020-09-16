import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

// import LogoImage from '../../images/Rectangle1.png';
import './Home.css';


// var sectionStyle = {

//     backgroundImage: `url(${LogoImage})`

// }

const Home = () => {
    return (
        <div className="background-image">
            <Container fluid>
                <Row>
                    <Col xs={5}>
                        <h1>Cox's bazar</h1>
                        <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                        <Button variant="warning">Booking ></Button>
                    </Col>

                    <Col>
                        <Row>
                            <Col>
                                <Card border="warning" style={{ width: '14rem', border: '3px solid yellow', borderRadius: '7px' }}>
                                    <Card.Img variant="top" src="https://fastly.4sqi.net/img/general/200x200/445796468_JJ7b0BM92gUJKt0ZemBJmIgh8XmOtyNvH_qaOUVuNEI.jpg" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col>
                                <Card style={{ width: '14rem', borderRadius: '7px' }}>
                                    <Card.Img variant="top" src="https://fastly.4sqi.net/img/general/200x200/445796468_JJ7b0BM92gUJKt0ZemBJmIgh8XmOtyNvH_qaOUVuNEI.jpg" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col>
                                <Card style={{ width: '14rem', borderRadius: '7px' }}>
                                    <Card.Img variant="top" src="https://fastly.4sqi.net/img/general/200x200/445796468_JJ7b0BM92gUJKt0ZemBJmIgh8XmOtyNvH_qaOUVuNEI.jpg" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </Col>
                </Row>



            </Container>
        </div >
    );
};

export default Home;