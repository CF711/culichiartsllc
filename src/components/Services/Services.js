import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServicesCard from "./ServicesCard";
import { Trans, useTranslation } from "react-i18next";

import neonPaintImg from "../../Assets/Services/neon-paint.png"
import artProgrammingImg from "../../Assets/Services/art-programming.png"

import "./Services.scss";

function Services() {
  const { t } = useTranslation();

  return (
    <section>
      <Container fluid className="services-section ca-main">
        <Container className="services-inner-container">
          <h1 className="services-heading">
            <strong className="highlighted">{t('services.title')}</strong>
          </h1>
          <p className="service-description">
            <Trans i18nKey="services.description.line1" />
            <br />
            <br />
            <Trans i18nKey="services.description.line2" />
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={6} className="services-card">
              <ServicesCard
                imgPath={neonPaintImg}
                title={t('services.steam-workshops.title')}
                description={t('services.steam-workshops.description')}
              />
            </Col>

            <Col md={6} className="services-card">
              <ServicesCard
                imgPath={artProgrammingImg}
                title={t('services.art-programming.title')}
                description={t('services.art-programming.description')}
              />
            </Col>
          </Row>
          <p className="service-description">
            <Trans i18nKey="services.description.line3" />
          </p>
        </Container>
      </Container>
    </section>
  );
}

export default Services;
