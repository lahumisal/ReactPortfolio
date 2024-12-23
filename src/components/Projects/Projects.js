import { Col, Container, Row } from "react-bootstrap";

import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import React from "react";
import clock from "../../Assets/Projects/clock.png"
import image_slider from "../../Assets/Projects/image-slider.png";
import octagon from "../../Assets/Projects/octagon.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clock}
              isBlog={false}
              title="Digital Clock"
              description="A Digital Clock project displays the current time in a sleek and modern interface, updating in real-time.
              It is designed using technologies like HTML, CSS, and JavaScript (or a chosen programming language) to show hours, minutes, and seconds in a 
              user-friendly format. This project demonstrates skills in handling dynamic content, time calculations, and responsive design, making it a perfect example 
              of practical time-keeping technology. Additional features may include customizable themes, alarms, or time zone settings."
              ghLink="https://github.com/lahumisal/Digital_Clock"
              demoLink="https://resposive-dig-clock.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image_slider}
              isBlog={false}
              title="Image Slider"
              description="An Image Slider is a web component that displays a series of images in a slideshow format, allowing users to navigate through them.
              Built using HTML, CSS, and JavaScript, the slider can automatically cycle through images or allow manual navigation with buttons or indicators.
              CSS is used to style the images and transitions, while JavaScript controls the sliding effect, timing, and user interactions. Features may include 
              fade or slide animations, autoplay, and responsive design, ensuring a seamless experience across devices."
              ghLink="https://github.com/lahumisal/Image-Slider"
              demoLink="https://animage-slider.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={octagon}
              isBlog={false}
              title="Octagon"
              description="In this Octagon Shape project using HTML, CSS, and JavaScript, an eight-sided polygon is created purely with CSS styling. 
              A simple div is used in the HTML, while CSS uses the clip-path property to cut the shape into an octagon. You can style it with different 
              colors, borders, or shadows."
              ghLink="https://github.com/lahumisal/Octagon-Menu"
              demoLink="https://octagon-menu.netlify.app/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
