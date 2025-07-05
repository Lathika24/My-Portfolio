import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import codingImg from "../../Assets/Hand coding-rafiki.svg";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import Type from "./Type";
import pdf from "../../Assets/../Assets/NAGA LATHIKA KOMMINENI_RESUME.pdf";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 20, paddingTop: 5 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I am <strong className="main-name"> Naga Lathika Kommineni </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={4} className="myAvtar">
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 40 }}>
                <Tilt>
                  <img src={myImg} className="img-fluid" alt="avatar" style={{ maxWidth: "340px", borderRadius: "50%" }} />
                </Tilt>

                <div style={{ display: "flex", gap: "15px", marginTop: "2px",justifyContent: "center" }}>
                  {/* Resume Button */}
                <button
                  className="resume-button"
                  style={{ marginTop: "30px",}}
                  onClick={() => window.open(pdf, "_blank")}
                >
                  VIEW RESUME
                </button>
                </div>
              </div>
            </Col>
          </Row>

          {/* BEHIND THE CODE SECTION */}
          <Row style={{ marginTop: "67px" }}>
            <Col md={8} className="home-about-description">
              <h3 style={{ fontSize: "2.1em", fontFamily: "monospace", fontWeight: "550" }}>
                <span className="purple"> BEHIND THE CODE </span>
              </h3>

              <p className="home-about-body">
                <b className="purple"> > whoami </b>
                <br /> lathika@portfolio:~$ 
                <b className="purple"> Computer Science and Engineering Student & Developer. </b>
                <br />
                <br /> <b className="purple"> > cat about.txt </b>
                <br />🎓 UG Student passionate about coding & data-driven solutions <br />
                📚 Skilled in Python, C and SQL <br />
                💻 Full-Stack Developer with modern web technologies <br />
                🧠 AI/ML enthusiast with hands-on project experience <br />
                📊 Interested in data analysis, automation & smart systems <br />
                ⚡ Curious mind always building, learning & exploring new tech <br />
                <br />
                <b className="purple"> > I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks like</b>
                <b className="purple"> React.js and Next.js</b>
              </p>
            </Col>

            <Col md={4} className="homeimg" style={{ marginTop: "120px" }}>
              <img src={codingImg} className="img-fluid custom-home" alt="home" />
            </Col>
          </Row>

          <Row id="contact-section" style={{ marginBottom: "-40px" }}>
            <Col md={12} className="home-about-social">
              <h6>CONNECT WITH ME</h6>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a href="https://github.com/Lathika24" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a href="https://www.linkedin.com/in/lathika-kommineni-734920286/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a href="mailto:komminenilathika@gmail.com" className="icon-colour home-social-icons" target="_blank" rel="noopener noreferrer" aria-label="Send Email">
                    <AiFillMail />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>

        </Container>
      </Container>
    </section>
  );
}

export default Home;

