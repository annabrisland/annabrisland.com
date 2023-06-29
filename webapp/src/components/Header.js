import { Row, Button } from "antd";
import logo from "../images/logo.png";
import { useHistory } from "react-router-dom";

export default function Header(projectRef, aboutRef, isMobile) {
  const history = useHistory();

  if (isMobile) {
    return (
      <Row className="header" justify="space-evenly">
        <Row style={{ flex: 1 }} />
        <img src={logo} style={{ width: 45, height: 45 }} alt="logo" />
        <Row style={{ flex: 1 }} justify="end">
          <Button
            className="header-button"
            type="link"
            onClick={() => {
              window.open(
                "https://annabrisland.com/Anna_Brisland_Resume.pdf",
                "_blank"
              );
            }}
            style={{ color: "black" }}
          >
            Resume
          </Button>
        </Row>
      </Row>
    );
  }

  return (
    <Row className="header" justify="space-between">
      <img src={logo} style={{ width: 45, height: 45 }} alt="logo" />
      <Row style={{ flex: 1 }} justify="end">
        <Button
          className="header-button"
          type="link"
          onClick={() => {
            if (projectRef) {
              projectRef.current.scrollIntoView({
                behavior: "smooth",
              });
            } else {
              history.push("/");
            }
          }}
          style={{ color: "black" }}
        >
          Projects
        </Button>
        <Button
          className="header-button"
          type="link"
          onClick={() => {
            if (aboutRef) {
              aboutRef.current.scrollIntoView({ behavior: "smooth" });
            } else {
              history.push("/");
            }
          }}
          style={{ color: "black" }}
        >
          About Me
        </Button>
        <Button
          className="header-button"
          type="link"
          onClick={() => {
            window.open(
              "https://annabrisland.com/Anna_Brisland_Resume.pdf",
              "_blank"
            );
          }}
          style={{ color: "black" }}
        >
          Resume
        </Button>
      </Row>
    </Row>
  );
}
