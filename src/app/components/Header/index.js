"use client";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import stars from "../../assets/icon/starsW.svg";
import banner from "../../assets/images/headerBg.png";
import facebook from "../../assets/icon/facebook.svg";
import instagram from "../../assets/icon/instagram.svg";
import x from "../../assets/icon/x.svg";
import youtube from "../../assets/icon/youtube.svg";
import styles from "./header.module.scss";
import AppButton, { IconButton } from "../buttons";
import AppModal from "../modal";
import React from "react";

const Header = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className={styles.header}>
      <Row className={styles.row}>
        <Col xs={{ order: 2, span: 12 }} md={{ order: 1, span: 8 }}>
          <div className={styles.content}>
            <h1>
              Discover your perfect Trip with AI-Power{" "}
              <Image
                className={styles.starIcon}
                src={stars}
                alt="stars"
                width={57}
                height={57}
                priority
              />
            </h1>
            <p>
              Plan unforgettable journeys tailored to your preferences, powered
              by intelligent algorithms for a seamless travel experience.
            </p>
            <div className={styles.btnStack}>
              <AppButton variant="dark" icon onClick={() => setModalShow(true)}>
                Join Waitlist
              </AppButton>
              <div className={styles.socialBtnsStack}>
                <span>
                  lets explore <br /> with us
                </span>
                <div className={styles.socialBtns}>
                  <IconButton size="xs" img={facebook} alt="Facebook" />
                  <IconButton
                    size="xs"
                    img={instagram}
                    alt="instagram"
                    className="app-insta-btn"
                  />
                  <IconButton size="xs" variant="dark" img={x} alt="x" />
                  <IconButton
                    size="xs"
                    variant="danger"
                    img={youtube}
                    alt="youtube"
                  />
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={{ order: 1, span: 12 }} md={{ order: 2, span: 4 }}>
          <div className={styles.bannerStack}>
            <div className={styles.shadow} />
            <Image
              className={styles.banner}
              src={banner}
              alt="Discover your perfect Trip with AI-Power"
            />
          </div>
        </Col>
      </Row>
      <AppModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Header;
