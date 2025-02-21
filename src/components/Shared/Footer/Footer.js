import React, { Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import Loading from "../Loading"

import "./Footer.scss"

function Footer() {
  const { t } = useTranslation();
  let year = new Date().getFullYear();
  return (
    <Container fluid className="footer">
      <Suspense fallback={<Loading />}>
        <Row>
          <Col md="12" className="footer-copywright">
            <h3 className="ca-copywright">{t('common.footer.copywrite')} © {year} {t('common.name')}</h3>
          </Col>
        </Row>
      </Suspense>
    </Container>
  );
}

export default Footer;
