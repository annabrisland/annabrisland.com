import { Typography, Row, Col, Image } from "antd";
import "./index.css";
import umamiIntro from "../../images/umami.png";
import lemon from "../../images/lemon.png";
import umamiTitle from "../../images/umamiTitle.png";
import umamiEnd from "../../images/umamiEnd.png";
import umamiPlate from "../../images/umamiPlate.png";
import umamiText from "../../images/umamiText.png";
import umamiScreen from "../../images/umamiScreens.png";
import umamiScreen2 from "../../images/umamiScreens2.png";
import umamiMockup from "../../images/umamiMockups.png";
import umamiPalette from "../../images/umamiPalette.png";
import umamiFruit from "../../images/umamiFruit.png";
import umamiFont from "../../images/umamiFont.png";
import Screen from "../../images/Screen.gif";
import noods from "../../images/Noodles.gif";
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
      <Col>
        <Row justify="end" style={{ paddingLeft: "5%", paddingRight: "5%" }}>
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

        <Row justify="center" style={{ paddingLeft: "5%", paddingRight: "5%" }}>
          <Col style={{ flex: 1 }}>
            <Image
              width={"70%"}
              src={lemon}
              style={{ objectFit: "cover", marginBottom: 100 }}
              preview={false}
            />
          </Col>
          <Col style={{ flex: 1, alignSelf: 'center' }}>
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
          <Col style={{ flex: 1 }}>
          </Col>
        </Row>


        <Row justify="end" style={{ paddingLeft: "5%", paddingRight: "5%" }}>
          <Col style={{ flex: 1, alignSelf: "center" }}>
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
                Defining the Problem
              </Title>
            </Row>
            <Row justify="start">
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  fontFamily: "Araboto-Normal",
                  marginBottom: 30,
                  width: "90%",
                }}
              >
                71% of people have <Text style={{ fontWeight: "bold" }}>“gone digital”</Text> when looking for a recipe
              </Text>
            </Row>
            <Row justify="start">
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  fontFamily: "Araboto-Normal",
                  marginBottom: 30,
                  width: "90%",
                }}
              >
                With so many websites, cookbooks and other resources online, it can be time-consuming and tedious to find a healthy recipe that fits each person’s dietary restrictions and taste preferences.
              </Text>
            </Row>
            <Row justify="start">
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  fontFamily: "Araboto-Normal",
                  marginBottom: 30,
                  width: "100%",
                }}
              >
                Many apps on the market are based on sharing their own recipes, however, these platforms lack community, variety and the ability to share recipes with others.
              </Text>
            </Row>
          </Col>
          <Col style={{ flex: 1 }}>
            <Row justify="end">
              <Image
                width={"100%"}
                src={umamiIntro}
                style={{ objectFit: "cover", marginBottom: 100 }}
                preview={false}
              />
            </Row>
          </Col>
        </Row>



        <Row justify="start" align="top" style={{ marginBottom: 80, paddingLeft: "5%", paddingRight: "5%" }}>
          <Col style={{ flex: 1 }}>
            <Row>
              <Title
                className="title"
                style={{
                  color: "black",
                  fontSize: 50,
                  fontFamily: "Araboto-Normal",
                }}
              >
                Design Process
              </Title>
            </Row>
            <Row justify="center" style={{ marginTop: 20 }}>
              <Image
                width={"40%"}
                src={Screen}
                style={{ objectFit: "contain", borderRadius: 25, borderColor: "#345A3E", borderWidth: 3, borderStyle: 'solid' }}
                preview={false}
              />
            </Row>
            <Row style={{ marginTop: 90 }}>
              <Title
                className="title"
                style={{
                  color: "black",
                  fontSize: 50,
                  fontFamily: "Araboto-Normal",
                }}
              >
                On our Menu
              </Title>
            </Row>
            <Row justify="start">
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  fontFamily: "Araboto-Normal",
                  marginBottom: 30,
                  width: "90%",
                }}
              >
                Umami caters to both recipe-driven and ingredient-driven users. Our tailored experience provides the user with recipes which fit their dietry requirements and tastes. In addition, Umami's pantry tracking and grocery lists ensure time in the kitchen is a breeze.
              </Text>
            </Row>
            <Row justify="start">
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  fontFamily: "Araboto-Normal",
                  marginBottom: 30,
                  width: "90%",
                }}
              >
                Umami aims to become a central platform for recipe sharing. It allows all users to give and take by saving recipes they like to personal collections, or uploading their own recipe for others to experience.

              </Text>
            </Row>
            <Row style={{ marginTop: 50 }}>
              <Image
                width={"70%"}
                src={umamiPalette}
                style={{ objectFit: "contain", overflow: 'visible' }}
                preview={false}
              />
            </Row>
            <Row style={{ marginTop: 40 }}>
              <Image
                width={"95%"}
                src={umamiFruit}
                style={{ objectFit: "contain", overflow: 'visible' }}
                preview={false}
              />
            </Row>
          </Col>
          <Col style={{ flex: 1 }}>
            <Image
              width={"100%"}
              src={umamiMockup}
              style={{ objectFit: "contain", overflow: 'visible', marginTop: 130 }}
              preview={false}
            />
          </Col>
        </Row>
        <Row justify="center">
          <Image
            width={"100%"}
            src={umamiScreen2}
            style={{ objectFit: "contain", overflow: "visible", paddingLeft: -50, paddingRight: -50, marginBottom: 70 }}
            preview={false}
          />
        </Row>
        <Row style={{ paddingLeft: "5%", paddingRight: "5%", marginBottom: 50, marginTop: 20 }}>
          <Title
            className="title"
            style={{
              color: "black",
              fontSize: 50,
              fontFamily: "Araboto-Normal",
            }}
          >
            The Logo
          </Title>
        </Row>
        <Row justify="center" style={{ marginBottom: 110 }}>
          <Image
            width={"80%"}
            src={umamiText}
            style={{ objectFit: "contain" }}
            preview={false}
          />
        </Row>
        <Row justify="center">
          <Image
            width={"100%"}
            src={umamiScreen}
            style={{ objectFit: "contain", overflow: "visible", paddingLeft: -50, paddingRight: -50, marginBottom: 70 }}
            preview={false}
          />
        </Row>
        <Row justify="center">
          <Image
            width={"100%"}
            src={umamiEnd}
            style={{ objectFit: "contain" }}
            preview={false}
          />
        </Row>
      </Col>
    </Row>
  );
}
