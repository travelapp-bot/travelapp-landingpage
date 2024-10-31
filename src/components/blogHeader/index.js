"use client";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import stars from "../../assets/icon/starsW.svg";
import styles from "./blogHeader.module.scss";

const BlogHeader = () => {
  return (
    <Container fluid>
      <div className={styles.header}>
        <Row className={styles.row}>
          <Col xs={12} md={8}>
            <div className={styles.content}>
              <Image
                className={styles.starIcon}
                src={stars}
                alt="stars"
                priority
              />
              <h1>Travel Blogs</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default BlogHeader;
