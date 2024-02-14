import nameLogo from "../assets/images/nameLogo.png";
import logo from "../assets/images/logo.png"
import "../assets/css/header.css";
import { useHistory } from "react-router-dom";

export default function Header({ isProject, isMobile }) {
  function openOverlay() {
    document.getElementById("about-overlay").style.height = "100%";
    document.body.style.overflow = "hidden";
    document.getElementById("about").className = "nav-item about slide-left";
  }

  function closeOverlay() {
    document.getElementById("about-overlay").style.height = "0%";
    document.body.style.overflow = "";
    document.getElementById("about").className = "nav-item about slide-right";
  }

  if (isMobile) {
  }

  if (isProject) {
    return (
      <div>
        <nav className="main-header">
          <a className="logo" href="#"></a>
          <div className="nav-items">
            <div className="nav-item about" id="about" onClick={openOverlay}>
              About
            </div>
            <div className="nav-item CTA">Resume</div>
          </div>
        </nav>
        <div className="overlay" id="about-overlay">
          <button className="close-btn" onClick={closeOverlay}></button>
          <div className="overlay-content content grid">
            <div className="about-paragraph">
              <div className="main-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspisse dictum ex non purus cursus tempor.
              </div>
              <div className="second-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspisse dictum ex non purus cursus tempor.
              </div>
            </div>
            <div className="about-skills">
              Skills
              <ul className="skills-list">
                <li className="skill">HTML</li>
                <li className="skill">CSS</li>
                <li className="skill">JavaScript</li>
                <li className="skill">JQuery</li>
                <li className="skill">Bootstrap</li>
                <li className="skill">Figma</li>
                <li className="skill">Adobe Creative Cloud</li>
              </ul>
            </div>
            <div className="about-contact">
              Contact
              <ul className="contact-list">
                <li className="contact">
                  <a href="mailto:annabrisland@gmail.com">Email</a>
                </li>
                <li className="contact">
                  <a href="https://github.com/annabrisland" target="_blank">
                    GitHub
                  </a>
                </li>
                <li className="contact">
                  <a href="www.linkedin.com/in/anna-brisland" target="_blank">
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    // <div>
    //   <nav className="main-header">
    //     <div className="intro">
    //       <img className="name-logo" src={nameLogo}></img>
    //       <p className="name-title">Web Designer & Developer</p>
    //     </div>
    //     <div className="nav-items">
    //       <div className="nav-item about" id="about" onClick={openOverlay}>
    //         About
    //       </div>
    //       <div className="nav-item CTA">Resume</div>
    //     </div>
    //   </nav>
    //   <div className="overlay" id="about-overlay">
    //     <button className="close-btn" onClick={closeOverlay}></button>
    //     <div className="overlay-content content grid">
    //       <div className="about-paragraph">
    //         <div className="main-paragraph">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspisse
    //           dictum ex non purus cursus tempor.
    //         </div>
    //         <div className="second-paragraph">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspisse
    //           dictum ex non purus cursus tempor.
    //         </div>
    //       </div>
    //       <div className="about-skills">
    //         Skills
    //         <ul className="skills-list">
    //           <li className="skill">HTML</li>
    //           <li className="skill">CSS</li>
    //           <li className="skill">JavaScript</li>
    //           <li className="skill">JQuery</li>
    //           <li className="skill">Bootstrap</li>
    //           <li className="skill">Figma</li>
    //           <li className="skill">Adobe Creative Cloud</li>
    //         </ul>
    //       </div>
    //       <div className="about-contact">
    //         Contact
    //         <ul className="contact-list">
    //           <li className="contact">
    //             <a href="mailto:annabrisland@gmail.com">Email</a>
    //           </li>
    //           <li className="contact">
    //             <a href="https://github.com/annabrisland" target="_blank">
    //               GitHub
    //             </a>
    //           </li>
    //           <li className="contact">
    //             <a href="www.linkedin.com/in/anna-brisland" target="_blank">
    //               Linkedin
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <header>
      <div className="header-items">
        <a>
        <img className="name-logo" src={nameLogo}></img>
        </a>
        <nav className="floating">
          <ul className="header-menu-list">
            <li className="header-menu-item">
              <a className="header-menu-link" href="/about">
                About
              </a>
            </li>
            <li className="header-menu-item">
              <a className="header-menu-link" href="/contact">
                Contact
              </a>
            </li>
            <li className="header-menu-item">
              <a className="header-menu-link" href="/resume">
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div>
        <img className="header-logo" src={logo}></img>
        </div>
      </div>
    </header>
  );
}
