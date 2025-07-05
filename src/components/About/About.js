import React from "react";
import { Container } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Experience from "./Experience"; 

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <h3 style={{ fontSize: "2.1em", fontFamily: "monospace", fontWeight: "550" }}>
           <strong className="purple">SKILLSET</strong>
        </h3>
        <Techstack />
        <Experience />
        <Github />
      </Container>
    </Container>
  );
}

export default About;
