import { Container, Row, Col } from "react-bootstrap";
import "../ProjectPage/Project.css";
function Project() {
  return (
    <>
      <Container>
        <Row>
          <div className="project-title">
            <div className="line"></div>
            <h1>PROJECTS!</h1>
            <div className="line"></div>
          </div>
        </Row>
        <Row className="project-showcase">
          <Col className="web-app">
            <h1>Web App</h1>
          </Col>
          <Col className="mobile-app">
            <h1>Mobile app</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Project;
