import { Typography, Row, Col, Image } from "antd";
import { useEffect } from "react";
import "./index.css";
import KudoCoinScreen2 from "../../images/KudoCoinT2.png";

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
        <Row style={{ flexDirection: 'column', height: '100vh', alignSelf: 'center' }}>
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
          <Row justify="center" style={{marginTop: '15vh'}}>
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
              }}
            >
              R Shiny App
            </Text>
          </Row>
        </Row>
        <Row>
          <Col style={{ flex: 1 }}>
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
                Why is this useful?
              </Title>
            </Row>
            <Row justify="center">
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  fontFamily: "Araboto-Normal",
                  textAlign: "start",
                  marginBottom: 20,
                }}
              >
                Once RNA sequencing data has been processed, raw read counts and node tables can be overwhelming or difficult to gain insight from. Transforming this numerical data into visual representations allows for the depiction of general trends and a complete overview of the data. However, dealing with and plotting large datasets computationally can require practice and existing knowledge. When the person plotting the data is not the data collector, important and specific details may be overlooked. In these cases, it is ultimately easier to hand over control to the dataset owner to follow the desired direction or perform their exploratory analysis. By increasing the accessibility to RNA-Seq data, users can assess and investigate their data with ease and comparisons can be made across many datasets.

              </Text>
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
                This application allows anyone to have the power to explore their RNA-Seq data. Once armed with their output files, the user has full reign to create tailored plots to uncover hidden meaning in their data.
              </Text>
            </Row>
          </Col>
          <Col style={{ flex: 1 }}>
            <Image
              width={"100%"}
              src={KudoCoinScreen2}
              style={{ objectFit: "cover" }}
              preview={false}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
