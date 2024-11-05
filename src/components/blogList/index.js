"use client";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./blogList.module.scss";
import AppButton from "../buttons";
import { ReadMoreCard } from "../cards";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs, getCategories } from "@/redux/blog.action";
import { category } from "@/redux/blog.slice";
import { convertSecondsToDate } from "@/constant";
import Loader from "../loader";

const MultiSelectButtons = ({ selectedCategories, setSelectedCategories, categories }) => {
  console.log(categories)
  const toggleCategory = (categoryId) => {
    if (categoryId === "BB4EIB82pA0yKmFTLDLw") {
      setSelectedCategories(["BB4EIB82pA0yKmFTLDLw"]);
    } else {
      setSelectedCategories((prev) =>
        prev.includes(categoryId)
          ? prev.filter((cat) => cat !== categoryId)
          : [...prev.filter((cat) => cat !== "BB4EIB82pA0yKmFTLDLw"), categoryId]
      );
    }
  };

  return (
    <div className={styles.multiSelectBtns}>
      {categories.map((item, index) => (
        <AppButton
          key={index}
          onClick={() => toggleCategory(item.id)}
          className="multi-select-btn"
          style={{
            backgroundColor: selectedCategories.includes(item.id)
              ? "#e0fbe7"
              : "transparent",
            color: selectedCategories.includes(item.id) ? "#69b56d" : "#000",
            borderColor: selectedCategories.includes(item.id)
              ? "#69b56d"
              : "#CACACA",
          }}
        >
          {item.name}
        </AppButton>
      ))}
    </div>
  );
};

const BlogList = () => {
  const dispatch = useDispatch();
  const allBlogs = useSelector(state => state.blog.blogs);
  const blogCategories = useSelector(category);
  const [selectedCategories, setSelectedCategories] = useState(["BB4EIB82pA0yKmFTLDLw"]);



  useEffect(() => {
    dispatch(getAllBlogs());
    dispatch(getCategories());
  }, [dispatch]);

  const filteredCards = selectedCategories.includes("BB4EIB82pA0yKmFTLDLw")
    ? allBlogs
    : allBlogs.filter((blog) => selectedCategories.includes(blog.category));

  return (
    <Container>
      <div className={styles.blogList}>
        <MultiSelectButtons
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          categories={blogCategories}
        />
        <Row className={styles.row}>
        <Loader />
          {filteredCards?.map((card) => (
            <Col key={card.id} xs={12} md={6} lg={4}>
              <ReadMoreCard
                title={card.title}
                desc={card.content}
                date={convertSecondsToDate(card?.createDate?.seconds)}
                img={card?.imageUrl}
                tags={card?.tags}
                cardBg="#fff"
                className="shadow"
                divider
                href={`/detail/${card.id}`}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default BlogList;