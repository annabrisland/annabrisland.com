import { useHistory } from "react-router-dom";
import "../../assets/css/style.css";
import goWhite from "../../images/goArrowWhite.png";
import goBlack from "../../images/goArrowBlack.png";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

let loveCount = 0;

export default function Home() {
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

  function arrowSvg() {
    return (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.4059 8.21394C12.401 8.35212 12.424 8.48988 12.4736 8.61898C12.5231 8.74808 12.5981 8.86589 12.6941 8.96537C12.7902 9.06485 12.9052 9.14397 13.0325 9.19801C13.1598 9.25205 13.2966 9.2799 13.4349 9.2799C13.5732 9.2799 13.71 9.25205 13.8373 9.19801C13.9646 9.14397 14.0797 9.06485 14.1757 8.96537C14.2717 8.86589 14.3468 8.74808 14.3963 8.61898C14.4458 8.48988 14.4688 8.35212 14.4639 8.21394L14.4649 1.90307L14.4649 0.874068L13.4359 0.874068L7.12599 0.874068C6.85605 0.878631 6.5987 0.989035 6.40937 1.1815C6.22004 1.37397 6.11388 1.6331 6.11375 1.90308C6.11362 2.17306 6.21954 2.43228 6.40869 2.62493C6.59784 2.81757 6.85508 2.92822 7.12502 2.93304L10.9498 2.93304L0.874332 13.0085C0.681237 13.2016 0.572758 13.4635 0.572758 13.7366C0.572758 14.0096 0.681237 14.2715 0.874332 14.4646C1.06743 14.6577 1.32932 14.7662 1.6024 14.7662C1.87548 14.7662 2.13737 14.6577 2.33046 14.4646L12.4059 4.38917L12.4059 8.21394Z"
          fill="#1A1A1A"
        />
      </svg>
    );
  }

  return (
    <div className="App">
      <Header />

      <section className="content">
        <div className="grid">
          <div
            className="card-1 card"
            id="ubc-botany"
            onClick={() => {
              history.push("ubcbotany");
            }}
          >
            <div className="card-info">
              <div className="card-head">
                <p className="card-title">UBC Botany</p>
                <div className="card-button">{arrowSvg()}</div>
              </div>
              <p className="card-desc">
                A merch and mascot design for the University of British Columbia
                Botany Department.
              </p>
              <div>
                <p className="card-roles">Illustration</p>
              </div>
            </div>
          </div>
          <div
            className="card-2 card"
            id="labby"
            onClick={() => {
              history.push("labby");
            }}
          >
            <div className="card-info">
              <div className="card-head">
                <p className="card-title">Labby</p>
                <div className="card-button">{arrowSvg()}</div>
              </div>
              <p className="card-desc">
                A Lab Management Software for BC Cancer Research Center.
              </p>
              <div>
                <p className="card-roles">UI/UX Design</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid">
          <div
            className="card-3 card"
            id="umami"
            onClick={() => {
              history.push("umami");
            }}
          >
            <div className="card-info">
              <div className="card-head">
                <p className="card-title">Umami</p>
                <div className="card-button">{arrowSvg()}</div>
              </div>
              <p className="card-desc">
                A community driven recipe app for cooking enjoyment, healthy
                eating, and sharing of recipes.
              </p>
              <div>
                <p className="card-roles">UI/UX Design</p>
                <p className="card-roles">Illustration</p>
              </div>
            </div>
          </div>
          <div
            className="card-4 card"
            id="kudocoin"
            onClick={() => {
              history.push("kudocoin");
            }}
          >
            <div className="card-info">
              <div className="card-head">
                <p className="card-title">KudoCoin</p>
                <div className="card-button">{arrowSvg()}</div>
              </div>
              <p className="card-desc">
                An ERC20 token that serves its purpose as street cred for
                developers
              </p>
              <div>
                <p className="card-roles">UI/UX Design</p>
                <p className="card-roles">Illustration</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
