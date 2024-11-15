"use client";
import classNames from "classnames";
import Image from "next/image";
import AppButton, { IconButton } from "../buttons";
import styles from "./trips.module.scss";
import { useDispatch } from "react-redux";
import { ModalToggle } from "../../redux/waitlist.slice";
import { useEffect, useState } from "react";
import data from "../../content";
import { Container } from "react-bootstrap";

const Badge = ({ title }) => {
  return (
    <div className={styles.badge}>
      <h1>{title}</h1>
    </div>
  );
};

const Trips = () => {
  const dispatch = useDispatch();
  const [expandedIndex, setExpandedIndex] = useState(0);

  const images = data?.website.social.tripImages
  
  useEffect(() => {
    const timer = setInterval(() => {
      setExpandedIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [images.length]);

  const openModal = () => {
    dispatch(ModalToggle(true));
  };
  return (
    <div className={styles.tripWrapper}>
      <Container fluid>
        <div className={styles.tripSec}>
          <div className={styles.content}>
            <h1 className="title64">{data.website.social.title}</h1>
            <p className="desc24">{data.website.social.description} </p>
          </div>
          <div className={styles.btnStack}>
            <AppButton variant="dark" icon onClick={openModal}>
              {data.website.cta_buttons[0].text}
            </AppButton>
            <div className={styles.socialBtns}>
              {data.website.social_btn.map((button, index) => (
                <IconButton
                  key={index}
                  img={button.img} // Add an 'img' property in each button if applicable
                  alt={button.text}
                  hrefLink={button.link}
                />
              ))}
            </div>
          </div>
          <div className={styles.badgeStack}>
            {data.website.social.hashtags.map((hashtag, index) => (
              <Badge title={hashtag} key={index} />
            ))}
          </div>
          <div className={styles.gallery}>
            {images.map((image, index) => (
              <Image
                key={index}
                className={classNames(styles.galleryImg, styles.imgHalf, {
                  [styles.expanded]: index === expandedIndex,
                })}
                src={image}
                alt={`Image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Trips;
