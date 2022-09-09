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
      className="Appdna slidedna"
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
            May 2021
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
            Building a RNA-Seq Pipeline
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
            Computational Biology
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
            Sequencing of RNA samples allows us to gain insight into the transcriptome and transcriptional changes between conditions. With this new knowledge, it is easier to target specific genes of interest for further analysis. However, after most next-generation sequencing techniques, raw data needs to be preprocessed before drawing any biological conclusions. We have developed and implemented the following RNA-Seq processing pipeline to return the most valuable data.

          </Text>
        </Row>
      </Col>
    </Row>
  );
}
