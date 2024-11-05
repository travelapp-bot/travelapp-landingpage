"use client";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AppButton from "../buttons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { ModalToggle } from "../../redux/waitlist.slice";
import styles from "./navbar.module.scss";
import data from "../../content.js"
import { useRouter } from "next/navigation";

const AppNavbar = () => {

  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    dispatch(ModalToggle(true));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleLinkClick = () => {
    setIsExpanded(false);
  };

  return (
    <Navbar
      className={`${styles.navbar} ${isVisible ? styles.visible : ''}`}
      expand="lg"
      expanded={isExpanded}
      onToggle={() => setIsExpanded(!isExpanded)}
    >
      <Container fluid>
        <Navbar.Brand >Travel.ai</Navbar.Brand>
        <Navbar.Toggle style={{ border: 'none' }} aria-controls="navbarScroll">
          <FontAwesomeIcon className="hamburger" icon={faBars} />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll" className={styles.navbarCollapse}>
          <Nav className="mx-auto my-2 my-lg-0">
            <Nav.Link href="/" className={styles.navItem} onClick={handleLinkClick}>
              {data.website.navigation[0].text}
            </Nav.Link>
            <Nav.Link href="#how-it-works" className={styles.navItem} onClick={handleLinkClick}>
              {data.website.navigation[1].text}
            </Nav.Link>
            <Nav.Link href="/blogs" className={styles.navItem} >  {/* //onClick={handleLinkClick} */}
            {data.website.navigation[2].text}
            </Nav.Link>
            <AppButton onClick={() => { openModal(); handleLinkClick(); }} icon className={`${styles.navItem} app-navbar-btn d-lg-none`}>
              {data.website.cta_buttons[0].text}
            </AppButton>
          </Nav>
          <AppButton onClick={openModal} icon className={`${styles.navItem} app-navbar-btn d-none d-lg-flex`}>
            {data.website.cta_buttons[0].text}
          </AppButton>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
