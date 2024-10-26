// "use client";
// import Image from "next/image";
// import { Col, Row } from "react-bootstrap";
// import roadmap1 from "../../assets/images/Tell-us-what-you-love.svg";
// import roadmap2 from "../../assets/images/Your-perfect-trip-HandPicked-for-your’s.svg";
// import roadmap3 from "../../assets/images/All-your-trip-plans-in-one-place.svg";
// import styles from "./roadmap.module.scss";
// import classNames from "classnames";

// const RoadMap = () => {
//   return (
//     <div className={styles.roadmap}>
//       <Row className={styles.row}>
//         <Col xs={{ order: 2, span: 12 }} sm={{ order: 1, span: 6 }} md={5}>
//           <div className={styles.content}>
//             <h1 className="title48">
//               Tell us what <br /> you love
//             </h1>
//             <p className="desc24">
//               Ask us for suggestions for any destination or ask us for an entire
//               itinerary. Be as specific as you can about the types of
//               experiences that you like or take our quiz to determine your
//               travel style.
//             </p>
//           </div>
//         </Col>
//         <Col xs={{ order: 1, span: 12 }} sm={{ order: 2, span: 6 }} md={5}>
//           <Image
//             className={styles.banner}
//             src={roadmap1}
//             alt="Tell us what you love"
//           />
//         </Col>
//       </Row>
//       <Row className={classNames(styles.row, styles.rowSpacing)}>
//         <Col xs={12} sm={6} md={6}>
//           <Image
//             className={classNames(styles.banner, styles.spacingXs)}
//             src={roadmap2}
//             alt="Your perfect trip, HandPicked for your’s"
//           />
//         </Col>
//         <Col xs={12} sm={6} md={5}>
//           <div className={classNames(styles.content, styles.spacingXs)}>
//             <h1 className="title48">
//               Your perfect trip, HandPicked for your’s
//             </h1>
//             <p className="desc24">
//               We’ll provide personalized, actionable travel experiences based on
//               your preferences. Check out photos, reviews, maps and more.
//               Favorite the items you like and add them to your trip plan.
//             </p>
//           </div>
//         </Col>
//       </Row>
//       <Row className={styles.row}>
//         <Col xs={{ order: 2, span: 12 }} sm={{ order: 1, span: 6 }} md={5}>
//           <div className={styles.content}>
//             <h1 className="title48">
//               All your trip plans, <br /> in one place
//             </h1>
//             <p className="desc24">
//               We’ll provide personalized, actionable travel experiences based on
//               your preferences. Check out photos, reviews, maps and more.
//               Favorite the items you like and add them to your trip plan.
//             </p>
//           </div>
//         </Col>
//         <Col xs={{ order: 1, span: 12 }} sm={{ order: 2, span: 6 }} md={5}>
//           <Image
//             className={classNames(styles.banner, styles.spacingXs)}
//             src={roadmap3}
//             alt="All your trip plans, in one place"
//           />
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default RoadMap;


"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Col, Row } from "react-bootstrap";
import roadmap1 from "../../assets/images/Tell-us-what-you-love.svg";
import roadmap2 from "../../assets/images/Your-perfect-trip-HandPicked-for-your’s.svg";
import roadmap3 from "../../assets/images/All-your-trip-plans-in-one-place.svg";
import plan from "../../assets/images/plane.png";
import travelbag from "../../assets/images/travelbag.png"
import styles from "./roadmap.module.scss";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const RoadMap = ({data}) => {
  const airplaneRef = useRef(null);

  useEffect(() => {
    if (gsap)
      gsap.to(airplaneRef.current, {
        scrollTrigger: {
          trigger: "#path-svg",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
        motionPath: {
          path: "#customPath",
          align: "#customPath",
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },
        duration: 10,
      });
  }, []);
  // console.log(data[0],'content for roadmap')
  return (
    <div className={styles.roadmap}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="924px"
        height="1809.5px"
        viewBox="-21.5 -13.5 924 1809.5"
        fill="none"
        id="path-svg"
        className={styles.pathSvg}

      >
        <path
          id="customPath"
          fill="none"
          stroke="#4B4B4B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="10,10"
          d="  M283.11,5.122c150-27.166,429.799-12.8,349,262c-12.5,62-101.5,56.5-80-23s149-82,143.5,38.5  c-4.678,102.472,32.496,169.146,68.552,216.963c15.492,20.546,43.349,65.627,69.07,100.096  c72.165,96.707,71.5,193.058,46.582,269.016C854.897,944.654,722.575,1135.078,362.5,1066.5  c-67.273-12.813-123.364-20.477-168.148-11.723C-80.5,1108.5-31.5,1492.5,71.06,1595.927c86,86.727,241.462,194.386,328.94,114.764  c122.5-111.5-37-173-72.5-117s-22.5,227.5,109.5,190c105.6-30,297-177.5,379.5-247.5" />
      </svg>

      <div className={styles.airplane}>
        <Image ref={airplaneRef} src={plan} alt="Airplane" />
      </div>

      <Row className={styles.row}>
        <Col xs={{ order: 2, span: 12 }} sm={{ order: 1, span: 6 }} md={5}>
          <div className={styles.contentNoBackground}>
            <div className="title48Div"><h1 className="title48">{data[0].title.span1}<br/>{data[0].title.span2} </h1> <Image className={styles.travelBag} src={travelbag} alt={data[0].alt} /> 
            </div>
            <p className="desc24">
              {data[0].description}
            </p>
          </div>
        </Col>
        <Col xs={{ order: 1, span: 12 }} sm={{ order: 2, span: 6 }} md={5}>
          <Image className={styles.banner} src={roadmap1} alt={data[0].alt} />
        </Col>
      </Row>

      <Row className={styles.row}>
        <Col xs={12} sm={6} md={6}>
          <Image className={styles.banner} src={roadmap2} alt={data[1].alt} />
        </Col>
        <Col xs={12} sm={6} md={5}>
          <div className={styles.content}>
            <h1 className="title48">{data[1].title.span1}<br/>{data[1].title.span2}</h1>
            <p className="desc24">
            {data[1].description}
            </p>
          </div>
        </Col>
      </Row>

      <Row className={styles.row}>
        <Col xs={{ order: 2, span: 12 }} sm={{ order: 1, span: 6 }} md={5}>
          <div className={styles.content}>
          <h1 className="title48">{data[2].title.span1}<br/>{data[2].title.span2}</h1>
            <p className="desc24">
            {data[2].description}
            </p>
          </div>
        </Col>
        <Col xs={{ order: 1, span: 12 }} sm={{ order: 2, span: 6 }} md={5}>
          <Image className={styles.banner} src={roadmap3} alt={data[2].alt} />
        </Col>
      </Row>
    </div>
  );
};

export default RoadMap;
