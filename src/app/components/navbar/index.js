"use client";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AppButton from "../buttons";
import { useDispatch } from "react-redux";
import { ModalToggle } from "@/app/redux/waitlist.slice";
import styles from "./navbar.module.scss";

const AppNavbar = () => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(ModalToggle(true));
  };

  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <Navbar className={`${styles.navbar} ${isVisible ? styles.visible : ''}`} expand="lg">
      <Container>
        <Navbar.Brand href="#">Travel.ai</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className={styles.navbarCollapse}>
          <Nav className="mx-auto my-2 my-lg-0">
            <Nav.Link href="#header" className={styles.navItem}>Home</Nav.Link>
            <Nav.Link href="#how-it-works" className={styles.navItem}>How it works</Nav.Link>
            <Nav.Link href="#blogs" className={styles.navItem}>Blogs</Nav.Link>
            <AppButton onClick={openModal} icon className={`${styles.navItem} app-navbar-btn d-lg-none`}>
              Join Waitlist
            </AppButton>
          </Nav>
          <AppButton onClick={openModal} icon className={`${styles.navItem} app-navbar-btn d-none d-lg-flex`}>
              Join Waitlist
            </AppButton>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
