import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from "react-router-bootstrap";
import {MdLocalOffer} from "react-icons/md";

const TopBar = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <h6 className='text-light'>
            <MdLocalOffer className="text-warning"/>
            &nbsp;&nbsp;Free home develiry on order above 500/- rupees</h6>
            <Nav className="ms-auto">
                <LinkContainer to='/' activeClassName>
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/about' activeClassName>
                    <Nav.Link>About Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/contact' activeClassName>
                    <Nav.Link>Contact Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/policy' activeClassName>
                    <Nav.Link>Term and Policy</Nav.Link>
                </LinkContainer>
            </Nav>
        </Container>
    </Navbar>
    </>
  );
}

export default TopBar;