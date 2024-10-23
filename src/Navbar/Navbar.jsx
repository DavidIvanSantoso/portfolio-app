/* eslint-disable no-unused-vars */
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import "../Navbar/Navbar.css";

function NavbarTop() {
  return (
    <>
      <Container fluid>
        <Navbar expand="lg" className="custom-navbar">
          <Container>
            <Navbar.Brand href="#home" className="nav-brand-custom">
              DAVID
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <Nav.Link href="#home" className="nav-link-custom">
                  Profile
                </Nav.Link>
                <Nav.Link href="#features" className="nav-link-custom">
                  Work Experience
                </Nav.Link>
                <Nav.Link href="#pricing" className="nav-link-custom">
                  Projects
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
}
export default NavbarTop;
