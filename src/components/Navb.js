import React from 'react'
import {Navbar,Form,Nav} from 'react-bootstrap'

function Navb() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
              <Navbar.Brand href="#home">GURKIRAT SINGH</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Form inline>
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#projects">Projects</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#contact">Contact Me</Nav.Link>
                  </Nav>
                </Form>
              </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navb
