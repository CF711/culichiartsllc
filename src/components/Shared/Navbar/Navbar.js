import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HOME_ROUTE, ABOUT_ROUTE, SERVICES_ROUTE, CONTACT_ROUTE } from "../consts";
import logo from "../../../Assets/ca-logo-bw.png"

import "./Navbar.scss"

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navStyle, updateNavStyle] = useState(false);
  const { t } = useTranslation();
  const location = useLocation()
  console.log(location)

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavStyle(true);
    } else {
      updateNavStyle(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navStyle ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link 
                as={Link}
                to={HOME_ROUTE}
                onClick={() => updateExpanded(false)}
                className={location.pathname === HOME_ROUTE ? "active" : ""}
              >
                {t("common.header.home")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to={ABOUT_ROUTE}
                onClick={() => updateExpanded(false)}
                className={location.pathname === ABOUT_ROUTE ? "active" : ""}
              >
                {t("common.header.about")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to={SERVICES_ROUTE}
                onClick={() => updateExpanded(false)}
                className={location.pathname === SERVICES_ROUTE ? "active" : ""}
              >
                {t("common.header.services")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to={CONTACT_ROUTE}
                onClick={() => updateExpanded(false)}
                className={location.pathname === CONTACT_ROUTE ? "active" : ""}
              >
                {t("common.header.contact")}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
