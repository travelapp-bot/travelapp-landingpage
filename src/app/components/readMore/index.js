"use client";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import starsG from "../../assets/icon/starsG.svg";
import img1 from "../../assets/images/nautre-1.jpg";
import img2 from "../../assets/images/trip-2.jpg";
import img3 from "../../assets/images/trip-3.webp";
import { ReadMoreCard } from "../cards";
import styles from "./readMore.module.scss";
import Slider from "react-slick";


const ReadMore = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className={styles.readMore}>
      <Container>
        <Image
          src={starsG}
          alt="Everything you need for your next adventure"
          className={styles.starsImg}
        />
        <Row className="align-items-center">
          <Col xs={12} md={4}>
            <h1 className="title64">Read more</h1>
          </Col>
          <Col xs={12} md={8}>
            <p className="desc28">
              Lorem Ipsum is simply dummy text of the printing and typesetting.
            </p>
          </Col>
        </Row>
        <div className={styles.cardStack}>
          <Slider {...settings}>
            <div className={styles.sliderStack}>
              <ReadMoreCard
                {...{
                  title: "Most popular places to visit in 2024",
                  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                  date: "24 June 2024",
                  img: img1,
                  labels: ["UNSEEN", "NATURE", "MOST VISITED"],
                }}
              />
            </div>
            <div className={styles.sliderStack}>
              <ReadMoreCard
                {...{
                  title: "Most popular places to visit in 2024",
                  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                  date: "24 June 2024",
                  img: img2,
                  labels: ["UNSEEN", "NATURE", "MOST VISITED"],
                }}
                cardBg="#DFF7FF"
              />
            </div>
            <div className={styles.sliderStack}>
              <ReadMoreCard
                {...{
                  title: "Most popular places to visit in 2024",
                  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                  date: "24 June 2024",
                  img: img3,
                  labels: ["UNSEEN", "NATURE", "MOST VISITED"],
                }}
                cardBg="#E0FBE7"
              />
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default ReadMore;
