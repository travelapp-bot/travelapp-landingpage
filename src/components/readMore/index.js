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
import { getAllBlogs } from "@/redux/blog.action";
import { convertSecondsToDate } from "@/constant";

const ReadMore = () => {

  const dispatch = useDispatch()
  const { blogs } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getAllBlogs())
  }, [])

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767.9,
        settings: {
          slidesToShow: 1.5,
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
            <h1 className="title64">{data.website.read_more.title}</h1>
          </Col>
          <Col xs={12} md={8}>
            <p className="desc28">
              {data.website.read_more.description}
            </p>
          </Col>
        </Row>
        <div className={styles.cardStack}>
          <Slider {...settings}>
            {blogs?.slice(0,7).map((blog, index) => (
              <div className={styles.sliderStack} key={index}>
                <ReadMoreCard
                  key={index}
                  title={blog.title}
                  desc={blog?.content}
                  date={convertSecondsToDate(blog?.createDate?.seconds)}
                  img={blog.imageUrl}
                  tags={blog.tags}
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
