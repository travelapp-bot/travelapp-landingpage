"use client";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import starsG from "../../assets/icon/starsG.svg";
import trip from "../../assets/images/Customizable-trip-plans.svg";
import maps from "../../assets/images/Photos-maps-&-reviews.svg";
import popular from "../../assets/images/Popular-itineraries.svg";
import { AdvantureCard, WishlistCard } from "../cards";
import styles from "./advanture.module.scss";

const Advanture = () => {
  return (
    <div className={styles.advanture}>
      <Image
        src={starsG}
        alt="Everything you need for your next adventure"
        className={styles.starsImg}
      />
      <h1 className="title64">
        Everything you need <br /> for your next adventure
      </h1>
      <Row className={styles.row}>
        <Col xs={12} sm={6}>
          <AdvantureCard
            {...{
              title: "Photos, maps & reviews",
              desc: "Don’t just read about a place; experience it. With vibrant photos, interactive maps and reviews, you’ll feel like you’re already there.",
              img: maps,
            }}
          />
        </Col>
        <Col xs={12} sm={6}>
          <AdvantureCard
            {...{
              title: "Customizable trip plans",
              desc: "Let you customize the trip as per your preference",
              img: trip,
            }}
            imgClassName="ms-auto"
          />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <AdvantureCard
            {...{
              title: "Popular itineraries",
              desc: "Visit our Explore page to get ideas and inspiration from other travelers",
              img: popular,
            }}
          />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <AdvantureCard
            {...{
              title: "Your trip with AI",
              desc: "Visit our Explore page to get ideas and inspiration from other travelers",
              img: popular,
            }}
          />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <WishlistCard />
        </Col>
      </Row>
    </div>
  );
};

export default Advanture;
