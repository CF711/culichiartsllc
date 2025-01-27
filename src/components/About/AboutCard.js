import React from "react";
import { Row } from "react-bootstrap"
import Card from "react-bootstrap/Card";

import "./AboutCard.scss"

function AboutCard({title, text, isLeftAligned}) {
  return (
    <Row className={isLeftAligned ? "about-card left-aligned-card" : "about-card right-aligned-card"}>
      <Card className="quote-card-view">
        <Card.Title>
          <h2>{title}</h2>
        </Card.Title>
        <Card.Body>
          <p>
            {text}
          </p>
        </Card.Body>
      </Card>
    </Row>
  );
}

export default AboutCard;
