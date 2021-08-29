import { Typography, Row, Col, Button, Image, Space, Affix } from "antd";
import { useHistory } from "react-router-dom";
import "./index.css";
import anna from "../../images/anna.png";
import arrow from "../../images/arrow.gif";

export default function Home() {
  const { Title, Text } = Typography;

  return (
    <Space className="App" size={"large"} align="start">
      <Row className="slide">
        <Affix
          offsetTop={50}
          onChange={(affixed) => console.log(affixed)}
          style={{ position: "absolute" }}
        >
          <Row className="header" justify="end">
            <Button className="header-button" type="link">Projects</Button>
            <Button className="header-button" type="link">About Me</Button>
            <Button className="header-button" type="link">Resume</Button>
          </Row>
        </Affix>
        <Row className="App-content intro-content">
          <Image
            width={150}
            src={anna}
            preview={false}
            style={{ marginBottom: 30 }}
          />
          <Title className="title" style={{ color: "black", fontSize: 77, fontFamily: 'Araboto-Normal' }}>Hello, my name is <span style={{ color: "#DE641F", fontFamily: 'Araboto-Normal' }}>Anna</span>.</Title>
          <Title className="title" style={{ color: "black", marginTop: -30, fontSize: 46, fontFamily: 'Araboto-Light' }} level={3}>
            Biologist by day, designer by night.
          </Title>
        </Row>
        <Row className="arrow" align="middle" justify="center">
          <Image width={100} src={arrow} preview={false} />
        </Row>
      </Row>
      <Space className="App-content" size={"large"} align="start">
        <Title style={{ color: "black" }} level={3}>
          Projects
        </Title>
        <Col>
          <Image
            width={400}
            height={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <Image
            width={400}
            height={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
        <Row>
          <Col span={24}>
            <Image
              width={400}
              height={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <Image
              width={400}
              height={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Col>
          <Col span={24}>
            <Image
              width={400}
              height={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <Image
              width={400}
              height={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Col>
        </Row>
        <Title style={{ color: "black" }} level={3}>
          About Me
        </Title>
        <Col>
          <Text>Quote</Text>
          <Space size={"large"}> </Space>
          <Text>About Me Bio</Text>
        </Col>
      </Space>
    </Space>
  );
}
