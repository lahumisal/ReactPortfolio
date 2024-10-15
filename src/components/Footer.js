import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillStar,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgGitFork } from "react-icons/cg";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Lahu Misal</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} LM</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/lahumisal"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/lahu-misal-1a426726b"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/_misal_lahu"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://mazinokari.com/" // Replace with your Mazi Nokari profile URL
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillStar />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.hackerrank.com/your_username" // Replace with your HackerRank profile URL
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <CgGitFork />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;