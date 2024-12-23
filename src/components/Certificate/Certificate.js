import { Col, Container, Row } from "react-bootstrap";

import CertificateCard from "./CertificateCard";
import GitHub from "../../Assets/Projects/GitHub.jpg";
import Hibernate from "../../Assets/Projects/Hibernate.jpg";
import Java from "../../Assets/Projects/Java.jpg";
import MySQL from "../../Assets/Projects/MySQL.jpg";
import OOps from "../../Assets/Projects/OOPs_in_Java.jpg";
import Particle from "../Particle";
import React from "react";
import Servlet_JSP from "../../Assets/Projects/Servlet_JSP.jpg";
import SoftwareDevelopment from "../../Assets/Projects/Software_Development.jpg";
import SpringBoot from "../../Assets/Projects/SpringBoot.jpg";
import SpringFramework from "../../Assets/Projects/Spring_Framework.jpg";

function Certificate() {
  return (
    <Container fluid className="certification-section">
      <Particle />
      <Container>
        <h1 className="certification-heading">
          My <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some certifications I've earned.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="certification-card">
            <CertificateCard
              imgPath={SoftwareDevelopment}
              title="Software Development"
            />
          </Col>

          <Col md={4} className="certification-card">
            <CertificateCard
              imgPath={OOps}
              title="OOPS in Java"
            />
          </Col>

          <Col md={4} className="certification-card">
            <CertificateCard
              imgPath={Java}
              title="Java Programming"
            />
          </Col>

          <Col md={4} className="certification-card">
            <CertificateCard
              imgPath={MySQL}
              title="MySQL Database"
            />
          </Col>

          <Col md={4} className="certification-card">
            <CertificateCard
              imgPath={Servlet_JSP}
              title="Servlet and JSP"
            />
          </Col>

          <Col md={4} className="certification-card">
            <CertificateCard
              imgPath={SpringFramework}
              title="Spring Framework"
            />
          </Col>

          <Col md={4} className="certification-card">
            <CertificateCard
              imgPath={Hibernate}
              title="Hibernate"
            />
          </Col>

          <Col md={4} className="certification-card">
            <CertificateCard
              imgPath={SpringBoot}
              title="Spring Boot"
            />
          </Col>

          <Col md={4} className="certification-card">
            <CertificateCard
              imgPath={GitHub}
              title="Basic GitHub"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Certificate;
