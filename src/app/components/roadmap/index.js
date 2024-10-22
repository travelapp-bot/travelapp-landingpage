"use client";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import roadmap1 from "../../assets/images/Tell-us-what-you-love.svg";
import roadmap2 from "../../assets/images/Your-perfect-trip-HandPicked-for-your’s.svg";
import roadmap3 from "../../assets/images/All-your-trip-plans-in-one-place.svg";
import styles from "./roadmap.module.scss";
import classNames from "classnames";

const RoadMap = () => {
  return (
    <div className={styles.roadmap}>
      <Row className={styles.row}>
        <Col xs={{order: 2, span:  12}} sm={{order: 1, span: 6}} md={5}>
          <div className={styles.content}>
            <h1 className="title48">
              Tell us what <br /> you love
            </h1>
            <p className="desc24">
              Ask us for suggestions for any destination or ask us for an entire
              itinerary. Be as specific as you can about the types of
              experiences that you like or take our quiz to determine your
              travel style.
            </p>
          </div>
        </Col>
        <Col xs={{order: 1, span:  12}} sm={{order: 2, span: 6}} md={5}>
          <Image
            className={styles.banner}
            src={roadmap1}
            alt="Tell us what you love"
          />
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col xs={12} sm={6} md={6}>
          <Image
            className={styles.banner}
            src={roadmap2}
            alt="Your perfect trip, HandPicked for your’s"
          />
        </Col>
        <Col xs={12} sm={6} md={5}>
          <div className={styles.content}>
            <h1 className="title48">
              Your perfect trip, HandPicked for your’s
            </h1>
            <p className="desc24">
              We’ll provide personalized, actionable travel experiences based on
              your preferences. Check out photos, reviews, maps and more.
              Favorite the items you like and add them to your trip plan.
            </p>
          </div>
        </Col>
      </Row>
      <Row className={classNames(styles.row, styles.spacing)}>
        <Col xs={{order: 2, span:  12}} sm={{order: 1, span: 6}} md={5}>
          <div className={styles.content}>
            <h1 className="title48">
              All your trip plans, <br /> in one place
            </h1>
            <p className="desc24">
              We’ll provide personalized, actionable travel experiences based on
              your preferences. Check out photos, reviews, maps and more.
              Favorite the items you like and add them to your trip plan.
            </p>
          </div>
        </Col>
        <Col xs={{order: 1, span:  12}} sm={{order: 2, span: 6}} md={5}>
          <Image
            className={styles.banner}
            src={roadmap3}
            alt="All your trip plans, in one place"
          />
        </Col>
      </Row>
    </div>
  );
};

export default RoadMap;
