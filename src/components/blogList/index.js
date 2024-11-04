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

const MultiSelectButtons = ({ selectedCategories, setSelectedCategories, categories }) => {
  const toggleCategory = (categoryId) => {
    if (categoryId === "All") {
      setSelectedCategories(["All"]);
    } else {
      setSelectedCategories((prev) =>
        prev.includes(categoryId)
          ? prev.filter((cat) => cat !== categoryId)
          : [...prev.filter((cat) => cat !== "All"), categoryId]
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
  const [selectedCategories, setSelectedCategories] = useState(["All"]);

  useEffect(() => {
    dispatch(getAllBlogs());
    dispatch(getCategories());
  }, [dispatch]);

  const filteredCards = selectedCategories.includes("All")
    ? allBlogs
    : allBlogs.filter((blog) => selectedCategories.includes(blog.categoryId));

  return (
    <Container>
      <div className={styles.blogList}>
        <MultiSelectButtons
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          categories={blogCategories}
        />
        <Row className={styles.row}>
          {filteredCards?.map((card) => (
            <Col key={card.id} xs={12} md={6} lg={4}>
              <ReadMoreCard
                title={card.title}
                desc={card.content}
                date="24 June 2024"
                img={card?.imageUrl}
                // labels={card.labels.slice(0, 3)}
                cardBg="#fff"
                className="shadow"
                divider
                href="#"
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default BlogList;