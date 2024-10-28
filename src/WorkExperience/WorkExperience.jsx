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
          <Row>
            <div className="project-title text-center">
              <div className="line"></div>
              <h1>Education Background & Work Experience!</h1>
              <div className="line"></div>
            </div>
          </Row>

          <Row className="work-tree justify-content-center">
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
            </VerticalTimeline>
          </Row>
        </div>
      </Container>
    </>
  );
}
export default WorkExperience;
