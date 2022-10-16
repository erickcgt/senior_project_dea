import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNavbar() {
  return (
    <Navbar style={{backgroundColor: '#2613fe'}} expand="lg">
      <Container>
        <Navbar.Brand style={{color: 'white'}} href="#home">Gator Security Fundamentals</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav class="navbar-nav ms-auto mb-2 mb-lg-0">
            <Nav.Link style={{color: 'white'}} eventKey={1} href="#">Learn</Nav.Link>
            <Nav.Link style={{color: 'white'}} eventKey={2} href="#">Games</Nav.Link>
            <NavDropdown style={{color: 'white'}} eventKey={3} title="Profile">
                <NavDropdown.Item eventKey={3.1}>Settings</NavDropdown.Item>
                <NavDropdown.Item eventKey={3.2}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;