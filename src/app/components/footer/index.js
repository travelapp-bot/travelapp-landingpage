"use client";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import facebook from "../../assets/icon/facebook.svg";
import instagram from "../../assets/icon/instagram.svg";
import x from "../../assets/icon/x.svg";
import youtube from "../../assets/icon/youtube.svg";
import { IconButton } from "../buttons";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Row className={styles.stack}>
        <Col xs={3}>
          <h1>Travel.ai</h1>
        </Col>
        <Col xs={6}>
          <div className={styles.links}>
            <Link href="#">Home</Link>
            <Link href="#">How it works</Link>
            <Link href="#">Blogs</Link>
          </div>
        </Col>
        <Col xs={3}>
          <div className={styles.socialBtns}>
            <IconButton img={facebook} alt="Facebook" />
            <IconButton
              img={instagram}
              alt="instagram"
              className="app-insta-btn"
            />
            <IconButton variant="dark" img={x} alt="x" />
            <IconButton variant="danger" img={youtube} alt="youtube" />
          </div>
        </Col>
      </Row>
      <p>© 2024 Travel.ai by TCB</p>
    </footer>
  );
};
export default Footer;
