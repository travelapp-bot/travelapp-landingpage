"use client";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import starsG from "../../assets/icon/starsG.svg";

import { AdvantureCard, WishlistCard } from "../cards";
import styles from "./advanture.module.scss";
import data from '../../content.js'

const Advanture = () => {
  return (
    <div className={styles.advanture}>
      <Image
        src={starsG}
        alt="Everything you need for your next adventure"
        className={styles.starsImg}
      />
      <h1 className="title64">
        {data.website.section_two.title.span1} <br /> {data.website.section_two.title.span2}
      </h1>
      <Row className={styles.row}>
      {data.website.section_two.child.map((item, index) => (
         <Col 
         xs={12} 
         sm={6} 
         md={index >= 2 ? 4 : undefined} // Apply md={4} for items with index 2 and above
         key={index}
       >
          <AdvantureCard
            {...{
              title: item.title,
              desc: item.description,
              img: item.image,
            }}
          />
        </Col>
        ))}
        {/* <Col xs={12} sm={6}>
          <AdvantureCard
            {...{
              title: "Customizable trip plans",
              desc: "Let you customize the trip as per your preference",
              img: trip,
            }}
            imgClassName={styles.tripImg}
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
              img: tripAi,
            }}
          />
        </Col> */}
        <Col xs={12} sm={12} md={4}>
          <WishlistCard />
        </Col>
      </Row>
    </div>
  );
};

export default Advanture;
