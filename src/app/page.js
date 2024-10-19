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

export default function Home() {
  return (
    <div className={styles.page}>
      <AppNavbar />
      <Container>
        <main className={styles.main}>
          <Header />
          <Row className="align-items-end">
            <Col xs={4}>
              <h1 className="title64">
                Here is <br /> How it works{" "}
                <Image
                  className={styles.starIcon}
                  src={starsG}
                  alt="stars"
                  width={57}
                  height={57}
                  priority
                />
              </h1>
            </Col>
            <Col xs={8}>
              <p className="desc28 ps-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s.
              </p>
            </Col>
          </Row>
          <RoadMap />
          <Advanture />
          <ReadMore />
        </main>
      </Container>
      <div className={styles.footerSec}>
        <Container>
          <Trips />
          <Footer />
        </Container>
      </div>
    </div>
  );
}
