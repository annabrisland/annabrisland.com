import { Typography, Row, Col, Image, Button } from "antd";
import "./index.css";
import soundtownIntro from "../../images/soundtownIntro.png";
import soundtownScreen from "../../images/soundtownScreen.png";
import soundtownScreen2 from "../../images/soundtownScreen2.png";
import { useEffect } from "react";

export default function SoundTown() {
  const { Title, Text } = Typography;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Row
      className="App slide"
      style={{
        display: "flex",
        flexDirection: "row",
        paddingTop: "5%",
        paddingBottom: "5%",
      }}
    >
      <Col style={{ paddingLeft: "20%", paddingRight: "20%" }}>
        <Row justify="end">
          <Text
            style={{
              color: "black",
              fontSize: 20,
              fontFamily: "Roboto-Light",
              marginBottom: 100,
            }}
          >
            July 2021
          </Text>
        </Row>
        <Row justify="center">
          <Title
            className="title"
            style={{
              color: "black",
              fontSize: 70,
              fontFamily: "Araboto-Normal",
              marginBottom: 0,
            }}
          >
            SoundTown
          </Title>
        </Row>
        <Row justify="center">
          <Text
            style={{
              color: "black",
              fontSize: 20,
              fontFamily: "Araboto-Normal",
              marginBottom: 100,
            }}
          >
            UI Webapp Design
          </Text>
        </Row>
        <Row justify="center">
          <Image
            width={"100%"}
            src={soundtownIntro}
            style={{ objectFit: "cover", marginBottom: 100 }}
            preview={false}
          />
        </Row>
        <Row justify="start" align="middle">
          <Text
            style={{
              color: "black",
              fontSize: 20,
              fontFamily: "Araboto-Normal",
              width: "55%",
            }}
          >
            <Title
              className="title"
              style={{
                color: "black",
                fontSize: 50,
                fontFamily: "Araboto-Normal",
              }}
            >
              What is SoundTown?
            </Title>
            SoundTown provides an environment for users to enter, share their
            currently playing songs and allow others to join in. There is also
            the option to queue requests and leave little messages for everyone
            else in the room.
          </Text>
          <Image
            width={"45%"}
            src={soundtownScreen2}
            style={{
              objectFit: "contain",
              marginLeft: 100,
              overflow: "visible",
            }}
            preview={false}
          />
        </Row>
      </Col>
      <Row justify="center">
        <Image
          width={"90%"}
          src={soundtownScreen}
          style={{ objectFit: "contain", marginTop: 50, marginBottom: 50 }}
          preview={false}
        />
      </Row>
      <Col style={{ paddingLeft: "20%", paddingRight: "20%" }}>
        <Row justify="start">
          <Text
            style={{
              color: "black",
              fontSize: 20,
              fontFamily: "Araboto-Normal",
              width: "50%",
            }}
          >
            <Title
              className="title"
              style={{
                color: "black",
                fontSize: 50,
                fontFamily: "Araboto-Normal",
              }}
            >
              The Concept
            </Title>
            The main objective was in keeping consistent with Spotify’s simple
            design to avoid alienating users. The interface remains clear and
            uncomplicated to mimic similarities and nostalgia of old time radio.
          </Text>
        </Row>
        <Row justify="center">
          <Button
            type="link"
            style={{
              backgroundColor: "#33492D",
              width: 400,
              height: 80,
              borderRadius: 90,
              font: "Araboto-Normal",
              fontSize: 25,
              color: "white",
              marginTop: 150,
              marginBottom: 100,
              boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
            }}
            onClick={() => {
              window.open("https://soundtown.harinwu.com/", "_blank");
            }}
          >
            Check it out here.
          </Button>
        </Row>
      </Col>
    </Row>
  );
}
