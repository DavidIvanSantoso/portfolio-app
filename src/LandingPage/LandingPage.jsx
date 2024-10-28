/* eslint-disable react/no-unescaped-entities */
import { Col, Container, Image, Row } from "react-bootstrap";
import "../LandingPage/LandingPage.css";
import profileImg from "../assets/ProfileImg/profilepic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import NavbarTop from "../Navbar/Navbar";
// import { FaVuejs, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

// import { Slide } from "react-awesome-reveal";
// import WorkExperience from "../WorkExperience/WorkExperience";
import "./SkillsShowcase.css";
import Skills from "../Skills/Skills";
import Project from "../ProjectPage/Project";

function LandingPage() {
  // const skills = [
  //   { icon: FaVuejs, name: "Vue.js" },
  //   { icon: FaReact, name: "React" },
  //   { icon: FaHtml5, name: "HTML" },
  //   { icon: FaCss3Alt, name: "CSS" },
  // ];
  const messages = ["Hi!", "안녕하세요!", "Selamat Datang!"];
  const [displayedText, setDisplayedText] = useState("");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const typingSpeed = 50; // Typing speed (ms)
  const pauseBetweenMessages = 1500; // Pause between messages (ms)

  //typewriting effect
  useEffect(() => {
    let timeout;

    if (typing) {
      // Typing effect
      const currentMessage = messages[currentMessageIndex];
      if (displayedText.length < currentMessage.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentMessage.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        // Pause before erasing
        timeout = setTimeout(() => {
          setTyping(false);
        }, pauseBetweenMessages);
      }
    } else {
      // Erasing effect
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, typingSpeed);
      } else {
        // Move to the next message and start typing again
        setCurrentMessageIndex(
          (prevIndex) => (prevIndex + 1) % messages.length
        );
        setTyping(true);
      }
    }

    // Cleanup timeout on unmount
    return () => clearTimeout(timeout);
  }, [displayedText, typing, messages, currentMessageIndex]);

  return (
    <>
      <NavbarTop></NavbarTop>
      <Container
        fluid
        className="introduction"
        style={{ padding: "0", margin: "0" }}
      >
        <Row>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            width={"100%"}
          >
            <path
              fill="#5C8374"
              fillOpacity="1"
              d="M0,96L21.8,85.3C43.6,75,87,53,131,90.7C174.5,128,218,224,262,256C305.5,288,349,256,393,229.3C436.4,203,480,181,524,170.7C567.3,160,611,160,655,144C698.2,128,742,96,785,90.7C829.1,85,873,107,916,122.7C960,139,1004,149,1047,176C1090.9,203,1135,245,1178,245.3C1221.8,245,1265,203,1309,186.7C1352.7,171,1396,181,1418,186.7L1440,192L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
            ></path>
          </svg>
        </Row>
        <Row
          className="align-items-center justify-content-center"
          id="profile-page"
        >
          <Col xs={12} md={6} className="text-center mb-3 mb-md-0">
            <div className="profile-picture">
              <Image src={profileImg} width="70%" fluid rounded />
            </div>
          </Col>
          <Col xs={12} md={6} className="text-center text-md-start">
            <Row>
              <div className="profile-text">
                <h1>{displayedText}</h1>
              </div>
            </Row>
            <Row>
              <div className="profile-intro pt-5">
                <h4>
                  My name is David Ivan Santoso or you can call me David!.
                </h4>
                <h4>
                  I'm a fullstack developer that specialize in website
                  development and mobile app development based in Surabaya!
                </h4>
              </div>
            </Row>
            <Row>
              <div className="mt-3">
                <FontAwesomeIcon
                  className="me-3 social-media-blob"
                  icon={faInstagram}
                  size="2x"
                  style={{ color: "#5c8374" }}
                />
                <FontAwesomeIcon
                  className="mx-3 social-media-blob"
                  icon={faGithub}
                  size="2x"
                  style={{ color: "5c8374" }}
                />
                <FontAwesomeIcon
                  className="mx-3 social-media-blob"
                  icon={faLinkedin}
                  size="2x"
                  style={{ color: "#5c8374" }}
                />
                <FontAwesomeIcon
                  className="mx-3 social-media-blob"
                  icon={faTwitter}
                  size="2x"
                  style={{ color: "#5c8374" }}
                />
              </div>
            </Row>
            {/* <Row>
              <div className="skills-container">
                <Slide direction="right" cascade damping={0.1}>
                  {skills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <Col
                        xs={6}
                        sm={4}
                        md={3}
                        key={index}
                        className="skill-item"
                      >
                        <div className="skill-content">
                          <span className="skill-icon">
                            <IconComponent />
                          </span>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                      </Col>
                    );
                  })}
                </Slide>
              </div>
            </Row> */}
          </Col>
        </Row>
        <Row className="wave-svg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#5C8374"
              fillOpacity="1"
              d="M0,160L17.1,154.7C34.3,149,69,139,103,128C137.1,117,171,107,206,112C240,117,274,139,309,170.7C342.9,203,377,245,411,250.7C445.7,256,480,224,514,224C548.6,224,583,256,617,229.3C651.4,203,686,117,720,96C754.3,75,789,117,823,133.3C857.1,149,891,139,926,122.7C960,107,994,85,1029,101.3C1062.9,117,1097,171,1131,192C1165.7,213,1200,203,1234,192C1268.6,181,1303,171,1337,181.3C1371.4,192,1406,224,1423,240L1440,256L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
            ></path>
          </svg>
        </Row>
        <Row className="skills-page" id="skill-page">
          <Skills></Skills>
        </Row>
        <Row>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            width={"100%"}
          >
            <path
              fill="#5C8374"
              fillOpacity="1"
              d="M0,256L20,234.7C40,213,80,171,120,133.3C160,96,200,64,240,48C280,32,320,32,360,58.7C400,85,440,139,480,149.3C520,160,560,128,600,149.3C640,171,680,245,720,240C760,235,800,149,840,117.3C880,85,920,107,960,128C1000,149,1040,171,1080,165.3C1120,160,1160,128,1200,138.7C1240,149,1280,203,1320,208C1360,213,1400,171,1420,149.3L1440,128L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
            ></path>
          </svg>
        </Row>
        {/* <Row className="work-exp">
          <WorkExperience></WorkExperience>
        </Row> */}
        <Row className="projects" id="project-page">
          <Project></Project>
        </Row>
      </Container>
    </>
  );
}

export default LandingPage;
