import Image from "next/image";
import styles from "./page.module.scss";
import AppNavbar from "./components/navbar";
import Header from "./components/Header";
import { Col, Container, Row } from "react-bootstrap";
import starsG from "./assets/icon/starsG.svg";
import RoadMap from "./components/roadmap";
import Advanture from "./components/advanture";
import Trips from "./components/trips";
import Footer from "./components/footer";
import ReadMore from "./components/readMore";
import classNames from "classnames";
import StoreProvider from "./redux/Provider";
import AppModal from "./components/modal";

export default function Home() {
  return (
    <StoreProvider>
      <div className={styles.page}>
        <AppNavbar />
        <Container>
          <main className={styles.main}>
            <Header id="header" />
            <Row id="how-it-works" className={classNames("align-items-end", styles.textStack)}>
              <Col xs={12} md={5} xxl={4}>
                <h1 className="title64">
                  Here is <br /> How it works{" "}
                  <Image className={styles.starIcon} src={starsG} alt="stars" />
                </h1>
              </Col>
              <Col xs={12} md={7} xxl={8}>
                <p className="desc28 ps-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s.
                </p>
              </Col>
            </Row>
            <RoadMap />
            <Advanture />
          </main>
        </Container>
        <ReadMore />
        <div id="blogs" className={styles.footerSec}>
          <Container>
            <Trips />
            <Footer />
          </Container>
        </div>
        <AppModal />
      </div>
    </StoreProvider>
  );
}
