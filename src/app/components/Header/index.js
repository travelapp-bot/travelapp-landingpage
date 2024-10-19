"use client";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import stars from "../../assets/icon/starsW.svg";
import banner from "../../assets/images/headerBg.svg";
import facebook from "../../assets/icon/facebook.svg";
import instagram from "../../assets/icon/instagram.svg";
import x from "../../assets/icon/x.svg";
import youtube from "../../assets/icon/youtube.svg";
import styles from "./header.module.scss";
import AppButton, { IconButton } from "../buttons";

const Header = () => {
  return (
    <div className={styles.header}>
      <Row className={styles.row}>
        <Col xs={8}>
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
              <AppButton variant="dark" icon>
                Join Waitlist
              </AppButton>
              <div className={styles.socialBtns}>
                <span>
                  lets explore <br /> with us
                </span>
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
        </Col>
        <Col>
          <Image
            className={styles.banner}
            src={banner}
            alt="Discover your perfect Trip with AI-Power"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Header;
