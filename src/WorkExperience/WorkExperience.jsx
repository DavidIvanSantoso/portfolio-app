/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Container, Row, Col } from "react-bootstrap";
import "../WorkExperience/WorkExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

//icon Img
import japfaLogo from "../assets/japfalogo.svg";
import petraLogo from "../assets/logoPetra.png";
import operaLogo from "../assets/logoOpera.png";

function WorkExperience() {
  return (
    <>
      <Container fluid>
        <div className="work-experience pt-3">
          <Row className="px-3 justify-content-center">
            <Col xs={12} md={8} className="text-center">
              <div className="project-title">
                <div className="line"></div>
                <h1 className="mb-3">
                  Education Background & Work Experience!
                </h1>
                <div className="line"></div>
              </div>
            </Col>
          </Row>

          <Row className="work-tree justify-content-center px-3">
            <VerticalTimeline>
              <VerticalTimelineElement
                layout={"1-column-left"}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(158, 200, 185)",
                  color: "#092635",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(158, 200, 185)",
                }}
                date="August 2019 - January 2024"
                iconStyle={{
                  background: "#fff",
                  color: "#092635",
                }}
                icon={
                  <img
                    src={petraLogo}
                    alt="Custom Icon"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                    }}
                  />
                }
              >
                <h3 className="vertical-timeline-element-title">
                  Bachelor of Computer Science
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Universitas Kristen Petra
                </h4>

                <ul className="pt-3">
                  <li>GPA 3.73/4.00</li>
                  <li>Cumlaude</li>
                </ul>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                layout={"1-column-left"}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(158, 200, 185)",
                  color: "#092635",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(158, 200, 185)",
                }}
                date="July 2022 - December 2022"
                iconStyle={{
                  background: "#fff",
                  color: "#092635",
                }}
                icon={
                  <img
                    src={japfaLogo}
                    alt="Custom Icon"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                    }}
                  />
                }
              >
                <h3 className="vertical-timeline-element-title">
                  Software Developer Intern
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  PT Japfa Comfeed Indonesia, Tbk.
                </h4>
                <div className="skills-pills">
                  <span className="badge bg-success me-2">JavaScript</span>
                  <span className="badge bg-success me-2">VueJs</span>
                  <span className="badge bg-success me-2">Postgre</span>
                  <span className="badge bg-success me-2">UI/UX Design</span>
                  <span className="badge bg-success me-2">ExpressJs</span>
                  <span className="badge bg-success me-2">Ioniq</span>
                </div>
                <ul className="pt-3">
                  <li>
                    Contributed in a project that solved company problems by
                    making the Japfa Loyalty Application for BestMeat consumer
                    and Japfa IT Sidoarjo team.
                  </li>
                  <li>
                    Create UI/UX design for Japfa Loyalty Project (Mobile
                    Application, Website for Admin Panel).
                  </li>
                  <li>
                    Contributed in making the database structure for the Japfa
                    Loyalty Project.
                  </li>
                  <li>
                    Responsible for creating the frontend system for the Mobile
                    Application and Website for Admin Panel.
                  </li>
                  <li>Team leader for the intern frontend team.</li>
                  <li>
                    Responsible for associating frontend systems and backend
                    systems.
                  </li>
                  <li>
                    Succeeded 90% in making Admin panel website for Japfa IT
                    Team and 70% in making the Japfa Loyalty Mobile Application
                    (before finalized by Japfa IT Team and deployed on Android
                    Play Store).
                  </li>
                </ul>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                layout={"1-column-left"}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(158, 200, 185)",
                  color: "#092635",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(158, 200, 185)",
                }}
                date="October 2024 - Now"
                iconStyle={{
                  background: "#fff",
                  color: "#092635",
                }}
                icon={
                  <img
                    src={operaLogo}
                    alt="Custom Icon"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                    }}
                  />
                }
              >
                <h3 className="vertical-timeline-element-title">
                  Freelance Web Developer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  PT Mahkota Tirta Abadi.
                </h4>
                <div className="skills-pills">
                  <span className="badge bg-success me-2">JavaScript</span>
                  <span className="badge bg-success me-2">React</span>

                  <span className="badge bg-success me-2">UI/UX Design</span>
                </div>
                <ul className="pt-3">
                  <li>
                    Make company profile website for PT Mahkota Tirta Abadi.
                  </li>
                </ul>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                layout={"1-column-left"}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(158, 200, 185)",
                  color: "#092635",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(158, 200, 185)",
                }}
                date="October 2024 - Now"
                iconStyle={{
                  background: "#fff",
                  color: "#092635",
                }}
                icon={
                  <img
                    src="https://yt3.googleusercontent.com/GDt5rtVs9GkFV9rYIQQzgugQrDJ3KjgorTsdEJaqbHeFcmw8ygUg4FVMzHINEyAeelk-QCEl=s160-c-k-c0x00ffffff-no-rj"
                    alt="Custom Icon"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                    }}
                  />
                }
              >
                <h3 className="vertical-timeline-element-title">
                  Freelance Fullstack Developer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Friends Bakery.
                </h4>
                <div className="skills-pills">
                  <span className="badge bg-success me-2">JavaScript</span>
                  <span className="badge bg-success me-2">React</span>
                  <span className="badge bg-success me-2">React Native</span>
                  <span className="badge bg-success me-2">ExpressJs</span>
                  <span className="badge bg-success me-2">PostgreSQL</span>
                  <span className="badge bg-success me-2">UI/UX Design</span>
                </div>
                <ul className="pt-3">
                  <li>
                    Create a website using ReactJs for the HR department for
                    recording all employees' performance and scheduling
                    training.
                  </li>
                  <li>Create API using NodeJs for database manipulation</li>
                  <li>
                    Create a mobile application using React native for all
                    Friend’s Bakery employees to see all of the information that
                    they need, which is training schedule, and employees
                    performance
                  </li>
                  <li>
                    Design the UI/UX for both website and mobile application
                  </li>
                  <l1>
                    Help the company to set up cloud servers using Digital Ocean
                    service for the website, mobile application and database
                  </l1>
                </ul>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Row>
        </div>
      </Container>
    </>
  );
}
export default WorkExperience;
