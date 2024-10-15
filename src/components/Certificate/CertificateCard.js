import { BsGithub } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CgWebsite } from "react-icons/cg";
import React from "react";

function CertificateCard(props) {
  return (
    <Card className="certification-card-view" style={{ border: "none", background: "#1a1a1a" }}>
      <Card.Img variant="top" src={props.imgPath} alt="certificate-img" />
      <Card.Body style={{ color: "white" }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.certificateLink && (
          <Button variant="primary" href={props.certificateLink} target="_blank">
            <CgWebsite /> &nbsp; View Certificate
          </Button>
        )}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank" style={{ marginLeft: "10px" }}>
            <BsGithub /> &nbsp; GitHub
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default CertificateCard;
