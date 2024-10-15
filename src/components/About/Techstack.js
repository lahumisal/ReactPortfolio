import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiMysql,
  DiJava,
} from "react-icons/di";
import {
  SiSpring,
  SiSpringboot,
  SiC,
  SiHibernate,
  SiLombok,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { FaFileAlt } from 'react-icons/fa';

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
