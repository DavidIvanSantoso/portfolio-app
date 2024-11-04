import { Container, Row, Col } from "react-bootstrap";
import "../ProjectPage/Project.css";
import Card from "react-bootstrap/Card";

//icon
import ReactOriginal from "devicons-react/lib/icons/ReactOriginal";
import ReactbootstrapOriginal from "devicons-react/lib/icons/ReactbootstrapOriginal";
import VuejsOriginal from "devicons-react/lib/icons/VuejsOriginal";
import NodejsOriginalWordmark from "devicons-react/lib/icons/NodejsOriginalWordmark";
import PostgresqlOriginal from "devicons-react/lib/icons/PostgresqlOriginal";
import ArduinoOriginalWordmark from "devicons-react/lib/icons/ArduinoOriginalWordmark";
import AndroidstudioOriginal from "devicons-react/lib/icons/AndroidstudioOriginal";
import FirebaseOriginal from "devicons-react/lib/icons/FirebaseOriginal";
import PythonOriginal from "devicons-react/lib/icons/PythonOriginal";
import XcodeOriginal from "devicons-react/lib/icons/XcodeOriginal";
import SwiftOriginal from "devicons-react/lib/icons/SwiftOriginal";
import GoLine from "devicons-react/lib/icons/GoLine";

import { Carousel } from "react-bootstrap";
//card-img
import tripleS from "../assets/tripleS.png";
import iotPlatform from "../assets/platformIot1.png";
import myCovidtest from "../assets/mycovidtest.png";
import cryptoList from "../assets/cryptoList.png";
import shapeRec from "../assets/shapeRec.png";
import reUnion from "../assets/reUnion.png";

function Project() {
  return (
    <>
      <Container className="pb-3">
        <div className="project px-5">
          <Row>
            <div className="project-title">
              <div className="line"></div>
              <h1>PROJECTS!</h1>
              <div className="line"></div>
            </div>
          </Row>
          <Row className="project-showcase">
            <h4>
              This is my highlighted projects that i made! Hope it can inspire
              some people to do alot of projects like this!
            </h4>
          </Row>
          <Row className="pt-3">
            <div className="project-card-list">
              <Carousel>
                <Carousel.Item>
                  <Row>
                    <Col className="my-2" xs={12} sm={6} md={4}>
                      <Card style={{ width: "100%", height: "100%" }}>
                        <Card.Img variant="top" src={tripleS} />
                        <Card.Body
                          className="card-body-custom"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "300px",
                            overflowY: "auto", // Enable scrolling
                          }}
                        >
                          <Card.Title>tripleS Wikipedia</Card.Title>
                          <Card.Text>
                            This is my personal project for learning ReactJs.
                            This website is about giving information about a
                            KPOP group called tripleS from ModHaus.
                          </Card.Text>
                          <Row>
                            <p>Made with:</p>
                            <ReactOriginal color="black" size={"80"} />
                            <ReactbootstrapOriginal color="black" size={"80"} />
                          </Row>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="my-2" xs={12} sm={6} md={4}>
                      <Card style={{ width: "100%", height: "100%" }}>
                        <Card.Img variant="top" src={iotPlatform} />
                        <Card.Body
                          className="card-body-custom"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "300px",
                            overflowY: "auto", // Enable scrolling
                          }}
                        >
                          <Card.Title>Iot Platform</Card.Title>
                          <Card.Text>
                            I created a website where users can register and
                            connect their IoT devices (in this project using
                            ESP32 and ESP8266 microcontrollers) to the website,
                            allowing users to monitor and control the IoT
                            devices by creating a dashboard based on their
                            preferences.
                          </Card.Text>
                          <Row>
                            <p>Made with:</p>
                            <VuejsOriginal color="black" size={"80"} />
                            <NodejsOriginalWordmark color="black" size={"80"} />
                            <ArduinoOriginalWordmark
                              color="black"
                              size={"80"}
                            />
                            <PostgresqlOriginal color="black" size={"80"} />
                          </Row>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="my-2" xs={12} sm={6} md={4}>
                      <Card style={{ width: "100%", height: "100%" }}>
                        <Card.Img variant="top" src={myCovidtest} />
                        <Card.Body
                          className="card-body-custom"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "300px",
                            overflowY: "auto", // Enable scrolling
                          }}
                        >
                          <Card.Title>My Covid Test</Card.Title>
                          <Card.Text>
                            A final project for Android Studio class. This is an
                            application for booking covid test in Indonesia.
                          </Card.Text>
                          <Row>
                            <p>Made with:</p>
                            <AndroidstudioOriginal color="black" size={"80"} />
                            <FirebaseOriginal color="black" size={"80"} />
                          </Row>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Carousel.Item>

                {/* groupbaru */}
                <Carousel.Item>
                  <Row>
                    <Col className="my-2" xs={12} sm={6} md={4}>
                      <Card style={{ width: "100%", height: "100%" }}>
                        <Card.Img variant="top" src={shapeRec} />
                        <Card.Body
                          className="card-body-custom"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "300px",
                            overflowY: "auto", // Enable scrolling
                          }}
                        >
                          <Card.Title>
                            Shape Recognition Machine Learning
                          </Card.Title>
                          <Card.Text>
                            This is a final project for Machine Learning Class.
                            This program is about training the program to guess
                            an real life object based on the shape of the
                            object.
                          </Card.Text>
                          <Row>
                            <p>Made with:</p>
                            <PythonOriginal color="black" size={"80"} />
                          </Row>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="my-2" xs={12} sm={6} md={4}>
                      <Card style={{ width: "100%", height: "100%" }}>
                        <Card.Img variant="top" src={cryptoList} />
                        <Card.Body
                          className="card-body-custom"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "300px",
                            overflowY: "auto", // Enable scrolling
                          }}
                        >
                          <Card.Title>Crypto App</Card.Title>
                          <Card.Text>
                            This is a project to display a list of crypto coin
                            using free API from CoinGecko.
                          </Card.Text>
                          <Row>
                            <p>Made with:</p>
                            <SwiftOriginal color="black" size={"80"} />
                            <XcodeOriginal color="black" size={"80"} />
                          </Row>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="my-2" xs={12} sm={6} md={4}>
                      <Card style={{ width: "100%", height: "100%" }}>
                        <Card.Img variant="top" src={reUnion} />
                        <Card.Body
                          className="card-body-custom"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "300px",
                            overflowY: "auto", // Enable scrolling
                          }}
                        >
                          <Card.Title>Re:UNION</Card.Title>
                          <Card.Text>
                            My personal project to introduce a pump it up
                            community that i involved with. This main purpose of
                            this website is showing community profile and
                            showing scoring result and next scoring schedule!
                          </Card.Text>
                          <Row>
                            <p>Made with:</p>
                            <ReactOriginal color="black" size={"80"} />
                            <GoLine color="black" size={"80"} />
                            <PostgresqlOriginal color="black" size={"80"} />
                          </Row>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Carousel.Item>
              </Carousel>
            </div>
          </Row>
        </div>
      </Container>
    </>
  );
}
export default Project;
