import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,AiFillMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Lathika Kommineni</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} LK</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Lathika24"
                className="icon-colour  home-social-icons"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/lathika-kommineni-734920286/"
                className="icon-colour  home-social-icons"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:komminenilathika@gmail.com"
                className="icon-colour  home-social-icons"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send Email"
              >
                <AiFillMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
