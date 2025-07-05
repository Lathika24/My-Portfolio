import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import college from "../../Assets/Projects/college.jpg";
import aiot from "../../Assets/Projects/aiot1.png";
import trainer from "../../Assets/Projects/trainer.jpg";
import inventory from "../../Assets/Projects/invy.jpg";
import todo from "../../Assets/Projects/todo1.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h3 style={{ fontSize: "2.1em", fontFamily: "monospace", fontWeight: "550" , color: "white"}}>
           MY RECENT <strong className="purple">WORKS</strong>
        </h3>
        <p style={{ color: "white",fontFamily:"monospace" }}>
          Here are a few projects I've worked on. 
        </p>
        <Row
        style={{ justifyContent: "center", paddingBottom: "10px" ,fontFamily:"monospace"}}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trainer}
              isBlog={false}
              title="Trainify"
              description="This project employs a Long Short-Term Memory (LSTM) model to smooth and predict joint angles in real-time video feed for better tracking and feedback. 
                            Using MediaPipe's Pose Detection with OpenCV, joint angles for selected exercises are extracted from video frames and fed into an
                             LSTM for movement trend analysis and prediction."
              ghLink="https://github.com/Lathika24/trainify-machine-learning-project"
              demoLink="https://drive.google.com/file/d/1t8oqvFu3nrQvsH5d10JS2xuZ0dVOKOhv/view?usp=sharing"/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Cloud-Based To-Do List"
              description="This project is a cloud-powered To-Do List web application developed using React JS for the frontend and Firebase for backend services including Authentication. It allows users to authenticate via Google, manage tasks in real-time, and access their task list securely from any device."
              ghLink="https://github.com/Lathika24/TO-DO-LIST-APPLICATION-FIREBASE-AUTHENTICATION"
              demoLink="http://localhost:3001/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiot}
              isBlog={false}
              title="Identification of Eye Movements to Control Smart Appliances"
              description="This project introduces an innovative solution to enhance the quality of life for individuals mobility restrictions by enabling them to control appliances
                           using their Eye status: Open or close. It merges deep learning and computer vision to let users control smart lighting with eye movements."
              ghLink="https://github.com/Lathika24/AIot-Eye-status-detection"
              demoLink="https://drive.google.com/file/d/1QRpe_1htvx5kvhcIdPKjYMLCb7qNrlxb/view?usp=sharing/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={college}
              isBlog={false}
              title="College Management System"
              description="This project presents a software application tailored to streamline and elevate the functionalities of a College Management System. The user-friendly Java Swing-based interface offers efficient data handling and retrieval capabilities."
              ghLink="https://github.com/Lathika24/COLLEGE-MANAGEMENT-SYSTEM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inventory}
              isBlog={false}
              title="Inventory Management System"
              description="This is an Inventory Management System developed using Django and SQL for efficient management of inventory in a business setting.It is a Python based software that allows for functional and accessible modification of inventory."
              ghLink="https://github.com/Lathika24/Inventory-Management-System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
