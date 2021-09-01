import { Typography, Row, Col } from "antd";
import { useEffect } from "react";
import "./index.css";

export default function DNA() {
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
            DNA Analysis
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
            In Progress
          </Text>
        </Row>
        <Row justify="center">
          <Text
            style={{
              color: "black",
              fontSize: 20,
              fontFamily: "Araboto-Normal",
            }}
          >
            I'm currently working hard on this. Check back later for updates!
          </Text>
        </Row>
      </Col>
    </Row>
  );
}
