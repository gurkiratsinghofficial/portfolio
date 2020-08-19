import React from 'react'
import {useState,useEffect} from 'react'
import {Navbar,Form,Nav} from 'react-bootstrap'

const useThemeDetector = () => {
  const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());  
  const mqListener = (e => {
      setIsDarkTheme(e.matches);
  });
  
  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addListener(mqListener);
    return () => darkThemeMq.removeListener(mqListener);
  }, []);
  return isDarkTheme;
}
function Navb() {
  const isDarkTheme = useThemeDetector();
    return (
        <div>
            <Navbar bg={isDarkTheme ? "dark": "light"} variant={isDarkTheme ? "dark": "light"} expand="lg">
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
