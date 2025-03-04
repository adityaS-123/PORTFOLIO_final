import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Skypiea from "../../Assets/Projects/Skypiea.png";
import alonix from "../../Assets/Projects/alonix.png";
import crimeDapp from "../../Assets/Projects/crimeDapp.png";
import AWSChatbot from "../../Assets/Projects/AWSChatbot.png";

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
              imgPath={alonix}
              isBlog={false}
              title="Alonix"
              description="This project leverages the power of Aptos blockchain to tokenize products as NFTs, empowering businesses and users with transparent, secure, and efficient transactions."
              ghLink="https://github.com/adityaS-123/ALONIX"
              demoLink="https://alonix.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crimeDapp}
              isBlog={false}
              title="Crime Reporting Dapp"
              description="The Decentralized Crime Reporting System is a web application built on React.js that allows users to report crimes anonymously using the power of blockchain technology. By leveraging the Ethereum blockchain and MetaMask for identity management, the system ensures the privacy and security of users while enabling them to submit crime reports seamlessly."
              ghLink="https://github.com/vatsaltibrewal/Crime-Reporting-Dapp"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AWSChatbot}
              isBlog={false}
              title="AWS Hotel Reservation Chatbot"
              description="Created an AWS Lex chatbot for seamless communication and support for tasks like Hotel reservations."
              ghLink="https://github.com/adityaS-123/AWS_lex_chatbot"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Skypiea}
              isBlog={false}
              title="Skypiea"
              description="A fully decentralized voting system built on the Aptos blockchain, leveraging smart contracts to create a transparent, tamper-proof voting mechanism. Users can create voting polls, cast their votes, and view results in a decentralized manner."
              ghLink="https://github.com/adityaS-123/SKYPIEA"
              
            />
          </Col>

      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
