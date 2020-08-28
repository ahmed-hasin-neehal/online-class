import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>

            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>EDUCARE</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#courses">Courses</Nav.Link>
                    <Nav.Link href="#checkout">Checkout Purchase</Nav.Link>
                    <Nav.Link href="#manage">Manage Courses</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    );
};

export default Header;