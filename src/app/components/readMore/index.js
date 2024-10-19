"use client";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import starsG from "../../assets/icon/starsG.svg";
import img1 from "../../assets/images/nautre-1.jpg";
import img2 from "../../assets/images/trip-2.jpg";
import img3 from "../../assets/images/trip-3.webp";
import { ReadMoreCard } from "../cards";
import styles from "./readMore.module.scss";

const ReadMore = () => {
  return (
    <div className={styles.readMore}>
      <Image
        src={starsG}
        alt="Everything you need for your next adventure"
        height={56}
        width={56}
      />
      <Row className="align-items-center">
        <Col xs={4}>
          <h1 className="title64">Read more</h1>
        </Col>
        <Col xs={8}>
          <p className="desc28">
            Lorem Ipsum is simply dummy text of the printing and typesetting.
          </p>
        </Col>
      </Row>
      <div className={styles.cardStack}>
        <Row>
          <Col>
            <ReadMoreCard
              {...{
                title: "Most popular places to visit in 2024",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                date: "24 June 2024",
                img: img1,
                labels: ["UNSEEN", "NATURE", "MOST VISITED"],
              }}
            />
          </Col>
          <Col>
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
          </Col>
          <Col>
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
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ReadMore;
