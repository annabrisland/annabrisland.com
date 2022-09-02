import { Row, Button } from "antd";
import logo from "../images/logo.png";

export default function Header(projectRef, aboutRef) {
    return (
        <Row className="header" justify="space-between"> 
          <img src={logo} style={{width: 45, height: 45}} alt="logo" />
          <Row style={{flex: 1}} justify="end">
            <Button
              className="header-button"
              type="link"
              onClick={() => {
                projectRef.current.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              style={{ color: "white" }}
            >
              Projects
            </Button>
            <Button
              className="header-button"
              type="link"
              onClick={() => {
                aboutRef.current.scrollIntoView({ behavior: "smooth" });
              }}
              style={{ color: "white" }}
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
              style={{ color: "white" }}
            >
              Resume
            </Button>
          </Row>
        </Row>
    );
}