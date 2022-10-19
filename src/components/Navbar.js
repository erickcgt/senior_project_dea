import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function MyNavbar() {

const navbarTitle = {
  color: "white",
  fontFamily: "Gluten",
  fontSize: "25px"
  
}

const dropdown = {
  backgroundColor: "#2613fe"
};

const dropdownItem = {
  color: "white",
  backgroundColor: "#2613fe",
  fontFamily: "Gluten"
 
};

const navLink = {
  color: "white",
  fontFamily: "Gluten",
  fontSize: "18px",  
  flexDirection: "column"
  
};

const linkContainer = {
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
  alignItems: "center"
};

const navbarStyle = {
  backgroundColor: '#2613fe',
  height: "80px"
};

  return (
    <Navbar style={navbarStyle} expand="lg">
      <Container>
        <Navbar.Brand style={navbarTitle} href="#home">Gator Security Fundamentals</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav class="navbar-nav ms-auto mb-2 mb-lg-0" style={{color:'white'}}>            
            <Nav.Link style={navLink} eventKey={1} href="#"> <div style={linkContainer}><div>Learn</div><img src='./bookIcon.png' alt=''/></div></Nav.Link>                 
            <Nav.Link style={navLink} eventKey={2} href="#"><div style={linkContainer}><div>Game</div><img src='./gameIcon.png' alt=''/></div></Nav.Link>
            <NavDropdown style={dropdown} eventKey={3} title={<img src='./profileIcon.png' alt=''/>}>
                <NavDropdown.Item style={dropdownItem} eventKey={3.1}>My Profile</NavDropdown.Item>
                <NavDropdown.Item style={dropdownItem} eventKey={3.2}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;