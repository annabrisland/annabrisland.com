import { Typography, Row, Col, Image } from "antd";
import "./index.css";
import KudoCoinIntro from "../../images/KudoCoin.png";
import KudoCoinScreen from "../../images/KudoCoinT1.png";
import KudoCoinScreen2 from "../../images/KudoCoinT2.png";
import Tentacle1 from "../../images/Tentacles_ 3.png";
import Tentacle2 from "../../images/Tentacles_ 2.png";
import KudoCoinLogo from "../../images/kudocoinlogo.png";
import { useEffect } from "react";

export default function KudoCoin() {
  const { Title, Text } = Typography;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Row
      className="Appkudocoin slidekudocoin"
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
              color: "#ffffff",
              fontSize: 20,
              fontFamily: "Roboto-Light",
              marginBottom: 100,
            }}
          >
            November 2021
          </Text>
        </Row>
        <Row justify="center">
          <Title
            className="title"
            style={{
              color: "#ffffff",
              fontSize: 70,
              fontFamily: "Araboto-Normal",
              marginBottom: 0,
            }}
          >
            KudoCoin.
          </Title>
        </Row>
        <Row justify="center">
          <Text
            style={{
              color: "#ffffff",
              fontSize: 20,
              fontFamily: "Araboto-Normal",
              marginBottom: 0,
            }}
          >
            Illustration
          </Text>
        </Row>
        <Row justify="left"
          style={{
            backgroundColor: " ",
          }}>
          <Image
            width={"55%"}
            src={KudoCoinScreen2}
            style={{ objectFit: "cover", marginBottom: 100, marginLeft: -75 }}
            preview={false}
          />
        </Row>

        <Row justify="space-between">
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
                What is KudoCoin?
              </Title>
            </Row>
            <Row justify="start">
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  fontFamily: "Araboto-Normal",
                  marginBottom: 100,
                  width: "100%",
                }}
              >
                KudoCoin is an ERC20 token that serves its purpose as street cred for developers.
                When a user first links their Github handle to a wallet address, they have 0 KudoCoins (KCN).
                Every time they help a fellow colleague in real life, or a random stranger on the internet,
                the individual being helped may decide to award this user with a KCN. A coin is subtracted
                from the helped account to the account of the helper. In addition, a new coin is generated
                into the source faucet account.
              </Text>
            </Row>
          </Col>
          <Col style={{ flex: 1 }}>
            <Row justify="end">
              <Image
                width={"80%"}
                src={Tentacle1}
                style={{ objectFit: "contain", marginLeft: 100, overflow: 'visible' }}
                preview={false}
              />
            </Row>
          </Col>
        </Row>

        <Row justify="center">
          <Image
            width={"70%"}
            src={KudoCoinLogo}
            style={{ objectFit: "contain", overflow: 'visible', marginTop: "-15%" }}
            preview={false}
          />
        </Row>

        <Row justify="start" >
          <Col style={{ flex: 1 }}>
            <Image
              width={"60%"}
              src={Tentacle2}
              style={{ objectFit: "cover", marginBottom: -10 }}
              preview={false}
            />
          </Col>
          <Col style={{ flex: 1, alignSelf: "center" }}>
            <Text
              style={{
                color: "black",
                fontSize: 20,
                fontFamily: "Araboto-Normal",
                width: "100%",
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
                Our Vision
              </Title>
              For certain tech roles, some copanies report "bad hire" rates to be as high as 50%. With KCN, recruiters can view a candidate's balance and accurately gauge how impactful they are in the development community. No need for algorithm questions - hurray!
            </Text>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
