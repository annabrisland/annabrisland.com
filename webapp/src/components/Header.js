import nameLogo from "../assets/images/nameLogo.png";
import logo from "../assets/images/logo.png";
import "../assets/css/header.css";
import resume from "../assets/Anna_Brisland_Resume.pdf";
import { useState } from "react";

export default function Header({ isMobile }) {

  let currentPage = "home";
  if (window.document.URL.includes("about")) {
    currentPage = "about";
  } else if (window.document.URL.includes("contact")){
    currentPage = "contact"
  };

  const [ activeLink, setActiveLink ] = useState(currentPage);
 
  if (isMobile) {
    <nav className="floating">
          <ul className="header-menu-list">
            <li className="header-menu-item">
              <a className={`header-menu-link ${activeLink == "home" ? "header-menu-current" : ""}`} href="/" >
                Home
              </a>
            </li>
            <li className="header-menu-item">
              <a className={`header-menu-link ${activeLink == "contact" ? "header-menu-current" : ""}`} href="/contact" >
                Contact
              </a>
            </li>
            <li className="header-menu-item">
              <a className="header-menu-link" href={resume} target="_blank">
                Resume
              </a>
            </li>
          </ul>
        </nav>
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
        <a href="/">
          <img className="name-logo" src={nameLogo} alt=""></img>
        </a>
        <nav className="floating">
          <ul className="header-menu-list">
            <li className="header-menu-item">
              <a className={`header-menu-link ${activeLink == "home" ? "header-menu-current" : ""}`} href="/" >
                Home
              </a>
            </li>
            <li className="header-menu-item">
              <a className={`header-menu-link ${activeLink == "contact" ? "header-menu-current" : ""}`} href="/contact" >
                Contact
              </a>
            </li>
            <li className="header-menu-item">
              <a className="header-menu-link" href={resume} target="_blank">
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <img className="header-logo" alt="" src={logo}></img>
        </div>
      </div>
    </header>
  );
}
