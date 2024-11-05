"use client";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

import { IconButton } from "../buttons";
import styles from "./footer.module.scss";
import data from "../../content";

const Footer = () => {
  // console.log(data.website.social, "link here");
  return (
    <footer className={styles.footer}>
      <Container  fluid>
        <Row className={styles.stack}>
          <Col xs={12} sm={3}>
            <h1>Travel.ai</h1>
          </Col>
          <Col xs={12} sm={6}>
            <div className={styles.links}>
              <Link href="#home">{data.website.navigation[0].text}</Link>
              <Link href="#how-it-works">
                {data.website.navigation[1].text}
              </Link>
              <Link href="#blogs">{data.website.navigation[2].text}</Link>
            </div>
          </Col>
          <Col xs={12} sm={3}>
            <div className={styles.socialBtns}>
              {data.website.social_btn.map((button, index) => (
                <IconButton
                  key={index}
                  img={button.img} // Add an 'img' property in each button if applicable
                  alt={button.text}
                  hrefLink={button.link}
                />
              ))}
            </div>
          </Col>
        </Row>
        <p>© 2024 Travel.ai by TCB</p>
      </Container>
    </footer>
  );
};
export default Footer;
