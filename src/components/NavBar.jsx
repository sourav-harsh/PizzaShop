import React from 'react'
import {Navbar,Nav,Container,Image} from 'react-bootstrap'
const NavBar = () => {
  return (
    <>
        <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><Image src='images/logo.png' alt='logo' style={{height:"50px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar