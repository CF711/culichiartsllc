import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import { useTranslation } from "react-i18next";

import "./About.scss";

function About() {
  const { t } = useTranslation();

    return (
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingBottom: "50px",
              }}
              >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Who <strong className="highlighted">WE</strong> Are
              </h1>
              <p>
                {t('about.who.description')}
              </p>
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
              >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
        </Container>
        <Container className="card-section">
          <AboutCard title={t('about.what.title')} text={t('about.what.description')} isLeftAligned={true} />
          <AboutCard title={t('about.vision.title')} text={t('about.vision.description')} isLeftAligned={false} />
          <AboutCard title={t('about.mission.title')} text={t('about.mission.description')} isLeftAligned={true} />
        </Container>
      </Container>
    );
}

export default About;
