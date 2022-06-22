import { Typography, Row, Col } from "antd";
import { useEffect } from "react";
import "./index.css";

export default function Fungi() {
  const { Title, Text } = Typography;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Row
      className="Appfungi slidefungi"
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
            RNA-Seq Read Processing
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
            Bioinformatics
          </Text>
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
              textAlign: "center",
              marginBottom: 80,
            }}
          >
            During my time in the Kronstad Lab, I have worked to increase
            efficiency and automate the pipeline to process raw RNA-Seq data and
            arrive at accurate quantifiable gene expression. From here, I worked
            to improve the workflow to analyse differential gene expression and
            finally automate gene set enrichment analysis.
          </Text>
        </Row>
        <Row justify="start">
          <Text
            style={{
              color: "black",
              fontSize: 30,
              fontFamily: "Araboto-Normal",
              textAlign: "center",
              paddingInline: '15%',
              marginBottom: 30
            }}
          >
            Steps in our pipeline 
          </Text>
        </Row>
        <Row justify="start">
          <Text
            style={{
              color: "black",
              fontSize: 20,
              fontFamily: "Araboto-Normal",
              paddingInline: '18%',
              marginBottom: 100,
            }}
          >
            <b>FastQC</b> provides quality control checks for high throughput sequence
            data <br/><br/> <b>Adapter trimming </b>is used to preprocess data and remove
            non-organism specific sequence to increase accuracy <br/><br/> <b> STAR</b> alignment
            searches recovered RNA sequences to a reference genome for
            identification <br/><br/> <b>GSEA</b> computes statistical significance between gene
            sets across different phenotypes
          </Text>
        </Row>
      </Col>
    </Row>
  );
}
