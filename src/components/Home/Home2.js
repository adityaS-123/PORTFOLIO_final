import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
             My name is <b className="purple">Aditya Sharma</b>, and I am deeply passionate about <b className="purple">programming</b> and <b className="purple">technology</b>. Over the years, I have developed strong proficiency in multiple programming languages, including <b className="purple">Python</b>, <b className="purple">C++</b>, <b className="purple">JavaScript</b>, and <b className="purple">Java</b>.
              
              My primary areas of interest lie in <b className="purple">cloud computing</b>, <b className="purple">full-stack development</b>, and <b className="purple">artificial intelligence</b>. I am particularly enthusiastic about leveraging these domains to build <b className="purple">innovative</b> and <b className="purple">scalable</b> solutions that address real-world challenges.
              
              Additionally, I have extensive experience in developing <b className="purple">robust</b> and <b className="purple">efficient</b> applications using <b className="purple">Node.js</b>, along with modern JavaScript libraries and frameworks such as <b className="purple">React.js</b> and <b className="purple">Next.js</b>. I am always eager to expand my knowledge, explore <b className="purple">emerging technologies</b>, and apply my skills to create <b className="purple">impactful</b> and <b className="purple">meaningful</b> solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/adityaS-123"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/1004shrma"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aditya-sharma1004/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_adityaa04"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
