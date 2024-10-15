import { Col, Row } from "react-bootstrap";
import {
  DiJava,
  DiJavascript1,
  DiMysql,
  DiReact,
} from "react-icons/di";
import {
  SiC,
  SiHibernate,
  SiSpring,
  SiSpringboot,
} from "react-icons/si";

import { CgCPlusPlus } from "react-icons/cg";
import { FaFileAlt } from 'react-icons/fa';
import React from "react";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <SiC  />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSpring />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot  />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaFileAlt   />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiHibernate  />
      </Col>
      
    </Row>
  );
}

export default Techstack;
