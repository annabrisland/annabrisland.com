import logo from "../images/logo.png";
import nameLogo from "../assets/images/nameLogo.png";
import { useHistory } from "react-router-dom";

export default function Header(projectRef, aboutRef, isMobile) {
  const history = useHistory();

  if (isMobile) {
  }

  return (
    <nav className="main-header">
      <div className="intro">
        <img className="name-logo" src={nameLogo}></img>
        <p className="name-title">Web Designer & Developer</p>
      </div>
      <div className="nav-items">
        <div className="nav-item about" onClick={openOverlay}>
          About
        </div>
        <div className="nav-item CTA">Resume</div>
      </div>
    </nav>
  );
}

function openOverlay() {
  document.getElementById("about-overlay").style.height = "100%";
  document.body.style.overflow = "hidden";
}