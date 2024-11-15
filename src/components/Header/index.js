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
import { ModalToggle } from "../../redux/waitlist.slice";
import { useDispatch } from "react-redux";
import React from "react";
import data from '../../content.js'

const Header = () => {
  const dispatch = useDispatch()

  const openModal = () => {
    dispatch(ModalToggle(true))
    // console.log("open modal")
  }
  return (
    <div className={styles.header}>
      <Row className={styles.row}>
        <Col xs={{ order: 2, span: 12 }} md={{ order: 1, span: 8 }} xxl={6}>
          <div className={styles.content}>
            <h1>
              {data.website.tagline}{" "}
              <Image
                className={styles.starIcon}
                src={stars}
                alt="stars"
                // width={37}
                // height={37}
                priority
              />
            </h1>
            <p>{data.website.description}</p>
            <div className={styles.btnStack}>
              <AppButton variant="dark" icon onClick={openModal} >
                {data.website.cta_buttons[0].text}
              </AppButton>
              <div className={styles.socialBtnsStack}>
                <span>
                  Explore with us
                </span>
                <div className={styles.socialBtns}>
                  {data.website.social_btn.map((button, index) => (
                    <IconButton
                      key={index}
                      img={button.img}               // Add an 'img' property in each button if applicable
                      alt={button.text}
                      hrefLink={button.link}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={{ order: 1, span: 12 }} md={{ order: 2, span: 4 }} xxl={5}>
          <div className={styles.bannerStack}>
            <div className={styles.shadow} />
            <Image
              className={styles.banner}
              src={banner}
              alt={data.website.description}
            />
          </div>
        </Col>
      </Row>
      {/* <AppModal /> */}
    </div>
  );
};

export default Header;
