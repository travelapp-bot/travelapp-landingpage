"use client";
import Image from "next/image";
import styles from "./cards.module.scss";
import classNames from "classnames";
import arrowR from "../../assets/icon/arroe-right.svg";
import wishlist from "../../assets/images/Join-the-wish-list.svg";
import Link from "next/link";
import { ModalToggle } from "../../redux/waitlist.slice";
import { useDispatch } from "react-redux";
import { IconButton } from "../buttons";
import arrow from "../../assets/icon/arrow-up.svg";

export const AdvantureCard = ({
  title,
  desc,
  img,
  className,
  imgClassName,
}) => {

  return (
    <div className={classNames(styles.advantureCard, className)}>
      <div className={styles.advantureCardContent}>
        <h1 className="title28">{title}</h1>
        <p className="desc21">{desc}</p>
      </div>
      <Image
        src={img}
        alt={title}
        className={classNames(styles.advantureCardImg, imgClassName)}
      />
    </div>
  );
};

export const WishlistCard = () => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(ModalToggle(true));
  };

  return (
    <div className={styles.wishlistCard}>
      <div className={styles.wishlistCardContent}>
        <h1>
          Join the <br /> wish list
        </h1>
        <Image
          src={arrowR}
          alt="Arrow"
          className={styles.arrowR}
          onClick={openModal}
        />
      </div>
      <Image
        src={wishlist}
        alt="Join the wish list"
        className={styles.wishlistCardImg}
      />
    </div>
  );
};

export const ReadMoreCard = ({
  title,
  desc,
  date,
  img,
  tags = [],
  cardBg,
  className,
  divider,
  href,
}) => {

  const extractParagraphSnippet = (htmlContent) => {
    if (typeof window !== 'undefined' && typeof DOMParser !== 'undefined') {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, 'text/html');
      const paragraphs = doc.querySelectorAll('p');
      let text = Array.from(paragraphs).map(p => p.textContent).join(' ');
      return text.length > 100 ? text.substring(0, 100) + "..." : text;
    } else {
      return '';
    }
  };

  const getLabelStyles = (index) => {
    switch (index) {
      case 0:
        return {
          backgroundColor: "#E0FBE7",
          color: "#30653B",
          borderColor: "#30653B",
        };
      case 1:
        return {
          backgroundColor: "#F3FBE0",
          color: "#656230",
          borderColor: "#656230",
        };
      case 2:
        return {
          backgroundColor: "#E0EDFB",
          color: "#305265",
          borderColor: "#305265",
        };
      default:
        return { backgroundColor: "#E0FBE7", color: "#30653B" };
    }
  };
  return (
    <div
      className={classNames(styles.readMoreCard, className)}
      style={{ backgroundColor: cardBg }}
    >
      <div className={styles.readMoreContent}>
        <h1 className={classNames("title24",styles.titleOverflow)}>{title}</h1>
        <p className={classNames("desc16", styles.ellipse)}>{extractParagraphSnippet(desc)}</p>
        <div className={styles.dateStack}>
          <p className={classNames("desc16", styles.date)}>Date: {date}</p>
          {divider && <div className={styles.line} />}
          {href && (
            <IconButton
              hrefLink={href}
              img={arrow}
              className={styles.arrowBtn}
              size="1.125rem"
            />
          )}
        </div>
      </div>
      <div className={styles.imgStack}>
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className={styles.readMoreCardImg} />
        <div className={styles.labelStack}>
          {tags.map((option, ind) => (
            <p className={styles.label} key={ind} style={getLabelStyles(ind)}>
              {option}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
