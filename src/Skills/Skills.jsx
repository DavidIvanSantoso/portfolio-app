/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col, CardBody } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "../Skills/Skills.css";

//web-dev icon
import VuejsOriginal from "devicons-react/lib/icons/VuejsOriginal";
import ReactOriginal from "devicons-react/lib/icons/ReactOriginal";
import Html5Original from "devicons-react/lib/icons/Html5Original";
import Css3Original from "devicons-react/lib/icons/Css3Original";
import NodejsOriginalWordmark from "devicons-react/lib/icons/NodejsOriginalWordmark";

//mobile app dev icon
import AndroidstudioOriginal from "devicons-react/lib/icons/AndroidstudioOriginal";
import FlutterOriginal from "devicons-react/lib/icons/FlutterOriginal";
import XcodeOriginal from "devicons-react/lib/icons/XcodeOriginal";
import IonicOriginal from "devicons-react/lib/icons/IonicOriginal";

//database icon
import FirebaseOriginalWordmark from "devicons-react/lib/icons/FirebaseOriginalWordmark";
import PostgresqlOriginal from "devicons-react/lib/icons/PostgresqlOriginal";
import MysqlOriginalWordmark from "devicons-react/lib/icons/MysqlOriginalWordmark";

//ui/ux
import FigmaOriginal from "devicons-react/lib/icons/FigmaOriginal";
import XdOriginal from "devicons-react/lib/icons/XdOriginal";

function Skills() {
  return (
    <>
      <Container>
        <Row>
          <div className="programming-skills px-5">
            <div className="skills-title">
              <div className="line"></div>
              <h1>SKILLS</h1>
              <div className="line"></div>
            </div>
            <h3 style={{ textAlign: "center" }}>
              Here's my currently skills that i learned through my programming
              career in Fullstack Development and Mobile App Development!
            </h3>
            <Row className="pt-3">
              <Col xs={12} md={6} className="website-development mb-3">
                <Card className="card-info">
                  <CardBody>
                    <h1 style={{ textAlign: "center" }}>
                      Website Development Techs!
                    </h1>
                    <Row className="justify-content-center">
                      <VuejsOriginal
                        className="bubble-icon"
                        color="black"
                        size={"80"}
                      />
                      <ReactOriginal
                        className="bubble-icon"
                        color="black"
                        size={"80"}
                      />
                      <Html5Original
                        className="bubble-icon"
                        color="black"
                        size={"80"}
                      />
                      <Css3Original
                        className="bubble-icon"
                        color="black"
                        size={"80"}
                      />
                      <NodejsOriginalWordmark
                        className="bubble-icon"
                        color="black"
                        size={"80"}
                      />
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} className="mobile-development mb-3">
                <Card className="card-info">
                  <CardBody>
                    <h1 style={{ textAlign: "center" }}>
                      Mobile Apps Development Techs!
                    </h1>
                    <Row className="justify-content-center">
                      <FlutterOriginal
                        className="bubble-icon"
                        color="black"
                        size={"80"}
                      />
                      <XcodeOriginal
                        className="bubble-icon"
                        color="black"
                        size={"80"}
                      />
                      <AndroidstudioOriginal
                        className="bubble-icon"
                        color="black"
                        size={"80"}
                      />
                      <Css3Original
                        className="bubble-icon"
                        color="black"
                        size={"80"}
                      />
                      <IonicOriginal
                        className="bubble-icon"
                        color="black"
                        size={"80"}
                      />
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row className="pt-3">
              <Col xs={12} md={6} className="database-development mb-3">
                <Card className="card-info">
                  <CardBody>
                    <h1 style={{ textAlign: "center" }}>Database Techs!</h1>
                    <Row className="justify-content-center">
                      <PostgresqlOriginal
                        className="bubble-icon"
                        color="black"
                        size={"80"}
                      />
                      <MysqlOriginalWordmark
                        className="bubble-icon"
                        color="black"
                        size={"80"}
                      />
                      <FirebaseOriginalWordmark
                        className="bubble-icon"
                        color="black"
                        size={"80"}
                      />
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} className="ui-development mb-3">
                <Card className="card-info">
                  <CardBody>
                    <h1 style={{ textAlign: "center" }}>UI/UX Design Techs!</h1>
                    <Row className="justify-content-center">
                      <XdOriginal
                        className="bubble-icon"
                        color="black"
                        size={"80"}
                      />
                      <FigmaOriginal
                        className="bubble-icon"
                        color="black"
                        size={"80"}
                      />
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    </>
  );
}
export default Skills;
