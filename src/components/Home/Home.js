import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

import artScience from "../../Assets/art-science.png";

import "./Home.scss";
import "../../style.scss";

function Home() {
  const { t } = useTranslation();

  return (
    <section>
      <Container fluid className="home-section ca-main" id="home">
        <Container className="home-content">
          <img
            src={artScience}
            alt="About us image"
            className="img-fluid"
          />
        </Container>
      </Container>
    </section>
  );
}

export default Home;
