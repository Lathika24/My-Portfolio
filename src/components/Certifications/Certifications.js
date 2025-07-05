import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCard from "./CertificationCard";

const certificationData = [
  {
    platform: "NPTEL",
    course:   "Programming in Java",
    meta:     "Score 58 % · 2024",
    link:     "https://drive.google.com/file/d/13_TnwqVXzyJUBv-GZOpneM7tW_WNTQ_0/view?usp=sharing"
  },
 
  {
    platform: "NPTEL",
    course:   "Cloud Computing",
    meta:     "Score 55 % · 2024",
    link:     "https://drive.google.com/file/d/1Y_yOjp4gV_4_s1w_o8vfEGCvExfnbvrS/view?usp=sharing"
  },

   {
    platform: "Oracle",
    course:   "OCI Foundations Associate",
    meta:     "Issued on  Feb 07 2025",
    link:     "https://drive.google.com/file/d/1piGO0-BOaqb2-YbeyWKarCNGAnSGfnNc/view?usp=sharing"
  },
  {
    platform: "Intel® Unnati",
    course:   "Artificial Intelligence of Things",
    meta:     "Jan 19 – May 06 2024",
    link:     "https://drive.google.com/file/d/1DAhZmwzgM-AVzlqV47_5SnGdJw1H04-B/view?usp=sharing"
  },
  {
    platform: "IBM / Coursera",
    course:   "Exploratory Data Analysis for ML",
    meta:     "Issued on Aug 05 2024",
    link:     "https://drive.google.com/file/d/1F6DybR_41I-wTS3vzRyH56yq7GXBb5ra/view?usp=sharing"
  },
  {
    platform: "AWS",
    course:   "AWS Academy Cloud Architecting",
    meta:     "40 hours · Oct 15 2023",
    link:     "https://drive.google.com/file/d/1O8fSZa21wlHw6TT5BxjF3aYk8gJ_UZvy/view?usp=sharing"
  }
];

export default function CertificationsSection() {
  return (
    <section className="certifications-section">
       <h4
    className="certifications-title"
    style={{ fontFamily: "monospace", textTransform: "uppercase" }}
  >
    CERTIFI<span className="purple">CATIONS</span>
  </h4>
      <Container>
        <Row xs={1} sm={2} md={3} className="g-4 justify-content-center">
          {certificationData.map((c, idx) => (
            <Col key={idx}>
              <CertificationCard {...c} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
