import { Typography, Row, Col, Image, Affix } from "antd";
import { useHistory } from "react-router-dom";
import "./index.css";
import back from "../../images/back.png";
import soundtownIntro from "../../images/soundtownIntro.png";
import soundtownScreen from "../../images/soundtownScreen.png";

export default function SoundTown() {
  const { Title, Text } = Typography;
  const history = useHistory();

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
              fontFamily: "Roboto-Light",
              marginBottom: 30,
            }}
          >
            July 2021
          </Text>
        </Row>
        <Row justify="center">
          <Image
            width={"100%"}
            src={soundtownIntro}
            style={{ objectFit: "cover", marginBottom: 50 }}
            preview={false}
          />
        </Row>
        <Row justify="center">
          <Title
            className="title"
            style={{
              color: "black",
              fontSize: 50,
              fontFamily: "Araboto-Normal",
              marginBottom: 30,
            }}
          >
            About
          </Title>
        </Row>
        <Row justify="center">
          <Text
            style={{
              color: "black",
              fontSize: 20,
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
            efficiently completing the objective.
          </Text>
        </Row>
        <Row justify="center">
          <Image
            width={"100%"}
            src={soundtownScreen}
            style={{ objectFit: "contain" }}
            preview={false}
          />
        </Row>
      </Col>
    </Row>
  );
}
