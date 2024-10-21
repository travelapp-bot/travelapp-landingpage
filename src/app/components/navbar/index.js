"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AppButton from "../buttons";

const AppNavbar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">Travel.ai</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0">
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">How it works</Nav.Link>
            <Nav.Link href="#action2">Blogs</Nav.Link>
          </Nav>
          <AppButton icon className="app-navbar-btn">Join Waitlist</AppButton>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
