"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AppButton from "../buttons";
import { useDispatch } from "react-redux";
import { ModalToggle } from "@/app/redux/waitlist.slice";

const AppNavbar = () => {
  const dispatch = useDispatch()
  const openModal = () => {
    dispatch(ModalToggle(true))
  }
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">Travel.ai</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0">
            <Nav.Link href="#header">Home</Nav.Link>
            <Nav.Link href="#how-it-works">How it works</Nav.Link>
            <Nav.Link href="#blogs">Blogs</Nav.Link>
          </Nav>
          <AppButton onClick={openModal} icon className="app-navbar-btn">Join Waitlist</AppButton>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
