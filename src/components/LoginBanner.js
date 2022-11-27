import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from "react-router-bootstrap"



function LoginBanner() {

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
        <Navbar.Brand style={navbarTitle}>Gator Security Fundamentals</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default LoginBanner;