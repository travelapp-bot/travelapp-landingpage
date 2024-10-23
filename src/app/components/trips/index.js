"use client";
import classNames from "classnames";
import Image from "next/image";
import facebook from "../../assets/icon/facebook.svg";
import instagram from "../../assets/icon/instagram.svg";
import x from "../../assets/icon/x.svg";
import youtube from "../../assets/icon/youtube.svg";
import tripImg4 from "../../assets/images/nautre-1.jpg";
import tripImg2 from "../../assets/images/trip-2.jpg";
import tripImg3 from "../../assets/images/trip-3.webp";
import tripImg1 from "../../assets/images/trip1.svg";
import AppButton, { IconButton } from "../buttons";
import styles from "./trips.module.scss";
import { useDispatch } from "react-redux";
import { ModalToggle } from "@/app/redux/waitlist.slice";
import { useEffect, useState } from "react";

const Badge = ({ title }) => {
  return (
    <div className={styles.badge}>
      <h1>{title}</h1>
    </div>
  );
};

const Trips = () => {
  const dispatch = useDispatch()
  const [expandedIndex, setExpandedIndex] = useState(0);

  const images = [tripImg4, tripImg2, tripImg3, tripImg1]
  useEffect(() => {
    const timer = setInterval(() => {
      setExpandedIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [images.length]);

  const openModal = () => {
    dispatch(ModalToggle(true))
  }
  return (
    <div className={styles.tripSec}>
      <div className={styles.content}>
        <h1 className="title64">Tag us on your trips</h1>
        <p className="desc24">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text{" "}
        </p>
      </div>
      <div className={styles.btnStack}>
        <AppButton variant="dark" icon onClick={openModal}>
          Join Waitlist
        </AppButton>
        <div className={styles.socialBtns}>
          <IconButton img={facebook} alt="Facebook" />
          <IconButton

            img={instagram}
            alt="instagram"
            className="app-insta-btn"
          />
          <IconButton variant="dark" img={x} alt="x" />
          <IconButton variant="danger" img={youtube} alt="youtube" />
        </div>
      </div>
      <div className={styles.badgeStack}>
        <Badge title="#JOINTRAVELAI" />
        <Badge title="#JOINTRAVELAI" />
        <Badge title="#JOINTRAVELAI" />
        <Badge title="#JOINTRAVELAI" />
      </div>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <Image
            key={index}
            className={classNames(
              styles.galleryImg,
              styles.imgHalf,
              { [styles.expanded]: index === expandedIndex }
            )}
            src={image}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
export default Trips;
