import { Typography, Row, Col, Image, Affix } from "antd";
import { useHistory } from "react-router-dom";
import "./index.css";
import back from "../../images/back.png";
import teatimeIntro from "../../images/teatimeIntro.png";
import teatimeScreen from "../../images/teatimeScreen.png";

export default function TeaTime() {
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
      <Affix offsetTop={50} onChange={(affixed) => console.log(affixed)} style={{ marginLeft: 50, marginTop: -10 }}>
        <Image width={100} src={back} preview={false} onClick={() => history.goBack()} />
      </Affix>
      <Col
        style={{
          display: "flex",
          flex: 0.1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      </Col>
      <Col style={{ flex: 10, paddingLeft: "5%", paddingRight: "5%" }}>
        <Row justify="space-between">
          <Title
            className="title"
            style={{
              color: "black",
              fontSize: 70,
              fontFamily: "Araboto-Normal",
            }}
          >
            TeaTime
          </Title>
          <Title
            style={{
              color: "black",
              fontSize: 20,
              fontFamily: "Araboto-Light",
            }}
          >
            March 2021
          </Title>
        </Row>
        <Row>
          <Image
            width={"100%"}
            src={teatimeIntro}
            style={{ objectFit: "cover", borderRadius: 30, marginBottom: 50 }}
            preview={false}
          />
        </Row>
        <Row>
          <Text
            style={{
              color: "black",
              fontSize: 25,
              fontFamily: "Araboto-Normal",
              width: "50%",
              marginLeft: "50%",
              marginBottom: -400,
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
          <Image
            width={"70%"}
            src={teatimeScreen}
            style={{ objectFit: "contain" }}
            preview={false}
          />
        </Row>
      </Col>
      <Col style={{ flex: 1 }}></Col>
    </Row>
  );
}
