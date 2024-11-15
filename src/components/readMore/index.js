"use client";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import starsG from "../../assets/icon/starsG.svg";
import { ReadMoreCard } from "../cards";
import styles from "./readMore.module.scss";
import Slider from "react-slick";
import data from '../../content';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSevenBlogs } from "@/redux/blog.action";
import { convertSecondsToDate } from "@/constant";
import classNames from "classnames";

const ReadMore = () => {

  const dispatch = useDispatch()
  const { blogs } = useSelector((state) => state.blog);
  const colors = ["#E0FBE7", "#F3FBE0", "#E0EDFB", "#FBE0E3", "#E0FBF5", "#FBEDE0", "#E8E0FB"];


  useEffect(() => {
    dispatch(getSevenBlogs())
  }, [])

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    centerMode: false,
    initialSlide: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // ltr: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767.9,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          swipeToSlide: true, // Enable swipe-to-slide functionality
          arrows: false, // Default to show arrows
        },
      },
    ],
  };



  return (
    <div className={styles.readMore}>
      <Container >
        <Image
          src={starsG}
          alt="Everything you need for your next adventure"
          className={styles.starsImg}
        />
        <Row className={classNames(styles.headingStack,"align-items-end")}>
          <Col xs={12} md={5}>
            <h1 className="title64">{data.website.read_more.title}</h1>
          </Col>
          <Col xs={12} md={7}>
            <p className="desc28">
              {data.website.read_more.description}
            </p>
          </Col>
        </Row>
        <div className={styles.cardStack}>
          <Slider {...settings}>
          {blogs?.map((blog, index) => (
              <div className={styles.sliderStack} key={index}>
                <ReadMoreCard
                  key={index}
                  title={blog.title}
                  desc={blog?.content}
                  // date={blog?.date}
                  img={blog.imageUrl}
                  tags={blog.tags}
                  date={
                    blog?.createDate
                      ? new Date(blog?.createDate).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric"
                        })
                      : "Date not available" // Fallback if createDate is undefined or invalid
                  }
                  cardBg={colors[index % colors.length]} // Assign background color based on index
                />
              </div>
            ))}

          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default ReadMore;
