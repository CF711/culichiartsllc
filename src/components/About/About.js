import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutCard from "./AboutCard";
import { useTranslation } from "react-i18next";

import artScience from "../../Assets/art-science.png";
import PhotoCarousel from "./PhotoCarousel";

import "./About.scss";

function About() {
  const { t } = useTranslation();

    return (
      <section>
        <Container fluid className="about-section ca-main">
          <Container className="about-header">
            <Row>
              <Col md={7} sm={12} className="about-text left-text">
                <h1 className="about-header-text" style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                  Who <strong className="highlighted">WE</strong> Are
                </h1>
                <p>
                  {t('about.who.description')}
                </p>
              </Col>
              <Col
                md={5}
                sm={12}
                className="about-img"
                >
                  <PhotoCarousel />
              </Col>
            </Row>
          </Container>
          <Container className="card-section left-text">
            <AboutCard title={t('about.what.title')} text={t('about.what.description')} isLeftAligned={true} />
            <Row>
              <Col md={6} sm={12}>
                <AboutCard title={t('about.mission.title')} text={t('about.mission.description')} />
              </Col>
              <Col md={6} sm={12}>
                <AboutCard title={t('about.vision.title')} text={t('about.vision.description')} isLeftAligned={false} />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    );
}

export default About;
