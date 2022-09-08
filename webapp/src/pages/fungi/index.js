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
            March 2022
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
            RNA-Seq Visualisation Tool
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
            R Shiny App
          </Text>
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
            About
          </Title>
        </Row>
        <Row justify="center">
          <Text
            style={{
              color: "black",
              fontSize: 20,
              fontFamily: "Araboto-Normal",
              textAlign: "start",
              marginBottom: 80,
            }}
          >
            Once RNA-Seq data has been processed, raw read counts and node tables can be overwhelming or difficult to gain insight from. Transforming this numerical data into visual representations allows for the depiction of general trends and a complete overview of the data. However, dealing with and plotting large datasets computationally can require practice and existing knowledge. When the person plotting the data is not the data collector, important and specific details may be overlooked. In these cases, it is ultimately easier to hand over control to the dataset owner to follow the desired direction or perform their exploratory analysis. By increasing the accessibility to RNA-Seq data, users can assess and investigate their data with ease and comparisons can be made across many datasets.

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
