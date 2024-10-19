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

const Badge = ({ title }) => {
  return (
    <div className={styles.badge}>
      <h1>{title}</h1>
    </div>
  );
};

const Trips = () => {
  return (
    <div className={styles.tripSec}>
      <div className={styles.content}>
        <h1 className="title64">Tag us on your trips</h1>
        <p className="desc24">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text{" "}
        </p>
      </div>
      <div className={styles.btnStack}>
        <AppButton variant="dark" icon>
          Join Waitlist
        </AppButton>
        <div className={styles.socialBtns}>
          <IconButton  img={facebook} alt="Facebook" />
          <IconButton
            
            img={instagram}
            alt="instagram"
            className="app-insta-btn"
          />
          <IconButton  variant="dark" img={x} alt="x" />
          <IconButton  variant="danger" img={youtube} alt="youtube" />
        </div>
      </div>
      <div className={styles.badgeStack}>
        <Badge title="#JOINTRAVELAI" />
        <Badge title="#JOINTRAVELAI" />
        <Badge title="#JOINTRAVELAI" />
        <Badge title="#JOINTRAVELAI" />
      </div>
      <div className={styles.gallery}>
        <Image
          src={tripImg2}
          alt="nature view"
          className={classNames(styles.galleryImg, styles.imgHalf)}
        />
        <Image
          src={tripImg3}
          alt="nature view"
          className={classNames(styles.galleryImg, styles.imgHalf)}
        />
        <Image
          src={tripImg1}
          alt="nature view"
          className={classNames(styles.galleryImg, styles.imgFull)}
        />
        <Image
          src={tripImg4}
          alt="nature view"
          className={classNames(styles.galleryImg, styles.imgHalf)}
        />
      </div>
    </div>
  );
};
export default Trips;
