import { Typography, Image, Affix } from "antd";
import { useHistory } from "react-router-dom";
import "./index.css";
import anna from "../../images/anna.png";
import teatimeThumb from "../../images/teaTimeThumb.png";
import umamiThumb from "../../images/umamiThumb.png";
import umami from "../../images/umamiTitle.png";
import delve from "../../images/delve.png";
import delveThumb from "../../images/delveThumb.png";
import labby from "../../images/labby.png";
import labbyThumbnail from "../../images/labbyThumbnail.png";
import kudoCoinThumb from "../../images/kudoCoinThumb.png";
import goWhite from "../../images/goArrowWhite.png";
import goBlack from "../../images/goArrowBlack.png";
import quote from "../../images/quote.png";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";

let loveCount = 0;

export default function Home() {
  const { Title, Text } = Typography;
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const history = useHistory();
  const projectRef = useRef();
  const aboutRef = useRef();

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollPosition(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollPosition]);

  function contentCard(light, logo, text, color, image, pushTo) {
    return (
      <div
        className={isMobile ? "project-card-mobile" : "project-card"}
        onClick={() => {
          history.push(pushTo);
        }}
        style={{
          backgroundColor: color,
          outline: color === "#FFFFFF" ? "2px solid #000000" : "none",
        }}
      >
        <div
          className={
            isMobile ? "project-card-header-mobile" : "project-card-header"
          }
        >
          {logo}
          <img
            src={light ? goWhite : goBlack}
            className={isMobile ? "go-image-mobile" : "go-image"}
            alt="Go"
          />
        </div>
        <p
          className={
            isMobile ? "project-card-desc-mobile" : "project-card-desc"
          }
          style={{
            color: light ? "#FFFFFF" : "#000000",
          }}
        >
          {text}
        </p>
        <img src={image} className="work-image" alt="Logo" />
      </div>
    );
  }

  return (
    <div className="App">
      <div className={isMobile ? "anna-intro-mobile" : "anna-intro"}>
        <Affix
          className="fade"
          offsetTop={50}
          style={{
            position: "absolute",
            opacity: scrollPosition <= (isMobile ? 100 : 400) ? 1 : 0,
          }}
        >
          {Header(projectRef, aboutRef, isMobile)}
        </Affix>
        <div className="intro-content">
          <Image
            width={150}
            src={anna}
            preview={false}
            style={{ marginBottom: 30 }}
          />
          <Title
            className="title"
            style={{
              color: "black",
              fontSize: isMobile ? "5vw" : "3vw",
              fontFamily: "Araboto-Normal",
            }}
          >
            Hi, I'm Anna.
          </Title>
          <Title
            className="title"
            style={{
              color: "black",
              marginTop: -10,
              fontSize: isMobile ? "3vw" : "2vw",
              fontFamily: "Araboto-Light",
            }}
            level={3}
          >
            Biologist by day, designer by night.
          </Title>
        </div>
      </div>
      <div className="Projects" ref={projectRef}>
        <div className="project-row">
          {contentCard(
            true,
            <img src={labby} className="work-logo" alt="Labby Logo" />,
            "Lab management software for BC Cancer",
            "#4E62C7",
            labbyThumbnail,
            "/umami/"
          )}
          {contentCard(
            false,
            <img src={umami} className="work-logo" alt="Umami Logo" />,
            "Recipe sharing platform",
            "#FFFFFF",
            umamiThumb,
            "/umami/"
          )}
          {contentCard(
            false,
            <div
              className={isMobile ? "work-logo-text-mobile" : "work-logo-text"}
            >
              KudoCoin
            </div>,
            "Street cred for developers",
            "#FFFFFF",
            kudoCoinThumb,
            "/kudocoin/"
          )}
          {contentCard(
            true,
            <img src={delve} className="work-logo" alt="Delve Logo" />,
            "Platform to connect Researchers and Volunteers",
            "#70BA94",
            delveThumb,
            "/umami/"
          )}
          {contentCard(
            true,
            <div
              className={isMobile ? "work-logo-text-mobile" : "work-logo-text"}
              style={{ color: "white" }}
            >
              TeaTime
            </div>,
            "Social media for discussion of current events",
            "#3A82FC",
            teatimeThumb,
            "/umami/"
          )}
        </div>
      </div>
      <div className="anna-about-me" ref={aboutRef}>
        <Title
          className="title"
          style={{
            color: "black",
            fontSize: isMobile ? "5vw" : "3vw",
            fontFamily: "Araboto-Normal",
          }}
        >
          About Me
        </Title>
        <div
          style={{
            display: "flex",
            marginBottom: 10,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "40vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Image
              width={50}
              src={quote}
              style={{ objectFit: "contain", marginBottom: 30 }}
              preview={false}
            />
            <Text
              style={{
                color: "black",
                fontSize: isMobile ? "3vw" : "2vw",
                fontFamily: "Araboto-Bold",
                width: "70%",
                textAlign: "left",
              }}
            >
              Good scientists can be expected to do good science, but great
              contributions to mankind require interdisciplinarity and
              collaboration.
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: isMobile ? "2vw" : "1.2vw",
                fontFamily: "Araboto-Light",
                width: "50%",
                marginTop: 30,
                textAlign: "left",
              }}
            >
              Douglas G. Kilburn
            </Text>
          </div>
          <div
            style={{
              display: "flex",
              width: "40vw",
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: isMobile ? "3vw" : "2vw",
                fontFamily: "Araboto-Normal",
                width: "100%",
              }}
            >
              As a scientist and self-taught designer, I{" "}
              <Text
                style={{
                  color: "black",
                }}
                onClick={() => {
                  if (loveCount >= 2) {
                    loveCount = 0;
                    window.open("https://annabrisland.com/harin");
                  } else {
                    loveCount++;
                  }
                }}
              >
                love
              </Text>{" "}
              crafting creative solutions to overcome both biological and
              design-related obstacles. I firmly believe that the best way to
              teach and relay information to others is through effective
              visualisation and great user experience. Whether it be a powerful
              graph or a bold user interface, I hope to manifest my enthusiasm
              for the topic in the viewer through my presentation.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
