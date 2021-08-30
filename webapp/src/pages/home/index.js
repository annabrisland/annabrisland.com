import { Typography, Row, Col, Button, Image, Space, Affix } from "antd";
import { useHistory } from "react-router-dom";
import "./index.css";
import anna from "../../images/anna.png";
import arrow from "../../images/arrow.gif";
import teatime from "../../images/TeaTime.png";
import soundtown from "../../images/SoundTown.png";
import fungi from "../../images/fungi.png";
import dna from "../../images/dna.png";
import quote from "../../images/quote.png";
import { useRef } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

export default function Home() {
  const { Title, Text } = Typography;
  const history = useHistory();
  const projectRef = useRef();
  const aboutRef = useRef();

  function contentCardText(text) {
    return (
      <Text
        className="work-card"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          color: "white",
          background: "rgba(0,0,0,0.6)",
          fontFamily: "Araboto-Medium",
          fontSize: 30,
        }}
      >
        {text}
      </Text>
    );
  }

  return (
    <ReactFullpage
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Row className="section slide">
              <Affix
                offsetTop={50}
                onChange={(affixed) => console.log(affixed)}
                style={{ position: "absolute" }}
              >
                <Row className="header" justify="end">
                  <Button
                    className="header-button"
                    type="link"
                    onClick={() => {
                      projectRef.current.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    Projects
                  </Button>
                  <Button
                    className="header-button"
                    type="link"
                    onClick={() => {
                      aboutRef.current.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    About Me
                  </Button>
                  <Button
                    className="header-button"
                    type="link"
                    onClick={() => {
                      window.open(
                        "https://annabrisland.com/Anna_Brisland_Resume.pdf",
                        "_blank"
                      );
                    }}
                  >
                    Resume
                  </Button>
                </Row>
              </Affix>
              <Row className="App-content intro-content">
                <Image
                  width={150}
                  src={anna}
                  preview={false}
                  style={{ marginBottom: 30 }}
                />
                <Title
                  className="title"
                  style={{
                    color: "black",
                    fontSize: 70,
                    fontFamily: "Araboto-Normal",
                  }}
                >
                  Hello, my name is{" "}
                  <span
                    style={{ color: "#DE641F", fontFamily: "Araboto-Normal" }}
                  >
                    Anna
                  </span>
                  .
                </Title>
                <Title
                  className="title"
                  style={{
                    color: "black",
                    marginTop: -30,
                    fontSize: 42,
                    fontFamily: "Araboto-Light",
                  }}
                  level={3}
                >
                  Biologist by day, designer by night.
                </Title>
              </Row>
              <Row className="arrow" align="middle" justify="center">
                <Image width={100} src={arrow} preview={false} />
              </Row>
            </Row>
            <Row className="section App-content slide" ref={projectRef}>
              <Title
                className="title"
                style={{
                  color: "black",
                  fontSize: 50,
                  fontFamily: "Araboto-Normal",
                  marginBottom: 30
                }}
              >
                Projects
              </Title>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 70,
                }}
              >
                <Title
                  className="title rotated"
                  style={{
                    color: "#C4C4C4",
                    fontSize: 40,
                    fontFamily: "Araboto-Normal",
                    alignSelf: "center",
                    marginLeft: -150,
                    marginTop: 0,
                    position: "absolute",
                  }}
                >
                  Design
                </Title>
                <Col
                  style={{ width: "48%", height: 350 }}
                  onClick={() => {
                    history.push("/teatime/");
                  }}
                >
                  <Image
                    width={"100%"}
                    height={"100%"}
                    src={teatime}
                    style={{ objectFit: "cover" }}
                    preview={false}
                  />
                  {contentCardText("TeaTime")}
                </Col>
                <Col
                  style={{ width: "48%", height: 350 }}
                  onClick={() => {
                    history.push("/soundtown/");
                  }}
                >
                  <Image
                    width={"100%"}
                    height={"100%"}
                    src={soundtown}
                    style={{ objectFit: "cover" }}
                    preview={false}
                  />
                  {contentCardText("SoundTown")}
                </Col>
              </Col>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <Title
                  className="title rotated"
                  style={{
                    color: "#C4C4C4",
                    fontSize: 40,
                    fontFamily: "Araboto-Normal",
                    alignSelf: "center",
                    marginLeft: -150,
                    marginTop: 0,
                    position: "absolute",
                  }}
                >
                  Biology
                </Title>
                <Col style={{ width: "48%", height: 350 }}>
                  <Image
                    width={"100%"}
                    height={"100%"}
                    src={fungi}
                    style={{ objectFit: "cover" }}
                    preview={false}
                  />
                  {contentCardText("RNA-Seq Read Processing")}
                </Col>
                <Col style={{ width: "48%", height: 350 }}>
                  <Image
                    width={"100%"}
                    height={"100%"}
                    src={dna}
                    style={{ objectFit: "cover" }}
                    preview={false}
                  />
                  {contentCardText("DNA Analysis")}
                </Col>
              </Col>
            </Row>
            <Row className="section App-content slide" ref={aboutRef}>
              <Title
                className="title"
                style={{
                  color: "black",
                  fontSize: 50,
                  fontFamily: "Araboto-Normal",
                }}
              >
                About Me
              </Title>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <Row
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    width={50}
                    src={quote}
                    style={{ objectFit: "contain", marginBottom: 30 }}
                    preview={false}
                  />
                  <Text
                    style={{
                      color: "black",
                      fontSize: 25,
                      fontFamily: "Araboto-Light",
                      width: "50%",
                    }}
                  >
                    If you need motivation, don't do it. - Elon Musk
                  </Text>
                </Row>
                <Text
                  style={{
                    flex: 1,
                    color: "black",
                    fontSize: 25,
                    fontFamily: "Araboto-Normal",
                  }}
                >
                  The following three points are the priorities I am working on
                  with a destination in mind. Each of these include a well
                  defined problem, organized sprints and will require the tools
                  that make the most sense in efficiently completing the
                  objective. The following three points are the priorities I am
                  working on with a destination in mind. Each of these include a
                  well defined problem, organized sprints and will require the
                  tools that make the most sense in efficiently completing the
                  objective.
                </Text>
              </Col>
            </Row>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
