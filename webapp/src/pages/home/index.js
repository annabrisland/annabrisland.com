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
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const { Title, Text } = Typography;
  const history = useHistory();
  const projectRef = useRef();
  const aboutRef = useRef();

  const [scrollPosition, setScrollPosition] = useState(0);
  const [projectSelected, setProjectSelected] = useState("All");

  useEffect(() => {
    const onScroll = (e) => {
      setScrollPosition(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollPosition]);

  function contentCardText(text, color) {
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
          background: color,
          fontFamily: "Araboto-Medium",
          fontSize: 40,
        }}
      >
        {text}
      </Text>
    );
  }

  return (
    <Space className="App" size={"large"} align="start">
      <Row className="slide">
          <Affix
          className="fade"
            offsetTop={50}
            onChange={(affixed) => console.log(affixed)}
            style={{ position: "absolute", opacity: (scrollPosition <= 400 || scrollPosition >= 2200) ? 1 : 0 }}
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
            <span style={{ color: "#DE641F", fontFamily: "Araboto-Normal" }}>
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
          <Row className="arrow fade" align="middle" justify="center" style={{opacity: scrollPosition <= 200 ? 1 : 0}}>
            <Image
              width={100}
              src={arrow}
              preview={false}
              onClick={() => {
                projectRef.current.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            />
          </Row>
      </Row>
      <Row className="App" ref={projectRef}>
        <Col
          style={{
            marginLeft: "10%",
            marginRight: "10%",
            marginTop: 100,
            marginBottom: 100,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            className="title"
            style={{
              color: "black",
              fontSize: 50,
              fontFamily: "Araboto-Bold",
              flex: 1.5,
            }}
          >
            Projects
          </Text>
          <Col
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              flex: 1,
            }}
          >
            <Text
              className="button"
              style={{
                color: projectSelected === "All" ? "#DE641F" : "black",
                fontSize: 20,
                fontFamily: "Araboto-Normal",
              }}
              onClick={() => {
                setProjectSelected("All");
              }}
            >
              All
            </Text>
            <Text
              className="button"
              style={{
                color: projectSelected === "Design" ? "#DE641F" : "black",
                fontSize: 20,
                fontFamily: "Araboto-Normal",
                marginLeft: 100,
              }}
              onClick={() => {
                setProjectSelected("Design");
              }}
            >
              Design
            </Text>
            <Text
              className="button"
              style={{
                color: projectSelected === "Biology" ? "#DE641F" : "black",
                fontSize: 20,
                fontFamily: "Araboto-Normal",
                marginLeft: 100,
              }}
              onClick={() => {
                setProjectSelected("Biology");
              }}
            >
              Biology
            </Text>
          </Col>
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "50%",
          }}
        >
          {/* <Title
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
                </Title> */}
          <Col
            style={{ width: "50%", height: 500 }}
            onClick={() => {
              history.push("/teatime/");
            }}
            hidden={projectSelected === "Biology"}
          >
            <Image
              width={"100%"}
              height={"100%"}
              src={teatime}
              style={{ objectFit: "cover" }}
              preview={false}
            />
            {contentCardText("TeaTime", "#3A82FB")}
          </Col>
          <Col
            style={{ width: "50%", height: 500 }}
            onClick={() => {
              history.push("/soundtown/");
            }}
            hidden={projectSelected === "Biology"}
          >
            <Image
              width={"100%"}
              height={"100%"}
              src={soundtown}
              style={{ objectFit: "cover" }}
              preview={false}
            />
            {contentCardText("SoundTown", "#63A857")}
          </Col>
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "50%",
          }}
        >
          {/* <Title
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
                </Title> */}
          <Col
            style={{ width: "50%", height: 500 }}
            hidden={projectSelected === "Design"}
            onClick={() => {
              history.push("/fungi/");
            }}
          >
            <Image
              width={"100%"}
              height={"100%"}
              src={fungi}
              style={{ objectFit: "cover" }}
              preview={false}
            />
            {contentCardText("RNA-Seq Read Processing", "#1B1B1B")}
          </Col>
          <Col
            style={{ width: "50%", height: 500 }}
            hidden={projectSelected === "Design"}
            onClick={() => {
              history.push("/dna/");
            }}
          >
            <Image
              width={"100%"}
              height={"100%"}
              src={dna}
              style={{ objectFit: "cover" }}
              preview={false}
            />
            {contentCardText("DNA Analysis", "#E93323")}
          </Col>
        </Col>
      </Row>
      <Row className="App-content slide" ref={aboutRef}>
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
                fontFamily: "Araboto-Bold",
                width: "50%",
              }}
            >
              Good scientists can be expected to do good science, but great
              contributions to mankind require interdisciplinarity and
              collaboration.
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 15,
                fontFamily: "Araboto-Light",
                width: "50%",
                marginTop: 30,
              }}
            >
              Douglas G. Kilburn
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
            The following three points are the priorities I am working on with a
            destination in mind. Each of these include a well defined problem,
            organized sprints and will require the tools that make the most
            sense in efficiently completing the objective. The following three
            points are the priorities I am working on with a destination in
            mind. Each of these include a well defined problem, organized
            sprints and will require the tools that make the most sense in
            efficiently completing the objective. The following three points are
            the priorities I am working on with a destination in mind. Each of
            these include a well defined problem, organized sprints and will
            require the tools that make the most sense in efficiently completing
            the
          </Text>
        </Col>
      </Row>
    </Space>
  );
}
