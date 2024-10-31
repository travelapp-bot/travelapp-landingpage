"use client";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./blogList.module.scss";
import AppButton from "../buttons";
import { ReadMoreCard } from "../cards";
import cardImg from "../../assets/images/trip-2.jpg";

// Category data for buttons
const categories = ["All", "Shopping", "Luxury", "Adventure", "Nature"];

// Sample card data with labels for each category
const cardData = [
  {
    id: 1,
    title: "Luxury Getaways",
    category: "Luxury",
    labels: ["UNSEEN", "NATURE", "LUXURY"],
  },
  {
    id: 2,
    title: "Shopping Spree",
    category: "Shopping",
    labels: ["DISCOUNTS", "BRANDS", "SALES"],
  },
  {
    id: 3,
    title: "Nature Escapes",
    category: "Nature",
    labels: ["WILDLIFE", "FOREST", "SCENIC"],
  },
  {
    id: 4,
    title: "Adventure Trails",
    category: "Adventure",
    labels: ["HIKING", "EXTREME", "THRILL"],
  },
  {
    id: 5,
    title: "Top Picks",
    category: "All",
    labels: ["POPULAR", "TRENDING", "RECOMMENDED"],
  },
];

const MultiSelectButtons = ({ selectedCategories, setSelectedCategories }) => {
  const toggleCategory = (category) => {
    if (category === "All") {
      // If "All" is selected, reset all other selections
      setSelectedCategories(["All"]);
    } else {
      // Allow multiple selections but deselect "All" if any other category is selected
      setSelectedCategories((prev) =>
        prev.includes(category)
          ? prev.filter((cat) => cat !== category)
          : [...prev.filter((cat) => cat !== "All"), category]
      );
    }
  };

  return (
    <div className={styles.multiSelectBtns}>
      {categories.map((category, index) => (
        <AppButton
          key={index}
          onClick={() => toggleCategory(category)}
          className="multi-select-btn"
          style={{
            backgroundColor: selectedCategories.includes(category)
              ? "#e0fbe7"
              : "transparent",
            color: selectedCategories.includes(category) ? "#69b56d" : "#000",
            borderColor: selectedCategories.includes(category)
              ? "#69b56d"
              : "#CACACA",
          }}
        >
          {category}
        </AppButton>
      ))}
    </div>
  );
};

const BlogList = () => {
  const [selectedCategories, setSelectedCategories] = useState(["All"]);

  // Filter cards based on selected categories
  const filteredCards = selectedCategories.includes("All")
    ? cardData
    : cardData.filter((card) => selectedCategories.includes(card.category));

  return (
    <Container>
      <div className={styles.blogList}>
        <MultiSelectButtons
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        <Row className={styles.row}>
          {filteredCards.map((card) => (
            <Col key={card.id} xs={12} md={6} lg={4}>
              <ReadMoreCard
                title={card.title}
                desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date="24 June 2024"
                img={cardImg}
                labels={card.labels.slice(0, 3)} // Only the first 3 labels
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
