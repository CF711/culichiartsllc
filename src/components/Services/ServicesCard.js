import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";

import "./ServicesCard.scss";

function ServicesCards(props) {
  const { t } = useTranslation();

  return (
    <Card className="services-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.link &&
          <Button variant="primary" href={props.link} target="_blank">
            {t('services.card-button')}
          </Button>
        }
      </Card.Body>
    </Card>
  );
}
export default ServicesCards;
