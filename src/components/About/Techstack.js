import React from "react";
import { Row, Col } from "react-bootstrap";

const stacks = [
  { title: "Languages", emoji: "💻", list: ["Python", "C", "C++", "Java", "JavaScript"] },
  { title: "Frontend",  emoji: "🌐", list: ["HTML", "CSS", "React", "React Native", "FastAPI"] },
  { title: "Backend",  emoji: "⚙️", list: ["Node.js", "Django", "SpringBoot","Flask"] },
  { title: "Database",  emoji: "🗄️", list: ["SQL", "PostgreSQL", "MongoDB", "SQLite"] },
  { title: "Cloud",     emoji: "☁️", list: ["AWS", "Docker","MS Azure","GitHub Actions"]},
  { title: "AI / ML",   emoji: "🤖", list: ["TensorFlow", "YOLO", "PyTorch", "Scikit‑learn"] },
];

export default function Techstack() {
  return (
    <>
      <Row className="gy-4 justify-content-center">
        {stacks.map((cat, idx) => (
          <Col md={4} sm={6} xs={11} key={idx}>
            <div className="tech-card">
              <div className="tech-header">
              
                <span className="title">{cat.emoji}&nbsp; {cat.title}</span>
              </div>
              <div className="tech-pills">
                {cat.list.map(skill => (
                  <span key={skill} className="tech-pill">{skill}</span>
                ))}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}

