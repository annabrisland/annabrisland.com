import { Typography, Row, Col, Image } from "antd";
import "./index.css";
import umamiIntro from "../../images/umami.png";
import lemon from "../../images/lemon.png";
import umamiTitle from "../../images/umamiTitle.png";
import teatimeScreen from "../../images/teatimeScreen.png";
import teatimeScreen2 from "../../images/teatimeScreen2.png";
import { useEffect } from "react";

export default function Umami() {
  const { Title, Text } = Typography;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Row
      className="AppUmami slideUmami"
      style={{
        display: "flex",
        flexDirection: "row",
        paddingTop: "5%",
        paddingBottom: "5%",
      }}
    >
      <Col style={{ paddingLeft: "5%", paddingRight: "5%" }}>
        <Row justify="end">
          <Text
            style={{
              color: "black",
              fontSize: 20,
              fontFamily: "Roboto-Light",
              marginBottom: 100,
            }}
          >
            April 2022
          </Text>
        </Row>

        <Row justify="center">
          <Col style={{flex: 1}}>
            <Image
              width={"70%"}
              src={lemon}
              style={{ objectFit: "cover", marginBottom: 100 }}
              preview={false}
            />
          </Col>
          <Col style={{flex: 1, alignSelf: 'center'}}>
            <Row justify="center">
            <Image
              width={"100%"}
              src={umamiTitle}
              style={{ objectFit: "cover", marginBottom: 30 }}
              preview={false}
            />
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
                UI Mobile App Design & Illustations
              </Text>
            </Row>
          </Col>
          <Col style={{flex: 1}}>
          </Col>
        </Row>

        <Row justify="end">
          <Image
            width={"50%"}
            src={umamiIntro}
            style={{ objectFit: "cover", marginBottom: 100 }}
            preview={false}
          />
        </Row>
        <Row justify="start">
          <Title
            className="title"
            style={{
              color: "black",
              fontSize: 50,
              fontFamily: "Araboto-Normal",
              marginBottom: 30,
            }}
          >
            Why did we make it?
          </Title>
        </Row>
        <Row justify="start">
          <Text
            style={{
              color: "black",
              fontSize: 20,
              fontFamily: "Araboto-Normal",
              marginBottom: 100,
              width: "80%",
            }}
          >
            In this digital age, many people struggle with a lack of
            face-to-face interaction, leaving a huge impact on their mental
            health. TeaTime is a platform where users can communicate verbally
            no matter where or when they are.
          </Text>
        </Row>

        <Row justify="start" align="bottom" style={{ marginBottom: 100, marginTop: '-10%' }}>
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
              What does it do?
            </Title>
            TeaTime generates exciting discussions by providing a selection of
            trending topics to consider. Beginning your conversation is as easy
            as selecting a story of interest and recording your thoughts.
            Friends and family can endorse your opinion by voting for the best
            response and send it to the global page. Worldwide sharing makes it
            simple to connect with like-minded individuals and further the
            discussion. Everyone is encouraged to speak up and share before they
            listen to what others have to say as voice notes are locked to users
            before they have recorded themselves.
          </Text>
          <Image
            width={"50%"}
            src={teatimeScreen2}
            style={{ objectFit: "contain", marginLeft: 100, overflow: 'visible' }}
            preview={false}
          />
        </Row>
        <Row justify="center">
          <Image
            width={"100%"}
            src={teatimeScreen}
            style={{ objectFit: "contain" }}
            preview={false}
          />
        </Row>
      </Col>
    </Row>
  );
}
