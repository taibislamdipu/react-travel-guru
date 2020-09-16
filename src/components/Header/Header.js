import React from 'react';
import { Button, Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (

        // <Col xs={6}>2 of 3 (wider)</Col>
        <div>
            <Container fluid>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                    <Form inline>
                        <FormControl type="text" placeholder="Search your destination" className="mr-sm-2" />
                    </Form>

                    <Nav className="ml-auto" >
                        <Nav.Link href="#home">News</Nav.Link>
                        <Nav.Link href="#features">Destination</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                        <Button variant="warning">Login</Button>
                    </Nav>

                </Navbar>
            </Container>
        </div>



    );
};

export default Header;