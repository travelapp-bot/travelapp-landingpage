import Image from "next/image";
import styles from "./page.module.scss";
import AppNavbar from "../components/navbar";
import Header from "../components/Header";
import { Col, Container, Row } from "react-bootstrap";
import starsG from "../assets/icon/starsG.svg";
import RoadMap from "../components/roadmap";
import Advanture from "../components/advanture";
import Trips from "../components/trips";
import Footer from "../components/footer";
import ReadMore from "../components/readMore";
import classNames from "classnames";
import StoreProvider from "../redux/Provider";
import AppModal from "../components/modal";
import data from "../content.js";

export default function Home() {
  return (
    <StoreProvider>
      <div className={styles.page}>
        <AppNavbar />
        <main className={styles.main}>
          <Container fluid>
            <Header id="home" />
          </Container>
          <Container>
            <Row
              id="how-it-works"
              className={classNames("align-items-end", styles.textStack)}
            >
              <Col xs={12} md={5} xxl={4}>
                <h1 className="title64">
                  {data.website.section_one.title.span1}
                  <br />
                  {data.website.section_one.title.span2}{" "}
                  <Image className={styles.starIcon} src={starsG} alt="stars" />
                </h1>
              </Col>
              <Col xs={12} md={7} xxl={8}>
                <p className="desc28 ps-4">
                  {data.website.section_one.description}.
                </p>
              </Col>
            </Row>
            <RoadMap data={data.website.section_one.child} />
            <Advanture />
          </Container>
        </main>
        <ReadMore />
        <div id="blogs" >
          <Trips />
        </div>
        <AppModal />
      </div>
    </StoreProvider>
  );
}
