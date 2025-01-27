import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServicesCard from "./ServicesCard";
import { useTranslation } from "react-i18next";

import neonPaint from "../../Assets/Services/neon-paint.png"
import printing from "../../Assets/Services/printing.png"

import "./Services.scss";

function Services() {
  const { t } = useTranslation();

  return (
    <Container fluid className="services-section">
      <Container>
        <h1 className="services-heading">
          <strong className="highlighted">{t('services.title')}</strong>
        </h1>
        <p>
          {t('services.description')}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="services-card">
            <ServicesCard
              imgPath={neonPaint}
              title={t('services.steam-workshops.title')}
              description={t('services.steam-workshops.description')}
            />
          </Col>

          <Col md={6} className="services-card">
            <ServicesCard
              imgPath={printing}
              title={t('services.art-programming.title')}
              description={t('services.art-programming.description')}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Services;
