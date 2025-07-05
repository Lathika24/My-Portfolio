import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function CertificationCard({ platform, course, meta, link }) {
  return (
    <Card className="cert-card">
      {/* window header */}
      <div className="cert-header">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="title">{platform}</span>
      </div>

      <Card.Body>
        <Card.Title className="course-title">{course}</Card.Title>
        <Card.Subtitle className="mb-3">{meta}</Card.Subtitle>

        {link && (
          <Button
            href={link}
            target="_blank"
            className="cert-card-btn"
          >
            View
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

