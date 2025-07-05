import React from "react";
import { Row, Col, Card } from "react-bootstrap";

function Experience() {
const experiences = [
  {
    role: "Internship Student",
    company: "Smartify Software Solutions • Hyderabad",
    start: "2024-06",  
    end:   "2024-07",
    description: [
      "Contributed to the SMATOAPPS project, delivering responsive UI with HTML, CSS, and Bootstrap.",
      "Built dynamic components in Angular and JavaScript.",
      "Designed & queried PostgreSQL databases for data‑driven features."
    ],
  }
];

const formatMonth = (ym) =>
  new Date(ym + "-01").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long"
  });

return (
  <>
     <h3 style={{ fontSize: "2.1em", fontFamily: "monospace", fontWeight: "550",marginTop: "35px" }}>
           <strong className="purple">EXPERIENCE</strong>
        </h3>

    <Row style={{ justifyContent: "center", paddingBottom: "29px",paddingTop: "18px" }}>
      {experiences.map((exp, idx) => (
        <Col md={8} key={idx}>
          <Card className="experience-card">
            <Card.Body>
              <Card.Title>
                <strong>{exp.role}</strong> @ {exp.company}
              </Card.Title>

              {/* centred, prettified date */}
              <Card.Subtitle className="mb-3">
                {formatMonth(exp.start)} – {formatMonth(exp.end)}
              </Card.Subtitle>

              <ul>
                {exp.description.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </>
);
}

export default Experience;
